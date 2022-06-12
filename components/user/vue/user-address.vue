<template>
  <div class="payment_address_">
    <div v-if="AllAddresses.loading">
      <Loading :type="1" />
    </div>
 
          <div v-else class="cart_address">
            <div  v-for="(address, i) in AllAddresses.data.data" :key="i" class="cart_address_i">
              <font-awesome-icon icon="location-dot" />
              <p :title="$t('The City')">
                {{ address.city.name }}
              </p>
              ,
              <p :title="$t('Address')">
                {{ address.address_line }}
              </p>
              ,
              <p :title="$t('Area')">{{ address.area }}</p>
              ,
              <p :title="$t('Street')">{{ address.street }}</p>
              ,
              <p :title="$t('Building No')">
                {{ address.building_no }}
              </p>
              ,
              <p :title="$t('Apartment No')">
                {{ address.apartment_no }}
              </p>
            </div>
               <AddAddress />
          </div>
       
 
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
import AddAddress from '../vue/forms/addAddress.vue'
import Loading from '../../tools/loadingP.vue'
export default {
    components:{
        AddAddress,
        Loading
    },
  mounted() {
    this.getAddress()
  },
  computed: {
    ...mapGetters(['AllAddresses']),
  },
  methods: {
    ...mapActions(['getAddress']),
  },
}
</script>
<style scoped>
.cart_address_i{
    display: flex;
    border: 1px solid #f1f1f1;
    background: #fcfcfc;
    padding: 10px;
    border-radius: 5px;
    align-items: center;
    margin-bottom: 20px;
        flex-wrap: wrap;
    line-height: 24px;
}
.cart_address_i svg{
    margin: 0px 5px;
}
</style>