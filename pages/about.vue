<template>
  <v-container class="py-10">
      <h2 class="text-center my-10 about-h">{{$t('about-h')}}</h2>
    <v-row>
      <v-col cols="12" md="6">
        <div class="mt-12 about-p">
          <p>
            {{$t('about-p')}}
          </p>
        </div>
      </v-col>
      <v-col cols="12" md="6">
        <div >
          <img class="img-fluid" src="/images/output-onlinepngtools.png" alt="">
        </div>
      </v-col>
    </v-row>

   
  </v-container>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.row{
  margin: 0px;
}
.mesalah-h{
  color: #30c88d;
}
 p{
    font-size: 20px;
  }
  .landing{
    border: 1px solid #30c88d;
    border-radius: 27px;
  }
  .landing-img{
    padding: 20px 0px 0px;
  }
</style>
