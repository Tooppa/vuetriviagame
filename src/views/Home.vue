<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <StartForm/>
  </div>
</template>

<script>
// @ is an alias to /src
import StartForm from '@/components/StartForm.vue'

export default {
  name: 'Home',
  components: {
    StartForm
  }
}
</script>
