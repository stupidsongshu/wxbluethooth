import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    no: 0
  },
  mutations: {
    up (state) {
      state.no++
    },
    down (state) {
      state.no--
    }
  },
  actions: {}
})
