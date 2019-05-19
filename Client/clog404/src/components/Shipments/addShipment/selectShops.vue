<template>
  <div>
    <v-card>
        <v-card-title>
            <span class="headline">Select shops</span>
        </v-card-title>
        <v-card-text>
            <v-container grid-list-md>
            <v-layout wrap>
                <v-flex xs12>
                    <v-select
                    :items="shops"
                    label="Shops"
                    multiple
                    clearable
                    item-text="name"
                    item-value="name"
                    v-model="pickedShops"
                    hint="Pick the shops you want this driver to go to"
                    persistent-hint
                    ></v-select>
                </v-flex>
            </v-layout>
            </v-container>
        </v-card-text>
        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" flat @click="$emit('close')">Close</v-btn>
            <v-btn color="blue darken-1" flat @click="$emit('back', 'selectDriver')">Back</v-btn>
            <v-btn color="blue darken-1" flat @click="selectShops()">Next</v-btn>
        </v-card-actions>
      </v-card>
  </div>
</template>

<script>
import CompanyService from '@/services/CompanyService'

export default {
  data () {
    return {
        shops:[],
        pickedShops:[]
    }
  },
  methods: {
    selectShops(){
      this.$emit('update-shops', this.pickedShops)
    }
  },
  async mounted() {
    this.shops = (await CompanyService.getCompaniesnames({status: 1})).data
    console.log(this.shops)
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
