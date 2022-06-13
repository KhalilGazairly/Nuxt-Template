
const state = {
  loading:true,
  data: [],
  
};

const getters = {
  allUsersList: state => state,
};

const actions = {

  async getUsers({state}) {
   await this.$axios.get("/api/user").then((res) => {
      state.data = res.data.data;
      state.loading = false;
    });
  },
}

const mutations ={
  
}
export default {
  state,
  getters,
  actions,
  mutations
};
