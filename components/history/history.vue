<template>
  <div class="page">
    <h1 class="text-center">History</h1>
    <v-item-group v-if="!show">
      <v-container>
        <v-row>
          <v-col
            v-for="n in 6"
            :key="n"
            cols="12"
            md="4"
          >

            <v-card
              class="mx-auto"
              max-width="344"
            >
              <v-img
                src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
                height="200px"
              ></v-img>

              <v-card-title>
                Top western road trips
              </v-card-title>

              <v-card-subtitle>
                1,000 miles of wonder
              </v-card-subtitle>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-item-group>
    <v-item-group v-if="show" class="text-center">
      <img
                src="../../assets/Cleaner.png"
              />
    </v-item-group>
  </div>
</template>

<script>
export default {
   data: () => ({
       show: false,
    }),
}
</script>

<style>

</style>
