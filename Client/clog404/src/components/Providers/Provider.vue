<template>
    <div>
    <v-flex xs8 offset-xs2 class="mb-5">
    <div class="white elevation-2">
      <v-toolbar flat dense class="blue darken-2" dark>
        <v-toolbar-title>{{provider.name}}</v-toolbar-title>
      </v-toolbar>
        <v-layout>
            <v-flex sm-12 class="my-5">
                <h3>Shipment number: Logic TBA {{provider.shipmentNumber}}</h3>
            </v-flex>
        </v-layout>
    </div>
    </v-flex>
    </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  props:['provider']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
