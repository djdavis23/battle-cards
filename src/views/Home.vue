<template>
  <div class="home container">
    <Opponents />
    <GameInitiate v-if="!gameStarted" v-on:startGame="initiateGame" />
    <GameControl v-if="gameStarted" />
    <Player />
  </div>
</template>

<script>
  // @ is an alias to /src
  import Opponents from "@/components/Opponents.vue";
  import Player from "@/components/Player.vue";
  import GameInitiate from '@/components/GameInitiate.vue';
  import GameControl from '@/components/GameControl.vue'

  export default {
    name: 'home',
    components: {
      Opponents,
      Player,
      GameInitiate,
      GameControl
    },
    data() {
      return {

      }
    },

    methods: {
      initiateGame(gameConfig) {
        this.$store.dispatch('initiateGame', gameConfig)
      }

    },

    computed: {
      gameStarted() {
        return this.$store.state.gameStarted
      }
    }
  }
</script>

<style scoped>
</style>