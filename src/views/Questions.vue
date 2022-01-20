<template>
  <div class="questions">
    <h1>This is a questions page</h1>
    <QuestionElement/>
  </div>
</template>

<script>
import QuestionElement from '@/components/QuestionElement.vue'

export default {
  name: 'Question',
  components: {
    QuestionElement
  }
}
</script>
