<template>
  <v-row justify="center">
    <v-dialog v-model="allAuth.sessionExpired" persistent max-width="500px">
      <v-card>
        <v-card-title>
          <span class="text-h5">{{ $t("Session Expired") }}</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <div class="sessionES1">
                <p>{{ $t("Session Expired Please Login Again") }}</p>
                <v-btn color="success" @click="goFunction()">{{ $t("GO") }}</v-btn>
              </div>
 
            </v-row>
          </v-container>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  computed: {
     ...mapGetters(['allAuth'])
  },
  methods: {
       ...mapActions(['changeSessionExpired','Logout']),
    goFunction() { 
        this.changeSessionExpired(false)
       this.Logout(0);
    },
 
  },
};
</script>
<style scoped>
.sessionES1,p,button {
  width: 100%;
  margin-top: 20px;
}

 
 
</style>