<template>
  <v-row>
    
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="6">
                <v-text-field
                  label="subject"
                  prefix=""
                  outlined
                  v-model="NotificationEdit.subject"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="6">
                <v-text-field
                  label="content"
                  v-model="NotificationEdit.content"
                  required
                  outlined
                ></v-text-field>
              </v-col>
              <v-col cols="6">
               <v-checkbox v-if="!NotificationEdit.is_clicked"
                v-model="NotificationEdit.is_clicked"
                label="is clicked ?"
              ></v-checkbox>
              <v-checkbox v-else
                v-model="NotificationEdit.is_clicked"
                true
                label="is clicked ?"
                
              ></v-checkbox>
              </v-col>
               
            </v-row>
          </v-container>
        </v-card-text>

          <v-btn color="blue darken-1" text @click="UpdateUserDetail">
            save
          </v-btn>
  </v-row>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  data: () => ({
    NotificationEdit: {
      subject: '',
      content: '',
      is_clicked:false,
      id:''
    },
  }),
  computed: {
   
  },


  methods: {
    ...mapActions(['updateNotification','getoneNotification']),

    completeUserData() {
      this.NotificationEdit.subject = this.allnotificationList.oneNotification.subject
      this.NotificationEdit.content = this.allnotificationList.oneNotification.content
      this.NotificationEdit.is_clicked = this.allnotificationList.oneNotification.is_clicked
      this.NotificationEdit.id = this.$route.params.id
    },
    UpdateUserDetail() {
      this.updateNotification(this.NotificationEdit);
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
