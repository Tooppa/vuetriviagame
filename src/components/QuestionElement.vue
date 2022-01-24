<template>
  <div class="hello">
    <h2>{{ data.question }}</h2>
    <div id="buttons">
      <button
        v-for="a in allAnswers"
        :key="a.answer"
        :class="{ show: a.show }"
        @click="handleClick(a)"
      >
        {{ a.answer }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
const props = defineProps({
  data: Object,
  showanswer: Boolean
})
let allAnswers = props.data.incorrect_answers.map((answer) => {
  return {
    answer: answer,
    show: false,
  };
});
// adds correct answer in the wrong answer array. in the future add this to the endpoint
allAnswers.splice(Math.floor(Math.random() * allAnswers.length), 0, {
  answer: props.data.correct_answer,
  show: props.showanswer ? true : false,
});
const handleClick = (clicked) => {
  console.log(
    clicked.answer == props.data.correct_answer
      ? "You answered correctly"
      : "You answered incorrectly"
  );
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
.show {
  background-color: aquamarine;
}
</style>