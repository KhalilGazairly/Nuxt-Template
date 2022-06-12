<template>
  <section class="container_cc page">
    <template class="text-center" v-if="allservices.loading">
      <Loading />
    </template>

    <template v-else>
 
       <template v-if="allservices.data.length === 0">
        <NoData data="There are no services in this category" />
      </template>

      <template>
        <ItemServices />
      </template>
    </template>
  </section>
</template>


<script>
import { mapActions, mapGetters } from 'vuex'
import NoData from '../tools/no-data.vue'
import Loading from '../tools/loadingP.vue'
import ItemServices from './vue/item-service.vue'
export default {
   head() {
    return {
      title: this.$i18n.t('services'),
    }
  },
  components: {
    Loading,
    ItemServices,
    NoData,
  },

  validate({ params }) {
    return !isNaN(params.id)
  },
  computed: {
    ...mapGetters(['allAuth', 'allservices', 'allCart']),
  },
  methods: {
    ...mapActions(['getservices', 'addToCart']),

    addToCartFunction(id) {
      this.addToCart(id)
    },
  },
  mounted() {
    this.getservices(this.$route.params.id)
  },
}
</script>
<style scoped>
</style>
