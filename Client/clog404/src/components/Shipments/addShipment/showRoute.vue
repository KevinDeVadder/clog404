<template>
  <div>
    <v-card v-if="finished">
        <v-card-title>
            <span class="headline">Does this path look good?</span>
        </v-card-title>
        <v-card-text>
            <v-container grid-list-md>
            <v-layout wrap>
                <v-flex xs12 class="mb-4">
                    <GmapMap
                    :zoom="15"
                    :center="center"
                    map-type-id="terrain"
                    :options="{
                            streetViewControl: false,
                            mapTypeControl: false,
                        }"
                    style="width: 500px; height: 200px"
                    >
                    </GmapMap>
                </v-flex>
                <v-flex xs-6 class="pt-4">
                    <h4>Driver: {{driver}}</h4>
                    <h4>Estimated time: 2h </h4>
                    <h4>Total distance: 50km </h4>
                </v-flex>
                <v-flex xs-6>
                    <v-data-table
                    :headers="[{text:'Client name', value: name, sortable: false}]"
                    :items="shops"
                    hide-actions>
                    <template slot="items" slot-scope="props">
                        <td class="text-xs-left">
                        {{props.item}}
                        </td>
                    </template>
                    </v-data-table>
                </v-flex>
            </v-layout>
            </v-container>
        </v-card-text>
        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" flat @click="$emit('close')">Close</v-btn>
            <v-btn color="blue darken-1" flat @click="$emit('back', 'selectShops')">No</v-btn>
            <v-btn color="blue darken-1" flat @click="submit()">Yes</v-btn>
        </v-card-actions>
      </v-card>
    <v-card v-if="!finished">
        <v-card-title>
            <span class="headline">Please hold on, we are generating the best route</span>
        </v-card-title>
        <v-card-text>
            <v-container grid-list-md>
            <v-layout wrap>
                <v-flex xs12>
                    <v-progress-circular
                    indeterminate
                    color="primary"
                    ></v-progress-circular>
                </v-flex>
            </v-layout>
            </v-container>
        </v-card-text>
      </v-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
        finished: true,
    }
  },
  props:['center', 'driver', 'shops'],
  methods: {
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
