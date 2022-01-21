<template>
  <div class="hello">
    <h2>{{ data.question }}</h2>
    <div id="buttons">
      <button
        v-for="a in answers"
        :key="a.answer"
        :class= "{show: a.show}"
        @click="handleClick(a)"
      >
        {{ a.answer }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "QuestionElement",
  props: ['data','showanswer'],
  data() {
    let allAnswers = this.data.incorrect_answers.map((answer) => {
      return {
        answer: answer,
        show: false,
      };
    });
    // adds correct answer in the wrong answer array. in the future add this to the endpoint
    allAnswers.splice(Math.floor(Math.random() * allAnswers.length), 0, {
      answer: this.data.correct_answer,
      show: this.showanswer ? true : false,
    });
    console.log(this.showanswer ? true : false);
    return {
      answers: allAnswers,
      handleClick: (clicked) => {
        console.log(
          clicked.answer == this.data.correct_answer
            ? "You answered correctly"
            : "You answered incorrectly"
        );
      },
    };
  },
};
</script>

<style scoped>
#buttons {
  display: flex;
  flex-direction: column;
  margin-left: 30vw;
  margin-right: 30vw;
}
button {
  margin: 10px;
  padding: 10px;
}
.show{
  background-color: aquamarine;
}
</style>