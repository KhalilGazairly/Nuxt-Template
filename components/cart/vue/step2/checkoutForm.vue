<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-row>
      <v-col cols="12" md="8">
        <div class="Payment">
          <div class="payment_address">
            <div class="payment_address_n">
              <p>{{ $t('Select Your Address') }}</p>
              <UserAddress />
            </div>

            <div class="payment_address_">
              <div v-if="AllAddresses.loading">
                <Loading :type="1" />
              </div>
              <v-radio-group v-else v-model="dataForm.address" :rules="[$rules.required]">
                <v-radio
                  v-for="(address, i) in AllAddresses.data.data"
                  :key="i"
                  :label="address.address_line"
                  :value="address.id"
                  v-model="address.id"
                >
                  <template v-slot:label>
                    <div class="cart_address">
                      <div class="cart_address_i">
                        <font-awesome-icon icon="location-dot" />
                        <p :title="$t('The City')">
                          {{ address.city.name }}
                        </p>
                        ,
                        <p :title="$t('Address')">
                          {{ address.address_line }}
                        </p>
                        ,
                        <p :title="$t('Area')">{{ address.area }}</p>
                        ,
                        <p :title="$t('Street')">{{ address.street }}</p>
                        ,
                        <p :title="$t('Building No')">
                          {{ address.building_no }}
                        </p>
                        ,
                        <p :title="$t('Apartment No')">
                          {{ address.apartment_no }}
                        </p>
                      </div>
                    </div>
                  </template>
                </v-radio>
              </v-radio-group>
            </div>
          </div>

          <div class="payment_items_ mt-4">
            <p>{{ $t('Select Day') }}</p>

            <div class="payment_item_">
              <v-menu
                ref="menu1"
                v-model="menu1"
                :close-on-content-click="false"
                transition="scale-transition"
                offset-y
                max-width="290px"
                min-width="auto"
                outlined
                dense
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="dateFormatted"
                    :label="$t('Date')"
                    persistent-hint
                    prepend-icon="mdi-calendar"
                    v-bind="attrs"
                    v-on="on"
                    :rules="[$rules.required, $rules.date]"
                  ></v-text-field>
                </template>
                <v-date-picker
                  v-model="dataForm.date"
                  :locale="$i18n.locale"
                  :rules="[$rules.required, $rules.date]"
                  no-title
                  @change="changeDate"
                  @input="menu1 = false"
                ></v-date-picker>
              </v-menu>
            </div>
          </div>

          <template v-if="allCkeckout.loadingTime">
             <Loading :type="1" />
          </template>

          <template v-else>
            <v-col cols="12" lg="6" v-if="allCkeckout.time">
              <p>{{ $t('Select Your Time') }}</p>
            </v-col>
            <v-col cols="12" lg="6">
              <p class="red--text" v-if="allCkeckout.DateMessage">
                {{ $t('Please Pick the Right Day') }}
              </p>
              <v-radio-group v-model="timePicked" :rules="[$rules.required]">
                <v-radio
                  v-for="(time, i) in allCkeckout.time.data"
                  :key="i"
                  :label="time"
                  :value="time"
                ></v-radio>
              </v-radio-group>
            </v-col>
          </template>

          <div class="payment_items2_">
            <p>{{ $t('Select Your Payment Method') }}</p>

            <div class="payment_item_">
              <v-select
                v-model="dataForm.payment"
                :items="items"
                item-text="state"
                item-value="abbr"
                :label="$t('Select Your Payment Method')"
                outlined
                :rules="[$rules.required]"
                required
                dense
              ></v-select>
            </div>
          </div>
        </div>
      </v-col>

      <v-col cols="12" md="4">
        <div class="cartT_">
          <div v-if="allCart.countOfCar > 0">
            <template v-if="!allCart.loading">
              <ul>
                <li>
                  <span>{{ $t('Price') }}</span>
                  <span
                    ><strong>{{ allCart.data.price }}</strong>
                    {{ $t('SAR') }}</span
                  >
                </li>

                <li>
                  <span>{{ $t('vat') }}</span>
                  <span
                    ><strong>{{ allCart.data.vat }}</strong>
                    {{ $t('SAR') }}</span
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

              <v-btn
                color="#30c88d"
                class="cart_btn"
                @click="onSubmitOrder"
                dark
                :loading="allCkeckout.loading"
                type="submit"
              >
                {{ $t('Order It Now') }}
              </v-btn>
            </template>
          </div>
        </div>
        <Msg api="checkout" />
      </v-col>
    </v-row>
  </v-form>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import UserAddress from '../../../user/vue/forms/addAddress.vue'
import Msg from '../../../tools/msgApi.vue'
import Loading from '../../../tools/loadingP.vue'
export default {
  data() {
    return {
      valid: false,
      select: { state: 'cash on' },
      items: [{ state: 'cash' }],
      dialog: false,
      timePicked: '',
      dateFormatted:(new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
      dataForm: {
        address: '',

        date: new Date(
          Date.now() - new Date().getTimezoneOffset() * 60000
        ).toISOString(),

        time: '',
        payment: '',
      },
      attrs: {
        class: 'mb-6',
        boilerplate: true,
        elevation: 2,
      },

      menu1: false,
      dateSended: '',
    }
  },
  methods: {
    ...mapActions(['getAddress', 'getListOfTime', 'CheckOut']),

    onSubmitOrder(e) {
      e.preventDefault()
      if (this.$refs.form.validate() === false) return false
      this.dataForm.time = this.timePicked
      this.CheckOut(this.dataForm)
    },

    changeDate(e) {
      this.getListOfTime(e)
    },

 
  },
  components: {
    UserAddress,
    Msg,
    Loading,
  },
  computed: {
    ...mapGetters(['AllAddresses', 'allCart', 'allCkeckout']),
  },

  async mounted() {
    this.getAddress()
    this.getListOfTime(new Date().toISOString().slice(0, 10))
  },
}
</script>
 
<style scoped>
.v-text-field__details {
  position: absolute;
}
.payment_address {
  border-bottom: 1px solid #f7f7f7;
}
.payment_address_n {
  display: flex;
  justify-content: space-between;
  padding-top: 20px;
}
.cart_address_i svg {
  margin: 0px 5px;
}
.cart_address_i {
  padding: 6px;
  display: flex;
}
.cart_address:lang(ar) {
  text-align: right;
}
.cart_address {
  background: #f6f6f6;
  padding: 10px;
  width: 100%;
  border-radius: 24px;
  border: 1px solid #f3f3f3;
}
.payment_item_ {
  width: 50%;
}
.payment_items_,
.payment_items2_ {
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #f7f7f7;
  align-items: center;
}
.payment_items2_ {
  border-top: 1px solid #f7f7f7;
  border-bottom: none;
  padding-top: 20px;
}
.Payment {
  border: 1px solid #f6f6f6;
  border-radius: 4px;
  padding: 20px;
}
</style>
