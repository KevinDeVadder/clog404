<template>
  <div>
    <v-flex xs10 offset-xs1 class="elevation-2 mb-3">
        <v-toolbar flat color="blue darken-2" dark>
            <v-toolbar-title>All clients</v-toolbar-title>
        </v-toolbar>
        <v-data-table
        :headers="headers"
        :pagination.sync="pagination"
        :items="clients">
            <template slot="items" slot-scope="props">
                <td class="text-xs-left">
                {{props.item.name}}
                </td>
                <td class="text-xs-left">
                {{props.item.email}}
                </td>
                <td class="text-xs-left" v-if="props.item.specialization">
                {{props.item.specialization}}
                </td>
                <td class="text-xs-left" v-if="props.item.specialization">
                {{props.item.certificate.number}}/{{props.item.certificate.date}}
                </td>
            </template>
            <template v-slot:footer>
            </template>
        </v-data-table>
        <add-client/>
    </v-flex>
  </div>
</template>

<script>
import addClient from './addClient'

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
            text: 'Admin name',
            value: 'admin'
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
    }
  },
  components:{
      addClient
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
