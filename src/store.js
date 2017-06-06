import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    stocks: {}
  },
  getters: {
    getHello(state) {
      return state.stocks.hello
    }
  },
  mutations: {
    addProperty(state) {
      // state.stocks['hello'] = 'liran'
      Vue.set(state.stocks, 'hello', 'liran')
    },
    changeProperty(state, payload) {
      state['hello'] = payload
    }
  }
})

export default store
