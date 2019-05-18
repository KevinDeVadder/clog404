<template>
  <div>
    <v-flex xs8 offset-xs2 justify-center class="mb-5">
    <div class="white elevation-2">
      <v-toolbar flat dense class="blue darken-2" dark></v-toolbar>
        <v-layout>
            <v-flex sm-6 class="my-5">
                <h3>Status: {{shipment.status}}</h3>
                <h3>Driver: {{shipment.driver.name}}</h3>
                <h3>Estimated time: {{shipment.estimatedTime}}</h3>
            </v-flex>
            <v-flex sm-4 class="mb-3">
                <v-data-table
      :headers="[{text:'Client name', value: name, sortable: false}]"
      :items="shipment.clients"
      hide-actions>
      <template slot="items" slot-scope="props">
        <td class="text-xs-left">
          {{props.item.name}}
        </td>
      </template>
    </v-data-table>

            </v-flex>
        </v-layout>
    </div>
    </v-flex>
  </div>
</template>

<script>

export default {
  data(){
    return{

    }
  },
  props: ['shipment'],
  computed: {
    
  },
  mounted() {
      console.log(this.shipment)
  },
  methods: {
  },
}
</script>

<style>

</style>
