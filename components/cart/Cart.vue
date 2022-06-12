<template>
  <div class="container_cc page">
    <div v-if="allCart.step === 1">
      <Step1Cart />
    </div>
    <div v-else>
      <Step2Checkout />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Step1Cart from './vue/step1-cart.vue'
import Step2Checkout from './vue/step2-checkout.vue'
export default {
  head() {
    return {
      title: this.$i18n.t('Cart'),
    }
  },
  components: {
    Step1Cart,
    Step2Checkout,
  },

  computed: {
    ...mapGetters(['allCart']),

  },
  methods: {
    ...mapActions(['cartNextStep'])
  },
  mounted() {
    this.cartNextStep(1)
  },
}
</script>
 