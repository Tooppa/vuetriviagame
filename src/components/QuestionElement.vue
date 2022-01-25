<template>
  <div class="question">
    <h2>{{ formatHtml(data.question) }}</h2>
    <div id="buttons">
      <button
        v-for="a in allAnswers"
        :key="a.answer"
        :class="{ show: a.show, wrongAnswer: a.incorrect }"
        :disabled="showanswer"
        @click="handleClick(a)"
      >
        {{ formatHtml(a.answer) }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { defineProps, computed } from "vue";
import { useStore } from "vuex";
import router from "../router";

//formatter
const formatHtml = (text) => {
  let parser = new DOMParser();
  let dom = parser.parseFromString("<!doctype html><body>" + text, "text/html");
  return dom.body.textContent;
};

const store = useStore();
const props = defineProps({
  data: Object,
  showanswer: Boolean,
  index: Number,
});
const storedAnswers = store.getters.getAnswers;
const checkIfInStoredAnswers = (answer) => {
  return (
    storedAnswers &&
    storedAnswers.includes(answer) &&
    storedAnswers.indexOf(answer) == props.index
  );
};
let allAnswers = computed(() => {
  let data = props.data.incorrect_answers?.map((answer) => {
    return {
      answer: answer,
      show: false,
      incorrect: checkIfInStoredAnswers(answer),
    };
  });
  // adds correct answer in the wrong answer array. in the future add this to the endpoint
  data?.splice(Math.floor(Math.random() * (data.length + 1)), 0, {
    answer: props.data.correct_answer,
    show: props.showanswer ? true : false,
    incorrect: false,
  });
  return data;
});
const handleClick = (clicked) => {
  store.commit("setAnswer", clicked.answer);
  if (clicked.answer == props.data.correct_answer) {
    store.commit("setScore", 1);
  }
  if (!store.getters.checkIfLastQuestion) {
    store.dispatch("nextQuestion");
  } else {
    //all questions are answered
    router.push("/results");
    return;
  }
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
.wrongAnswer {
  background-color: red;
}
</style>