<template>
  <div class="results">
    <h1>This is the results page</h1>
    <QuestionElement v-for="data in questions" :key="data.question" :data="data" showanswer="true"/>
  </div>
</template>

<script>
import QuestionElement from "@/components/QuestionElement.vue";
import { fetchQuestions } from "@/endpoints/trivia/triviaApi";


export default {
  name: "Results",
  components: {
    QuestionElement,
  },
  data() {
    return {
      questions: null
    };
  },
  mounted(){
    fetchQuestions(4)
      .then(data => this.questions = data)
      .catch(err => console.log(err.message))
  }
};
</script>
