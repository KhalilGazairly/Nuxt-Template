<template>
  <div class="user_items">
    <Complete />
    <v-expansion-panels>
      <v-expansion-panel>
        <v-expansion-panel-header>
          <template>
            <v-row no-gutters>
              {{ $t("General Information") }}
            </v-row>
          </template>
        </v-expansion-panel-header>

        <v-expansion-panel-content>
          <ChangeInfo />
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header>
          <template>
            <v-row no-gutters> {{ $t("Change Password") }} </v-row>
          </template>
        </v-expansion-panel-header>

        <v-expansion-panel-content>
          <ChangePassword />
        </v-expansion-panel-content>
      </v-expansion-panel>

            <v-expansion-panel>
        <v-expansion-panel-header>
          <template>
            <v-row no-gutters> {{ $t("Address") }} </v-row>
          </template>
        </v-expansion-panel-header>

        <v-expansion-panel-content>
          <Address />
        </v-expansion-panel-content>
      </v-expansion-panel>
   
 
    </v-expansion-panels>
  </div>
</template>

<script>
import ChangePassword from "./forms/changePassword.vue";
import ChangeInfo from "./forms/changeInfo.vue";
import Address from '../vue/user-address.vue'
export default {
  data: () => ({
    date: null,
    trip: {
      name: "",
      location: null,
      start: null,
      end: null,
    },
  }),
  components: {
    ChangePassword,
    ChangeInfo,
Address
 },
};
</script>
