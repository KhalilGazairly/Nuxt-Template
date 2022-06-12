import 'axios';
const state = {
  loading: true,
  data: [],
  cart: [],
  serviceMsg:'',
  id:''
}

const getters = {
  allservices: (state) => state,
}

const actions = {
  async getservices({ state }, id='') {
    if(id !='') state.id=id;


    // alert(id)
    state.loading = true
    state.data = []
    await this.$axios.get('/Service/' + state.id).then((res) => {
      // state.serviceMsg = res.data.msg;
      state.data = res.data.data
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
