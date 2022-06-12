<template>
  <div>
    <div class="cart_">
      <div v-if="allCart.countOfCar > 0">
        <template v-if="!allCart.loading">
          <v-simple-table :loading="allCart.loadingOptions">
            <template v-slot:default>
              <thead>
                <tr>
                  <th>Services</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(SingleCart, j) in allCart.data.services" :key="j">
                  <td>
                    <div class="cart_product">
                      <img class="cart_image" :src="SingleCart.image" />
                      <h4>{{ SingleCart.title }}</h4>
                    </div>
                  </td>

                  <td>
                    <div class="minWidth60">{{ SingleCart.price }}</div>
                  </td>
                  <td>
                    <div class="cart_quantity">
                      <v-btn
                        text
                        :disabled="SingleCart.quantity < 2"
                        fab
                        :rounded="false"
                        small
                        class="counter_btn"
                        :loading="
                          SingleCart.id === allCart.loadingOptionsI &&
                          allCart.loadingOptions &&
                          allCart.loadingOptionsT === 1
                        "
                        @click="
                          decrement(
                            SingleCart.quantity,
                            SingleCart.id,
                            (type = 1)
                          )
                        "
                      >
                        <v-icon>mdi-minus</v-icon>
                      </v-btn>

                      <span class="counter">
                        {{ SingleCart.quantity }}
                      </span>
                      <v-btn
                        class="counter_btn"
                        text
                        fab
                        :loading="
                          SingleCart.id === allCart.loadingOptionsI &&
                          allCart.loadingOptions &&
                          allCart.loadingOptionsT === 2
                        "
                        @click="
                          increment(
                            SingleCart.quantity,
                            SingleCart.id,
                            (type = 2)
                          )
                        "
                        small
                      >
                        <v-icon>mdi-plus</v-icon>
                      </v-btn>
                    </div>
                  </td>
                  <td>
                    <div class="minWidth60">
                      {{
                        SingleCart.quantity *
                        SingleCart.price.replace(/\D/g, "")
                      }}
                     
                    </div>
                  </td>

                  <td>
                    <div class="cart_delete">
                      <v-btn
                        fab
                        dark
                        small
                        :rounded="false"
                        :loading="
                          SingleCart.id === allCart.loadingOptionsI &&
                          allCart.loadingOptions &&
                          allCart.loadingOptionsT === 3
                        "
                        @click="Delete(SingleCart.id)"
                        color="red"
                        text
                      >
                        <v-icon>mdi-delete</v-icon>
                      </v-btn>
                    </div>
                  </td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </template>
      </div>
      
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  components: {},
  data() {
    return {
      counter: null,
      cartQuantity: {
        quantity: 0,
        id: '',
        type: 1,
      },
      timeout: 2000,
      snackbar: false,
      snackbarError: false,
    }
  },

  computed: {
    ...mapGetters(['allCart']),
  },
  methods: {
    ...mapActions(['getCart', 'DeleteCart', 'UpdateCart']),

    increment(quantity, id, type) {
      this.cartQuantity.quantity = quantity - 1 + 2
      this.cartQuantity.id = id
      this.cartQuantity.type = type
      this.UpdateCart(this.cartQuantity)
    },

    decrement(quantity, id, type) {
      if (quantity <= 0) {
        return
      } else {
        this.cartQuantity.quantity = quantity - 1
        this.cartQuantity.id = id
        this.cartQuantity.type = type

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

<style scoped>
.cart_delete {
  display: flex;
  align-content: center;
}
.cart_quantity {
  min-width: 156px;
}
.minWidth60 {
  min-width: 60px;
}
.cart_ {
  border: 1px solid #f6f6f6;
  min-height: 260px;
  border-radius: 4px;
}
.tr-body td:lang(ar) {
  text-align: end !important;
}

.cart_product {
  display: flex;
  align-items: center;
  font-size: 14px;
}
.cart_product img {
  width: 60px;
  height: 60px;
}
.cart_product h4 {
  padding: 0px 10px;
}
.price {
  background-color: #ff0000cc;
  color: white;
  font-weight: 900;
  border-radius: 10px;
  padding: 2px 5px 2px 5px;
}
.counter {
  border: 1px solid #ccc;
  padding: 6px 16px;
  border-radius: 5px;
}
.counter_btn {
  padding: 5px;
  width: max-content;
  margin: 10px;
}
.v-btn--round {
  border-radius: 5px;
}
.checkoutBtn {
  text-align: end;
}
.v-data-table > .v-data-table__wrapper tbody tr td:last-child {
  text-align: end;
}
.loadingReg {
  margin: auto;
}
</style>
 