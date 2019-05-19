<template>
<div>
<div id="allin">
  <v-layout justify-center>
    <v-flex xs12 sm10 md8 lg6>
      <v-card ref="form">
        <v-card-text>
          <v-text-field
            ref="email"
            v-model="user.email"
            :rules="[() => !!user.email || 'This field is required']"
            :error-messages="errorMessages"
            label="Email"
            placeholder="basicemail@gmail.com"
            required
          ></v-text-field>
          <v-text-field
            ref="password"
            v-model="user.password"
            :type="show1 ? 'text' : 'password'"
            :rules="[
              () => !!user.password || 'This field is required',
              passwordCheck
            ]"
            label="Password"
            placeholder="Password"
            required
          ></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-btn dark raised color="blue darken-2" @click="login">Login</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
  </div>
</div>
</template>
<script>
import AuthenticationService from '@/services/AuthenticationService'
import CompanyService from '@/services/CompanyService'

export default {
  data(){
    return{
      user: {
        email: "",
        password: ""
      }
    }
  },
  methods: {
    async login(){
      if(!(this.user.email === '') && !(this.user.password === '')){
        try{
          const response = (await AuthenticationService.login(this.user)).data
          console.log(response.data);
          localStorage.setItem('user',JSON.stringify(response.data.user))
          localStorage.setItem('jwt',response.data.token)
          this.$store.commit('switchUserState')
          if (response.data.user.status!=3) {const company = (await CompanyService.getOneCompany(response.data.user.company)).data
          this.$store.commit('updateCompany', company)}
          // console.log(company)
          if(response.data.user.status==0){
            this.$router.push({name:'History'})
          }
          else if(response.data.user.status==1){
            this.$router.push({name:'Shipments'})
          }
          else if(response.data.user.status==2){
            this.$router.push({name: 'Queue'})
          }
          else if(response.data.user.status==3){
            this.$router.push({name: 'Admin'})
          }
        }
        catch(err){
          console.log(err)
        }
      }
    }
  },
}
</script>
<style scoped>
    #allin{
        margin-top: 50px;
        }
</style>

