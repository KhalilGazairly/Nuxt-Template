

const state = {
  checkAuth: false,
  step: 1,
  Authorization: '',
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
    await this.$axios.setHeader('lang', this.$i18n.locale)
    if (this.$cookies.get('Authorization'))
      await this.$axios.setHeader('Authorization', this.$cookies.get('Authorization'))


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
    this.$cookies.remove('Authorization')
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

  LoginAction({ app, state, dispatch }, arrayData) {
    var data = JSON.stringify({
      "userName":arrayData.userName,
      "password":arrayData.password
    });
    state.loading = true
    const response = this.$axios
      .$post('/signin', data)
      .then((res) => {
        state.loading = false
        console.log(res.msg)
        if (res.status == 1) {
          this.$cookies.set('Authorization', 'Bearer '+ res.data.token, {
            path: '/',
            maxAge: 365 * 24 * 60 * 60,
          })
          dispatch('routerTo')
        } else {
          dispatch('setMsg', { msg: '', errors: res.message, api: 'login', type: 'error' })
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
