<template>
  <div>
    <!-- Username -->
    <div :class="[user.name === '' ? '' : 'hidden']">
      <p class="m-0 t-l">Username</p>
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
    <div class="m-1-rem">
      <p class="m-0">Difficulty</p>
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
    <div class="m-1-rem">
      <p class="m-0">Number of questions</p>
      <input type="number" v-model="numberOfQuestions" />
    </div>
    <!-- Categories -->
    <div class="m-1-rem">
      <p class="m-0">Categories</p>
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
    <div class="m-1-rem">
      <button
        class="btn"
        @click="onUsernameSubmit"
        v-bind:class="[isLoading ? 'btn-disabled' : '']"
      >
        Submit
      </button>
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
    username.value.length > 0 &&
    numberOfQuestions.value > 0 &&
    selectedDifficulty.value !== "" &&
    selectedCategory.value !== ""
  ) {
    isLoading.value = true;
    const res = await create(username.value);
    const param = {
      amount: numberOfQuestions.value,
      category: selectedCategory.value.id,
      difficulty: selectedDifficulty.value,
    };
    store.commit("setSettings", param);
    store.dispatch("fetch");

    store.commit("setUser", {
      ...res,
      score: 0,
    });
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

.btn {
  padding: 15px 35px;
  margin: 5px;
  font-size: 24px;
}

.btn-disabled {
  background-color: red;
}

/* Utities */
.hidden {
  display: none;
}

.m-1-rem {
  margin: 1rem;
}

.m-0 {
  margin: 0;
}

.p-0 {
  padding: 0;
}

.t-l {
  font-size: x-large;
}

.t-xl {
  font-size: x-large;
}
</style>
