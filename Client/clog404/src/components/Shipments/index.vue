<template>
<div>
  <add-driver/>
  <add-shipment/>
  <shipment v-for="shipment in shipments" :key="shipment._id" :shipment="shipment"/>
</div>
</template>
<script>
import shipment from './Shipment'
import addShipment from './addShipment/index'
import addDriver from './addDriver'

export default {
  data(){
    return{
      shipments:[
          {
              status:1,
              driver:{
                  name: 'Costel Biju',
                  driverId: 'dbhsba121wqb2jwh3ebmQh'
              },
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
              driver:{
                  name: 'Costel Biju',
                  driverId: 'dbhsba121wqb2jwh3ebmQh'
              },
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
    addShipment,
    addDriver
  }
}
</script>
<style scoped>

</style>

