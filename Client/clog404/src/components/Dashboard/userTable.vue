<template>
  <div>
    <v-flex xs10 offset-xs1 class="elevation-2 mb-3">
        <v-toolbar flat color="blue darken-2" dark>
            <v-toolbar-title>All users</v-toolbar-title>
        </v-toolbar>
        <v-data-table
        :headers="userHeaders"
        :pagination.sync="userPagination"
        :items="users">
            <template slot="items" slot-scope="props">
                <td class="text-xs-left">
                {{props.item.name}}
                </td>
                <td class="text-xs-left">
                {{props.item.email}}
                </td>
                <td class="text-xs-left">
                {{props.item.company}}
                </td>
                <td class="text-xs-left">
                {{props.item.status}}
                </td>
            </template>
            <template v-slot:footer>
                <td>
                    <small>*status: 0-driver, 1-provider, 2-client, 3-admin</small>
                </td>
            </template>
        </v-data-table>
        <add-admin/>
    </v-flex>
  </div>
</template>

<script>
import UserService from '@/services/UserService'
import addAdmin from './addAdmin'

export default {
  data () {
    return {
        userHeaders: [
            {
            text: 'Full Name',
            value: 'name'
            },
            {
            text: 'Email',
            value: 'email'
            },
            {
            text: 'Company',
            value: 'company'
            },
            {
                text: 'Status',
                value: 'status'
            }
        ],
        userPagination: {
            sortBy: 'Name',
            descending: false
        },
        users:[]
    }
  },
  components:{
      addAdmin
  },
  async mounted() {
        this.users = (await UserService.getAllUsers()).data
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
