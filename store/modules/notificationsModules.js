const state = {
    loading: true,
    data: [],
    oneNotification:'',
}

const getters = {
    allnotificationList: (state) => state,
}

const actions = {
    async getNotification({ state }) {
        await this.$axios.get('/api/notification').then((res) => {
            state.data = res.data
            state.loading = false
        })
    },
    async DeleteNotification({ state, dispatch }, dataObj) {
        this.$axios
            .delete('/api/notification/' + dataObj)
            .then(function (res) {
                alert('Notifcation deteled' + res.data.message)
                dispatch('getNotification')
            })
            .catch(function (error) {
                console.log(error)
            })
    },
    async getoneNotification({ state }, id) {
        state.loading = true

        await this.$axios.get('/api/notification/' + id).then((res) => {
            state.oneNotification = res.data.data

            // state.data = res.data.data;
            state.loading = false
        })
    },
    async updateNotification({ state, dispatch }, Obj) {
        state.loading = true
        var data = JSON.stringify({
            "is_clicked": Obj.is_clicked,
            "content": Obj.email,
            "subject": Obj.name
        });
        const config = { headers: {'Content-Type': 'application/json'} };
        this.$axios.put('/api/notification/' + Obj.id, data,config).then((res) => {
            state.cart = res.data
            if (res.data.status === 200) {
                state.data = res.data
            } else {
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
