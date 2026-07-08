import { defineAppSetup } from '@slidev/types'

// Workaround for presenter navigation in the static (hash-routed) build.
//
// Slidev builds slide links relative to the current URL (it must, because the
// deck is hosted under a relative base so it works at any sub-path, e.g.
// tsvan.xyz/calc1/slides/...). Inside presenter mode the current path already
// contains "/presenter/", so a relative "presenter/<n>" link resolves against
// it and produces a duplicated "/presenter/presenter/<n>" route. This guard
// collapses the duplicate back to "/presenter/<n>" so presenter mode (and PDF
// export mode) work on the served/deployed build without switching router modes.
export default defineAppSetup(({ router }) => {
  router.beforeEach((to) => {
    let path = to.path
    while (path.includes('/presenter/presenter/'))
      path = path.replace('/presenter/presenter/', '/presenter/')
    while (path.includes('/export/export/'))
      path = path.replace('/export/export/', '/export/')
    if (path !== to.path)
      return { path, query: to.query }
  })
})
