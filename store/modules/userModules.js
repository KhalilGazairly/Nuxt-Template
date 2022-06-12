const state = {
  loading: false,
  userData: [],
  menuHeader:false,
  overlay:false

}

const getters = {
  allUsers: state => state
}

const actions = {

  changeMenuHeader({ state }, data) {
    state.menuHeader = data
},

setOverlay({ state }, data) {
  state.overlay = data
},

async changeLanguage({ state }, data) {
  await this.$cookies.set("lang", data, { path: "/", maxAge: 365 * 24 * 60 * 60 });
  location.reload();
},


UpdateUserInfo({ state, dispatch }, arrayData) {

  var data = new FormData()
  data.append('name', arrayData.name )
  data.append('email', arrayData.email)
  state.loading = true
  this.$axios.$post('/me/updateProfile', data).then((res) => {
      state.loading = false
      if (res.status === 200) {
        dispatch('getMe')
        dispatch('setMsg',{msg:res.msg,errors:res.errors,api:'updateProfile',type:200})
      }

    })


},

changePassword({ state,dispatch }, arrayData) {

  var data = new FormData();
  data.append("old_password", arrayData.old_password);
  data.append("new_password", arrayData.new_password);
  data.append("new_password_confirmation", arrayData.new_password_confirmation);

  state.loading = true;
  this.$axios.post("/me/changePassword", data).then((res) => {
      state.loading = false;
      console.log(res.data)
      if (res.data.status === 200) {
        dispatch('setMsg',{msg:res.data.msg,errors:[],api:'changePassword',type:200})

      } else {
        dispatch('setMsg',{errors:res.data.msg,api:'changePassword',type:'error'})

      }
  }).catch((error) => {
      state.loading = false;
  });
},

  async getUserData({ state }) {
    // alert(1)
    state.loading = true
    state.data = []
    await this.$axios.get('/me' ).then((res) => {
      state.data = res.data.data
      state.cartLength = res.data.data.services.length
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
