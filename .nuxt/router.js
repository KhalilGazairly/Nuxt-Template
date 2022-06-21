import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

<<<<<<< HEAD
const _44bd8164 = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _3f102444 = () => interopDefault(import('../pages/account.vue' /* webpackChunkName: "pages/account" */))
const _64755c29 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _3eecb019 = () => interopDefault(import('../pages/cart.vue' /* webpackChunkName: "pages/cart" */))
const _4d2e79d0 = () => interopDefault(import('../pages/categories/index.vue' /* webpackChunkName: "pages/categories/index" */))
const _a6d240fa = () => interopDefault(import('../pages/favourite/index.vue' /* webpackChunkName: "pages/favourite/index" */))
const _f856c9ea = () => interopDefault(import('../pages/History.vue' /* webpackChunkName: "pages/History" */))
const _2e1cff40 = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _93ebdd3c = () => interopDefault(import('../pages/Notifications/index.vue' /* webpackChunkName: "pages/Notifications/index" */))
const _2e6f191e = () => interopDefault(import('../pages/orders.vue' /* webpackChunkName: "pages/orders" */))
const _67ae04f1 = () => interopDefault(import('../pages/privcy-policy.vue' /* webpackChunkName: "pages/privcy-policy" */))
const _02865cc8 = () => interopDefault(import('../pages/register.vue' /* webpackChunkName: "pages/register" */))
const _56714d23 = () => interopDefault(import('../pages/Reschedule.vue' /* webpackChunkName: "pages/Reschedule" */))
const _4fa4cb62 = () => interopDefault(import('../pages/service/index.vue' /* webpackChunkName: "pages/service/index" */))
const _04371928 = () => interopDefault(import('../pages/terms-condition.vue' /* webpackChunkName: "pages/terms-condition" */))
const _0ba31eea = () => interopDefault(import('../pages/test.vue' /* webpackChunkName: "pages/test" */))
const _67498cbc = () => interopDefault(import('../pages/users/index.vue' /* webpackChunkName: "pages/users/index" */))
const _32ec659c = () => interopDefault(import('../pages/Notifications/create.vue' /* webpackChunkName: "pages/Notifications/create" */))
const _35fcab80 = () => interopDefault(import('../pages/categories/_id.vue' /* webpackChunkName: "pages/categories/_id" */))
const _5c4ce6ab = () => interopDefault(import('../pages/favourite/_id.vue' /* webpackChunkName: "pages/favourite/_id" */))
const _535df76c = () => interopDefault(import('../pages/Notifications/_id.vue' /* webpackChunkName: "pages/Notifications/_id" */))
const _38a83712 = () => interopDefault(import('../pages/service/_id.vue' /* webpackChunkName: "pages/service/_id" */))
=======
const _ed6d406a = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages/about" */))
const _dfc3f62a = () => interopDefault(import('..\\pages\\account.vue' /* webpackChunkName: "pages/account" */))
const _adfd8ae0 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _54702e5c = () => interopDefault(import('..\\pages\\cart.vue' /* webpackChunkName: "pages/cart" */))
const _52a42674 = () => interopDefault(import('..\\pages\\categories\\index.vue' /* webpackChunkName: "pages/categories/index" */))
const _a16bf28a = () => interopDefault(import('..\\pages\\favourite\\index.vue' /* webpackChunkName: "pages/favourite/index" */))
const _563b089c = () => interopDefault(import('..\\pages\\History.vue' /* webpackChunkName: "pages/History" */))
const _72a8dda7 = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _2381d8e0 = () => interopDefault(import('..\\pages\\maids\\index.vue' /* webpackChunkName: "pages/maids/index" */))
const _c81a6788 = () => interopDefault(import('..\\pages\\Notifications\\index.vue' /* webpackChunkName: "pages/Notifications/index" */))
const _7b5f0797 = () => interopDefault(import('..\\pages\\orders.vue' /* webpackChunkName: "pages/orders" */))
const _1df6e750 = () => interopDefault(import('..\\pages\\privcy-policy.vue' /* webpackChunkName: "pages/privcy-policy" */))
const _6129f456 = () => interopDefault(import('..\\pages\\register.vue' /* webpackChunkName: "pages/register" */))
const _973951c8 = () => interopDefault(import('..\\pages\\Reschedule.vue' /* webpackChunkName: "pages/Reschedule" */))
const _239bb689 = () => interopDefault(import('..\\pages\\reviews\\index.vue' /* webpackChunkName: "pages/reviews/index" */))
const _6b8e1faf = () => interopDefault(import('..\\pages\\service\\index.vue' /* webpackChunkName: "pages/service/index" */))
const _e89285da = () => interopDefault(import('..\\pages\\terms-condition.vue' /* webpackChunkName: "pages/terms-condition" */))
const _ddecad78 = () => interopDefault(import('..\\pages\\test.vue' /* webpackChunkName: "pages/test" */))
const _053174fc = () => interopDefault(import('..\\pages\\users\\index.vue' /* webpackChunkName: "pages/users/index" */))
const _61ab1b63 = () => interopDefault(import('..\\pages\\favourite\\create.vue' /* webpackChunkName: "pages/favourite/create" */))
const _0a1b0602 = () => interopDefault(import('..\\pages\\Notifications\\create.vue' /* webpackChunkName: "pages/Notifications/create" */))
const _778f6555 = () => interopDefault(import('..\\pages\\reviews\\create.vue' /* webpackChunkName: "pages/reviews/create" */))
const _2b9d9448 = () => interopDefault(import('..\\pages\\categories\\_id.vue' /* webpackChunkName: "pages/categories/_id" */))
const _bcdf083a = () => interopDefault(import('..\\pages\\favourite\\_id.vue' /* webpackChunkName: "pages/favourite/_id" */))
const _e51ed970 = () => interopDefault(import('..\\pages\\maids\\_id.vue' /* webpackChunkName: "pages/maids/_id" */))
const _9e02a4b8 = () => interopDefault(import('..\\pages\\Notifications\\_id.vue' /* webpackChunkName: "pages/Notifications/_id" */))
const _7687c731 = () => interopDefault(import('..\\pages\\reviews\\_id.vue' /* webpackChunkName: "pages/reviews/_id" */))
const _0e2e41d7 = () => interopDefault(import('..\\pages\\service\\_id.vue' /* webpackChunkName: "pages/service/_id" */))
>>>>>>> cd9bafea7e3e9d2ef60b4d66fc7f44ba52e181b7

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
    component: _44bd8164,
    name: "about___en"
  }, {
    path: "/account",
    component: _3f102444,
    name: "account___en"
  }, {
    path: "/ar",
    component: _64755c29,
    name: "index___ar"
  }, {
    path: "/cart",
    component: _3eecb019,
    name: "cart___en"
  }, {
    path: "/categories",
    component: _4d2e79d0,
    name: "categories___en"
  }, {
    path: "/favourite",
    component: _a6d240fa,
    name: "favourite___en"
  }, {
    path: "/History",
    component: _f856c9ea,
    name: "History___en"
  }, {
    path: "/login",
    component: _2e1cff40,
    name: "login___en"
  }, {
    path: "/maids",
    component: _2381d8e0,
    name: "maids___en"
  }, {
    path: "/Notifications",
    component: _93ebdd3c,
    name: "Notifications___en"
  }, {
    path: "/orders",
    component: _2e6f191e,
    name: "orders___en"
  }, {
    path: "/privcy-policy",
    component: _67ae04f1,
    name: "privcy-policy___en"
  }, {
    path: "/register",
    component: _02865cc8,
    name: "register___en"
  }, {
    path: "/Reschedule",
    component: _56714d23,
    name: "Reschedule___en"
  }, {
    path: "/reviews",
    component: _239bb689,
    name: "reviews___en"
  }, {
    path: "/service",
    component: _4fa4cb62,
    name: "service___en"
  }, {
    path: "/terms-condition",
    component: _04371928,
    name: "terms-condition___en"
  }, {
    path: "/test",
    component: _0ba31eea,
    name: "test___en"
  }, {
    path: "/users",
    component: _67498cbc,
    name: "users___en"
  }, {
    path: "/ar/about",
    component: _44bd8164,
    name: "about___ar"
  }, {
    path: "/ar/account",
    component: _3f102444,
    name: "account___ar"
  }, {
    path: "/ar/cart",
    component: _3eecb019,
    name: "cart___ar"
  }, {
    path: "/ar/categories",
    component: _4d2e79d0,
    name: "categories___ar"
  }, {
    path: "/ar/favourite",
    component: _a6d240fa,
    name: "favourite___ar"
  }, {
    path: "/ar/History",
    component: _f856c9ea,
    name: "History___ar"
  }, {
    path: "/ar/login",
    component: _2e1cff40,
    name: "login___ar"
  }, {
    path: "/ar/maids",
    component: _2381d8e0,
    name: "maids___ar"
  }, {
    path: "/ar/Notifications",
    component: _93ebdd3c,
    name: "Notifications___ar"
  }, {
    path: "/ar/orders",
    component: _2e6f191e,
    name: "orders___ar"
  }, {
    path: "/ar/privcy-policy",
    component: _67ae04f1,
    name: "privcy-policy___ar"
  }, {
    path: "/ar/register",
    component: _02865cc8,
    name: "register___ar"
  }, {
    path: "/ar/Reschedule",
    component: _56714d23,
    name: "Reschedule___ar"
  }, {
    path: "/ar/reviews",
    component: _239bb689,
    name: "reviews___ar"
  }, {
    path: "/ar/service",
    component: _4fa4cb62,
    name: "service___ar"
  }, {
    path: "/ar/terms-condition",
    component: _04371928,
    name: "terms-condition___ar"
  }, {
    path: "/ar/test",
    component: _0ba31eea,
    name: "test___ar"
  }, {
    path: "/ar/users",
    component: _67498cbc,
    name: "users___ar"
  }, {
    path: "/favourite/create",
    component: _61ab1b63,
    name: "favourite-create___en"
  }, {
    path: "/Notifications/create",
    component: _32ec659c,
    name: "Notifications-create___en"
  }, {
    path: "/reviews/create",
    component: _778f6555,
    name: "reviews-create___en"
  }, {
    path: "/ar/favourite/create",
    component: _61ab1b63,
    name: "favourite-create___ar"
  }, {
    path: "/ar/Notifications/create",
    component: _32ec659c,
    name: "Notifications-create___ar"
  }, {
    path: "/ar/reviews/create",
    component: _778f6555,
    name: "reviews-create___ar"
  }, {
    path: "/ar/categories/:id",
    component: _35fcab80,
    name: "categories-id___ar"
  }, {
    path: "/ar/favourite/:id",
    component: _5c4ce6ab,
    name: "favourite-id___ar"
  }, {
    path: "/ar/maids/:id",
    component: _e51ed970,
    name: "maids-id___ar"
  }, {
    path: "/ar/Notifications/:id",
    component: _535df76c,
    name: "Notifications-id___ar"
  }, {
    path: "/ar/reviews/:id",
    component: _7687c731,
    name: "reviews-id___ar"
  }, {
    path: "/ar/service/:id",
    component: _38a83712,
    name: "service-id___ar"
  }, {
    path: "/categories/:id",
    component: _35fcab80,
    name: "categories-id___en"
  }, {
    path: "/favourite/:id",
    component: _5c4ce6ab,
    name: "favourite-id___en"
  }, {
    path: "/maids/:id",
    component: _e51ed970,
    name: "maids-id___en"
  }, {
    path: "/Notifications/:id",
    component: _535df76c,
    name: "Notifications-id___en"
  }, {
    path: "/reviews/:id",
    component: _7687c731,
    name: "reviews-id___en"
  }, {
    path: "/service/:id",
    component: _38a83712,
    name: "service-id___en"
  }, {
    path: "/",
    component: _64755c29,
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
