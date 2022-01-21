<template>
  <div class="questions">
    <h1>This is a questions page</h1>
    <QuestionElement v-for="data in questions" :key="data.id" :data="data" />
  </div>
</template>

<script>
import QuestionElement from "@/components/QuestionElement.vue";
import { fetchQuestions } from "@/endpoints/trivia/triviaApi";


export default {
  name: "Question",
  components: {
    QuestionElement,
  },
  data() {
    return {
      questions: null,
    };
  },
  mounted(){
    fetchQuestions(1)
      .then(data => this.questions = data)
      .catch(err => console.log(err.message))
  }
};
</script>
