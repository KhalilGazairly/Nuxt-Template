import Vue from 'vue'

export default ({app}) => {
   
    // You can use `this.$rules` anywhere in the Nuxt app.
    Vue.prototype.$rules = {
      required: v => !!v || app.i18n.t('This field is required'),
      min: (v) => v.length >= 6 || app.i18n.t('password'),
      password: (v) => v.length >= 6 || app.i18n.t('password'),

      confirmPassword: (v,password) =>v === password || app.i18n.t("The password confirmation does not match."),
      email: (v) => /.+@.+\..+/.test(v) || app.i18n.t('Email must be valid'),
      number: (v) => {let p = /^[0-9]+$/g;return p.test(v) || app.i18n.t('This field must be numbers only.')},
      fileRequired: v => !!v || app.i18n.t('File is required'),
      filesRequired: v => (v && v.length > 0) || app.i18n.t('File is required'),
      date: (v) =>new Date(v) >=new Date(Date.now() - 24*60*60*60) || console.log(v)// app.i18n.t("Date must be valid"),
  
    }
   }