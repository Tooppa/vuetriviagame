<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <StartScreen msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import StartScreen from '@/components/StartScreen.vue'

export default {
  name: 'Home',
  components: {
    StartScreen
  }
}
</script>
