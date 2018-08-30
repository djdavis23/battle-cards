<template>
  <div class="active-game container" v-if="activeGame.id">
    <Opponents />
    <div class="row justify-content-center">
      <div class="col-md-8 mb-5 mt-5">
        <h1 class="text-success" v-if="this.activeGame.over == true && this.activeGame.winner == 'Cats Game'">We'll call it a draw then!</h1>
        <h1 class="text-success" v-if="this.activeGame.over == true && this.activeGame.winner !== 'Cats Game'">{{this.activeGame.winner.name}} reigns supreme!</h1>
        <button v-if="this.activeGame.over == true" class="btn btn-lg btn-primary" @click="resetGame">Play Again</button>
        <button v-if="this.activeGame.over == false && this.playerCardId && this.opponentCardId" @click="battle" class="btn btn-lg btn-success">FIGHT!</button>
        <h1 class="text-warning" v-if="this.activeGame.over == false && (!this.playerCardId || !this.opponentCardId)">Select cards for battle</h1>
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
    setOpponentCard(cardId) {
      this.opponentCardId = cardId;
      console.log("opp card id: ", this.opponentCardId);
    },
    setPlayerCard(cardId) {
      this.playerCardId = cardId;
      console.log("player card id: ", this.playerCardId);
    },

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
</style>