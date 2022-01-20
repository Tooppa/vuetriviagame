<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <StartForm/>
  </div>
</template>

<script>
import StartForm from '@/components/StartForm.vue'

export default {
  name: 'Home',
  components: {
    StartForm
  }
}
</script>
