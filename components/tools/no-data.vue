<template>
  <div class="nodata_">
    <div class="noData" v-if="type === 1">
      <div class="noDataImg"></div>
      <p>{{ $t(data) }}</p>
    </div>

    <div class="noData" v-else>
      <div class="noDataImg"></div>
      <p>{{ $t(data) }}</p>
    </div>
  </div>
</template>
<script>
export default {
  props: ['data','type'],
}
</script>
<style scoped>
.nodata_{
  width: 100%;
}
.noData {
  padding: 20px;
  text-align: center;
  margin: auto;
}
.noDataImg {
  background-image: url('/noData.png');
  height: 200px;
  width: 200px;
  margin: auto;
  margin-top: 100px;
  background-size: 100% 100%;
  margin-bottom: 25px;
}
.noData p {
  font-weight: bold;
}
</style>