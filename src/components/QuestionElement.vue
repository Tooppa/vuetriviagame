<template>
  <div class="question">
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
import { defineProps, computed } from "vue";
import { useStore } from "vuex";
const store = useStore();
const props = defineProps({
  data: Object,
  showanswer: Boolean,
});
let allAnswers = computed(() => {
  let data = props.data.incorrect_answers.map((answer) => {
    return {
      answer: answer,
      show: false,
    };
  });
  // adds correct answer in the wrong answer array. in the future add this to the endpoint
  data.splice(Math.floor(Math.random() * (data.length + 1)), 0, {
    answer: props.data.correct_answer,
    show: props.showanswer ? true : false,
  });
  return data;
});
const handleClick = (clicked) => {
  if (clicked.answer == props.data.correct_answer) {
    store.commit('setScore', 1);
    if (!store.getters.checkIfLastQuestion) {
      store.dispatch("nextQuestion");
    }else{
      console.log('all questions answered');
    }
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
</style>