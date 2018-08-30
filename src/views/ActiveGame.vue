<template>
  <div class="active-game container">
    <Opponents v-on:setOpponentCard="setOpponentCard" />
    <div class="row justify-content-center">
      <div class="col-md-8 mb-5 mt-5">
        <button @click="battle" class="btn btn-lg btn-success" v-if="this.playerCardId && this.opponentCardId">FIGHT!</button>
        <h1 class="text-warning" v-else>Select cards for battle</h1>
      </div>
    </div>
    <Player v-on:setPlayerCard="setPlayerCard" />
  </div>
</template>

<script>
  import Opponents from '@/components/Opponents.vue'
  import Player from '@/components/Player.vue'

  export default {
    name: 'activeGame',
    mounted() {
      let gameId = this.$route.params.gameId
      if (!this.activeGame.id) {
        this.$store.dispatch('getGame', gameId)
      }
    },

    data() {
      return {
        opponentCardId: '',
        playerCardId: ''
      }
    },

    components: {
      Player,
      Opponents
    },
    methods: {
      setOpponentCard(cardId) {
        this.opponentCardId = cardId
        console.log("opp card id: ", this.opponentCardId)
      },
      setPlayerCard(cardId) {
        this.playerCardId = cardId
        console.log("player card id: ", this.playerCardId)
      },

      // resetOpponentCard() {
      //   opponentCardId = ''
      // },

      // resetPlayerCard() {
      //   playerCardId = ''
      // },

      battle() {
        let attack = {
          playerId: this.activeGame.players[0].id,
          playerCardId: this.playerCardId,
          opponentId: this.activeGame.players[1].id,
          opponentCardId: this.opponentCardId
        }
        let gameId = this.activeGame.id
        this.$store.dispatch('battle', { gameId, attack })

      }
    },

    computed: {
      activeGame() {
        return this.$store.state.game
      }
    }
  }
</script>


<style>
  .active-game {
    display: flex;
    flex-direction: column;
    justify-content: stretch;
  }
</style>