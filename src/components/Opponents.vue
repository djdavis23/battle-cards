<template>
  <div class="opponents row">
    <div class="col-md-12">
      <div class="mb-3">
        <button v-for="opponent in opponents" :key="opponent.id" v-if="!opponent.dead" class="btn btn-primary" @click="setActiveOpponent(opponent)">{{opponent.name}}</button>
      </div>
      <div class="hand row justify-content-center">
        <div class="col-md-2" v-if="activeOpponent.id" v-for="card in activeOpponent.hand" :key="card.id">
          <div class="card mb-3" :class="setBorder(card.id)" :id="card.id" @click="setActiveCard(card.id)">
            <h5 class="card-header" v-if="card.visible">{{card.name}}</h5>
            <img style="height: 140px; width: 100%; display: block;" v-if="card.visible" :src="card.img" alt="Card image">
            <img style="height: auto; width: 100%; display: block;" v-if="!card.visible" src="../assets/cardback.jpg" alt="Card image">
            <ul class="list-group list-group-flush" v-if="card.visible">
              <li class="list-group-item">Attack: {{card.attack}}</li>
              <li class="list-group-item">Defense: {{card.defense}}</li>
              <li class="list-group-item">Health: {{card.health}}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-12">
      <h3 class="text-primary" v-if="activeOpponent.id">{{activeOpponent.name}} &nbsp&nbsp Cards Remaining: {{activeOpponent.remainingCards
        + activeOpponent.hand.length}}</h3>
      <h3 class="text-primary" v-if="!activeOpponent.id">Select an opponent to attack</h3>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Opponents",
    props: [],

    data() {
      return {};
    },

    methods: {
      setBorder(id) {
        if (id == this.activeCardId) {
          return "active-card";
        }
      },
      setActiveCard(cardId) {
        this.$store.dispatch("setOpponentCardId", cardId);
      },

      setActiveOpponent(opponent) {
        this.$store.dispatch("setActiveOpponent", opponent);
      }
    },

    computed: {
      activeOpponent() {
        return this.$store.state.activeOpponent;
      },
      activeCardId() {
        return this.$store.state.opponentCardId;
      },
      opponents() {
        return this.$store.state.game.players.slice(1);
      }
    }
  };
</script>

<style scoped>
  .card:hover {
    cursor: pointer;
    outline: 1px solid yellow;
  }

  .active-card {
    outline: 4px solid green;
  }

  .card-header {
    font-size: 1.2rem;
    height: 60px;
  }

  .col-md-2 {
    min-width: 190px;
  }
</style>