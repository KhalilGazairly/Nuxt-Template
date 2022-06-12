<template>
  <v-container class="py-10">
    <v-row>
      <v-col md="12">
        <v-card>
          <v-container>
            <v-row>
              <v-col cols="6" lg="6">
                <h3>Select Day</h3>
              </v-col>

              <v-col cols="12" lg="6">
                <v-menu
                  ref="menu1"
                  v-model="menu1"
                  :close-on-content-click="false"
                  transition="scale-transition"
                  offset-y
                  max-width="290px"
                  min-width="auto"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="dateFormatted"
                      label="Date"
                      persistent-hint
                      prepend-icon="mdi-calendar"
                      v-bind="attrs"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    v-model="date"
                    no-title
                    @input="menu1 = false"
                  ></v-date-picker>
                </v-menu>
              </v-col>

              <template v-if="this.$store.state.ckeckoutModule.loading">
                <v-col cols="12" lg="6">
                  <h3>Select Your Time</h3>
                </v-col>
                <v-col cols="12" lg="6">
                  <p class="red--text">Please Pick the Right Day</p>
                </v-col>
              </template>

              <template v-else>
                <v-col cols="12" lg="6" v-if="AllListOfTime.time">
                  <h3>Select Your Time</h3>
                </v-col>
                <v-col cols="12" lg="6">
                  <p
                    class="red--text"
                    v-if="this.$store.state.ckeckoutModule.DateMessage"
                  >
                    Please Pick the Right Day
                  </p>
                  <v-radio-group v-model="timePicked">
                    <v-radio
                      v-for="(time, i) in AllListOfTime.time.data"
                      :key="i"
                      :label="time"
                      :value="time"
                    ></v-radio>
                  </v-radio-group>
                </v-col>
              </template>
              <div
                class="mx-auto text-center"
                max-width="344"
                active-class=""
              >
                <v-fab-transition>
                  <v-btn color="#30c88d" dark @click="onSubmitReschedual">
                    Order It Now
                  </v-btn>
                </v-fab-transition>
              </div>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  data() {
    return {
      timePicked: '',
      dataForm: {
        date: '',
        time: '',
        order_id: '',
      },
      attrs: {
        class: 'mb-6',
        boilerplate: true,
        elevation: 2,
      },
      date: new Date(
        Date.now() - new Date().getTimezoneOffset() * 60000
      ).toISOString(),
      dateFormatted: this.formatDate(
        new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
          .toISOString()
          .substr(0, 20)
      ),
      menu1: false,
      dateSended: '',
    }
  },
  methods: {
    ...mapActions(['getListOfTime', 'reschedule']),

    formatDate(date) {
      if (!date) return null

      const [year, month, day] = date.split('-')
      return `${year}-${month}-${day}`
    },
    parseDate(date) {
      if (!date) return null

      const [month, day, year] = date.split('/')
      return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
    },
    onSubmitReschedual() {
      this.dataForm.time = this.timePicked
      this.dataForm.order_id = this.$route.query.orderid
      console.log(this.dataForm)
      this.reschedule(this.dataForm)
    },
  },
  computed: {
    ...mapGetters(['AllAddresses', 'AllListOfCarts', 'AllListOfTime']),
    computedDateFormatted() {
      return this.formatDate(this.date)
    },
  },
  watch: {
    date(val) {
      this.dateFormatted = this.formatDate(this.date)
      if ((this.$store.state.ckeckoutModule.status = 500)) {
        setTimeout(() => (this.snackbar = true))
      }
      this.dataForm.date = this.dateFormatted
      this.getListOfTime(this.dateFormatted)
    },
  },

  async mounted() {
    // this.getAddress()
    // this.getListOfTime()
  },
}
</script>

<style>
.v-dialog > .v-card > .v-card__text {
  padding: 0px;
}
.Adress {
  text-align: end;
}
.loadingReg {
  margin: auto;
}
</style>
