
const state = {
    loading:true,
    data: [],
    
  };
  
  const getters = {
    allMaidsList: state => state,
  };
  
  const actions = {
  
    async getMaids({state}) {
     await this.$axios.get("/api/user/filter/maid").then((res) => {
        const maids = res.data.data;
        for (let i=0; i < maids.length; i++) {
            console.log(maids[i].maid)
            state.data.push(maids[i].maid)
        }
        console.log(state.data)
        state.loading = false;
      });
    },
    
    async getoneMaids({ state }, id) {
        state.loading = true

        await this.$axios.get('/api/user/' + id).then((res) => {
            state.data = res.data.data
            state.loading = false
        })
    },
    
    async updateMaids({ state, dispatch }, Obj) {
        state.loading = true
        var data = JSON.stringify({
            phone: Obj.phone,
            location: Obj.location,
            details: Obj.details,
            birthday: Obj.birthday,
            price: Obj.price,
            userName: Obj.userName,
            email: Obj.email,
        })
        const config = { headers: { 'Content-Type': 'application/json' } }
        this.$axios.put('/api/user/' + Obj.id, data, config).then((res) => {
            state.cart = res.data
            if (res.data.status === 1) {
                state.data = res.data
                this.$router.push('/maids')
            } else {
                state.addressMSG = res.data.message
            }
            state.loading = false
        })
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
  