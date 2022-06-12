const state = {
  loading: true,
  data: [],
  cart: [],
  msg: '',
  deleteMsg: '',
  countOfCar: 0,
  loadingOptions: false,
  loadingOptionsI: 0,
  loadingOptionsT: 1,   // 1 minus ,2 is plus , 3 delete,
  ProudctsId: null,
  step:1,
  itemId:null


}

const getters = {
  allCart: state => state,
}

const actions = {
  async getCart({ state }) {

    await this.$axios.get('/cart').then((res) => {
      state.loading = false

      if (res.data.status === 200) {
        state.data = res.data.data
        state.countOfCar = res.data.data.services.length
        state.loadingOptions = false
      } else {
        state.data = []
        state.countOfCar = 0

      }

    })
  },

  async UpdateCart({ state, dispatch }, Obj) {


    var data = new FormData()
    data.append('service_id', Obj.id)
    data.append('quantity', Obj.quantity)
    state.loadingOptions = true
    state.loadingOptionsI = Obj.id;
    state.loadingOptionsT = Obj.type
    this.$axios.post('/cart/update', data).then((res) => {
      state.cart = res.data
      if (res.data.status === 200) {
        state.msg = res.data.msg;
        dispatch('getCart')
      } else {
        state.loadingOptions = false
        state.msg = `Updated Only Once, ` + res.data.msg;
      }

    })
  },



  async DeleteCart({ state, dispatch }, dataObj) {
    var data = new FormData()
    data.append('service_id', dataObj)

    state.loadingOptions = true
    state.loadingOptionsI = dataObj;
    state.loadingOptionsT = 3;

    this.$axios.post('/cart/remove', data).then((res) => {
      state.cart = res.data
      if (res.data.status === 200) {
        state.deleteMsg = res.data.msg;
        dispatch('getCart')

      } else {
        state.deleteMsg = res.data.msg;
        state.loadingOptions = false

      }
    })
  },

  toastMsg({state},data){
    this.$toast.success({
      title:data,
      message:this.$i18n.t('Added to cart'),
      position:this.$i18n.locale === 'ar' ? 'top left':'top right',
      showMethod:this.$i18n.locale === 'ar' ? 'fadeInLeft':'fadeInRight',
      hideMethod:this.$i18n.locale === 'ar' ? 'fadeInLeft':'fadeInRight',
      icon:'/images/cart.svg',
      timeOut:3000
  })
  },
  async addToCart({state, dispatch }, dataArray) {
    state.loading = true;
    state.ProudctsId =dataArray.id;
    //
    var data = new FormData()
    data.append('service_id',dataArray.id)
 
    this.$axios.post('/cart/add', data).then((res) => {
      state.loading = false
      state.cart = res.data
      if (res.data.status === 200) {
 
      dispatch('toastMsg',dataArray.title)
        dispatch('getCart')
      } else {
 
      }
    })
  },

  cartNextStep({state,dispatch},data=2){
   
    state.step=data;
  }
}



const mutations = {}
export default {
  state,
  getters,
  actions,
  mutations,
}
