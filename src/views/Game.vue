<template>
  <div class="home container">
    <div class="game-initiate row">
      <div class="col-md-12 flex">
        <div class="mb-5 pb-5 mt-5 pt-5">
          <h2 class="text-success title">BATTLE <img class="logo" src="../assets/logo.png" height="250px" alt="Vue Logo">UE</h2>
        </div>
        <div class="mt-5 pt-5">
          <form @submit.prevent="startGame">
            <div class="form-group">
              <label for="player-name"><h4 class="text-primary">Name: &nbsp </h4></label>
              <input class="form-control-lg" v-model="gameConfig.playerName" type="text" name="player-name" placeholder="Enter Player Name"
              />&nbsp
              <label for="opponents"><h4 class="text-primary"> &nbsp Select Number of opponents: &nbsp </h4></label>
              <select class="form-control-lg" v-model="gameConfig.opponents" name="opponents">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select><br>
            </div>

            <label for="deck"><h4 class="text-primary mt-5 mb-3">Choose your card deck:</h4>
              <div class="check">
                <input class="form-control-lg" type="radio" name="deck" v-model="gameConfig.set" value=1><img src="../assets/deck1.png"
                  height="125" alt="" />
              </div>
              <div class="check">
                <input class="form-control-lg ml-5" type="radio" name="deck" v-model="gameConfig.set" value=2><img src="../assets/deck2.png"
                  height="125" alt="" />
              </div>
              <div class="check">
                <input class="form-control-lg ml-5" type="radio" name="deck" v-model="gameConfig.set" value=3><img src="../assets/deck3.png"
                  height="125" alt="" />&nbsp
              </div>
              <div class="check">
                <input class="form-control-lg ml-5" type="radio" name="deck" v-model="gameConfig.set" value=4><img src="../assets/deck4.png"
                  height="125" alt="" /><br>
              </div>
            </label><br>
            <button class="btn btn-success btn-lg mt-5 text-primary" type="submit">START GAME</button>
          </form>
        </div>
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
    name: "game",

    data() {
      return {
        gameConfig: {
          playerName: "",
          opponents: 0,
          set: 0
        }
      };
    },

    methods: {
      startGame(gameConfig) {
        this.$store.dispatch("startGame", this.gameConfig);
      }
    },

    computed: {}
  };
</script>

<style scoped>
  .title {
    font-size: 8rem;
    font-weight: bolder;
    font-style: italic;
    text-shadow: 5px 5px 3px rgb(49, 156, 142);
  }

  .check {
    display: inline-block;
  }

  button {
    font-weight: bolder;
    font-size: 2em;
  }
</style>