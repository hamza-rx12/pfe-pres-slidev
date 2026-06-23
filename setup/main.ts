import { defineAppSetup } from '@slidev/types'

// Workaround for Slidev 52.x subpath nav (e.g. GitHub Pages project sites).
// nav's go() pushes getSlidePath() === `${BASE_URL}${no}`, and the router
// (created with history base = BASE_URL) prepends the base a SECOND time,
// yielding `/base/base/2` → NotFound. We strip the duplicated base prefix
// so the route matches `/:no` again. No-op when deployed at root (BASE_URL '/').
export default defineAppSetup(({ router }) => {
  const base = import.meta.env.BASE_URL
  if (!base || base === '/')
    return
  router.beforeEach((to) => {
    if (to.path.startsWith(base)) {
      const stripped = '/' + to.path.slice(base.length)
      if (stripped !== to.path)
        return { path: stripped, query: to.query, hash: to.hash }
    }
  })
})
