<template>
  <div>
    <v-layout row justify-center class="my-2">
        <v-dialog v-model="dialog" persistent max-width="600px">
        <template v-slot:activator="{ on }">
        <v-btn dark raised color="blue darken-2" class="mb-3" v-on="on"><v-icon dark>add</v-icon>Add new provider</v-btn>
        </template>
        <v-card>
            <v-card-title>
                <span class="headline">Provider details</span>
            </v-card-title>
            <v-card-text>
            <v-container grid-list-md>
                <v-layout wrap>
                <v-flex xs12>
                    <v-text-field label="Admin email*" type="email" required v-model='company.admin.email'></v-text-field>
                </v-flex>
                <v-flex xs12>
                    <v-text-field label="Admin password*" type="password" required v-model='company.admin.password'></v-text-field>
                </v-flex>
                <v-flex xs12>
                    <v-text-field label="Admin name*" type="text" required v-model='company.admin.name'></v-text-field>
                </v-flex>
                <v-flex xs12>
                    <v-text-field label="Company name*" type="text" required v-model='company.name'></v-text-field>
                </v-flex>
                </v-layout>
            </v-container>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" flat @click="dialog = false">Close</v-btn>
                <v-btn color="blue darken-1" flat @click="submit">Add provider</v-btn>
            </v-card-actions>
        </v-card>
        </v-dialog>
    </v-layout>
  </div>
</template>

<script>
import CompanyService from '@/services/CompanyService'

export default {
  data () {
    return {
        dialog: false,
        company:{
            name: '',
            admin:{
                name:'',
                email:'',
                password:'',
                status: 1
            },
            status: 0
        }
    }
  },
  methods: {
    async submit(){
        if(!(this.company.admin.email === '') && !(this.company.admin.password === '') && !(this.company.admin.name === '') && !(this.company.name === '')){
          try{
            const response = (await CompanyService.addCompany(this.company)).data
            console.log(response)
            this.$router.go();
          }
          catch(err){
            console.log(err)
          }
        }
      }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
