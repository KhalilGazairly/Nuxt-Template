<template>
  <header class="header container_cc headerFixed">
    
    <div class="header_p">
      <v-app-bar-nav-icon
        class="menuBtn"
        @click.stop="showDrawer()"
      ></v-app-bar-nav-icon>


      <div class="search">
        <!-- <input type="text" placeholder="Search For Services" /> -->
      </div>
      <nav class="menu">
        <ul>
          <li class="box_op_header">
            <NuxtLink :to="localePath('/')" class="logo">
              <img src="/logo.svg" />
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
import Menu from './menu.vue'
import { mapActions, mapGetters } from 'vuex'
export default {
  data: () => ({
    city: null,
    scrolled: false,
    timeout: 2000,
    snackbar: false,
  }),

  mounted() {
    this.setCity()
    this.getCart()
  },

  methods: {
    ...mapActions([
      'getCart',
      'Logout',
      'getCity',
      'changeLanguage',
      'changeMenuHeader',
    ]),

    setCity() {
      this.city = this.$cookies.get('city_id')
    },

    handleClick(index) {
      this.items[index].click.call(this)
    },

    showDrawer() {
      this.changeMenuHeader(true)
    },

 
  },
  computed: {
    ...mapGetters(['allAuth', 'allCity', 'allCart']),
  },
  components: {
    Menu,
  },
}
</script>

<style scoped>
.header {
  box-shadow: 0px 1px 4px 0 rgb(0 0 0 / 5%);
  border: 1px solid #efefef;
  z-index: 99;
  background: #fff;
  width: 100%;
  position: fixed;
}
.headerFixed {
  position: fixed;
  background: #fff;
  width: 100%;
  top: 0px;
}
.headerFixed .header_p {
  height: 65px;
  transition: 1s;
}
.stock-span {
  position: relative;
  bottom: 20px;
  left: 1px;
  background-color: aquamarine;
  border-radius: 50%;
  padding: 5px;
}
.header_p {
  display: flex;
  align-items: center;
  height: 80px;
}

.header_p li a.nuxt-link-exact-active {
  color: #30c88c;
  padding-bottom: 10px;
}
.menu ul li[data-v-f21a83aa] {
  text-align: center;
  line-height: normal;
}
a.nuxt-link-exact-active.login_ {
  border: 1px solid #30c88c;
}
.login_ {
  border: 1px solid #ccc;
  padding: 7px 30px;
  border-radius: 5px;
}

.signup_ {
  border: 1px solid #ccc;
  padding: 7px 30px;
  border-radius: 5px;
}
.menu {
  display: flex;
  justify-content: flex-end;
  flex: 1;
}

.menu ul {
  /* font-size: 16px; */
  display: flex;
  font-size: 14px;
  align-items: center;
}
.menu ul li:lang(en) {
  margin-left: 3em;
}

.menu ul li:lang(ar) {
  margin-right: 3em;
}

.menu ul li a:hover {
  color: #30c88c;
}

.logo img {
  min-width: 47px;
  height: 40px;
  align-items: center;
  display: flex;
}
.search {
  display: flex;
  align-items: center;
}
.search:lang(en) {
  margin-left: 30px;
}
.search:lang(ar) {
  margin-right: 30px;
}
.select_head {
  margin: 0px 3px;
}

.search input {
  border: 1px solid #9e9e9e;
  padding: 9px 20px;
  border-radius: 8px;
  width: 200px;
  margin: 0px;
}

.select_head {
  height: 40px;
  border-radius: 6px;
}
.mob_nav {
  display: none;
  font-size: 20px;
  color: #30c88c;
}
.theme--light.v-list-item--disabled {
  color: rgba(0, 0, 0, 0.38);
  background: #30c88c;
  color: #fff;
}

.select_head[data-v-f21a83aa] {
  width: 200px;
}
.v-list-item .v-list-item__title,
.v-list-item .v-list-item__subtitle {
  text-align: center;
}

.countCart {
  color: #fff;
  position: absolute;
  margin-top: -17px;
  background: #30c88c;
  padding: 4px;
  border-radius: 50%;
  height: 24px;
  width: 24px;
  border: 2px solid #fff;
  font-size: 12px;
}
.countCart:lang(ar) {
  margin-right: -4px;
}
.countCart:lang(en) {
  margin-right: auto;
  margin-right: auto;
  margin-left: 9px;
}
@media (max-width: 768px) {
  .navM_{
    display: none;
  }
  .search {
    display: none;
  }
  .mob_nav {
    display: block;
  }
  .menu ul {
    
  }
}
</style>
