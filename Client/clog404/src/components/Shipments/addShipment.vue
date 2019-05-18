<template>
  <div>

<v-layout row justify-center class="my-2">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on }">
        <v-btn dark raised color="blue darken-2" class="mb-3" v-on="on"><v-icon dark>add</v-icon>Add new shipment</v-btn>
      </template>
      <v-card>
        <v-card-title>
            <span class="headline">Select driver</span>
        </v-card-title>
        <v-card-text>
            <v-container grid-list-md>
            <v-layout wrap>
                <v-flex xs12>
                    <v-select
                    :items="drivers"
                    label="Drivers"
                    v-model="driver"
                    ></v-select>
                </v-flex>
            </v-layout>
            </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click="dialog = false">Close</v-btn>
          <v-btn color="blue darken-1" flat @click="selectDriver()">Next</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
  </div>
</template>

<script>
export default {
  data () {
    return {
        dialog: false,
        drivers:[
            'Costel Biju',
            'Florin Salam'
        ],
        driver:''
    }
  },
  methods: {
      selectDriver(){
          console.log(this.driver)
      }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
