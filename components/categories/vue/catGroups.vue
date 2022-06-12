<template>
  <v-sheet class="mx-auto" elevation="8" >
    <v-slide-group v-model="model" class="pa-4" mandatory show-arrows>
      <v-slide-item
        v-for="(Proudcts, i) in AllCategories.data.data"
        :key="i"
        v-slot="{ active, toggle }"
      >
        <v-card
          :color="active ? 'primary' : 'grey lighten-1'"  
          @click="toggle"
        >
          <v-row class="fill-height" align="center" justify="center">
            <v-scale-transition>
              <div
                class="categorie_"
                :color="active ? 'primary' : 'grey lighten-1'"
              >
                <v-img :src="Proudcts.image" width="100px"></v-img>
                <h3>{{ Proudcts.name }}</h3>
              </div>
              
            </v-scale-transition>
          </v-row>
        </v-card>
      </v-slide-item>
    </v-slide-group>
  </v-sheet>
</template>

 <script>
import { mapGetters } from 'vuex'

export default {
  data: () => ({
    model: null,
  }),

  computed: {
    ...mapGetters(['AllCategories']),
  },
}
</script>