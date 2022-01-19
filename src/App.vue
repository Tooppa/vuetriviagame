<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <StartScreen/>
</template>

<script>
import StartScreen from './components/StartScreen.vue'

export default {
  name: 'App',
  components: {
    StartScreen
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
