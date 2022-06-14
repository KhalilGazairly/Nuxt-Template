import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _ed6d406a = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages/about" */))
const _dfc3f62a = () => interopDefault(import('..\\pages\\account.vue' /* webpackChunkName: "pages/account" */))
const _adfd8ae0 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _54702e5c = () => interopDefault(import('..\\pages\\cart.vue' /* webpackChunkName: "pages/cart" */))
const _52a42674 = () => interopDefault(import('..\\pages\\categories\\index.vue' /* webpackChunkName: "pages/categories/index" */))
const _a16bf28a = () => interopDefault(import('..\\pages\\favourite\\index.vue' /* webpackChunkName: "pages/favourite/index" */))
const _563b089c = () => interopDefault(import('..\\pages\\History.vue' /* webpackChunkName: "pages/History" */))
const _72a8dda7 = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _c81a6788 = () => interopDefault(import('..\\pages\\Notifications\\index.vue' /* webpackChunkName: "pages/Notifications/index" */))
const _7b5f0797 = () => interopDefault(import('..\\pages\\orders.vue' /* webpackChunkName: "pages/orders" */))
const _1df6e750 = () => interopDefault(import('..\\pages\\privcy-policy.vue' /* webpackChunkName: "pages/privcy-policy" */))
const _6129f456 = () => interopDefault(import('..\\pages\\register.vue' /* webpackChunkName: "pages/register" */))
const _973951c8 = () => interopDefault(import('..\\pages\\Reschedule.vue' /* webpackChunkName: "pages/Reschedule" */))
const _6b8e1faf = () => interopDefault(import('..\\pages\\service\\index.vue' /* webpackChunkName: "pages/service/index" */))
const _e89285da = () => interopDefault(import('..\\pages\\terms-condition.vue' /* webpackChunkName: "pages/terms-condition" */))
const _ddecad78 = () => interopDefault(import('..\\pages\\test.vue' /* webpackChunkName: "pages/test" */))
const _053174fc = () => interopDefault(import('..\\pages\\users\\index.vue' /* webpackChunkName: "pages/users/index" */))
const _0a1b0602 = () => interopDefault(import('..\\pages\\Notifications\\create.vue' /* webpackChunkName: "pages/Notifications/create" */))
const _2b9d9448 = () => interopDefault(import('..\\pages\\categories\\_id.vue' /* webpackChunkName: "pages/categories/_id" */))
const _bcdf083a = () => interopDefault(import('..\\pages\\favourite\\_id.vue' /* webpackChunkName: "pages/favourite/_id" */))
const _9e02a4b8 = () => interopDefault(import('..\\pages\\Notifications\\_id.vue' /* webpackChunkName: "pages/Notifications/_id" */))
const _0e2e41d7 = () => interopDefault(import('..\\pages\\service\\_id.vue' /* webpackChunkName: "pages/service/_id" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _ed6d406a,
    name: "about___en"
  }, {
    path: "/account",
    component: _dfc3f62a,
    name: "account___en"
  }, {
    path: "/ar",
    component: _adfd8ae0,
    name: "index___ar"
  }, {
    path: "/cart",
    component: _54702e5c,
    name: "cart___en"
  }, {
    path: "/categories",
    component: _52a42674,
    name: "categories___en"
  }, {
    path: "/favourite",
    component: _a16bf28a,
    name: "favourite___en"
  }, {
    path: "/History",
    component: _563b089c,
    name: "History___en"
  }, {
    path: "/login",
    component: _72a8dda7,
    name: "login___en"
  }, {
    path: "/Notifications",
    component: _c81a6788,
    name: "Notifications___en"
  }, {
    path: "/orders",
    component: _7b5f0797,
    name: "orders___en"
  }, {
    path: "/privcy-policy",
    component: _1df6e750,
    name: "privcy-policy___en"
  }, {
    path: "/register",
    component: _6129f456,
    name: "register___en"
  }, {
    path: "/Reschedule",
    component: _973951c8,
    name: "Reschedule___en"
  }, {
    path: "/service",
    component: _6b8e1faf,
    name: "service___en"
  }, {
    path: "/terms-condition",
    component: _e89285da,
    name: "terms-condition___en"
  }, {
    path: "/test",
    component: _ddecad78,
    name: "test___en"
  }, {
    path: "/users",
    component: _053174fc,
    name: "users___en"
  }, {
    path: "/ar/about",
    component: _ed6d406a,
    name: "about___ar"
  }, {
    path: "/ar/account",
    component: _dfc3f62a,
    name: "account___ar"
  }, {
    path: "/ar/cart",
    component: _54702e5c,
    name: "cart___ar"
  }, {
    path: "/ar/categories",
    component: _52a42674,
    name: "categories___ar"
  }, {
    path: "/ar/favourite",
    component: _a16bf28a,
    name: "favourite___ar"
  }, {
    path: "/ar/History",
    component: _563b089c,
    name: "History___ar"
  }, {
    path: "/ar/login",
    component: _72a8dda7,
    name: "login___ar"
  }, {
    path: "/ar/Notifications",
    component: _c81a6788,
    name: "Notifications___ar"
  }, {
    path: "/ar/orders",
    component: _7b5f0797,
    name: "orders___ar"
  }, {
    path: "/ar/privcy-policy",
    component: _1df6e750,
    name: "privcy-policy___ar"
  }, {
    path: "/ar/register",
    component: _6129f456,
    name: "register___ar"
  }, {
    path: "/ar/Reschedule",
    component: _973951c8,
    name: "Reschedule___ar"
  }, {
    path: "/ar/service",
    component: _6b8e1faf,
    name: "service___ar"
  }, {
    path: "/ar/terms-condition",
    component: _e89285da,
    name: "terms-condition___ar"
  }, {
    path: "/ar/test",
    component: _ddecad78,
    name: "test___ar"
  }, {
    path: "/ar/users",
    component: _053174fc,
    name: "users___ar"
  }, {
    path: "/Notifications/create",
    component: _0a1b0602,
    name: "Notifications-create___en"
  }, {
    path: "/ar/Notifications/create",
    component: _0a1b0602,
    name: "Notifications-create___ar"
  }, {
    path: "/ar/categories/:id",
    component: _2b9d9448,
    name: "categories-id___ar"
  }, {
    path: "/ar/favourite/:id",
    component: _bcdf083a,
    name: "favourite-id___ar"
  }, {
    path: "/ar/Notifications/:id",
    component: _9e02a4b8,
    name: "Notifications-id___ar"
  }, {
    path: "/ar/service/:id",
    component: _0e2e41d7,
    name: "service-id___ar"
  }, {
    path: "/categories/:id",
    component: _2b9d9448,
    name: "categories-id___en"
  }, {
    path: "/favourite/:id",
    component: _bcdf083a,
    name: "favourite-id___en"
  }, {
    path: "/Notifications/:id",
    component: _9e02a4b8,
    name: "Notifications-id___en"
  }, {
    path: "/service/:id",
    component: _0e2e41d7,
    name: "service-id___en"
  }, {
    path: "/",
    component: _adfd8ae0,
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
