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
            {name: 'S.C. Placeholder S.R.L',
            shipmentNumber: 13,
            id: 123},
                        {name: 'S.C. Placeholder S.R.L',shipmentNumber: 18,
            id: 123},            {name: 'S.C. Placeholder S.R.L',shipmentNumber: 190,
            id: 123},            {name: 'S.C. Placeholder S.R.L',shipmentNumber: 54,
            id: 123},            {name: 'S.C. Placeholder S.R.L',shipmentNumber: 90,
            id: 123}
        ]
    }
  },
  methods: {
  },
  components:{
    provider,
    addProvider
  }
}
</script>
<style scoped>

</style>

