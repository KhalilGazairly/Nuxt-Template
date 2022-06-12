<template>
  <div class="page container_cc user">
    <div class="title_page">
      <h1>{{ $t("My Account") }}</h1>
    </div>

    <v-row no-gutters>
      <v-col cols="12" md="4">
        <UserInfo />
      </v-col>

      <v-col cols="12" md="8">
        <UserItem />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import UserInfo from "./vue/user-info.vue";
import UserItem from "./vue/user-items.vue";
export default {
  head() {
    return {
      title: this.$i18n.t("My Account"),
    };
  },
  data: () => ({
    loading: false,
    data: {
      phone_number: "",
      password: "",
    },
  }),
  components: {
    UserInfo,
    UserItem,
  },
  computed: {
    ...mapGetters(["allAuth"]),
  },
  methods: {
    ...mapActions([""]),
  },
};
</script>

<style>
.user {
  margin-bottom: 20px;
}
.msgerror {
  color: #f00;
  border: 1px solid #f00;
  padding: 10px;
  margin: 10px 0px;
  border-radius: 4px;
}
.msgdone {
  color: #30c88c;
  border: 1px solid #30c88c;
  padding: 10px;
  margin: 10px 0px;
  border-radius: 4px;
}
.form_account {
  max-width: 500px;
}
.form_account_body {
  background: #fcfcfc;
  padding: 10px;
  border: 1px solid #f5f4f4;
  border-radius: 4px;
}
.user_info,
.user_items {
  min-height: 500px;
  height: 100%;
}
.user_items {
  background: #f0f0f038;
  padding: 20px;
  border: 1px solid #ededed;
}

.user_items .v-expansion-panel {
  margin-bottom: 25px;
  padding: 10px;
}

/* info */
.user_info {
  text-align: center;
  padding: 10px;
  border: 1px solid #e9e9e9cc;
  border-radius: 5px;
  position: relative;
}
.user_image {
  margin-top: 20px;
  font-size: 40px;
}
.user_info p {
  padding: 10px;
  border-bottom: 1px solid #f6f6f6;
  margin: 10px 0px;
}
.user_pages a button {
  display: block;
  width: 100%;
  margin-top: 20px;
}
 
.user_logout button {
  margin-top: 30px;
  border-radius: 9px;
   
}
</style>
