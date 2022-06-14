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
                            maid_id
                        </th>
                        <th class="text-center">
                            user_id
                        </th>
                        <th class="text-center">
                            V
                        </th>
                        <th class="text-center">
                            action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in allFavouriteList.data.data" :key="item._id">
                        <td class="text-center">{{ item._id }}</td>
                        <td class="text-center">{{ item.maid_id }}</td>
                        <td class="text-center">{{ item.user_id }}</td> 
                        <td class="text-center">{{ item.__v }}</td> 
                        <td class="text-center">
                            <v-row justify="center">
                                <NuxtLink :to="localePath('/favourite/'+item._id)">
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
    ...mapGetters(['allFavouriteList']),
  },
  methods:{
    ...mapActions(['getFavourite', 'DeleteFavourite']),
    Delete(id) {
      this.DeleteFavourite(id)
    },
  },
   mounted() { 
    this.getFavourite()
  },

}
</script>



<style scoped>
</style>
