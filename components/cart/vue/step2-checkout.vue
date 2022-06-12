<template>
  <div>
      <h1 class="title_page">
        {{ $t('continue to check out') }}
      </h1>

        <v-row>
          <v-col cols="12" md="12">
             <CheckOut />
          </v-col>
        </v-row>
    </div>

</template>

<script>
import { mapActions, mapGetters } from 'vuex'
 import CheckOut from './step2/checkoutForm.vue'

export default {
 components:{
   CheckOut
 },
 computed:{
   ...mapGetters(['allCart'])
 }
}
</script>
