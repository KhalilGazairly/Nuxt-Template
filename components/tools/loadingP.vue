<template>
  <div class="loading">
    <div v-if="type === 1" class="loading1">
      
      <v-progress-linear
        color="primary"
        indeterminate
        rounded
        height="6"
      ></v-progress-linear>
    </div>

    <div v-else class="loadingP">
      <v-progress-circular
        :size="50"
        color="primary"
        indeterminate
      ></v-progress-circular>
    </div>
  </div>
</template>
<script>
export default {
  props: ['type'],
}
</script>
<style>
.loadingP {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 350px;
}
</style>