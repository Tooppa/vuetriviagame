<template>
  <div class="home">
    <div class="homeElement">
      <h1>Trivia Game</h1>
      <img alt="Vue logo" src="../assets/logo.svg" />
    </div>
    <StartForm class="homeElement" />
  </div>
</template>

<script setup>
import StartForm from "@/components/StartForm.vue";
</script>

<style scoped>
.home {
  padding-top: 50px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: auto;
  max-width: 900px;
}
.homeElement {
  max-width: 600px;
  flex-grow: 1;
}

img {
  width: 512px;
}

@media screen and (max-width: 910px){
  .home{
    max-width: 600px;
  }
}
</style>
