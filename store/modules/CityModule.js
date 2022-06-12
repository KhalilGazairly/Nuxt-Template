import 'axios';
const state = {
  loading: true,
  data: [],
  cites: [],
  Updatecheck:false,
  progress: false,
  cityMSG:''
}

const getters = {
  allCity: (state) => state,
}

const actions = {
   getCity({ state }) {
    // alert(id)
    state.loading = true
     this.$axios.get('/City' ).then((res) => {
  
      state.data = res.data.data
      state.loading = false
    })
  },



  // Pindding to code state if user update city on service page

  async UpdateCity({ state , dispatch }, id) {

    var data = new FormData()
    data.append('city_id', id)
    this.$cookies.set('city_id', id, {path: '/',maxAge: 365 * 24 * 60 * 60,})
    state.loading = true
     await this.$axios.post('/me/CustomerUpdateCity', data).then((res) => {
       state.cites = res.data
       if (res.data.status === 200) {
        dispatch("getCategories")

         state.cityMSG = res.data.msg;
        // alert(res.data.msg)
       } else {
        state.cityMSG = res.data.msg;

        // alert(res.data.msg)
       }
       state.loading = false;
      state.Updatecheck = true;

     })


  },



  // async UpdateCityOnService({ state , dispatch }, CityId, ServID) {

  //   var data = new FormData()
  //   data.append('city_id', CityId)
  //   this.$cookies.set('city_id', CityId)

  //   state.loading = true
  //    await this.$axios.post('/me/CustomerUpdateCity', data).then((res) => {
  //      state.cites = res.data
  //      if (res.data.status === 200) {
  //        alert(res.data.msg)
  //      } else {
  //        alert(res.data.msg)
  //      }
  //      state.loading = false
  //    })

  //    dispatch("getservices", '1')
  // },


  // async DeleteCart({ state }, dataObj) {

  //   var data = new FormData()
  //   data.append('service_id', dataObj)

  //   state.loading = true
  //    this.$axios.post('/cart/remove', data).then((res) => {
  //      state.cart = res.data
  //      if (res.data.status === 200) {
  //        alert(res.data.msg)
  //      } else {
  //        alert(res.data.msg)
  //      }
  //      state.loading = false
  //    })
  // },
}

const mutations = {}
export default {
  state,
  getters,
  actions,
  mutations,
}
