<template>
  <button @click="saveScore">Save score</button>
</template>

<script setup>
import { useStore } from "vuex";
import { computed, defineEmits } from "vue";
import { find } from "../endpoints/users/usersApi";

const store = useStore();
const user = computed(() => store.getters.getUser);

const emit = defineEmits(['onSave']);

const saveScore = async () => {
  const foundUser = await find(user.value.name);
  if (foundUser) {
    let canOverride = confirm(
      `You are about to override ${user.value.name}'s highscore. Are you sure?`
    );
    if (canOverride) {
      store.dispatch("updateUser");
      emit('onSave');
    }
  }
};
</script>

<style scoped>
button {
  margin: 16px;
  padding: 16px;
  font-size: 16px;
}
</style>
