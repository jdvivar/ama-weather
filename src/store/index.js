import Vue from 'vue'
import Vuex from 'vuex'
import { initialState as state } from './initialState'
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations
})
