<template>
<div>
    <v-flex xs12 class="my-3">
        <span class="display-1">Shipment history</span>
    </v-flex>
    <v-btn dark raised color="blue darken-1" class="mb-3" to="/shipment"><v-icon left dark>local_shipping</v-icon>See current delivery</v-btn>
    <shipment v-for="shipment in shipments" :key="shipment._id" :shipment="shipment"/>
</div>
</template>
<script>
import shipment from './Shipments/Shipment'

export default {
  data(){
    return{
      shipments:[
          {
              status:1,
              clients:[
                {
                  name: 'Auchan Colentina',
                  geolocation:{
                    lat: 45,
                    lng: 45
                  },
                  id: '231ikg2nmdakop0'
                },
                
                {
                  name: 'Dedeman Colentina',
                  geolocation:{
                    lat: 48,
                    lng: 45
                  },
                  id: 'glkjn3qkjbeqk'
                },
                
                {
                  name: 'Dedeman Colentina',
                  geolocation:{
                    lat: 48,
                    lng: 45
                  },
                  id: 'glkjn3qkjbeqk'
                },
                {
                  name: 'Dedeman Colentina',
                  geolocation:{
                    lat: 48,
                    lng: 45
                  },
                  id: 'glkjn3qkjbeqk'
                },
                {
                  name: 'Dedeman Colentina',
                  geolocation:{
                    lat: 48,
                    lng: 45
                  },
                  id: 'glkjn3qkjbeqk'
                },
                {
                  name: 'Dedeman Colentina',
                  geolocation:{
                    lat: 48,
                    lng: 45
                  },
                  id: 'glkjn3qkjbeqk'
                },
                {
                  name: 'Dedeman Colentina',
                  geolocation:{
                    lat: 48,
                    lng: 45
                  },
                  id: 'glkjn3qkjbeqk'
                },
                {
                  name: 'Dedeman Colentina',
                  geolocation:{
                    lat: 48,
                    lng: 45
                  },
                  id: 'glkjn3qkjbeqk'
                }
              ],
              estimatedTime: 2,
              realTime: 1.5
          },
          {
              status:1,
              clients:[
                {
                  name: 'Auchan Colentina',
                  geolocation:{
                    lat: 45,
                    lng: 45
                  },
                  id: '231ikg2nmdakop0'
                },
                
                {
                  name: 'Dedeman Colentina',
                  geolocation:{
                    lat: 48,
                    lng: 45
                  },
                  id: 'glkjn3qkjbeqk'
                }
              ],
              estimatedTime: 2,
              realTime: 1.5
          }
      ]        
    }
  },
  methods: {
  },
  components:{
    shipment,
  }
}
</script>
<style scoped>

</style>

