<template>
  <div class="hello">
    <h2>{{data.question}}</h2>
    <!-- <h1 v-if="questions.value.length > 0" >{{questions.value[0].question}}</h1> -->
    <p>{{ question }}</p>
    <input type="radio" id="html" name="fav_language" value="HTML" />
    <label for="html">HTML</label><br />
    <input type="radio" id="css" name="fav_language" value="CSS" />
    <label for="css">CSS</label><br />
    <input
      type="radio"
      id="javascript"
      name="fav_language"
      value="JavaScript"
    />
    <label for="javascript">JavaScript</label>
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