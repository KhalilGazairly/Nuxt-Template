<template>
  <div>
    <div class="text-center" v-if="AllCategories.loading">
      <Loading />
    </div>
    <div v-else>
      <v-row>
        <v-col
          v-for="(Proudcts, i) in AllCategories.data.data"
          :key="i"
          cols="12"
          sm="6"
          md="4"
          class="text-center"
        >
          <nuxt-link :to="localePath(`/categories/${Proudcts.id}`)">
            <div class="categorie_">
              <v-img :src="Proudcts.image"  ></v-img>
              <h3>{{ Proudcts.name }}</h3>
            </div>
          </nuxt-link>
        </v-col>
      </v-row>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
import Loading from '../../tools/loadingP.vue'
export default {
  components: {
    Loading,
  },
  computed: {
    ...mapGetters(['AllCategories', 'AllCityDeatils']),
  },
  methods:{
    ...mapActions(['getCategories'])
  },
  mounted(){
   }
  
}
</script>
<style>
.categorie_{
    border-radius: 4px;
    box-shadow: 0px 1px 4px 0 rgb(0 0 0 / 5%);
    
}
.categorie_:hover{
  transition: 0.5ms;
  box-shadow: 0px 0px 7px 0px rgb(71 71 71 / 26%);
}
.categorie_ h3{
    padding: 14px;
    background: #fff;
    border-top: 1px solid #f7f7f7;
}
.categorie_ .v-image {
    height: 240px;

}
</style>
