<template>
    <v-container class="mt-5">
        <v-simple-table
    class="elevation-1">
            <template v-slot:default>
                <thead>
                    <tr>
                        <th class="text-center">
                            id
                        </th>
                        <th class="text-center">
                            subject
                        </th>
                        <th class="text-center">
                            content
                        </th>
                        <th class="text-center">
                            clicked
                        </th>
                        <th class="text-center">
                            action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in allnotificationList.data.data" :key="item._id">
                        <td class="text-center">{{ item._id }}</td>
                        <td class="text-center">{{ item.subject }}</td>
                        <td class="text-center">{{ item.content }}</td> 
                        <td class="text-center">{{ item.is_clicked }}</td> 
                        <td class="text-center">
                            <v-row justify="center">
                                <NuxtLink :to="localePath('/Notifications/'+item._id)">
                                    <v-icon left>
                                        {{ icons.mdiPencil }}
                                    </v-icon>
                                </NuxtLink>
                                <v-btn
                                    fab
                                    dark
                                    small
                                    :rounded="false" 
                                    @click="Delete(item._id)"
                                    color="red"
                                    text
                                >
                                    <v-icon>mdi-delete</v-icon>
                                </v-btn>
                            </v-row>
                        </td>
                    </tr>
                </tbody>
            </template>
        </v-simple-table>
    </v-container>
</template>

<script>
import {mdiPencil,mdiDelete} from '@mdi/js'
import { mapActions, mapGetters } from 'vuex'
export default {
    data() {
        return {
            icons: {
                mdiPencil,
                mdiDelete,
            }, 
        }
    },
  computed: {
    ...mapGetters(['allnotificationList']),
  },
  methods:{
    ...mapActions(['getNotification', 'DeleteNotification']),
    Delete(id) {
      this.DeleteNotification(id)
    },
  },
   mounted() { 
    this.getNotification()
  },

}
</script>



<style scoped>
</style>
