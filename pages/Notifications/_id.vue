<template>
  <v-row>
    
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="6">
                <v-text-field
                  :label="$t('Name')"
                  prefix=""
                  outlined
                  v-model="userEdit.name"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="6">
                <v-text-field
                  :label="$t('Email')"
                  v-model="userEdit.email"
                  required
                  outlined
                ></v-text-field>
              </v-col>
              <v-col cols="6">
               <v-checkbox v-if="!userEdit.is_clicked"
                v-model="userEdit.is_clicked"
                label="is clicked ?"
              ></v-checkbox>
              <v-checkbox v-else
                v-model="userEdit.is_clicked"
                true
                label="is clicked ?"
                
              ></v-checkbox>
              </v-col>
               
            </v-row>
          </v-container>
        </v-card-text>

          <v-btn color="blue darken-1" text @click="UpdateUserDetail">
            {{$t('Update')}}
          </v-btn>
  </v-row>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  data: () => ({
    errorMessages: '',
    name: null,

    formHasErrors: false,
    dialog: false,
    hidden: false,
    panel: [0, 1],

    userEdit: {
      name: '',
      email: '',
      is_clicked:false,
      id:''
    },
    UserEmail: null,
  }),
  computed: {
    form() {
      return {
        name: this.name,
        address: this.address,
        city: this.city,
        state: this.state,
        zip: this.zip,
        country: this.country,
      }
    },
  },

  watch: {
    name() {
      this.errorMessages = ''
    },
  },

  methods: {
    ...mapActions(['updateNotification','getoneNotification']),

    completeUserData() {
      this.userEdit.name = this.allnotificationList.oneNotification.subject
      this.userEdit.email = this.allnotificationList.oneNotification.content
      this.userEdit.is_clicked = this.allnotificationList.oneNotification.is_clicked
      this.userEdit.id = this.$route.params.id
    },
    UpdateUserDetail() {
      console.log(this.userEdit)
      this.updateNotification(this.userEdit);
    },
  },

  computed: {
    ...mapGetters(['allnotificationList']),
  },


  mounted() {
    this.getoneNotification(this.$route.params.id)
    this.completeUserData()
  },
}
</script>


<style>
</style>
