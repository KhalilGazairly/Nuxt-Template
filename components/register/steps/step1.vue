<template>
  <div class="form_register">
    <!-- Form Heading and Progress -->
    <h3 class="mb-5">
      <span>{{ $t('Register') }}</span>
      <v-avatar
        color="primary"
        class="subheading white--text"
        size="24"
        v-text="allAuth.step"
      ></v-avatar>
    </h3>
    <!-- Form -->
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field
        :label="$t('Name')"
        type="text"
        v-model="data.name"
        :counter="200"
        :rules="[$rules.required]"
        outlined
        dense
      ></v-text-field>

      <vue-phone-number-input
        v-model="data.phone"
        class="mb-7"
        :show-code-on-list="true"
        v-bind="vuePhone.props"
        @update="data.code = $event.formattedNumber"
      />

      <!-- default-country-code="SA" -->

      <v-text-field
        :label="$t('E-mail')"
        type="email"
        v-model="data.email"
        :rules="[$rules.email]"
        required
        outlined
        dense
      ></v-text-field>

      <v-text-field
        v-model="data.password"
        :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
        :type="showPassword ? 'text' : 'password'"
        :label="$t('Password')"
        :rules="[$rules.required, $rules.password]"
        @click:append="showPassword = !showPassword"
        required
        outlined
        dense
      ></v-text-field>

      <v-text-field
        v-model="data.password_confirmation"
        :append-icon="showPasswordConfirmation ? 'mdi-eye' : 'mdi-eye-off'"
        :type="showPasswordConfirmation ? 'text' : 'password'"
        :rules="[
          $rules.required,
          $rules.confirmPassword(data.password_confirmation, data.password),
        ]"
        :label="$t('Re-enter the password')"
        @click:append="showPasswordConfirmation = !showPasswordConfirmation"
        outlined
        required
        dense
      ></v-text-field>

      <v-expansion-panels class="mb-6">
        <v-expansion-panel>
          <v-expansion-panel-header expand-icon="mdi-menu-down">
            {{ $t('More Options') }}
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-text-field
              v-model="data.referral"
              :label="$t('Referral Code')"
              outlined
              dense
            ></v-text-field>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>

      <Msg api="register" />

      <div class="buttons">
        <v-btn
          :disabled="!valid"
          color="primary"
          :loading="allAuth.loading"
          @click="RegisterFunction"
          type="submit"
        >
          {{ $t('Register') }}
        </v-btn>
      </div>
    </v-form>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Msg from '../../tools/msgApi.vue'
export default {
  components: {
    Msg,
  },
  head() {
    return { title: this.$i18n.t('Register') }
  },
  data() {
    return {
      vuePhone: {
        phone: '',
        results: [],
        props: {
          clearable: true,
          fetchCountry: true,
          noExample: false,
          translations: {
            countrySelectorLabel: this.$i18n.t('Country code'),
            countrySelectorError: this.$i18n.t('error'),
            phoneNumberLabel: this.$i18n.t('Enter Your Phone'),
            example: this.$i18n.t('Example :'),
          },
        },
      },

      valid: false,
      showPassword: false,
      showPasswordConfirmation: false,
      data: {
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        phone: null,
        code: '',
        referral: '',
      },
      msg: '',
    }
  },
  computed: {
    ...mapGetters(['allAuth']),
  },
  methods: {
    ...mapActions(['registerAction']),
    RegisterFunction(e) {
      e.preventDefault()
      if (this.$refs.form.validate() === false) return false
      else if (this.data.phone === null) {
        alert(this.$i18n.t('Please enter the phone number'))
        return false
      } else this.registerAction(this.data)
    },
  },
}
</script>
