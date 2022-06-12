<template>
  <div>
    <div v-if="api === allMsg.api">
      <div v-if="allMsg.type === 200">
        <v-alert dense text type="success">
          {{ $t(allMsg.msg) }}
        </v-alert>
      </div>
      <div class="msg_error_" v-else-if="allMsg.type === 'error'">
          <div class="msgEror__" v-if="allMsg.msg != null">
            {{ $t(allMsg.msg) }}
          </div>
        <div v-if="Array.isArray(allMsg.errors)">
          <div v-if="allMsg.errors.length > 0">
            <div v-for="item in allMsg.errors" :key="item">
              <div>
                <v-alert dense outlined type="error">
                  {{ $t(item) }}
                </v-alert>
              </div>
            </div>
          </div>
        </div>
        <div v-else>
          <div>
            <v-alert dense outlined type="error" v-if="allMsg.errors != null">
              {{ $t(allMsg.errors) }}
            </v-alert>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['allMsg']),
  },
  props: ['api'],
}
</script>

<style scoped>
.msgEror__ {
  color: brown;
  margin-bottom: 10px;
}
.msg_error_ {
  margin-top: 19px;
}
</style>
 
