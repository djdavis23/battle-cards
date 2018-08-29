<template>
  <div class="home container">
    <div class="game-initiate row">
      <div class="col-md-12">
        <h2 class="text-success">Welcome to Battle Vue!</h2>
        <form @submit.prevent="startGame">
          <label for="player-name"><h4 class="text-primary">Name:</h4>
            <input class="form-control-lg" v-model="gameConfig.playerName" type="text" name="player-name" placeholder="Enter Player Name"
            />&nbsp
          </label>
          <label for="opponents"><h4 class="text-primary">Select Number of opponents: </h4>
            <select class="form-control-lg" v-model="gameConfig.opponents" name="opponents">
              <option value="1">1</option>
              <!-- <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option> -->
            </select>
          </label><br>
          <label for="deck"><h4 class="text-primary">Choose your card deck:</h4><br>
            <input class="form-control-lg" type="radio" name="deck" v-model="gameConfig.set" value=1><img src="../assets/deck1.png"
              height="75" alt="" />&nbsp
            <input class="form-control-lg" type="radio" name="deck" v-model="gameConfig.set" value=2><img src="../assets/deck2.png"
              height="75" alt="" />&nbsp
            <input class="form-control-lg" type="radio" name="deck" v-model="gameConfig.set" value=3><img src="../assets/deck3.png"
              height="75" alt="" />&nbsp
            <input class="form-control-lg" type="radio" name="deck" v-model="gameConfig.set" value=4><img src="../assets/deck4.png"
              height="75" alt="" />
          </label><br>
          <button class="btn btn-danger btn-lg" type="submit">START GAME</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  // import Opponents from "@/components/Opponents.vue";
  // import Player from "@/components/Player.vue";
  // import GameControl from '@/components/GameControl.vue'

  export default {
    name: 'game',
    components: {
      // Opponents,
      // Player,
      // GameControl
    },
    data() {
      return {
        gameConfig: {
          playerName: '',
          opponents: 0,
          set: 0
        }
      }
    },

    methods: {
      startGame(gameConfig) {
        this.$store.dispatch('startGame', this.gameConfig)
      }

    },

    computed: {

    }
  }

</script>

<style scoped>
</style>