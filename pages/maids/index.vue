<template>
    <v-container>
        <v-simple-table>
            <template v-slot:default>
                <thead>
                    <tr>
                        <th class="text-center">
                            Name
                        </th>
                        <th class="text-center">
                            Phone
                        </th>
                        <th class="text-center">
                            email
                        </th> 
                        <th class="text-center">details</th>
                        <th class="text-center">location</th>
                        <th class="text-center">type</th>
                        <th class="text-center">
                            action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in allMaidsList.data" :key="item._id">
                        <td class="text-center">{{ item.userName }}</td>
                        <td class="text-center">{{ item.phone }}</td>
                        <td class="text-center">{{ item.email }}</td>
                        <td class="text-center">{{ item.details }}</td>
                        <td class="text-center">{{ item.location }}</td>
                        <td class="text-center">{{ item.type }}</td>
                        <td class="text-center">
                            <v-row justify="center">
                                <NuxtLink :to="localePath('/maids/'+item._id)">
                                    <v-icon left>
                                        {{ icons.mdiPencil }}
                                    </v-icon>
                                </NuxtLink>
                                <!-- <NuxtLink :to="localePath('/delete')">
                                    <v-icon left>
                                        {{ icons.mdiDelete }}
                                    </v-icon>
                                </NuxtLink> -->
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
import Loading from '../../components/tools/loadingP.vue'
export default {
    data() {
        return {
            icons: {
                mdiPencil,
                mdiDelete,
            }, 
        }
    },
     components: {
    Loading,
  },
  computed: {
    ...mapGetters(['allMaidsList']),
  },
  methods:{
    ...mapActions(['getMaids'])
  },
   mounted() { 
    this.getMaids()
  },

}
</script>



<style scoped>
</style>
