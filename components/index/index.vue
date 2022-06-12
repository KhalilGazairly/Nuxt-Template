<template>
<div>
    <div v-if="allAuth.checkAuth">
      <IndexUser />
    </div>
    <div v-else>
      <Head />

     <div class="ServicesHome" >
                 <div class="section_mov">
        <div class="wave wave1"></div>
        <div class="wave wave2"></div>
        <div class="wave wave3"></div>
        <div class="wave wave4"></div>
    </div>
      <div class="container_cc ">
            <Services />
            </div>
      </div>

  
      <MobileApp />
      </div>
    </div>  
</template>

 
<script>
 
import Head from './vue/head.vue'
import Services from '../categories/categories.vue'

import MobileApp from './vue/mobileApp.vue'
import IndexUser from './indexUser.vue'
import { mapGetters } from 'vuex'

export default {
  components: {
    Head,
    Services,
    MobileApp,
    IndexUser,
  },
  head() {
    return {
      title: this.$i18n.t('MR.Musllaha'),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$i18n.t('Home-header') +' '+this.$i18n.t('Home-header2'),
        },
      ],
    }
  },
  computed: {
    ...mapGetters(['allAuth', 'AllCityDeatils']),
  },
}
</script>
<style scoped>
.ServicesHome {
  background: #f8f8f8;
  padding: 40px 0px;
}



.section_mov {
    position: absolute;
    width: 100%;
    height: 124px;
    overflow: hidden;
    margin-top: -137px;
    z-index: 1;
}

.section_mov .wave {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100px;
  background: url(/wave.png);
  background-size: 1000px 100px;
}

.section_mov .wave.wave1 {
  animation: animate 30s linear infinite;
  z-index: 1000;
  opacity: 0.7;
  animation-delay: 0s;
  bottom: 0;
  -webkit-animation: animate 30s linear infinite;
}

@keyframes animate {
  0% {
    background-position-x: 0;
  }
  100% {
    background-position-x: 1000px;
  }
}

.section_mov .wave.wave2 {
   
  animation: animate2 15s linear infinite;
  z-index: 999;
  opacity: 0.8;
  animation-delay: -5s;
  bottom: 10px;
  -webkit-animation: animate2 15s linear infinite;
}

@keyframes animate2 {
  0% {
    background-position-x: 0;
  }
  100% {
    background-position-x: 1000px;
  }
}

.section_mov .wave.wave3 {
  animation: animate3 5s linear infinite;
  z-index: 998;
  opacity: 0.5;
  animation-delay: -3s;
  bottom: 15px;
  -webkit-animation: animate3 5s linear infinite;
}

@keyframes animate3 {
  0% {
    background-position-x: 0;
  }
  100% {
    background-position-x: 1000px;
  }
}

.section_mov .wave.wave4 {
  animation: animate4 15s linear infinite;
  z-index: 997;
  opacity: 0.7;
  animation-delay: -5s;
  bottom: 20px;
  -webkit-animation: animate4 15s linear infinite;
}

@keyframes animate4 {
  0% {
    background-position-x: 0;
  }
  100% {
    background-position-x: 1000px;
  }
}

</style>
