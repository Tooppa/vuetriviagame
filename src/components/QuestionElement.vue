<template>
  <div class="hello">
    <h2>Question</h2>
    <!-- <h1 v-if="questions.value.length > 0" >{{questions.value[0].question}}</h1> -->
    <p>{{ question }}</p>
    <input type="radio" id="html" name="fav_language" value="HTML" />
    <label for="html">HTML</label><br />
    <input type="radio" id="css" name="fav_language" value="CSS" />
    <label for="css">CSS</label><br />
    <input
      type="radio"
      id="javascript"
      name="fav_language"
      value="JavaScript"
    />
    <label for="javascript">JavaScript</label>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue';

import { fetchQuestions } from '@/endpoints/trivia/triviaApi';

const questions = ref(fetchQuestions(1));

onMounted(async () => {
  // questions.value = ;
  console.log(questions.value[0]);
});

export default {
  name: "QuestionElement",
  props: ["question"],
};
</script>

<style>
</style>