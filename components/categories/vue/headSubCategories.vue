<template>
  <div class="iServices_head">
    <h3>{{ $t('Subcategories') }}</h3>

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
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
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


.select_head{
    max-width: 250px;
}
.iServices_head .v-text-field__details{
    display: none;
}
</style>
