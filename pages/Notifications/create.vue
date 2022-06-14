<template>
  <div class="Adress">

      <v-card>
        <v-card-title>
          <span class="text-h5">{{ $t('Add Address') }}</span>
        </v-card-title>

        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6" md="6">
                <v-text-field
                  v-model="notification.subject"
                  label="subject"
                  outlined
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="6">
                <v-text-field
                  v-model="notification.content"
                  label="content"
                  outlined
                  required
                ></v-text-field>
              </v-col>
              
               <v-checkbox
                v-model="notification.is_clicked"
                label="is clicked ?"
              ></v-checkbox>
            </v-row>
          </v-container>
        </v-card-text>

          <v-btn color="blue darken-1" text @click="OnAddNotification">
            {{ $t('Save') }}
          </v-btn>
      </v-card>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  data() {
    return {
      notification: {
        content: '',
        subject: '',
        is_clicked: false
      },
    }
  },
  computed: {
    ...mapGetters(['allnotificationList']),
  },
  methods: {
    ...mapActions(['Addnotification']),

    OnAddNotification() {
      this.Addnotification(this.notification)
    },
  },
  mounted() {

},
}
</script>

<style>

</style>
