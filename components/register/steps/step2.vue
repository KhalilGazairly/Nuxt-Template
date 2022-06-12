<template>
  <div class="form_register" >
    <!-- Form Heading and Progress -->
    <h3 class="mb-5">
      <span>{{ $t("Verify phone number") }}</span>
      <v-avatar
        color="primary"
        class="subheading white--text"
        size="24"
        v-text="allAuth.step"
      ></v-avatar>
    </h3>
    <!-- Form -->
    <v-form ref="form"  v-model="valid" lazy-validation>
      <p class="mb-4 mt-4 text-center">
        {{$t('We sent you the activation code over the phone, please enter here')}}
      </p>

      <div class="form_body">
        <div class="ma-auto position-relative" style="max-width: 300px">
          <v-otp-input
            v-model="otp"
            :loading="allAuth.loading"
            @finish="onFinish"
          ></v-otp-input>
        </div>
        <v-snackbar v-model="snackbar" :color="snackbarColor" :timeout="2000">
          {{ text }}
        </v-snackbar>
      </div>

 <div class="text-center">
            <Msg api="verification_code" />

 
        <v-btn
          text
          :loading="allAuth.loading"
        >
        </v-btn>
     </div>
    </v-form>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import Msg from '../../tools/msgApi.vue'
export default {
   components:{
     Msg
   },
  data: () => ({
    valid: false,
    snackbar: false,
    snackbarColor: "default",
    otp: "",
    text: "",
  }),
  computed: {
    ...mapGetters(['allAuth'])
  },
  methods: {
    ...mapActions(["registerAction"]),
    onFinish(e) {
      this.registerAction(this.otp);
    },
  },
};
</script>
