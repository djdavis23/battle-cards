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
    game: {},
    playerCardId: '',
    opponentCardId: '',
    activeOpponent: {}
  },

  mutations: {
    setGame(state, game) {
      state.game = game
      if (state.activeOpponent.id) {
        state.activeOpponent = game.players.find(p => p.id == state.activeOpponent.id)
      }
      console.log("state.game: ", state.game)
      router.push({ name: 'activeGame', params: { gameId: game.id } })
    },

    setActiveOpponent(state, opponent) {
      state.activeOpponent = opponent
    },

    setPlayerCardId(state, cardId) {
      state.playerCardId = cardId
    },

    setOpponentCardId(state, cardId) {
      state.opponentCardId = cardId
    },

    resetCards(state) {
      state.opponentCardId = ''
      state.playerCardId = ''
    },

    resetGame(state) {
      state.opponentCardId = ''
      state.playerCardId = ''
      state.activeOpponent = {}
      state.game = {}
      router.push({ name: 'game' })
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
          commit('resetCards')
        })
        .catch(err => console.error(err.message))
    },

    setActiveOpponent({ commit, dispatch }, opponent) {
      commit('setActiveOpponent', opponent)
    },

    setPlayerCardId({ commit, dispatch }, cardId) {
      commit('setPlayerCardId', cardId)
    },

    setOpponentCardId({ commit, dispatch }, cardId) {
      commit('setOpponentCardId', cardId)
    },

    battle({ commit, dispatch }, payload) {
      gameApi.put('/' + payload.gameId, payload.attack)
        .then(res => {
          console.log("results from attack: ", res)
          dispatch('getGame', payload.gameId)
        })
        .catch(err => console.error(err.message))
    },

    resetGame({ commit, dispatch }, gameId) {
      gameApi.delete('/' + gameId)
        .then(res => {
          console.log(res.data)
          commit('resetGame')
        })
        .catch(err => console.error(err.message))
    }
  }
})
