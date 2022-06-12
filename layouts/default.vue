<template>
  <div class="app">
    <v-app>
      <Header />
      <div class="pages">
        <Nuxt />
      </div>
      <Footer />
      <Menu />
      <Overlays />
      <SessionExpired />
    </v-app>
  </div>
</template>
<script>
import Header from './header/header.vue'
import Footer from './footer/footer.vue'
import Menu from './header/menu.vue'
import  Overlays from '../components/overlays/overlays.vue'
import SessionExpired from '../components/overlays/Session-expired.vue'
import { mapActions } from 'vuex'
import { uuid } from 'vue-uuid'

export default {
  head() {
    return this.$nuxtI18nHead({ addSeoAttributes: true })
  },
  components: {
    Header,
    Footer,
    Menu,
    SessionExpired,
    Overlays
  },
  async beforeCreate() {
    this.$vuetify.rtl = this.$i18n.locale === 'ar' ? true : false
  },

  async mounted() {
    await this.setApi(
      uuid.v5(navigator.userAgent, '65f9af5d-f23f-4065-ac85-da725569fdcd')
    )
  },
  methods: {
    ...mapActions(['setApi']),
  },
}
</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Almarai:wght@300;400&display=swap');

.app:lang(ar) {
  direction: rtl;
}
* {
  margin: 0px;
  padding: 0px;
}
html {
  scroll-behavior: smooth;
}
body {
  overflow: hidden;
}

body,
.v-application {
  font-size: 14px;
  font-family: 'Almarai', sans-serif;
  color: #444;
}
ul {
  list-style-type: none;
}
ul,
p {
  margin: 0px;
  padding: 0px;
  margin-bottom: 0px;
}
a,
.v-application a {
  color: #444;
  text-decoration: none;
}
img {
  max-width: 100%;
}
.container_cc,
.container {
  padding: 0px 100px;
}

/* body of pages */
.pages {
  margin-top: 67px;
  margin-bottom: 20px;
}
.page {
  margin-top: 25px;
  min-height: calc(100vh - 190px);
}
.page_h {
  min-height: calc(100vh - 190px);
}

.title_page {
  padding: 20px 0px;
  font-size: 18px;
}

.span_color {
  color: #30c88d;
}

.flex {
  display: flex;
  align-items: center;
}

/* vuetify */

.v-overlay {
    z-index: 100;
}
.v-navigation-drawer--temporary {
    z-index: 1001;
}
.container {
  width: 100%;
  max-width: 100%;
}

.v-image__image--cover {
  background-size: 100% 100%;
}
.v-label {
  font-size: 14px;
}
.v-application p,
p {
  margin-bottom: 0px;
  font-size: inherit;
}
.v-application .success {
  background-color: #30c88d !important;
  border-color: #30c88d !important;
}
.v-application .green--text.text--darken-1 {
  color: #2c4b4c !important;
  caret-color: #43a047 !important;
  border: 1px solid #2c4b4c;
}

.v-card__actions {
  margin-top: 30px;
}
.v-application ul,
.v-application ol {
  padding: 0px;
}
.v-application .text-h5 {
  font-family: unset !important;
}
.v-application .indigo {
  background-color: #2b4a4b !important;
}
.v-card {
  padding: 10px 0px 20px 0px;
}

.v-navigation-drawer {
  position: fixed;
}
.v-otp-input {
  direction: ltr;
}
.v-stepper__label {
  font-size: 12px;
}
/* plugins */
.toast:lang(ar){
  direction: rtl;
}
.toast-close-button{
  display: none;
}
.toast-icon{
      margin-top: -8px;
}
.toast-message {
    margin-top: 6px;
    color: #ccc;
}
.country-selector__input,.input-tel,.input-tel__label{
      font-family: 'Almarai'!important;
}
.country-selector__input:lang(ar) {
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top-left-radius: 0 !important;
  border-bottom-left-radius: 0 !important;
}
input.input-tel__input:lang(ar) {
  direction: ltr;
  border-top-left-radius: 4px !important;
  border-bottom-left-radius: 4px !important;
  border-top-right-radius: 0px !important;
  border-bottom-right-radius: 0px !important;
}

.input-tel__label:lang(ar) {
  right: 13px;
  left: auto;
}
.input-tel__clear:lang(ar) {
  left: 8px!important;
  right: auto!important;
}
.input-tel input,
.country-selector__label {
  font-family: 'Almarai', sans-serif;
}
.country-selector__label,
.input-tel input:lang(ar) {
  text-align: right;
}
/* fa */
.fa {
  font-size: 15px;
  margin: 0px 5px;
}
@media (max-width: 1100px) {
  .container_cc {
    padding: 0px 50px;
  }
}

@media (max-width: 768px) {
  .container_cc {
    padding: 0px 20px;
  }
}
</style>
