<template>
  <div class="home container">
    <Opponents />
    <div class="row game-control mb-5">
      <div class="col-md-12">
        <h2 class="text-success">Welcome D2 Card Duel</h2>
        <form @submit="startGame">
          <label for="player-name"><h4 class="text-primary">Name:</h4>
            <input class="form-control-lg" type="text" name="player-name" placeholder="Enter Player Name" />&nbsp
          </label>
          <label for="num-opponents"><h4 class="text-primary">Select Number of opponents: </h4>
            <select class="form-control-lg" name="num-opponents">
              <option value="1">1</option>
              <!-- <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option> -->
            </select>
          </label><br>
          <label for="deck"><h4 class="text-primary">Choose your card deck:</h4><br>
            <input class="form-control-lg" type="radio" name="deck" value="1"><img src="../assets/deck1.png" height="75"
              alt="" />&nbsp
            <input class="form-control-lg" type="radio" name="deck" value="2"><img src="../assets/deck2.png" height="75"
              alt="" />&nbsp
            <input class="form-control-lg" type="radio" name="deck" value="3"><img src="../assets/deck3.png" height="75"
              alt="" />&nbsp
            <input class="form-control-lg" type="radio" name="deck" value="4"><img src="../assets/deck4.png" height="75"
              alt="" />

          </label>


        </form>
        </h1>
      </div>
    </div>
    <Player />
  </div>
</template>

<script>
  // @ is an alias to /src
  import Opponents from "@/components/Opponents.vue";
  import Player from "@/components/Player.vue";

  export default {
    name: 'home',
    components: {
      Opponents,
      Player
    },
    data() {
      return {

      }
    },

    methods: {
      startGame() {

      }

    },

    computed: {

    }
  }
</script>

<style scoped>
</style>