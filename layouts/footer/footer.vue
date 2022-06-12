<template>
<div>
 <!-- <div class="footerSvg">
      <svg
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 1440 126"
        style="enable-background: new 0 0 1440 126"
        xml:space="preserve"
      >
        <path
          class="st0"
          d="M685.6,38.8C418.7-11.1,170.2,9.9,0,30v96h1440V30C1252.7,52.2,1010,99.4,685.6,38.8z"
        ></path>
      </svg>
    </div>   -->
    <footer class="mt-5" >


    <p class="my-2 copy">
      {{ $t('copyright') }}
    </p>
  </footer>
</div>
 
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data: () => ({
    icons: ['mdi-facebook', 'mdi-twitter', 'mdi-linkedin', 'mdi-instagram'],
  }),

  computed: {
    ...mapGetters(['allAuth']),
  },
}
</script>



<style lang="scss" scoped >
.st0 {
  fill: #f6f6f6;
}

footer {
  background: #f6f6f6;
  border-top: 1px solid #efefef;
}
footer .footerSvg {
 
}
.footerSvg svg {
    overflow: hidden;
        vertical-align: middle;
}
footer .footer_info,
footer ul,
footer .social,
footer .copy {
  display: flex;
  justify-content: center;
  width: 100%;
}
.footer_info {
  flex-direction: column;
}
footer .img-logo {
  width: 100%;
}
footer .img-logo a {
  display: block;
  text-align: center;
}
footer .img-logo img {
  max-width: 100px;
}
footer .p1 {
  width: 60%;
  margin: 5px auto;
  text-align: center;
  font-size: 15px !important;
}
footer .links_heading {
  margin-bottom: 15px;
}
footer .links a {
  display: block;
  font-size: 14px;
  margin-top: 5px;
  transition: 0.3s all ease;
  line-height: 30px;
  max-width: max-content;
}
footer .links a:hover {
  color: #30c88c;
}
footer .social ul li .v-icon {
  cursor: pointer;
  transition: 0.3s all ease;
  color: #30c88c;
}
footer .social ul li .v-icon:hover {
  color: #444;
}
@media (max-width: 959px) {
  .links_heading_p {
    text-align: center;
    border: 1px solid #eaeaea;
    padding: 12px;
  }

  footer .links a {
    justify-content: center;
    border-bottom: 1px solid #ffffff;
    width: 100%;
    max-width: 100%;
    padding: 10px;
  }
}
</style>
