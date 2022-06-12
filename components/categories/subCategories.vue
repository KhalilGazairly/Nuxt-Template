<template>
  <section id="serv" class="container_cc">
    <div class="subCat_ page">
      <HeadSub />

      <template v-if="AllCategories.loading">
        <LoadingP />
      </template>
      <v-row v-else>
        <template v-if="AllCategories.subCat.length === 0">
          <NoData data="There are no subcategories here" :type="1"/>
        </template>
        <v-col
          v-else
          v-for="(subCateg, i) in AllCategories.subCat"
          :key="i"
          cols="12"
          sm="6"
          md="4"
          class="text-center"
        >
          <nuxt-link :to="localePath(`/Service/${subCateg.id}`)">
            <div class="subCategorie_">
              <v-img :src="subCateg.image" max-height="125"></v-img>
              <h3>{{ subCateg.name }}</h3>
            </div>
          </nuxt-link>
        </v-col>
      </v-row>
    </div>
  </section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import HeadSub from './vue/headSubCategories.vue'
import LoadingP from '../tools/loadingP.vue'
import NoData from '../tools/no-data.vue'
export default {
    name: 'IndexPage',

  head() {
    return {
      title: this.$i18n.t('Subcategories'),
    }
  },
  components: {
    HeadSub,
    LoadingP,
    NoData,
  },
  computed: {
    ...mapGetters(['AllCategories']),
  },
  methods: {
    ...mapActions(['getSubCategories']),
  },
  mounted() {
    this.getSubCategories(this.$route.params.id)
  },
}
</script>
<style scoped>
.subCat_ {
  border: 1px solid #ededed;
  border-radius: 4px;
  padding: 25px;
}

.subCategorie_ {
  border-radius: 4px;
  box-shadow: 0px 1px 4px 0 rgb(0 0 0 / 5%);
  padding-top: 20px;
}
.subCategorie_:hover {
  transition: 0.5ms;
  box-shadow: 0px 0px 7px 0px rgb(71 71 71 / 26%);
}
.subCategorie_ .v-image {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 1px solid #f2f2f2cc;
  margin: auto;
  margin-bottom: 20px;
}
.subCategorie_ h3 {
  padding: 14px;
  background: #fff;
  border-top: 1px solid #f7f7f7;
}
</style>
