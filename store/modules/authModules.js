

const state = {
  checkAuth: false,
  step: 1,
  is_active: 0,
  token: '',
  device: 'website',
  sessionId: '',
  user: [],
  register: [],
  loading: false,
  checkUserStatus: false,
  loadingReg: true,
  errors: [],
  loadingupdate: false,
  sessionExpired: false,

}

const getters = {
  allAuth: state => state
};

const actions = {
  async setApi({ state, dispatch }, data) {
    await this.$axios.setHeader('session-id', data)
    await this.$axios.setHeader('device', state.device)
    await this.$axios.setHeader('lang', this.$i18n.locale)
    if (this.$cookies.get('token'))
      await this.$axios.setHeader('token', this.$cookies.get('token'))
    if (!this.$cookies.get('token')) await dispatch('getToken')

    //sId = session-id  -- for check if user agent changed
    if (!this.$cookies.get('sId'))
      this.$cookies.set('sId', data, { path: '/', maxAge: 365 * 24 * 60 * 60 })
    if (this.$cookies.get("sId") != data && state.checkAuth === true) state.sessionExpired = true;



    if (!this.$cookies.get('city_id')) this.$cookies.set('city_id', '1')

      dispatch('getMe'),
      dispatch('getCity'),
      dispatch('getCategories')
  },
  async changeLanguage({ state }, data) {
    await this.$cookies.set('lang', data, {
      path: '/',
      maxAge: 365 * 24 * 60 * 60,
    })
    location.reload()
  },

  before({ state, dispatch }) {
    state.loading = true
    dispatch('setMsg', { msg: '', errors: [] })

  },

  routerTo() {
    if (this.$i18n.locale === 'en') {
      window.location.href = '/'
    } else {
      window.location.href = '/ar'
    }
  },

  Logout() {
    this.$cookies.remove('user')
    this.$cookies.remove('iA')
    this.$cookies.remove('sId')
    this.$cookies.remove('token')
    if (this.$i18n.locale === 'ar') {
      window.location.href = '/'
    } else {
      window.location.href = '/'
    }
  },

  registerAction({ state, dispatch }, arrayData) {
    dispatch('before')
    //
    var data = new FormData()

    if (state.step === 2) {
      data.append('verification_code', arrayData)
    }

    else state.register = arrayData

    data.append('name', state.register.name)
    data.append('phone', state.register.phone.replace(/\s/g, ''))
    data.append('email', state.register.email)
    data.append('referral', state.register.referral)
    data.append('password', state.register.password)
    data.append('password_confirmation', state.register.password)

    this.$axios.post('/register', data).then((res) => {
      state.loading = false
      console.log(res.data.msg)
      if (res.data.status === 200) {

        if (state.step === 1) {
          state.step = 2
        }

        else {
          this.$cookies.set('iA', 1, { path: '/', maxAge: 365 * 24 * 60 * 60, })
          dispatch('routerTo')
        }
      } else {
        if (state.step === 1)
          dispatch('setMsg', { msg: res.data.msg, errors: res.data.errors, api: 'register', type: 'error' })
        else
          dispatch('setMsg', { msg: res.data.msg, errors: res.data.errors, api: 'verification_code', type: 'error' })

      }
    })
      .catch((error) => {
        state.loading = false
      })
  },



  async getToken({ app, state, dispatch }) {
    if (state.checkAuth === true) return false
    await this.$axios
      .$get('/api/user/')
      .then((res) => {
        if (res.status === 200) {
          state.token = res.token
          this.$axios.setHeader('token', res.token)

          this.$cookies.set('token', res.token, {
            path: '/',
            maxAge: 365 * 24 * 60 * 60,
          })
        } else {
        }
      })
      .catch(function (error) {
        // if (error.response.status === 401) {
        // }
      })
  },
  getMe({ state, dispatch }) {
    //  state.loadingReg = true;

    const response = this.$axios.$get('/api/user/').then((res) => {
      console.log(res)
        state.loadingReg = false
        if (res.status === 401) {
          if(state.checkAuth) state.sessionExpired = true;
          state.step = 1
        } else {
          state.step = res.data.current_step + 1
          state.user = res.data
          state.is_online = res.data.is_online
          this.$cookies.set('user', res.data, {
            path: '/',
            maxAge: 365 * 24 * 60 * 60,
          })
        }
      })
      .catch(function (error) { })
  },
  LoginAction({ app, state, dispatch }, arrayData) {
    var data = {"userName": arrayData.userName,
    "password":arrayData.password}
    // var data = new FormData()
    // data.append('phone_number', arrayData.phone.replace(/\s/g))
    // data.append('password', arrayData.password)
    state.loading = true
    const response = this.$axios
      .$post('/signin', data)
      .then((res) => {
        state.loading = false
        console.log(res.msg)
        if (res.status === 200) {
          this.$cookies.set('iA', 1, {
            path: '/',
            maxAge: 365 * 24 * 60 * 60,
          })
          this.$cookies.set('user', res.data, {
            path: '/',
            maxAge: 365 * 24 * 60 * 60,
          })
          dispatch('routerTo')
        } else {
          dispatch('setMsg', { msg: '', errors: res.msg, api: 'login', type: 'error' })
        }
      })
      .catch(function (error) {

        state.loading = false
      })
  },

  changeSessionExpired({ state }) {
    state.sessionExpired = false;
  },

}

const mutations = {

}
export default {
  state,
  getters,
  actions,
  mutations
};
