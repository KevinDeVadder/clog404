<template>
  <div>

<v-layout row justify-center class="my-2">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on }">
        <v-btn dark raised color="blue darken-2" class="mb-3" v-on="on"><v-icon dark>add</v-icon>Add new shipment</v-btn>
      </template>
      <component @close="dialog=false" @back="goBack" @update-driver="updateDriver" @update-shops="updateShops" 
      :is="selectedComponent" :center="center" :driver="driver" :shops="shops"></component>
    </v-dialog>
  </v-layout>
  </div>
</template>

<script>
import selectDriver from './selectDriver'
import selectShops from './selectShops'
import showRoute from './showRoute'

export default {
  data () {
    return {
        dialog: false,
        driver:'',
        shops: [],
        selectedComponent: 'selectDriver',
        center:{hehe:"tesa"}
    }
  },
  methods: {
      updateDriver(e){
          this.driver = e;
          this.selectedComponent="selectShops"
        //   console.log(e);
          // console.log(this.center)
      },
      goBack(e){
          this.selectedComponent=e
      },
      updateShops(e){
        this.shops=e;
        this.selectedComponent="showRoute"
      },    
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
  components:{
      selectDriver,
      selectShops,
      showRoute
  },
  beforeMount() {
      this.geolocate();
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
