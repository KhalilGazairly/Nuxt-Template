<template>
  <v-row>
    <v-col
      v-for="(item, i) in allservices.data"
      :key="i"
      cols="12"
      md="4"
      sm="6"
    >
      <div class="iservices_">
        <div class="img">
          <v-img :src="item.image"></v-img>
        </div>

        <h3>{{ item.title }}</h3>
        <div class="desc">{{ item.description }}</div>

        <div class="Price">
          <span>{{ $t('Price') }}:</span> <strong>{{ item.price }}</strong>
        </div>
        <div class="action" v-if="allAuth.checkAuth">
          <v-btn
            dark
            id="addToCart"
            color="#30c88d"
            @click="(e)=>addToCartFunction(item.id,item.title)"
            :loading="allCart.loading && item.id === allCart.ProudctsId"
          >
            <v-icon dark> mdi-cart-outline </v-icon>
          {{$t('Add To Cart')}}
          </v-btn>
        </div>
      </div>
    </v-col>
  </v-row>
</template>


<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  components: {},

  computed: {
    ...mapGetters(['allAuth', 'allservices', 'allCart']),
  },
  methods: {
    ...mapActions(['getservices', 'addToCart']),

    addToCartFunction(id,title) {
      this.addToCart({'id':id,'title':title})
    },
  },
}
</script>
<style scoped>
.iservices_ {
  border: 1px solid #eee;
  padding: 12px;
  border-radius: 4px;
}
 
.iservices_ .v-img{
 max-height: 270px;
}
.iservices_ h3 {
  border-top: 1px solid #f7f7f7;
  padding: 15px 0px;
}
.iservices_ .desc {
  font-size: 12px !important;
  color: #777;
  margin-bottom: 20px;
}
.iservices_ .Price {
    display: flex;
    justify-content: space-between;
    border-top: 1px solid #f7f7f7;
    padding-top: 15px;
}
.iservices_ .action button{
  margin-top: 30px;
    width: 100%;
}
</style>
