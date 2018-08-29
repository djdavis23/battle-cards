<template>
  <div class="active-game container">
    <Opponents />
    <h1>Ready to Fight</h1>
    <Player />
  </div>
</template>

<script>
  import Opponents from '@/components/Opponents.vue'
  import Player from '@/components/Player.vue'

  export default {
    mounted() {
      let gameId = this.$route.params.gameId
      if (!this.activeGame.id) {
        this.$store.dispatch('getGame', gameId)
      }
    },

    components: {
      Player,
      Opponents
    },

    computed: {
      activeGame() {
        return this.$store.state.game
      }
    }
  }
</script>


<style>
</style>