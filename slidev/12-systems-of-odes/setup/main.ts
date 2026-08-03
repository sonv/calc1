import { defineAppSetup } from '@slidev/types'

// Keep presenter and export routes stable in hash-routed static builds.
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
