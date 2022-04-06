<template>
  <v-app >
    <app-header></app-header>
    <app-footer></app-footer>
  </v-app>
</template>

<script>
import AppFooter from './AppFooter/AppFooter.vue'
import AppHeader from './AppHeader/AppHeader.vue'
export default {
  components: { AppFooter, AppHeader },
  name: 'DefaultLayout',
}
</script>
