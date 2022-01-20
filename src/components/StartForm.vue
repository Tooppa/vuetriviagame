<template>
  <div class="hello">
    <h1>Welcome to vue trivia app</h1>
    <form action="" method="push">
      <label for="uname">Username:</label>
      <br />
      <input type="text" id="uname" name="uname" />
      <br />
      <input type="submit" value="Submit" />
    </form>
  </div>
</template>

<script>
export default {
  name: "StartForm",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
