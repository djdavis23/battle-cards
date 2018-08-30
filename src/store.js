import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import router from './router'

Vue.use(Vuex)
const gameApi = Axios.create({
  baseURL: 'https://inspire-server.herokuapp.com/cards',
  timeout: 3000
})

export default new Vuex.Store({
  state: {
    game: {}
  },

  mutations: {
    setGame(state, game) {
      state.game = game
      console.log("state.game: ", state.game)
      router.push({ name: 'activeGame', params: { gameId: game.id } })
    }
  },
  actions: {
    startGame({ commit, dispatch }, gameConfig) {
      console.log("config: ", gameConfig)
      gameApi.post('', gameConfig)
        .then(res => {
          commit('setGame', res.data)
        })
        .catch(err => console.error(err.message))
    },

    getGame({ commit, dispatch }, gameId) {
      gameApi.get('/' + gameId)
        .then(res => {
          console.log("response to getGame: ", res.data.data)
          commit('setGame', res.data.data)
        })
        .catch(err => console.error(err.message))
    },

    battle({ commit, dispatch }, payload) {
      gameApi.put('/' + payload.gameId, payload.attack)
        .then(res => {
          console.log("results from attack: ", res)
          dispatch('getGame', payload.gameId)
        })
        .catch(err => console.error(err.message))
    }
  }
})
