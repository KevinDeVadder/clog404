<template>
  <div>
    <v-flex xs12 class="my-3">
        <span class="display-1">See shipment progress</span>
    </v-flex>
      <v-flex xs8 offset-xs2 justify-center class="my-3">
    <div class="white elevation-2">
        <v-layout>
        <v-flex xs-12>
            <GmapMap
            :zoom="15"
            :center="center"
            map-type-id="satellite"
            :options="{
                    streetViewControl: false,
                    mapTypeControl: false,
                }"
            style="width: 900px; height: 425px"
            >
            </GmapMap>
        </v-flex>
        </v-layout>
        <v-btn class="blue lighten-2 my-3" dark v-if="!started" @click="started=true"><v-icon left dark>play_arrow</v-icon>Start shipment</v-btn>
        <v-layout v-if="started">
            <v-flex sm-6 class="my-5">
                <h3>Status: {{shipment.status}}</h3>
                <h3 v-if="shipment.driver">Driver: {{shipment.driver.name}}</h3>
                <h3>Estimated time: {{shipment.estimatedTime}}</h3>
                <h3>Real time: {{shipment.realTime}}</h3>
            </v-flex>
            <v-flex sm-4 class="mb-3">
                <v-data-table
                :headers="[{text:'Client name', value: name, sortable: false},{text: 'Confirm',sortable: false, align:'center'}]"
                :items="shipment.clients"
                hide-actions>
                <template slot="items" slot-scope="props">
                  <td class="text-xs-left">
                    {{props.item.name}}
                  </td>
                    <td class="text-xs-center">
                        <v-icon
                            small
                            class="mr-2"
                            @click="acceptMedic(props.item)"
                        >
                            check
                        </v-icon>
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
  data () {
    return {
        center:{hehe:"tesa"},
        started: false,
        shipment:{
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
    }
  },
  methods: {
    geolocate() {
        navigator.geolocation.getCurrentPosition(this.buildUrl, this.geoError);
    },
    buildUrl(position) {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        this.center.lat=lat;
        this.center.lng=lon;
    },
    geoError(error) {
        console.log(error)
    }
  },
    beforeMount() {
      this.geolocate();
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
