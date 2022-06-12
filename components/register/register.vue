<template>
  <div class="container_cc page">
    <div class="register">
      <h1>{{ $t('Register') }}</h1>
      <div v-if="allAuth.step === 1">
        <Step1 />
      </div>
      <div v-else>
        <Step2 />
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import Step1 from './steps/step1.vue'
import Step2 from './steps/step2.vue'

export default {
  head() {
    return {
      title: this.$i18n.t('Register'),
    }
  },
  components: {
    Step1,
    Step2,
  },
  computed: {
    ...mapGetters(['allAuth']),
  },
}
</script>
<style>
.register {
  margin: 30px 0px;
}
.register h1 {
  margin-bottom: 30px;
  text-align: center;
}
.form_register {
  margin: 15px auto;
  max-width: 500px;
  width: 100%;
  border: 1px solid #ccc;
  padding: 15px;
  border-radius: 4px;
}
.form_register h3 {
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}
.form_register .select-country-container {
  z-index: 10;
}
.form_register .buttons {
  display: flex;
  justify-content: flex-end;
  padding: 15px 5px;
}
</style>
