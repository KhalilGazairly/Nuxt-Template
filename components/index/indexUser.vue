<template>
  <div>
    <div class="headcat_"></div>
    <div class="container_cc page">
      <div class="indexServices">
        <Categories />
      </div>
    </div>
  </div>
</template>

<script>
import Services from '../categories/vue/listCategories.vue'
import HeadServices from './vueUser/headServices.vue'
import Categories from '../categories/categories.vue'
export default {
  head() {
    return {
      title: this.$i18n.t('Home'),
    }
  },
  components: {
    Services,
    HeadServices,
    Categories,
  },
  computed: {},
}
</script>
 <style scoped>
.headcat_ {
  background: url(/images/lap2.jpg) no-repeat center center;
  width: 100%;
  height: 250px;
  background-size: cover;
}
</style>