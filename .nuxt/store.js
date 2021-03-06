import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const VUEX_PROPERTIES = ['state', 'getters', 'actions', 'mutations']

let store = {};

(function updateModules () {
  store = normalizeRoot(require('../store/index.js'), 'store/index.js')

  // If store is an exported method = classic mode (deprecated)

  if (typeof store === 'function') {
    return console.warn('Classic mode for store/ is deprecated and will be removed in Nuxt 3.')
  }

  // Enforce store modules
  store.modules = store.modules || {}

<<<<<<< HEAD
  resolveStoreModules(require('../store/modules/addressModules.js'), 'modules/addressModules.js')
  resolveStoreModules(require('../store/modules/authModules.js'), 'modules/authModules.js')
  resolveStoreModules(require('../store/modules/cartsModules.js'), 'modules/cartsModules.js')
  resolveStoreModules(require('../store/modules/categoriesModules.js'), 'modules/categoriesModules.js')
  resolveStoreModules(require('../store/modules/CityModule.js'), 'modules/CityModule.js')
  resolveStoreModules(require('../store/modules/ckeckoutModule.js'), 'modules/ckeckoutModule.js')
  resolveStoreModules(require('../store/modules/listOrderModules.js'), 'modules/listOrderModules.js')
  resolveStoreModules(require('../store/modules/msgModules.js'), 'modules/msgModules.js')
  resolveStoreModules(require('../store/modules/notificationsModules.js'), 'modules/notificationsModules.js')
  resolveStoreModules(require('../store/modules/servicesModules.js'), 'modules/servicesModules.js')
  resolveStoreModules(require('../store/modules/userModules.js'), 'modules/userModules.js')
  resolveStoreModules(require('../store/modules/usersModules.js'), 'modules/usersModules.js')
=======
  resolveStoreModules(require('..\\store\\modules\\addressModules.js'), 'modules/addressModules.js')
  resolveStoreModules(require('..\\store\\modules\\authModules.js'), 'modules/authModules.js')
  resolveStoreModules(require('..\\store\\modules\\cartsModules.js'), 'modules/cartsModules.js')
  resolveStoreModules(require('..\\store\\modules\\categoriesModules.js'), 'modules/categoriesModules.js')
  resolveStoreModules(require('..\\store\\modules\\CityModule.js'), 'modules/CityModule.js')
  resolveStoreModules(require('..\\store\\modules\\ckeckoutModule.js'), 'modules/ckeckoutModule.js')
  resolveStoreModules(require('..\\store\\modules\\favouriteModules.js'), 'modules/favouriteModules.js')
  resolveStoreModules(require('..\\store\\modules\\listOrderModules.js'), 'modules/listOrderModules.js')
  resolveStoreModules(require('..\\store\\modules\\maidModules.js'), 'modules/maidModules.js')
  resolveStoreModules(require('..\\store\\modules\\msgModules.js'), 'modules/msgModules.js')
  resolveStoreModules(require('..\\store\\modules\\notificationsModules.js'), 'modules/notificationsModules.js')
  resolveStoreModules(require('..\\store\\modules\\reviewsModules.js'), 'modules/reviewsModules.js')
  resolveStoreModules(require('..\\store\\modules\\servicesModules.js'), 'modules/servicesModules.js')
  resolveStoreModules(require('..\\store\\modules\\userModules.js'), 'modules/userModules.js')
  resolveStoreModules(require('..\\store\\modules\\usersModules.js'), 'modules/usersModules.js')
>>>>>>> cd9bafea7e3e9d2ef60b4d66fc7f44ba52e181b7

  // If the environment supports hot reloading...

  if (process.client && module.hot) {
    // Whenever any Vuex module is updated...
    module.hot.accept([
<<<<<<< HEAD
      '../store/index.js',
      '../store/modules/addressModules.js',
      '../store/modules/authModules.js',
      '../store/modules/cartsModules.js',
      '../store/modules/categoriesModules.js',
      '../store/modules/CityModule.js',
      '../store/modules/ckeckoutModule.js',
      '../store/modules/listOrderModules.js',
      '../store/modules/msgModules.js',
      '../store/modules/notificationsModules.js',
      '../store/modules/servicesModules.js',
      '../store/modules/userModules.js',
      '../store/modules/usersModules.js',
=======
      '..\\store\\index.js',
      '..\\store\\modules\\addressModules.js',
      '..\\store\\modules\\authModules.js',
      '..\\store\\modules\\cartsModules.js',
      '..\\store\\modules\\categoriesModules.js',
      '..\\store\\modules\\CityModule.js',
      '..\\store\\modules\\ckeckoutModule.js',
      '..\\store\\modules\\favouriteModules.js',
      '..\\store\\modules\\listOrderModules.js',
      '..\\store\\modules\\maidModules.js',
      '..\\store\\modules\\msgModules.js',
      '..\\store\\modules\\notificationsModules.js',
      '..\\store\\modules\\reviewsModules.js',
      '..\\store\\modules\\servicesModules.js',
      '..\\store\\modules\\userModules.js',
      '..\\store\\modules\\usersModules.js',
>>>>>>> cd9bafea7e3e9d2ef60b4d66fc7f44ba52e181b7
    ], () => {
      // Update `root.modules` with the latest definitions.
      updateModules()
      // Trigger a hot update in the store.
      window.$nuxt.$store.hotUpdate(store)
    })
  }
})()

