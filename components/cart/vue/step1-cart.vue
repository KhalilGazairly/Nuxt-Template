<template>
  <div>
    <h1 class="title_page" v-if="!allCart.loading">
      {{ $t('Cart') }}
    </h1>

    <div v-if="allCart.loading">
      <Loading />
    </div>

    <div v-else>
      <div v-if="allCart.countOfCar === 0">
        <div class="cart_count0 page">
          <font-awesome-icon icon="cart-shopping" class="fa" />

          <p>{{ $t("You do not have any services") }}</p>
          <NuxtLink :to="localePath('/')">
           <v-btn >
             {{$t('Go To Home page')}}
             </v-btn>
             </NuxtLink>
        </div>
      </div>
      <v-row v-else>
        <v-col cols="12" md="8" >
          <ListCart />
        </v-col>

        <v-col cols="12" md="4">
          <TotalCart />
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Loading from '../../tools/loadingP.vue'
import ListCart from './step1/listCart.vue'
import TotalCart from './step1/totalCart.vue'

export default {
  head() {
    return {
      title: this.$i18n.t('Cart'),
    }
  },
  components: {
    Loading,
    TotalCart,
    ListCart,
  },

  computed: {
    ...mapGetters(['allCart']),
  },
  methods: {},
  mounted() {},
}
</script>
 <style scoped>
 .cart_count0{
      border: 1px solid #ededed;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
 }
 .cart_count0 svg{
   font-size: 40px;
   margin-bottom: 20px;
 }
 .cart_count0 button{
margin-top: 30px;
 }
 </style>