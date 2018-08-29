<template>
  <div class="game-initiate row">
    <div class="col-md-12">
      <h2 class="text-success">Welcome D2 Card Duel</h2>
      <form @submit.prevent="startGame">
        <label for="player-name"><h4 class="text-primary">Name:</h4>
          <input class="form-control-lg" v-model="playerName" type="text" name="player-name" placeholder="Enter Player Name" />&nbsp
        </label>
        <label for="opponents"><h4 class="text-primary">Select Number of opponents: </h4>
          <select class="form-control-lg" v-model="opponents" name="opponents">
            <option value="1">1</option>
            <!-- <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option> -->
          </select>
        </label><br>
        <label for="deck"><h4 class="text-primary">Choose your card deck:</h4><br>
          <input class="form-control-lg" type="radio" name="deck" v-model="set" value="1"><img src="../assets/deck1.png"
            height="75" alt="" />&nbsp
          <input class="form-control-lg" type="radio" name="deck" v-model="set" value="2"><img src="../assets/deck2.png"
            height="75" alt="" />&nbsp
          <input class="form-control-lg" type="radio" name="deck" v-model="set" value="3"><img src="../assets/deck3.png"
            height="75" alt="" />&nbsp
          <input class="form-control-lg" type="radio" name="deck" v-model="set" value="4"><img src="../assets/deck4.png"
            height="75" alt="" />
        </label>
      </form>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'GameInitiate',
    props: [],
    data() {
      return {
        playerName: '',
        opponents: '',
        set: ''
      }
    },

    methods: {
      startGame() {
        let gameConfig = {
          playerName: this.playName,
          opponents: this.opponents,
          set: this.set
        }
        this.$emit('startGame', gameConfig)
      }
    },

    computed: {

    }

  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>