<template>
  <div class="form">
    <div class="element" :class="[user.name === '' ? '' : 'hidden']">
      <label>Username </label>
      <input
        class="name-input"
        type="text"
        v-model="username"
        placeholder="Enter username...."
      />
    </div>
    <div :class="[user.username !== '' ? '' : 'hidden']">
      <h1>{{user.username}}</h1>
    </div>
    <!-- Difficulty -->
    <div class="element">
      <label>Difficulty </label>
      <select v-model="selectedDifficulty">
        <option
          :value="diff"
          v-for="(diff, index) in Difficulties"
          :key="index"
        >
          {{ diff }}
        </option>
      </select>
    </div>
    <!-- Number of questions -->
    <div class="element">
      <label>Number of questions </label>
      <input type="number" v-model="numberOfQuestions" />
    </div>
    <!-- Categories -->
    <div class="element">
      <label>Categories </label>
      <select v-model="selectedCategory">
        <option
          :value="category"
          v-for="category in categories"
          :key="category.id"
        >
          {{ category.name }}
        </option>
      </select>
    </div>
    <!-- Submit -->
    <div class="element">
      <button @click="onUsernameSubmit" :disabled="isLoading">Submit</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import { create } from "../endpoints/users/usersApi";
import { Difficulties } from "../endpoints/trivia/difficulty";
import { fetchCategories, defaultCategory } from "../endpoints/trivia/triviaApi";
import { useStore } from "vuex";
import router from "../router";

const username = ref("");
const numberOfQuestions = ref(10);
const selectedDifficulty = ref(Difficulties[0]);
const selectedCategory = ref(defaultCategory);

let categories = ref([]);
const isLoading = ref(false);

const store = useStore();

const user = computed(() => store.getters.getUser);

const onUsernameSubmit = async () => {
  if (
    (username.value.length > 0 || user.value.name !== '') &&
    numberOfQuestions.value > 0 &&
    selectedDifficulty.value !== "" &&
    selectedCategory.value !== ""
  ) {
    isLoading.value = true;
    if (username.value.length > 0) {
      const res = await create(username.value);
      store.commit("setUser", {
        ...res,
        score: 0,
      });
    }  else {
      store.commit("setScore", 0);
    }
    const param = {
      amount: numberOfQuestions.value,
      category: selectedCategory.value.id,
      difficulty: selectedDifficulty.value,
    };
    store.commit("setSettings", param);
    store.dispatch("fetch");

    router.push("/questions");

    isLoading.value = false;
  } else {
    alert("all fields must be filled before starting the game");
  }
};

onMounted(async () => {
  categories.value = await fetchCategories();
});
</script>

<style scoped>
.name-input {
  padding: 14px;
  width: 256px;
}

select {
  padding: 6px;
  width: 150px;
}

.container {
  margin: 0;
  padding: 0;
  width: 75%;
}

.form {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}

.element {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  flex-grow: 1;
  padding: 10px;
}

.element > *{
  flex-grow: 1;
  margin: auto;
}

label{
  text-align: left;
}

button {
  padding: 15px 35px;
  margin: 5px;
  font-size: 24px;
}
button:disabled {
  background-color: red;
}
.hidden {
  display: none;
}
@media screen and (max-width: 910px){
  .home{
    max-width: 600px;
  }
}
</style>
