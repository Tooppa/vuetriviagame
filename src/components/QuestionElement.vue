<template>
  <div class="hello">
    <h2>{{ data.question }}</h2>
    <form action="">
      <div v-for="answer in data.incorrect_answers" :key="answer.id">
        <input type="radio" id="" name="" value="" />
        <label for="">{{answer}}</label><br />
      </div>
      <input type="submit" value="Submit" />
    </form>
  </div>
</template>

<script>
export default {
  name: "QuestionElement",
  props: ["data"],
};
</script>

<style>
</style>