<template>
  <SaveScoreButton @onSave="onSave"/>
  <button class="back-button" @click="onSave">Back to Start</button>
  <h1>You scored: {{ user.score }} point{{ user.score > 1 ? "s" : "" }}</h1>
  <h3>See how you did below</h3>

  <div class="results">
    <QuestionElement
      v-for="(data, index) in questions"
      :key="data.question"
      :data="data"
      :showanswer="true"
      :index="Number(index)"
    />
  </div>
</template>

<script setup>
import QuestionElement from "@/components/QuestionElement.vue";
import { useStore } from "vuex";
import { computed } from "vue";
import SaveScoreButton from "../components/SaveScoreButton.vue";
import router from "../router";

const store = useStore();
const questions = computed(() => store.getters.getQuestions);
const user = computed(() => store.getters.getUser);

const onSave = () => {
  router.push('/');
}
</script>

<style scoped>
.back-button {
  padding: 16px;
  margin: 16px;
  font-size: 14px;
  background-color: hsl(224, 100%, 53%)
}
</style>
