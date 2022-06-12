<template>
  <div class="page container_cc">
    <h1 class="title_page">
      {{ $t('Order List') }}
    </h1>
    <div class="text-center" v-if="AllListOforder.loading">
      <Loading />
    </div>
    <div v-else>
      <div>
        <div
          v-if="
            AllListOforder.data.length <= 0 && AllListOforder.loading == false
          "
        >
          <h2 class="text-center">
            <div class="orders_count0 page">
              <font-awesome-icon icon="truck" class="fa" />
              <p>{{ $t('You do not have any prior requests') }}</p>
              <NuxtLink :to="localePath('/')">
                <v-btn>
                  {{ $t('Go To Home page') }}
                </v-btn>
              </NuxtLink>
            </div>
          </h2>
        </div>
        <div v-else-if="AllListOforder.data.length > 0">
          <template>
            <h2 class="text-center my-4">{{ $t('All orders') }}</h2>

            <v-card>
              <v-list two-line>
                <template>
                  <div v-for="(order, i) in AllListOforder.data" :key="i">
                    <v-list-item>
                      <template>
                        <v-list-item-content>
                          <v-list-item-title
                            v-text="order.category.name"
                          ></v-list-item-title>
                          <v-list-item-subtitle
                            v-for="(service, i) in order.services.data"
                            :key="i"
                            class="text--primary"
                          >
                            {{ service.service.title }} ,
                          </v-list-item-subtitle>

                          <v-list-item-subtitle></v-list-item-subtitle>
                        </v-list-item-content>

                        <v-list-item-action>
                          <v-list-item-action-text
                            >{{ order.date + ' ' + order.time }}
                            <br />
                            <span v-if="order.status == 0" class="pending">{{
                              $t('pending')
                            }}</span>
                            <span
                              v-else-if="order.status == 1"
                              class="accepted"
                              >{{ $t('accepted') }}</span
                            >
                            <span
                              v-else-if="order.status == 2"
                              class="on-going"
                              >{{ $t('on-going') }}</span
                            >
                            <span
                              v-else-if="order.status == 3"
                              class="in-progress"
                              >{{ $t('in-progress') }}</span
                            >
                            <span
                              v-else-if="order.status == 4"
                              class="reschedule"
                              >{{ $t('Reschedule from Partner') }}</span
                            >
                            <span
                              v-else-if="order.status == 5"
                              class="canceled"
                              >{{ $t('Canceled') }}</span
                            >
                            <span
                              v-else-if="order.status == 6"
                              class="completed"
                              >{{ $t('Completed') }}</span
                            >
                          </v-list-item-action-text>
                          <v-list-item>
                            <NuxtLink
                              v-if="order.status == 1 || order.status == 4"
                              :to="
                                localePath('/reschedule?orderid=' + order.id)
                              "
                              class="
                                v-btn v-btn--is-elevated v-btn--has-bg
                                theme--light
                                v-size--default
                                primary
                              "
                              color="primary"
                            >
                              {{ $t('reschedule Order') }}
                            </NuxtLink>
                            <v-btn
                              color="error"
                              @click="CanceledOrder(order.id)"
                            >
                              {{ $t('Cancele') }}
                            </v-btn>
                          </v-list-item>
                        </v-list-item-action>
                      </template>
                    </v-list-item>
                  </div>
                </template>
              </v-list>
            </v-card>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Loading from '../tools/loadingP.vue'
export default {
   head() {
    return {
      title: this.$i18n.t('Order List'),
    }
  },
  components: {
    Loading,
  },
  data() {
    return {
      counter: null,
      cartQuantity: {
        quantity: 0,
        id: '',
      },
      timeout: 2000,
      snackbar: false,
      snackbarError: false,
    }
  },

  computed: {
    ...mapGetters(['AllListOforder']),
  },
  methods: {
    ...mapActions(['ListOfOrder', 'DeleteCart', 'UpdateCart', 'OrderCanceled']),

    decrement(quantity, id) {
      if (quantity <= 0) {
        return
      } else {
        this.cartQuantity.quantity = quantity - 1
        this.cartQuantity.id = id
        this.UpdateCart(this.cartQuantity)
        if ((this.$store.state.carts.status = 200)) {
          setTimeout(() => (this.snackbar = true))
        }
      }
    },

    CanceledOrder(id) {
      this.OrderCanceled(id)
    },
  },
  mounted() {

    this.ListOfOrder()
  },
}
</script>

<style >
.orders_count0 {
  border: 1px solid #ededed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.orders_count0 svg {
  font-size: 40px;
  margin-bottom: 20px;
}
.orders_count0 button {
  margin-top: 30px;
}

.v-btn {
  margin: 0 0.5rem;
}
.pending {
  color: rgb(255, 187, 0);
}
.accepted {
  color: rgb(13, 224, 48);
}
.on-going {
  color: rgb(1, 72, 94);
}
.reschedule {
  color: rgb(59, 59, 2);
}
.in-progress {
  color: rgb(214, 25, 57);
}
.canceled {
  color: yellow;
}
.completed {
  color: rgb(1, 107, 7);
}
</style>
