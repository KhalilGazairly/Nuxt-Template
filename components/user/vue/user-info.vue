<template>
  <div class="user_info">
    <div class="user_image">
      <font-awesome-icon icon="user" />
    </div>
    <h2 class="name">{{ allAuth.user.name }}</h2>
    <p class="email">{{ allAuth.user.email }}</p>
    <p class="phone">{{ allAuth.user.phone }}</p>
 
    <div class="user_logout" @click="Logout">
      <v-btn text>{{ $t("Logout") }}</v-btn>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data: () => ({}),
  computed: {
    ...mapGetters(["allAuth"]),
  },
  methods: {
    ...mapActions(["Logout"]),
  },
};
</script>
