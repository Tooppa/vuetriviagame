<template>
  <div class="hello">
    <!-- <h1 v-if="questions.value.length > 0" >{{questions.value[0].question}}</h1> -->
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';

import { fetchQuestions } from '@/endpoints/trivia/triviaApi';

const questions = ref(await fetchQuestions(1));

onMounted(async () => {
  // questions.value = ;
  console.log(questions.value[0]);
});
</script>

<style>
</style>