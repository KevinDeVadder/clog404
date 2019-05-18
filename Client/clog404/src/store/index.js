import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export const store = new Vuex.Store({
  strict: true,
  state: {
    isUserLoggedIn: false,
    company:{}
  },
  getters: {
    getUserState(state){
      return state.isUserLoggedIn
    },
    getCompany(state){
      return state.company
    }
  },
  mutations: {
    switchUserState(state, payload){
      state.isUserLoggedIn = !state.isUserLoggedIn
    },
    updateCompany(state, payload){
      state.company = payload
    }
  },
  actions: {
  },
  plugins: [createPersistedState()]
})
