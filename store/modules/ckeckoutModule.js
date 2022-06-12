const state = {
  loading: false,
  loadingTime:true,
  data: [],
  order: [],
  DateMessage: '',
  msg:'', 
  CartEmptyMessage: '',
}

const getters = {
  allCkeckout: state => state,
}

const actions = {


  async getListOfTime({ state, dispatch }, date) {
    var data = new FormData()
    data.append('date', date)
    state.loadingTime = true
    this.$axios.post('/cart/getListOfTime', data).then((res) => {
      state.loadingTime = false

      state.time = res.data
      if (res.data.status === 200) {

      } else {
        state.DateMessage = res.data.msg
      }
      state.loading = false
    })
  },

  async CheckOut({ state, dispatch }, dataObj) {
    var data = new FormData()
    data.append('payment_method', dataObj.payment)
    data.append('address_id', dataObj.address)
    data.append('date', dataObj.date)
    data.append('time', dataObj.time)
    data.append('city_id', '1')
    state.loading = true

    this.$axios.post('/Order/checkout', data).then((res) => {
      state.loading = false
      state.order = res.data     
      if (res.data.status === 200) {
        state.msg = res.data.msg


        if (this.$i18n.locale === 'en') {
          window.location.href = '/orders'
        } else {
          window.location.href = '/ar/orders'
        }
      } else {
        dispatch('setMsg',{errors:res.data.errors,api:'checkout',type:'error'})
      }
    })
  },
}

const mutations = {}
export default {
  state,
  getters,
  actions,
  mutations,
}
