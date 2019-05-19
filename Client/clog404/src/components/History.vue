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
      shipments:[]        
    }
  },
  methods: {
  },
  components:{
    shipment,
  },
  computed: {
    company(){
      var user = JSON.parse(localStorage.getItem('user'))._id
      var company = this.$store.getters.getCompany
      // console.log(company)
      this.shipments = company.shipments.filter(item=>{return item.driver.id==user})
      return company
    }
  },
}
</script>
<style scoped>

</style>

