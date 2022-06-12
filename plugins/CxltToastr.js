import Vue from 'vue'
import CxltToastr from 'cxlt-vue2-toastr'
import 'cxlt-vue2-toastr/dist/css/cxlt-vue2-toastr.css'

export default (context, inject) => {
    inject('toast', Vue.prototype.$toast)
}
Vue.use(CxltToastr)
