<template>
  <div class="form_account">
    <h3 class="mb-5">
      {{ $t('Your General Information') }}
    </h3>

    <div class="form">
      <v-form
        ref="form"
        @submit="changeInfoFunction"
        v-model="valid"
        lazy-validation
      >
        <div class="form_account_body">
          <v-text-field
            v-model="data.name"
            :counter="200"
            :label="$t('Name')"
            :rules="[$rules.required]"
            required
            outlined
            dense
          ></v-text-field>

          <v-text-field
            v-model="data.email"
            :rules="[$rules.required, $rules.email]"
            :label="$t('E-mail')"
            required
            outlined
            dense
          ></v-text-field>

          <div
            :class="[allUsers.msgInfoDone ? 'msgdone' : 'msgerror']"
            v-if="allUsers.msgInfo != null"
          >
            {{ allUsers.msgInfo }}
          </div>

          <Msg api="updateProfile" />

          <v-btn
            :disabled="!valid"
            color="success"
            class="sub"
            @click="changeInfoFunction"
            :loading="allUsers.loading"
          >
            {{ $t('Save') }}
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
  components:{
    Msg
  },
  data: () => ({
    valid: false,
    data: {
      name: '',
      email: '',
    },
    msg: '',
    msgStatus: true,
  }),
  computed: {
    ...mapGetters(['allAuth', 'allUsers']),
  },
  mounted() {
    this.complateData()
  },
  methods: {
    complateData() {
      this.data.name = this.allAuth.user.name
      this.data.email = this.allAuth.user.email
    },
    ...mapActions(['UpdateUserInfo']),

    changeInfoFunction(e) {
      e.preventDefault()
      if (this.$refs.form.validate() === false) return false
      this.UpdateUserInfo(this.data)
    },
  },
}
</script>
