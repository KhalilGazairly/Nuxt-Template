
const state = {
  loading: true,
  data: [],
  subCat:[]
};

const getters = {
  AllCategories: state => state,

};

const actions = {

  async getCategories({ dispatch,state }) {
    state.loading = true

    await this.$axios.get("/Category").then((res) => {
      state.loading = false;

      if(res.data.status === 200){
        state.data = res.data;
      }else if(res.data.status === 401){
        if (this.$cookies.get("sId")) dispatch('Logout')
      }
    });
  },

  async getSubCategories({ state }, id) {
    state.loading = true


    await this.$axios.get("/Category?parent="+id).then((res) => {
      state.subCat = res.data.data;

      // state.data = res.data.data;
      state.loading = false;
    });
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

