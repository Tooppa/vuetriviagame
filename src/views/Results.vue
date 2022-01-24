<template>
  <div class="results">
    <h1>This is the results page</h1>
    <QuestionElement v-for="data in questions" :key="data.question" :data="data" :showanswer="true"/>
  </div>
</template>

<script setup>
import QuestionElement from "@/components/QuestionElement.vue";
import {useStore} from 'vuex'
import {computed} from 'vue'

const store = useStore();
const questions = computed(() => store.getters.getQuestions);
</script>
