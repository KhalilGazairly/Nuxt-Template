<template>
  <Index />
</template>

<script>
import Index from "../components/index/index.vue";

export default {
  name: 'IndexPage',
  components:{
    Index
  },
  head() {
    return this.$nuxtI18nHead({ addSeoAttributes: true })
  },
}
</script>

