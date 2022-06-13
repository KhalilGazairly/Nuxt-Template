<template>
<div  class="mt-4" v-if="allnotificationList.loading">
        <LoadingP />
      </div>
  <v-form
       v-else>
    <v-text-field
      v-model="allnotificationList.oneNotification.subject"
      :counter="10"
      label="subject"
      required
      outlined
    ></v-text-field>
    <v-textarea
      outlined
      v-model="allnotificationList.oneNotification.content"
      label="content"
      :value="allnotificationList.oneNotification.content"
    ></v-textarea>
    <v-checkbox v-if="!allnotificationList.oneNotification.is_clicked"
      v-model="allnotificationList.oneNotification.is_clicked"
      label="is clicked ?"
    ></v-checkbox>
    <v-checkbox v-else
      v-model="allnotificationList.oneNotification.is_clicked"
      true
      label="is clicked ?"
      
    ></v-checkbox>
    <v-btn
    color="success"
            class="sub"
            @click="changenotification"
    >
      submit
    </v-btn> 
  </v-form>
</template>


<script>
import { mapActions, mapGetters } from 'vuex'
import LoadingP from '../../components/tools/loadingP.vue'
import NoData from '../../components/tools/no-data.vue'
export default {
    name: 'IndexPage',
  data() {
    return {
      datanotification: {
        content: '',
        subject: '',
        is_clicked:  false,
        id:this.$route.params.id
      },
    };
  },
  head() {
    return {
      title: this.$i18n.t('Subcategories'),
      
    }
  },
  components: {
    LoadingP,
    NoData,
  },
  computed: {
    ...mapGetters(['allnotificationList']),
  },
  methods: {
    ...mapActions(['updateNotification','getoneNotification']),
    changenotification(e) {
      e.preventDefault()
      alert(this.datanotification.content)
        console.log(this.datanotification)
      this.updateNotification(this.datanotification)
    },
  },
  mounted() {
    this.getoneNotification(this.$route.params.id)
  },
}
</script>

<style scoped>
.subCat_ {
  border: 1px solid #ededed;
  border-radius: 4px;
  padding: 25px;
}

.subCategorie_ {
  border-radius: 4px;
  box-shadow: 0px 1px 4px 0 rgb(0 0 0 / 5%);
  padding-top: 20px;
}
.subCategorie_:hover {
  transition: 0.5ms;
  box-shadow: 0px 0px 7px 0px rgb(71 71 71 / 26%);
}
.subCategorie_ .v-image {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 1px solid #f2f2f2cc;
  margin: auto;
  margin-bottom: 20px;
}
.subCategorie_ h3 {
  padding: 14px;
  background: #fff;
  border-top: 1px solid #f7f7f7;
}
</style>
