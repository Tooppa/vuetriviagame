<template>
  <div class="hello">
    <h2>{{ data.question }}</h2>
    <form action="">
      <div v-for="answer in answers" :key="answer.id">
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
  data(){
    let allAnswers = this.data.incorrect_answers;
    allAnswers.push(this.data.correct_answer);
    return{
        answers: allAnswers
    }
  }
};
</script>

<style>
</style>