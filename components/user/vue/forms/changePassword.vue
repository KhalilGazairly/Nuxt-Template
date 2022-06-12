<template>
  <div class="form_account">
    <h3 class="mb-5">
      {{ $t('Enter your Old Password') }}
    </h3>

    <div class="form_user">
      <v-form
        ref="form"
        @submit="changePasswordFunction"
        v-model="valid"
        lazy-validation
      >
        <div class="form_account_body">
          <v-text-field
            v-model="data.old_password"
            :append-icon="showPasswordOld ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[$rules.required]"
            :type="showPasswordOld ? 'text' : 'password'"
            :label="$t('Password')"
            @click:append="showPasswordOld = !showPasswordOld"
            outlined
            dense
          ></v-text-field>

          <v-text-field
            v-model="data.new_password"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[$rules.required, $rules.password]"
            :type="showPassword ? 'text' : 'password'"
            :label="$t('Password')"
            @click:append="showPassword = !showPassword"
            outlined
            required
            dense
          ></v-text-field>

          <v-text-field
            v-model="data.new_password_confirmation"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            :type="showPassword ? 'text' : 'password'"
            :label="$t('Re-enter The Password')"
            @click:append="showPassword = !showPassword"
            :rules="[
              $rules.required,
              $rules.confirmPassword(
                data.new_password_confirmation,
                data.new_password
              ),
            ]"
            outlined
            dense
          ></v-text-field>

          <Msg api="changePassword" />
          <v-btn
            :disabled="!valid"
            color="success"
            class="sub"
            @click="changePasswordFunction"
            :loading="allUsers.loading"
            type="submit"
          >
            {{ $t('Change Password') }}
          </v-btn>
        </div>
      </v-form>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Msg from '../../../tools/msgApi.vue'
export default {
  components: {
    Msg,
  },
  data() {
    return {
      valid: false,
      showPasswordOld: false,
      showPassword: false,
      data: {
        old_password: null,
        new_password: '',
        new_password_confirmation: '',
      },
      msg: '',
      msgStatus: true,
    }
  },
  computed: {
    ...mapGetters(['allUsers']),

    passwordConfirmationRule() {
      return () =>
        this.password === this.password_confirmation || 'Password must match'
    },
  },
  mounted() {},
  methods: {
    ...mapActions(['changePassword']),

    changePasswordFunction(e) {
      e.preventDefault()
      if (this.$refs.form.validate() === false) return false
      this.changePassword(this.data)
    },
  },
}
</script>
