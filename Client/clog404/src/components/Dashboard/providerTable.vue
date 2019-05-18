<template>
  <div>
    <v-flex xs10 offset-xs1 class="elevation-2 mb-3">
        <v-toolbar flat color="blue darken-2" dark>
            <v-toolbar-title>All providers</v-toolbar-title>
        </v-toolbar>
        <v-data-table
        :headers="headers"
        :pagination.sync="pagination"
        :items="providers">
            <template slot="items" slot-scope="props">
                <td class="text-xs-left">
                {{props.item.name}}
                </td>
                <td class="text-xs-left">
                {{props.item.adminName}}
                </td>
                <td class="text-xs-left">
                {{props.item.adminId}}
                </td>
                <td class="text-xs-left">
                </td>
            </template>
            <template v-slot:footer>
            </template> 
        </v-data-table>
        <add-provider/>
    </v-flex>
  </div>
</template>

<script>
import addProvider from './addProvider'

import CompanyService from '@/services/CompanyService'

export default {
  data () {
    return {
        headers: [
            {
            text: 'Company Name',
            value: 'name'
            },
            {
            text: 'Admin email',
            value: 'email'
            },
            {
            text: 'Admin id',
            value: 'id'
            },
            {
                text: 'Program',
                value: 'program'
            }
        ],
        pagination: {
            sortBy: 'Name',
            descending: false
        },
        providers:[]
    }
  },
  components:{
      addProvider
  },
  async mounted(){
      this.providers = (await CompanyService.getAllCompanies({status:0})).data
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
