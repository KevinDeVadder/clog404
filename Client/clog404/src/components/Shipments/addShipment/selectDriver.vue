<template>
  <div>
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
          <v-btn color="blue darken-1" flat @click="$emit('close')">Close</v-btn>
          <v-btn color="blue darken-1" flat @click="selectDriver()">Next</v-btn>
        </v-card-actions>
      </v-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
        drivers:[
            'Costel Biju',
            'Florin Salam'
        ],
        driver:''
    }
  },
  methods: {
    selectDriver(){
        if(this.driver!='')this.$emit('update-driver', this.driver)
        // console.log(this.driver)
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
