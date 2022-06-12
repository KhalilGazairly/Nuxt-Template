<template>
  <v-overlay :value="allUsers.overlay">
    <v-progress-circular indeterminate size="64"></v-progress-circular>
  </v-overlay>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["allUsers"]),
  },
  methods: {
    ...mapActions(["setOverlay"]),
  },
};
</script>