<template>
  <div class="questions">
    <h1>This is a questions page</h1>
    <QuestionElement :data="question" />
  </div>
</template>

<script setup>
import QuestionElement from "@/components/QuestionElement.vue";
import {useStore} from 'vuex'
import {computed} from 'vue'

const store = useStore();
const question = computed(() => store.getters.getCurrentQuestion);
</script>
