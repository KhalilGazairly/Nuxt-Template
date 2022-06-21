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
                  v-model="FavouriteEdit.subject"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="6">
                <v-text-field
                  label="content"
                  v-model="FavouriteEdit.content"
                  required
                  outlined
                ></v-text-field>
              </v-col>
              <v-col cols="6">
               <v-checkbox v-if="!FavouriteEdit.is_clicked"
                v-model="FavouriteEdit.is_clicked"
                label="is clicked ?"
              ></v-checkbox>
              <v-checkbox v-else
                v-model="FavouriteEdit.is_clicked"
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
    FavouriteEdit: {
      subject: '',
      content: '',
      is_clicked:false,
      id:''
    },
  }),
  computed: {
   
  },


  methods: {
    ...mapActions(['updateFavourite','getoneFavourite']),

    completeUserData() {
      this.FavouriteEdit.subject = this.allFavouriteList.oneFavourite.subject
      this.FavouriteEdit.content = this.allFavouriteList.oneFavourite.content
      this.FavouriteEdit.is_clicked = this.allFavouriteList.oneFavourite.is_clicked
      this.FavouriteEdit.id = this.$route.params.id
    },
    UpdateUserDetail() {
      this.updateFavourite(this.FavouriteEdit);
    },
  },

  computed: {
    ...mapGetters(['allFavouriteList']),
  },


  mounted() {
    this.getoneFavourite(this.$route.params.id)
    this.completeUserData()
  },
}
</script>


<style>
</style>
