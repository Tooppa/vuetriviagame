<template>
  <div class="home">
    <h1>Trivia Game</h1>
    <img alt="Vue logo" src="../assets/logo.svg">
    <StartForm/>
  </div>
</template>

<script setup>
import StartForm from '@/components/StartForm.vue'
</script>

<style scoped>

.home {
  margin-top: 2rem;
}

img {
  width: 512px;
}
</style>
