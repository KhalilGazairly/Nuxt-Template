import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _31eb73f7 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _35eb6a82 = () => interopDefault(import('../pages/inspire.vue' /* webpackChunkName: "pages/inspire" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/ar",
    component: _31eb73f7,
    name: "index___ar"
  }, {
    path: "/inspire",
    component: _35eb6a82,
    name: "inspire___en"
  }, {
    path: "/ar/inspire",
    component: _35eb6a82,
    name: "inspire___ar"
  }, {
    path: "/",
    component: _31eb73f7,
    name: "index___en"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
