<template>
  <div class="page container_cc">
    <div class="page_cc">
      <h1 v-if="error.statusCode === 404">Page not found</h1>
      <h1 v-else>An error occurred - {{ error.statusCode }}</h1>
      <NuxtLink to="/">Home page</NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  props: ["error"],
  layout: "error", // you can set a custom layout for the error page
};
</script>

 
 