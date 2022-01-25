<template>
  <SaveScoreButton />
  <h1>This is the results page</h1>
  <div class="results" v-if="questions.value">
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

const store = useStore();
const questions = computed(() => store.getters.getQuestions);
</script>
