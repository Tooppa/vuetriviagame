<template>
  <div class="hello">
    <h2>{{ data.question }}</h2>
    <button
      v-for="answer in answers"
      :key="answer"
      @click="handleClick(answer)"
    >
      {{ answer }}
    </button>
  </div>
</template>

<script>
export default {
  name: "QuestionElement",
  props: ["data"],
  data() {
    let allAnswers = this.data.incorrect_answers;
    // adds correct answer in the wrong answer array. in the future add this to the endpoint
    allAnswers.splice(Math.floor(Math.random() * allAnswers.length), 0, this.data.correct_answer);
    return {
      answers: allAnswers,
      handleClick: (clicked) => {
        console.log(
          clicked == this.data.correct_answer
            ? "You answered correctly"
            : "You answered incorrectly"
        );
      },
    };
  },
};
</script>

<style>
</style>