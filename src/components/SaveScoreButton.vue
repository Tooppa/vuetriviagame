<template>
    <button @click="saveScore" v-if="user.score > user.highscore">Press me</button>
</template>

<script setup>
import { useStore } from 'vuex';
import { computed } from 'vue';

const store = useStore();
const user = computed(() => store.getters.getUser);

console.log('user highscore',user);

</script>

<style>
</style>