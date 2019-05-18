<template>
  <div>
        <v-flex xs12 class="my-3">
            <span class="display-1">Admin dashboard</span>
        </v-flex>
        <user-table/>
        <provider-table/>
        <client-table/>
  </div>
</template>

<script>
import userTable from './userTable'
import providerTable from './providerTable'
import clientTable from './clientTable'

export default {
  data () {
    return {

    }
  },
  components:{
      userTable,
      providerTable,
      clientTable
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
