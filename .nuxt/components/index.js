export { default as Cart } from '../..\\components\\cart\\Cart.vue'
export { default as History } from '../..\\components\\history\\history.vue'
export { default as Categories } from '../..\\components\\categories\\categories.vue'
export { default as CategoriesSubCategories } from '../..\\components\\categories\\subCategories.vue'
export { default as Index } from '../..\\components\\index\\index.vue'
export { default as IndexUser } from '../..\\components\\index\\indexUser.vue'
export { default as Orders } from '../..\\components\\orders\\orders.vue'
export { default as Login } from '../..\\components\\login\\login.vue'
export { default as Overlays } from '../..\\components\\overlays\\overlays.vue'
export { default as OverlaysSessionExpired } from '../..\\components\\overlays\\Session-expired.vue'
export { default as Register } from '../..\\components\\register\\register.vue'
export { default as Service } from '../..\\components\\service\\service.vue'
export { default as ToolsLoadingP } from '../..\\components\\tools\\loadingP.vue'
export { default as ToolsMsgApi } from '../..\\components\\tools\\msgApi.vue'
export { default as ToolsNoData } from '../..\\components\\tools\\no-data.vue'
export { default as User } from '../..\\components\\user\\user.vue'
export { default as CategoriesVueCatGroups } from '../..\\components\\categories\\vue\\catGroups.vue'
export { default as CategoriesVueHeadCategories } from '../..\\components\\categories\\vue\\headCategories.vue'
export { default as CategoriesVueHeadSubCategories } from '../..\\components\\categories\\vue\\headSubCategories.vue'
export { default as CategoriesVueListCategories } from '../..\\components\\categories\\vue\\listCategories.vue'
export { default as CartVueStep1Cart } from '../..\\components\\cart\\vue\\step1-cart.vue'
export { default as CartVueStep2Checkout } from '../..\\components\\cart\\vue\\step2-checkout.vue'
export { default as IndexVueHead } from '../..\\components\\index\\vue\\head.vue'
export { default as IndexVueMobileApp } from '../..\\components\\index\\vue\\mobileApp.vue'
export { default as IndexVueUserHeadServices } from '../..\\components\\index\\vueUser\\headServices.vue'
export { default as RegisterStepsStep1 } from '../..\\components\\register\\steps\\step1.vue'
export { default as RegisterStepsStep2 } from '../..\\components\\register\\steps\\step2.vue'
export { default as ServiceVueItemService } from '../..\\components\\service\\vue\\item-service.vue'
export { default as UserAddress } from '../..\\components\\user\\vue\\user-address.vue'
export { default as UserInfo } from '../..\\components\\user\\vue\\user-info.vue'
export { default as UserItems } from '../..\\components\\user\\vue\\user-items.vue'
export { default as CartVueStep1ListCart } from '../..\\components\\cart\\vue\\step1\\listCart.vue'
export { default as CartVueStep1TotalCart } from '../..\\components\\cart\\vue\\step1\\totalCart.vue'
export { default as CartVueStep2CheckoutForm } from '../..\\components\\cart\\vue\\step2\\checkoutForm.vue'
export { default as UserVueFormsAddAddress } from '../..\\components\\user\\vue\\forms\\addAddress.vue'
export { default as UserVueFormsChangeInfo } from '../..\\components\\user\\vue\\forms\\changeInfo.vue'
export { default as UserVueFormsChangePassword } from '../..\\components\\user\\vue\\forms\\changePassword.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
