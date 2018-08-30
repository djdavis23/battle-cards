<template>
  <div class="player row">
    <div class="col-md-12">
      <h3>{{player.name}} &nbsp&nbsp Cards Remaining: {{player.remainingCards}}</h3>
      <div class="col-md-12"></div>
      <div class="hand row justify-content-center">
        <div class="col-md-2" v-for="card in player.hand" :key="card.id">
          <div class="card mb-3" :id="card.id" @click="setActiveCard(card.id)">
            <h5 class=" card-header ">{{card.name}}</h5>
            <img style="height: 100px; width: 100%; display: block; " :src="card.img " alt="Card image ">
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
    name: 'Player',
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
        this.$emit("setPlayerCard", cardId)
      }
    },

    computed: {
      player() {
        return this.$store.state.game.players[0]
      }
    }

  }
</script>

<!-- Add "scoped " attribute to limit CSS to this component only -->
<style scoped>
  .card:hover {
    cursor: pointer;
    outline: 1px solid yellow;
  }

  .active-card {
    outline: 1px solid green;
  }
</style>