// createStore
export const createStore = store instanceof Function ? store : () => {
  return new Vuex.Store(Object.assign({
    strict: (process.env.NODE_ENV !== 'production')
  }, store))
}

function normalizeRoot (moduleData, filePath) {
  moduleData = moduleData.default || moduleData

  if (moduleData.commit) {
    throw new Error(`[nuxt] ${filePath} should export a method that returns a Vuex instance.`)
  }

  if (typeof moduleData !== 'function') {
    // Avoid TypeError: setting a property that has only a getter when overwriting top level keys
    moduleData = Object.assign({}, moduleData)
  }
  return normalizeModule(moduleData, filePath)
}

function normalizeModule (moduleData, filePath) {
  if (moduleData.state && typeof moduleData.state !== 'function') {
    console.warn(`'state' should be a method that returns an object in ${filePath}`)

    const state = Object.assign({}, moduleData.state)
    // Avoid TypeError: setting a property that has only a getter when overwriting top level keys
    moduleData = Object.assign({}, moduleData, { state: () => state })
  }
  return moduleData
}

function resolveStoreModules (moduleData, filename) {
  moduleData = moduleData.default || moduleData
  // Remove store src + extension (./foo/index.js -> foo/index)
  const namespace = filename.replace(/\.(js|mjs)$/, '')
  const namespaces = namespace.split('/')
  let moduleName = namespaces[namespaces.length - 1]
  const filePath = `store/${filename}`

  moduleData = moduleName === 'state'
    ? normalizeState(moduleData, filePath)
    : normalizeModule(moduleData, filePath)

  // If src is a known Vuex property
  if (VUEX_PROPERTIES.includes(moduleName)) {
    const property = moduleName
    const propertyStoreModule = getStoreModule(store, namespaces, { isProperty: true })

    // Replace state since it's a function
    mergeProperty(propertyStoreModule, moduleData, property)
    return
  }

  // If file is foo/index.js, it should be saved as foo
  const isIndexModule = (moduleName === 'index')
  if (isIndexModule) {
    namespaces.pop()
    moduleName = namespaces[namespaces.length - 1]
  }

  const storeModule = getStoreModule(store, namespaces)

  for (const property of VUEX_PROPERTIES) {
    mergeProperty(storeModule, moduleData[property], property)
  }

  if (moduleData.namespaced === false) {
    delete storeModule.namespaced
  }
}

function normalizeState (moduleData, filePath) {
  if (typeof moduleData !== 'function') {
    console.warn(`${filePath} should export a method that returns an object`)
    const state = Object.assign({}, moduleData)
    return () => state
  }
  return normalizeModule(moduleData, filePath)
}

function getStoreModule (storeModule, namespaces, { isProperty = false } = {}) {
  // If ./mutations.js
  if (!namespaces.length || (isProperty && namespaces.length === 1)) {
    return storeModule
  }

  const namespace = namespaces.shift()

  storeModule.modules[namespace] = storeModule.modules[namespace] || {}
  storeModule.modules[namespace].namespaced = true
  storeModule.modules[namespace].modules = storeModule.modules[namespace].modules || {}

  return getStoreModule(storeModule.modules[namespace], namespaces, { isProperty })
}

function mergeProperty (storeModule, moduleData, property) {
  if (!moduleData) {
    return
  }

  if (property === 'state') {
    storeModule.state = moduleData || storeModule.state
  } else {
    storeModule[property] = Object.assign({}, storeModule[property], moduleData)
  }
}
