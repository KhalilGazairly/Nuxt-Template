

const state = {
  errors: null,
  msg: null,
  api: '',
  type:'error'
}

const getters = {
  allMsg: state => state
};

const actions = {

  setMsg({state}, data) {
    state.msg = data.msg;
    state.errors = data.errors;
    state.api = data.api
    state.type=data.type
  }

}

const mutations = {

}
export default {
  state,
  getters,
  actions,
  mutations
};
