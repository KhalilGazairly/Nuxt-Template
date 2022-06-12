
const state = {
  loading: false,
  data: [],
  address: [],
  addressMSG:'',
  deleteAddressMsg:''
}

const getters = {
  AllAddresses: (state) => state,
}

const actions = {
  async getAddress({ state }) {
    // alert(id)
    state.loading = true
    state.data = []
    await this.$axios.get('/me/getAddress' ).then((res) => {
      state.data = res.data

      state.loading = false
    })
  },

  async addAddress({ state , dispatch }, Obj) {

    var is_Default =  Obj.checkbox;
    if(is_Default == true){
      is_Default =1
    }else{
      is_Default =0
    }
    var data = new FormData()

    data.append('lat', "")
    data.append('lng', "")

    data.append('street', Obj.street)
    data.append('area', Obj.area)
    data.append('building_no', Obj.building_no)
    data.append('apartment_no', Obj.apartment_no)
    data.append('address_line', Obj.address_line)
    data.append('postal_code', Obj.postal_code)
    data.append('notes', Obj.notes)

    data.append('is_default', is_Default)

    state.loading = true
     this.$axios.post('/me/addAddress', data).then((res) => {
       state.data = res.data
       if (res.data.status === 200) {
         dispatch('getAddress')
         state.addressMSG = res.data.msg;
        //  alert(res.data.msg)
       } else {
        state.addressMSG = res.data.msg
        //  alert(res.data.msg)
       }
       state.loading = false
     })
  },

  async UpdateAddress({ state , dispatch }, Obj) {

    var is_Default =  Obj.checkbox;
    if(is_Default == true){
      is_Default =1
    }else{
      is_Default =0
    }
    var data = new FormData()

    // data.append('city_id', Obj.city)

    data.append('street', Obj.street)
    data.append('area', Obj.area)
    data.append('building_no', Obj.building_no)
    data.append('apartment_no', Obj.apartment_no)
    data.append('address_line', Obj.address_line)
    data.append('postal_code', Obj.postal_code)
    data.append('notes', Obj.notes)

    data.append('is_default', is_Default)

    state.loading = true

     this.$axios
       .post('/me/updateAddress/' + Obj.address_id, data)
       .then((res) => {
         state.cart = res.data
         if (res.data.status === 200) {
           state.addressMSG = res.data.msg

           //  alert(res.data.msg)
         } else {
           state.addressMSG = res.data.msg

           //  alert(res.data.msg)
         }
         state.loading = false
       })
  },



  async DeleteAddress({ state }, id) {

    // var data = new FormData()
    // data.append('service_id', dataObj)

    state.loading = true
     this.$axios.post(`/me/deleteAddress/${id}`).then((res) => {
       state.cart = res.data
       if (res.data.status === 200) {
        state.addressMSG = res.data.msg

        //  alert(res.data.msg)
       } else if(res.data.status === 500) {
        state.deleteAddressMsg = res.data.msg
        console.log(res.data.msg);

        //  alert(res.data.msg)
       }else {
        state.addressMSG = res.data.msg
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
