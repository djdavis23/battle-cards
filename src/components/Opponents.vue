<template>
  <div class="opponents row">
    <div class="col-md-12">
      <div class="hand row justify-content-center">
        <div class="col-md-2" v-for="card in activeOpponent.hand" :key="card.id">
          <div class="card mb-3" :id="card.id" @click="setActiveCard(card.id)">
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
      <h3 class="text-primary">{{activeOpponent.name}} &nbsp&nbsp Cards Remaining: {{activeOpponent.remainingCards}}</h3>
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
      // resetActiveCard() {
      //   if (!this.activeCardId) {
      //     return
      //   }
      //   document.getElementById(this.activeCardId).classList.remove("active-card")
      //   this.activeCard = ''
      // }
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
    outline: 4px solid green;
  }

  .card-header {
    font-size: 1.2rem;
    height: 60px;
  }
</style>