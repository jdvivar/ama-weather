import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const whenOptions = ['now', 'tomorrow']

// Default values
const when = whenOptions[0]
const location = { text: 'Madrid' }

export default new Vuex.Store({
  state: {
    when,
    location
  },
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
