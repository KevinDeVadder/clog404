<template>
  <div>
    <v-flex xs12 class="my-3">
        <span class="display-1">See today's queue</span>
    </v-flex>
    <v-flex xs8 offset-xs2 class="white elevation-2">
    <v-data-table
    :headers="[{text:'Client name', value: name, sortable: false, align: 'center'}]"
    :items="providers"
    hide-actions>
    <template slot="items" slot-scope="props">
        <td class="text-xs-center">
        {{props.item}}
        </td>
    </template>
    </v-data-table>
    </v-flex>
  </div>
</template>

<script>
export default {
  data () {
    return {
        providers:[
            'S.C. Placeholder S.R.L',
            'DB Schenker',
            'T series',
            'Nea Radu'
        ],
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
