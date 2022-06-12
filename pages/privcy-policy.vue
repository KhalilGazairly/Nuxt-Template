<template>
  <v-container>
    <div class="privacy my-10 pt-8">
      <h1>{{ $t("Privacy Policy") }}</h1>
      <p>
        {{
          $t(
            "This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You."
          )
        }}
      </p>
      <p>
        {{
          $t(
            "We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy."
          )
        }}
      </p>
      <h2>{{ $t("Collecting and Using Your Personal Data") }}</h2>
      <h3>{{ $t("Personal Data") }}</h3>
      <p>
        {{
          $t(
            "While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:"
          )
        }}
      </p>
      <ul>
        <li>{{ $t("E-mail") }}</li>
        <li>{{ $t("Name") }}</li>
        <li>{{ $t("Phone") }}</li>
      </ul>
    </div>
  </v-container>
</template>
<script>
export default {};
</script>
<style scoped>
.privacy p,
.privacy h2 {
  margin: 15px 0px;
}
.privacy p {
  width: 80%;
}

.privacy ul {
  list-style: disc;
  list-style-position: inside;
}
</style>
