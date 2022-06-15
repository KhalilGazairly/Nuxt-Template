const state = {
    loading: true,
    data: [],
    oneReviews: '',
}

const getters = {
    allReviewsList: (state) => state,
}

const actions = {
    async getReviews({ state }) {
        await this.$axios.get('/api/Reviews').then((res) => {
            state.data = res.data
            state.loading = false
        })
    },
    async DeleteReviews({ state, dispatch }, dataObj) {
        this.$axios
            .delete('/api/Reviews/' + dataObj)
            .then(function (res) {
                alert('Notifcation deteled ' + res.data.message)
                dispatch('getReviews')
            })
            .catch(function (error) {
                console.log(error)
            })
    },
    async getoneReviews({ state }, id) {
        state.loading = true

        await this.$axios.get('/api/Reviews/' + id).then((res) => {
            state.oneReviews = res.data.data
            state.loading = false
        })
    },
    async updateReviews({ state, dispatch }, Obj) {
        state.loading = true
        var data = JSON.stringify({
            is_clicked: Obj.is_clicked,
            content: Obj.content,
            subject: Obj.subject,
        })
        const config = { headers: { 'Content-Type': 'application/json' } }
        this.$axios.put('/api/Reviews/' + Obj.id, data, config).then((res) => {
            state.cart = res.data
            if (res.data.status === 1) {
                state.data = res.data
                this.$router.push('/Reviewss')
            } else {
                state.addressMSG = res.data.msg
            }
            state.loading = false
        })
    },
    AddReviews({ state, dispatch }, arrayData) {
        var data = JSON.stringify({
            "content":arrayData.content,
            "subject":arrayData.subject,
            "is_clicked":arrayData.is_clicked
        });
        this.$axios
            .post('/api/Reviews/', data)
            .then((res) => {
                state.loading = false
                if (res.data.status == 1) {
                    dispatch('routerTo')
                } else {
                    alert('error')
                }
            })
            .catch((error) => {
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
