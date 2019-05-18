<template>
<div>
  <add-driver :company="company._id"/>
  <add-shipment/>
  <shipment v-for="shipment in shipments" :key="shipment._id" :shipment="shipment"/>
</div>
</template>
<script>
import shipment from './Shipment'
import addShipment from './addShipment/index'
import addDriver from './addDriver'

import CompanyService from '@/services/CompanyService'

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
    addShipment,
    addDriver
  },
  computed: {
    company(){
      var company = this.$store.getters.getCompany
      // console.log(company)
      this.shipments = company.shipments
      return company
    }
  },
  async mounted() {
  },
}
</script>
<style scoped>

</style>

