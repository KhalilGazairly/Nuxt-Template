const state = {
    loading: true,
    data: [],
    oneFavourite: '',
}

const getters = {
    allFavouriteList: (state) => state,
}

const actions = {
    async getFavourite({ state }) {
        await this.$axios.get('/api/favourite').then((res) => {
            state.data = res.data
            state.loading = false
        })
    },
    async DeleteFavourite({ state, dispatch }, dataObj) {
        this.$axios
            .delete('/api/favourite/' + dataObj)
            .then(function (res) {
                alert('Notifcation deteled ' + res.data.message)
                dispatch('getFavourite')
            })
            .catch(function (error) {
                console.log(error)
            })
    },
    async getoneFavourite({ state }, id) {
        alert(id)
        state.loading = true

        await this.$axios.get('/api/favourites/' + id).then((res) => {
            state.oneFavourite = res.data.data
            state.loading = false
        })
    },
    async updateFavourite({ state, dispatch }, Obj) {
        state.loading = true
        var data = JSON.stringify({
            is_clicked: Obj.is_clicked,
            content: Obj.content,
            subject: Obj.subject,
        })
        const config = { headers: { 'Content-Type': 'application/json' } }
        this.$axios.put('/api/favourite/' + Obj.id, data, config).then((res) => {
            state.cart = res.data
            if (res.data.status === 1) {
                state.data = res.data
                this.$router.push('/Favourites')
            } else {
                state.addressMSG = res.data.msg
            }
            state.loading = false
        })
    },
    AddFavourite({ state, dispatch }, arrayData) {
        var data = JSON.stringify({
            "content":arrayData.content,
            "subject":arrayData.subject,
            "is_clicked":arrayData.is_clicked
        });
        this.$axios
            .post('/api/favourite/', data)
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
