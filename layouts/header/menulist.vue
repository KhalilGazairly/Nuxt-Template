<template>
  <v-menu bottom left>
          <template v-slot:activator="{ on, attrs }">
            <div v-bind="attrs" v-on="on" color="primary" icon>
             <font-awesome-icon icon="globe" class="fa" />
              {{ $t("Language") }}
            </div>
          </template>

          <v-list>
            <v-list-item :disabled="$i18n.locale === 'en'">
              <a :href="switchLocalePath('en')">
                <v-list-item-title>English</v-list-item-title>
              </a>
            </v-list-item>

            <v-list-item :disabled="$i18n.locale === 'ar'">
              <a :href="switchLocalePath('ar')">
                <v-list-item-title>العربية</v-list-item-title>
              </a>
            </v-list-item>
          </v-list>
        </v-menu>
 </template>
