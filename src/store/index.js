import Vue from 'vue'
import Vuex from 'vuex'
import { initialState as state, whenOptions } from './initialState'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations: {
    toggleWhen (state) {
      const currentIndex = whenOptions.indexOf(state.when)
      state.when = whenOptions[(currentIndex + 1) % whenOptions.length]
    },
    setLocation (state, location) {
      state.location = location
    }
  }
})
