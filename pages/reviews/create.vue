<template>
    <div class="Adress">

        <v-card>
            <v-card-title>
                <span class="text-h5">Create review</span>
            </v-card-title>

            <v-card-text>
                <v-container>
                    <v-row>
                        <v-col cols="12" sm="6">
                            <label>Select user</label>
                            <select v-model="Review.users" outlined label="select user" required>
                                <option value="" selected disabled>select user</option>
                                <option v-for="item in allUsersList.data" :key="item._id" :value="item._id">
                                    {{ item.userName }}</option>
                            </select>
                        </v-col>
                        <v-col cols="12" sm="6">
                            <label>Select maids</label>
                            <select v-model="Review.maids" outlined label="select user" required>
                                <option value="" selected disabled>select maids</option>
                                <option v-for="maids in allMaidsList.data" :key="maids._id" :value="maids._id">
                                    {{ maids.userName }}</option>
                            </select>
                        </v-col>
                        <v-col cols="12" sm="6" md="6">
                            <v-rating v-model="Review.rate" icon-label="custom icon label text {0} of {1}"></v-rating>
                        </v-col>
                        <v-col cols="12" sm="6" md="6">
                            <v-text-field v-model="Review.comment" label="comment" outlined required></v-text-field>
                        </v-col>

                    </v-row>
                </v-container>
            </v-card-text>

            <v-btn color="blue darken-1" text @click="OnAddReview">
                {{ $t('Save') }}
            </v-btn>
        </v-card>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
    data() {
        return {
            Review: {
                users: '',
                maids: '',
                rate: 0,
                comment: ''
            },
        }
    },
    computed: {
        ...mapGetters(['allReviewList', 'allUsersList', 'allMaidsList']),
    },
    methods: {
        ...mapActions(['AddReview', 'getUsers', 'getMaids']),

        OnAddReview() {
        console.log(this.Review)
        return
            this.AddReview(this.Review)
        },
    },
    mounted() {
        this.getUsers()
        this.getMaids()
    },
}
</script>

<style>
select {
    appearance: none;
    outline: 0;
    background: #fff;
    background-image: none;
    width: 100%;
    height: 100%;
    color: black;
    cursor: pointer;
    border: 1px solid black;
    border-radius: 3px;
}

select {
    -webkit-appearance: none;
    -moz-appearance: none;
    -ms-appearance: none;
    appearance: none;
    outline: 0;
    background-image: none;
    border: 1px solid black;
}

select {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0 0 0 .5em;
    color: #000;
    cursor: pointer;
}

select::-ms-expand {
    display: none;
}

.select::after {
    content: '\25BC';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    padding: 0 1em;
    background: #34495E;
    pointer-events: none;
}

.select:hover::after {
    color: #F39C12;
}

.select::after {
    -webkit-transition: .25s all ease;
    -o-transition: .25s all ease;
    transition: .25s all ease;
}
</style>
