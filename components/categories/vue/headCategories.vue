<template>
<div> 
  <div class="iServices_head">
    <h3>{{ $t('Main Categories') }}</h3>

    <v-select
      class="select_head"
      :items="allCity.data"
      :label="$t('Location')"
      item-text="name"
      item-value="id"
      :disabled="allCity.loading"
      :loading="allCity.loading"
      v-model="city"
      outlined
      dense
      @change="onChangeCity"
      prepend-inner-icon="mdi-map-marker"
    >
    </v-select>
  </div>
     

</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  components:{
  },
  data() {
    return {
      city: null,
    }
  },

  mounted() {
    this.setCity()
  },

  computed: {
    ...mapGetters(['allCity']),
  },
  methods: {
      ...mapActions(['UpdateCity']),
    onChangeCity() {
      this.UpdateCity(this.city)
    },

    setCity() {
      this.city = this.$cookies.get('city_id')
    },
  },
}
</script>

<style>
.indexServices {
  border: 1px solid #ededed;
  border-radius: 4px;
  padding: 25px;
}
.indexServices .v-text-field__details{
    display: none;
}

.iServices_head {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #ededed;
    margin-bottom: 20px;
    align-items: center;
    
    padding-bottom: 14px;
    }

.select_head{
    max-width: 250px;
}
</style>
