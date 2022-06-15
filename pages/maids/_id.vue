<template>
  <v-row>
    
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="6">
                <v-text-field
                  label="phone"
                  prefix=""
                  outlined
                  v-model="MaidsEdit.phone"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="6">
                <v-text-field
                  label="location"
                  v-model="MaidsEdit.location"
                  required
                  outlined
                ></v-text-field>
              </v-col>
                <v-col cols="6">
                <v-text-field
                  label="details"
                  prefix=""
                  outlined
                  v-model="MaidsEdit.details"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="6">
                <v-text-field
                  label="birthday"
                  v-model="MaidsEdit.birthday"
                  required
                  outlined
                ></v-text-field>
              </v-col>
               <v-col cols="6">
                <v-text-field
                  label="price"
                  prefix=""
                  outlined
                  v-model="MaidsEdit.price"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="6">
                <v-text-field
                  label="userName"
                  v-model="MaidsEdit.userName"
                  required
                  outlined
                ></v-text-field>
              </v-col>
              
              <v-col cols="6">
                <v-text-field
                  label="email"
                  v-model="MaidsEdit.email"
                  required
                  outlined
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>

          <v-btn color="blue darken-1" text @click="UpdateMaid">
            save
          </v-btn>
  </v-row>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  data: () => ({
    MaidsEdit: {
      phone: '',
      location: '',
      details:'',
      birthday:'',
      price:'',
      userName:'',
      email:'',
      id:''
    },
  }),
  computed: {
   
  },


  methods: {
    ...mapActions(['updateMaids','getoneMaids']),

    completeMaidsData() {
        console.log(this.allMaidsList.data)
      this.MaidsEdit.phone = this.allMaidsList.data.phone
      this.MaidsEdit.location = this.allMaidsList.data.location
      this.MaidsEdit.details = this.allMaidsList.data.details
      this.MaidsEdit.birthday = this.allMaidsList.data.birthday
      this.MaidsEdit.price = this.allMaidsList.data.price
      this.MaidsEdit.userName = this.allMaidsList.data.userName
      this.MaidsEdit.email = this.allMaidsList.data.email
      this.MaidsEdit.id = this.$route.params.id
    },
    UpdateMaid() {
        console.log(this.MaidsEdit)
      this.updateMaids(this.MaidsEdit);
    },
  },

  computed: {
    ...mapGetters(['allMaidsList']),
  },


  mounted() {
    this.getoneMaids(this.$route.params.id)
    setTimeout(() => this.completeMaidsData(), 500);
  },
}
</script>


<style>
</style>
