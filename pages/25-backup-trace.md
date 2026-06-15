<div class="kicker">Backup · reliability, verbatim</div>

## Claimed exactly once, traced completely

```python
async def mark_running(task_id: str, worker_id: str) -> bool:
    """Atomically claim a queued task. True iff this call won the claim."""
    status = await pool.execute(
        "UPDATE tasks SET status = 'running', started_at = now(), worker_id = $1 "
        "WHERE id = $2 AND status = 'queued'",
        worker_id, task_id,
    )
    return status.endswith(" 1")   # compare-and-swap: one winner, ever
```

<div class="grid grid-cols-2 gap-3 mt-4 text-sm">
  <div class="card !py-2.5">
    <b>at-least-once queue, exactly-once execution</b>
    <div class="op70 text-xs mt-1">NATS may redeliver — the DB compare-and-swap resolves the race; the loser walks away.</div>
  </div>
  <div class="card !py-2.5">
    <b>every run leaves a full trace row</b>
    <div class="op70 text-xs mt-1">path taken · steps · per-call token usage (incl. cache reads/writes) · duration · worker · cost.</div>
  </div>
  <div class="card !py-2.5">
    <b>per-site circuit breaker</b>
    <div class="op70 text-xs mt-1">3 consecutive failures on a site → fail fast instead of burning budget against a down target.</div>
  </div>
  <div class="card !py-2.5">
    <b>crash = restart, visibly</b>
    <div class="op70 text-xs mt-1">unrecoverable error → exit non-zero → Kubernetes restarts the worker; the task is redelivered.</div>
  </div>
</div>

<!--
For reliability questions. The atomic claim is the favourite artifact: one SQL
compare-and-swap resolves duplicate delivery. Workers keep extending the message's
ack deadline while running, so long jobs aren't reassigned mid-flight.
-->
