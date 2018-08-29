import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex)
const gameApi = Axios.create({
  baseURL: 'https://inspire-server.herokuapp.com/cards',
  timeout: 3000
})

export default new Vuex.Store({
  state: {
    game: {},
    gameStarted: false
  },

  mutations: {
    setGame(state, data) {
      state.game = data
      state.gameStarted = true
    }
  },
  actions: {
    initiateGame({ commit, dispatch }, gameConfig) {
      gameApi.post('', gameConfig)
        .then(res => {
          commit('setGame', res.data)
        })
    }
  }
})
