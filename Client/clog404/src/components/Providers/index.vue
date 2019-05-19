<template>
<div>
    <add-provider/>
    <provider v-for="provider in providers" :key="provider._id" :provider="provider"/>
</div>
</template>
<script>
import provider from './Provider'
import addProvider from './addProvider'

export default {
  data(){
    return{
        providers:[
        ]
    }
  },
  methods: {
  },
  components:{
    provider,
    addProvider
  },
  computed: {
  company(){
      var company = this.$store.getters.getCompany
      // console.log(company)
      this.providers = company.partners
      return company
    }
  },
}
</script>
<style scoped>

</style>

