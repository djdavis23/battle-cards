<template>
  <div class="active-game container" v-if="activeGame.id">
    <Opponents />
    <div class="row justify-content-center">
      <div class="col-md-8 mb-5 mt-5 directive pt-2 pb-2">
        <h1 class="text-success" v-if="this.activeGame.over == true && this.activeGame.winner == 'Cats Game'">We'll call
          it a draw then!</h1>
        <h1 class="text-success" v-if="this.activeGame.over == true && this.activeGame.winner !== 'Cats Game'">{{this.activeGame.winner.name}}
          reigns supreme!</h1>
        <button v-if="this.activeGame.over == true" class="btn btn-lg btn-primary" @click="resetGame">Play Again</button>
        <button v-if="this.activeGame.over == false && this.playerCardId && this.opponentCardId" @click="battle" class="btn btn-lg btn-success">FIGHT!</button>
        <p class="text-success" v-if="this.activeGame.over == false && (!this.playerCardId || !this.opponentCardId)">Select
          cards for battle</p>
      </div>
    </div>
    <Player />
  </div>
</template>

<script>
  import Opponents from "@/components/Opponents.vue";
  import Player from "@/components/Player.vue";

  export default {
    name: "activeGame",
    mounted() {
      let gameId = this.$route.params.gameId;
      if (!this.activeGame.id) {
        this.$store.dispatch("getGame", gameId);
      }
    },

    data() {
      return {};
    },

    components: {
      Player,
      Opponents
    },

    methods: {
      //CONFIGURES AN ATTACK OBJECT AND SENDS IT TO THE SERVICE
      battle() {
        let attack = {
          playerId: this.activeGame.players[0].id,
          playerCardId: this.playerCardId,
          opponentId: this.activeGame.players[1].id,
          opponentCardId: this.opponentCardId
        };
        let gameId = this.activeGame.id;
        this.$store.dispatch("battle", { gameId, attack });
      },

      //RESETS GAME IF PLAYER CHOOSES TO PLAY AGAIN
      resetGame() {
        this.$store.dispatch("resetGame", this.activeGame.id);
      }
    },

    computed: {
      activeGame() {
        return this.$store.state.game;
      },

      playerCardId() {
        return this.$store.state.playerCardId;
      },

      opponentCardId() {
        return this.$store.state.opponentCardId;
      },
      activeOpponent() {
        return this.$store.state.activeOpponent;
      }
    }
  };
</script>


<style>
  .active-game {
    display: flex;
    flex-direction: column;
    justify-content: stretch;
  }

  .directive {
    font-family: 'Cinzel', serif;
    border-top: 1px solid #77b300;
    border-bottom: 1px solid #77b300;
    font-size: 3.5rem;
  }

  .dead {
    max-height: 150px;
    width: 75%;
  }
</style>