<template>
  <div class="opponents row">
    <div class="col-md-12">
      <div class="hand row justify-content-center">
        <div class="col-md-2" v-for="card in activeOpponent.hand" :key="card.id">
          <div class="card mb-3" v-if="card.visible" :id="card.id" @click="setActiveCard(card.id)">
            <h5 class="card-header">{{card.name}}</h5>
            <img style="height: 200px; width: 100%; display: block;" :src="card.img" alt="Card image">
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Attack: {{card.attack}}</li>
              <li class="list-group-item">Defense: {{card.defense}}</li>
              <li class="list-group-item">Health: {{card.health}}</li>
            </ul>
          </div>
          <div class="card mb-3" :id="card.id" v-if="!card.visible" @click="setActiveCard(card.id)">
            <img style="height: auto; width: 100%; display: block;" src="../assets/cardback.jpg" alt="Card image">

          </div>
        </div>
      </div>
    </div>
    <div class="col-md-12">
      <h3>{{activeOpponent.name}} &nbsp&nbsp Cards Remaining: {{activeOpponent.remainingCards}}</h3>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Opponents',
    props: [],

    data() {
      return {
        activeCardId: ''
      }
    },

    methods: {
      setActiveCard(cardId) {
        if (this.activeCardId) {
          document.getElementById(this.activeCardId).classList.remove("active-card")
        }
        this.activeCardId = cardId
        document.getElementById(this.activeCardId).classList.add("active-card")
        this.$emit("setOpponentCard", cardId)
      }
    },

    computed: {
      activeOpponent() {
        return this.$store.state.game.players[1]
      }

    }
  }

</script>

<style scoped>
  .card:hover {
    cursor: pointer;
    outline: 1px solid yellow;
  }

  .active-card {
    outline: 1px solid green;
  }
</style>