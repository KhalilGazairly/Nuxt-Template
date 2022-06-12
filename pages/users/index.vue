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
                            Calories
                        </th>
                        <th class="text-center">
                            action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in desserts" :key="item.name">
                        <td class="text-center">{{ item.name }}</td>
                        <td class="text-center">{{ item.phone }}</td>
                        <td class="text-center">{{ item.calories }}</td>
                        <td class="text-center">
                            <v-row justify="center">
                                <NuxtLink :to="localePath('/api/user/629fcf13ec6e7377e597b4a5')">
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
export default {
    data() {
        return {
            icons: {
                mdiPencil,
                mdiDelete,
            },
            desserts: [
                {
                    name: 'Frozen Yogurt',
                    phone: '132156464',
                    calories: 159,
                },
                {
                    name: 'Ice cream sandwich',
                    phone: '132156464',
                    calories: 237,
                },
                {
                    name: 'Eclair',
                    phone: '132156464',
                    calories: 262,
                },
                {
                    name: 'Cupcake',
                    phone: '132156464',
                    calories: 305,
                },
                {
                    name: 'Gingerbread',
                    phone: '132156464',
                    calories: 356,
                },
                {
                    name: 'Jelly bean',
                    phone: '132156464',
                    calories: 375,
                },
                {
                    name: 'Lollipop',
                    phone: '132156464',
                    calories: 392,
                },
                {
                    name: 'Honeycomb',
                    phone: '132156464',
                    calories: 408,
                },
                {
                    name: 'Donut',
                    phone: '132156464',
                    calories: 452,
                },
                {
                    name: 'KitKat',
                    phone: '132156464',
                    calories: 518,
                },
            ],
        }
    },
}
</script>



<style scoped>
</style>
