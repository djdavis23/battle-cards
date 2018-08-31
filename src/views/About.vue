<template>
  <div class="about container">
    <div class="row">
      <div class="col-md-6 offset-md-3">
        <h1 class="text-primary">About Battle <img class="logo" src="../assets/logo.png" height="100px" alt="Vue Logo">ue</h1>
        <p class="text-success details">This is a simple card game built by the Boise Codeworks faculty. To start, just enter
          your name and select the number of opponents you wish to battle. You may fight up to 4 opponents at a time. You
          may also choose from one of four card decks with different graphics. Once you submit your choices the game begins.
          If you are battling more than one opponent, simply select the button of the adversary which you want to attack.
          Adversary cards are dealt face down and revealed once they have been attacked. To commence an attack, select an
          opponent card, then select one of your cards and click on the "FIGHT!" button. The two cards simulatenously attack
          each other. The cards have health, attack and defense levels printed on them. Any incoming attack in excess of
          a card's defense value will decrement its health. Once a card reaches zero health, it is considered dead and removed
          from the game. Each player is dealt tens cards to start the game. The last player with cards remaining is the winner.</p>
        <p class="text-primary details">This game was built during Week 6 of the Boise Codeworks Full-Stack Immersive Course.
          The purpose was to gain experience using Vue.js as a front-end framework. The application utilizes an API built
          by the Boise Codeworks faculty and hosted on Heroku. Graphics are downloaded from Robohash.org</p>
      </div>
    </div>
  </div>
</template>


<script>
  export default {

  }

</script>


<style>
  .details {
    font-size: 1rem;
  }
</style>