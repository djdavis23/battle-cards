<template>
  <div class="player row">
    <div class="col-md-12">
      <h3 class="text-primary">{{player.name}} &nbsp&nbsp Cards Remaining: {{player.remainingCards + player.hand.length}}</h3>
      <div class="hand row justify-content-center">
        <div class="col-md-2" v-for="card in player.hand" :key="card.id">
          <div class="card mb-3" :class="setBorder(card.id)" :id="card.id" @click="setActiveCard(card.id)">
            <h5 class=" card-header ">{{card.name}}</h5>
            <img style="height: 140px; width: 100%; display: block; " :src="card.img " alt="Card image ">
            <ul class="list-group list-group-flush ">
              <li class="list-group-item ">Attack: {{card.attack}}</li>
              <li class="list-group-item ">Defense: {{card.defense}}</li>
              <li class="list-group-item ">Health: {{card.health}}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Player",
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
        this.$store.dispatch("setPlayerCardId", cardId);
      }
    },

    computed: {
      player() {
        return this.$store.state.game.players[0];
      },

      activeCardId() {
        return this.$store.state.playerCardId;
      }
    }
  };
</script>

<!-- Add "scoped " attribute to limit CSS to this component only -->
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