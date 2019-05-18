<template>
<div id="app">
  <v-app>
    <v-toolbar flat app color="blue darken-2" class="white--text">
      <v-toolbar-side-icon @click="drawer = !drawer" class="white--text"></v-toolbar-side-icon>
      <v-toolbar-title>Clog404</v-toolbar-title>
    </v-toolbar>

    <v-navigation-drawer app v-model="drawer">
      <p class="navMenu">Menu</p> 
      <router-link v-if='!isUserLoggedIn' to='/login' tag='p' class='nav'>Login</router-link>
      <p class="nav" v-if='isUserLoggedIn' @click='logOut'>Sign-out</p>
    </v-navigation-drawer>
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      drawer: false
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
