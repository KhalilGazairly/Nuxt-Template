import Vue from 'vue'
import Vuex from 'vuex'

import auth from './modules/authModules'
import categories from './modules/categoriesModules'
import carts from './modules/cartsModules'
import servieses from './modules/servicesModules'
import addresses from './modules/addressModules'
import ckeckoutModule from './modules/ckeckoutModule'
import listOrder from './modules/listOrderModules'
import CityModule from './modules/CityModule'
import msgModules from './modules/msgModules'
import User from './modules/userModules'
import Users from './modules/usersModules'
import Notifications from './modules/notificationsModules'
import Maids from './modules/maidModules'
import Favourits from './modules/favouriteModules'
import Reviews from './modules/reviewsModules'

// Load Vuex
Vue.use(Vuex)

// Create store
const store = () => {
  return new Vuex.Store({
    modules: {
      auth,
      categories,
      carts,
      servieses,
      addresses,
      ckeckoutModule,
      listOrder,
      CityModule,
      msgModules,
      User,
      Users,
      Notifications,
      Favourits,
      Maids,
      Reviews
    },
  })
}

export default store