<template>
  <section >
    <Head />
    <ListCategories />
  </section>
</template>
<script>
import ListCategories from './vue/listCategories.vue'
import Head from './vue/headCategories.vue'
export default {
  components: {
    Head,
    ListCategories,
  },
}
</script>
<style scoped>
</style>
