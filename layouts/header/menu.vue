<template>
  <div>
    <v-sheet class="overflow-hidden menu_header">
      <v-navigation-drawer
        v-model="allUsers.menuHeader"
        absolute
        top
        temporary
        :right="$i18n.locale === 'ar'"
      >
        <v-list-item>
          <div class="menu_head">
            <v-app-bar-nav-icon
              class="menuBtn"
              @click.stop="onClose()"
            ></v-app-bar-nav-icon>

            <NuxtLink :to="localePath('/')" class="logo">
              <img src="/logo.svg" />
            </NuxtLink>
          </div>
        </v-list-item>

        <v-divider></v-divider>

        <NuxtLink :to="localePath('/')">
          <v-list-item link>
            <v-list-item-icon>
              <font-awesome-icon icon="house" class="fa" />
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>
                <span class="navM_">{{ $t('Home') }}</span></v-list-item-title
              >
            </v-list-item-content>
          </v-list-item>
        </NuxtLink>

        <NuxtLink :to="localePath('/account')" v-if="allAuth.checkAuth">
          <v-list-item link>
            <v-list-item-icon>
              <font-awesome-icon icon="user" class="fa" />
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>
                <span class="navM_">{{
                  $t('My Account')
                }}</span></v-list-item-title
              >
            </v-list-item-content>
          </v-list-item>
        </NuxtLink>

        <NuxtLink :to="localePath('/orders')" v-if="allAuth.checkAuth">
          <v-list-item link>
            <v-list-item-icon>
              <font-awesome-icon icon="briefcase" class="fa" />
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>
                <span class="navM_">{{
                  $t('Order List')
                }}</span></v-list-item-title
              >
            </v-list-item-content>
          </v-list-item>
        </NuxtLink>

        <v-list-item class="menu_lang">
          <v-list-item-icon>
            <font-awesome-icon icon="globe" class="fa" />
          </v-list-item-icon>

          <v-list-item-content>
            {{ $t('language_') }}

            <div class="menu_language_">
              <v-btn text x-small :disabled="this.$i18n.locale === 'ar'">
                <a @click="changeLanguage('ar')">
                  <img width="24px" src="/saflag.png" />
                </a>
              </v-btn>
              <v-btn text x-small :disabled="this.$i18n.locale === 'en'">
                <a @click="changeLanguage('en')">
                  <img width="24px" src="/usflag.png" />
                </a>
              </v-btn>
            </div>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>

        <NuxtLink :to="localePath('/terms-condition')">
          <v-list-item link>
            <v-list-item-icon>
              <font-awesome-icon icon="paper-plane" class="fa" />
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>
                <span class="navM_">{{
                  $t('Terms and conditions')
                }}</span></v-list-item-title
              >
            </v-list-item-content>
          </v-list-item>
        </NuxtLink>

        <NuxtLink :to="localePath('/privcy-policy')">
          <v-list-item link>
            <v-list-item-icon>
              <font-awesome-icon icon="paper-plane" class="fa" />
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>
                <span class="navM_">{{
                  $t('Privacy Policy')
                }}</span></v-list-item-title
              >
            </v-list-item-content>
          </v-list-item>
        </NuxtLink>

        <NuxtLink :to="localePath('/about')">
          <v-list-item link>
            <v-list-item-icon>
              <font-awesome-icon icon="paper-plane" class="fa" />
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>
                <span class="navM_">{{ $t('About') }}</span></v-list-item-title
              >
            </v-list-item-content>
          </v-list-item>
        </NuxtLink>

        <v-divider></v-divider>

        <v-list-item link @click="Logout" v-if="allAuth.checkAuth">
          <v-list-item-icon>
            <font-awesome-icon class="fa" icon="arrow-right-from-bracket" />
          </v-list-item-icon>

          <v-list-item-content>
            {{ $t('Logout') }}
          </v-list-item-content>
        </v-list-item>

        <NuxtLink :to="localePath('/login')">
          <v-list-item link v-if="!allAuth.checkAuth">
            <v-list-item-icon>
              <font-awesome-icon class="fa" icon="arrow-right-from-bracket" />
            </v-list-item-icon>

            <v-list-item-content>
              {{ $t('Login') }}
            </v-list-item-content>
          </v-list-item>
        </NuxtLink>

        <NuxtLink :to="localePath('/register')">
          <v-list-item link v-if="!allAuth.checkAuth">
            <v-list-item-icon>
              <font-awesome-icon class="fa" icon="user-plus" />
            </v-list-item-icon>
            <v-list-item-content>
              {{ $t('Create Account') }}
            </v-list-item-content>
          </v-list-item>
        </NuxtLink>
      </v-navigation-drawer>
    </v-sheet>
    <v-overlay :value="allUsers.menuHeader"></v-overlay>
  </div>
</template>
 <script>
import { mapActions, mapGetters } from 'vuex'
export default {
  data() {
    return {
      drawer: false,
    }
  },
  computed: {
    ...mapGetters(['allUsers', 'allAuth']),
  },
  methods: {
    ...mapActions(['Logout', 'changeLanguage', 'changeMenuHeader']),
    onClose() {
      this.changeMenuHeader(false)
    },
  },
}
</script>

<style scoped>
.menu_head {
  display: flex;
  justify-content:flex-end;
    align-items: center;
  width: 100%;
  padding: 15px;
}
.menu_head a {
  padding: 0px;
  margin: 0px;
  width: 80px;
}
.logo {
  display: flex;
  justify-content: center;
  width: 100px;
  height: 40px;
  margin: 0px;
}
.logo img {
  min-width: 47px;
  height: 40px;
  position: absolute;
}
  
a.nuxt-link-exact-active {
  color: #bf804b;
  padding-bottom: 10px;
}

.menuBtn {
  font-size: 20px;
  line-height: 58px;
  color: #444 !important;
}
.navM_ {
  font-size: 14px;
}
.menu_lang .v-list-item__content {
  display: flex;
  padding: 0px;
  flex-wrap: nowrap;
  font-size: 14px;
}

.menu_language_ {
  display: flex;
  margin-top: 5px;
  flex: 1;
  justify-content: flex-end;
}
.menu_language_ button {
  padding: 0px;
  margin: 0px;
  width: max-content;
}
.menu_language_ div {
  margin: 0px 10px;
}
@media (max-width: 1100px) {
  .menu_head {
    justify-content: flex-start;
    padding: 15px 0px;
  }
}
@media (max-width: 700px) {
  .menu_head button {
    min-width: auto !important;
    padding: 0 3px !important;
  }
}
</style>