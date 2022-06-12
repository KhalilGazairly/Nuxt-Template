import 'axios'
const state = {
  loading: true,
  loadingForAddress: true,
  data: [],
  order: [],
  DateMessage: '',
  msg: '',
  CartEmptyMessage: '',
}

const getters = {
  AllListOforder: (state) => state,
}

const actions = {

  async ListOfOrder({ state }) {
    state.loading = true
    state.data = []
    await this.$axios
      .get('/Order?include=partner,customer,services,category&current=1')
      .then((res) => {
        res.data
        state.loading = false

        if (res.data.status === 200) {
          state.data = res.data.data
        } else {
        }
      })
  },
  async reschedule({ state, dispatch }, dataObj) {
    var data = new FormData()
    data.append('date', dataObj.date)
    data.append('time', dataObj.time)

    this.$axios
      .post('/Order/rescheduleOrder/' + dataObj.order_id, data)
      .then((res) => {
        state.loading = true
        state.order = res.data
        if (res.data.status === 200) {
          state.msg = res.data.msg

   //       dispatch('getListCart')
        } else {
          state.CartEmptyMessage = res.data.msg
        }
        state.loading = false
      })
  },
  async OrderCanceled({ state ,dispatch }, dataObj) {
    state.loading = true
    this.$axios.post('/Order/cancelOrder/' + dataObj).then((res) => {
      state.cart = res.data
      if (res.data.status === 200) {
        state.deleteMsg = res.data.msg
          dispatch('ListOfOrder')
      } else {
        state.deleteMsg = res.data.msg
      }
      state.loading = false
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
