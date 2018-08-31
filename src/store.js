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
    //UPDATE THE GAME OBJECT AFTER STARTING A NEW GAME, AFTER A REFRESH 
    //OR AFTER AN ATTACK
    setGame(state, game) {
      state.game = game
      console.log(game)
      //Reestablish correct object reference for activeOpponent follwing an update    
      if (state.activeOpponent.id) {
        state.activeOpponent = game.players.find(p => p.id == state.activeOpponent.id)
      }
      //For games with just one opponent, hardwire the activeOpponent property
      if (state.game.opponents == 1) {
        state.activeOpponent = state.game.players[1]
      }
      //initalizes a new active game and opens the ActiveGame Vue
      router.push({ name: 'activeGame', params: { gameId: game.id } })
    },

    //SET THE ACTIVE OPPONENT FOR AN ATTACK
    setActiveOpponent(state, opponent) {
      state.activeOpponent = opponent
    },

    //SET THE SELECTED CARD FOR THE PLAYER
    setPlayerCardId(state, cardId) {
      state.playerCardId = cardId
    },
    //SET THE SELECTED CARD FOR THE OPPONENT
    setOpponentCardId(state, cardId) {
      state.opponentCardId = cardId
    },
    //RESET ACTIVE CARDS AFTER AN ATTACK
    resetCards(state) {
      state.opponentCardId = ''
      state.playerCardId = ''
    },

    //RESET THE STATE IF THE PLAYER CHOOSES TO PLAY A NEW GAME
    resetGame(state) {
      state.opponentCardId = ''
      state.playerCardId = ''
      state.activeOpponent = {}
      state.game = {}
      router.push({ name: 'game' })
    }
  },

  //SEND THE GAME CONFIG TO THE SERVER TO INITIATE A NEW GAME
  actions: {
    startGame({ commit, dispatch }, gameConfig) {
      gameApi.post('', gameConfig)
        .then(res => {
          commit('setGame', res.data)
        })
        .catch(err => console.error(err.message))
    },

    //GETS AN UPDATED GAME OBJECT FROM THE SERVER FOLLOWING A SCREEN REFRESH OR
    //AN ATTACK
    getGame({ commit, dispatch }, gameId) {
      gameApi.get('/' + gameId)
        .then(res => {
          commit('setGame', res.data.data)
          commit('resetCards')
        })
        .catch(err => console.error(err.message))
    },

    //SETS ACTIVE OPPONENT FOR AN ATTACK
    setActiveOpponent({ commit, dispatch }, opponent) {
      commit('setActiveOpponent', opponent)
    },

    //SETS ACTIVE PLAYER CARD FOR AN ATTACK
    setPlayerCardId({ commit, dispatch }, cardId) {
      commit('setPlayerCardId', cardId)
    },
    //SETS OPPONENT CARD FOR AN ATTACK
    setOpponentCardId({ commit, dispatch }, cardId) {
      commit('setOpponentCardId', cardId)
    },

    //SUBMITS AN ATTACK OBJECT TO THE SERVER
    battle({ commit, dispatch }, payload) {
      gameApi.put('/' + payload.gameId, payload.attack)
        .then(res => {
          dispatch('getGame', payload.gameId)
        })
        .catch(err => console.error(err.message))
    },

    //DELETES COMPLETED GAME FROM THE SERVER
    resetGame({ commit, dispatch }, gameId) {
      gameApi.delete('/' + gameId)
        .then(res => {
          commit('resetGame')
        })
        .catch(err => console.error(err.message))
    }
  }
})
