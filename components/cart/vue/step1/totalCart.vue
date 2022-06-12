<template>
  <div>
    <div class="cartT_">
      <div v-if="allCart.countOfCar > 0">
        <template v-if="!allCart.loading">
          <ul>
            <li>
              <span>{{ $t('Price') }}</span>
              <span
                ><strong>{{ allCart.data.price }}</strong> {{ $t('SAR') }}</span
              >
            </li>

            <li>
              <span>{{ $t('vat') }}</span>
              <span
                ><strong>{{ allCart.data.vat }}</strong> {{ $t('SAR') }}</span
              >
            </li>

            <li>
              <span>{{ $t('Total Price') }}</span>
              <span
                ><strong>{{ allCart.data.total_price }}</strong>
                {{ $t('SAR') }}</span
              >
            </li>
          </ul>

          <v-btn color="#30c88d" class="cart_btn" @click="cartNextStep"  dark>
            {{ $t('Check Out') }}
          </v-btn>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  components: {},

  computed: {
    ...mapGetters(['allCart']),
  },
  methods: {
    ...mapActions(['getCart', 'DeleteCart', 'UpdateCart','cartNextStep']),

    increment(quantity, id) {
      this.cartQuantity.quantity = quantity - 1 + 2
      this.cartQuantity.id = id
      this.UpdateCart(this.cartQuantity)
    },

    decrement(quantity, id) {
      if (quantity <= 0) {
        return
      } else {
        this.cartQuantity.quantity = quantity - 1
        this.cartQuantity.id = id
        this.UpdateCart(this.cartQuantity)
      }
    },

    Delete(id) {
      this.DeleteCart(id)
    },
  },
  mounted() {},
}
</script>
 
 <style>
.cartT_ {
  background: #f6f6f6;
  padding: 20px;
  min-height: 200px;
  border-radius: 4px;
}
.cart_btn {
  width: 100%;
  margin-top: 20px;
}
.cartT_ ul li {
  list-style-type: square;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #fff;
  padding: 10px;
}
</style>