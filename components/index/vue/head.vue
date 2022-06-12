<template>
<div>
  <section class="head bg text-center page">
    <h2>{{ $t('service-on') }}</h2>
    <p>
      {{ $t('Home-header') }}
      <br>
      {{ $t('Home-header2') }}
    </p>

    <div class="groups_but">
      <NuxtLink :to="localePath('/login')">
        <v-btn class="ma-2" outlined>
          {{ $t('Login') }}
        </v-btn>
      </NuxtLink>

      <NuxtLink :to="localePath('/register')">
        <v-btn class="ma-2" outlined>
          {{ $t('Create Account') }}
        </v-btn>
      </NuxtLink>
    </div>

    <a class="but_down" href="#serv"
      ><font-awesome-icon icon="angle-down" class="fa"
    /></a>

  </section>
            <div id="serv"></div>

</div>
</template>
<style scoped>
#serv{
  margin-top: -100px;
  position:absolute;
}
.head {
  min-height: calc(100vh - 120px);
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
}

.bg {
  /* background-image: url(https://sp-ao.shortpixel.ai/client/q_glossy,ret_img,w_2880,h_1368/https://motorarbitrage.com.au/wp-content/uploads/hero-image.jpg);   */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.head h2 {
  margin-top: -200px;
  padding-bottom: 20px;
  color: #444;
  font-weight: 900;
  font-size: 3.5em;
}
.head p {
  text-align: center;
}
.groups_but {
  margin-top: 30px;
}

.but_down {
  position: absolute;
  bottom: 70px;
  background: #cccccc24;
  padding: 20px;
  border-radius: 50%;
  z-index: 2;
}
.but_down svg {
  font-size: 20px;
}

@media (max-width: 570px) {
  .head h2 {
   font-size: 10vw;
  }
  .head p{
    padding: 20px;
  }
}
</style>
