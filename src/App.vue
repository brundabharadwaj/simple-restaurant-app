
<script>
// import SignUp from '../src/components/SignUp.vue'
// import HomePage from '../src/components/HomePage.vue'
export default {
  name : 'App',
  // components : {SignUp, HomePage}
}
</script>

<template>
<!-- <SignUp/> -->
<router-view></router-view>
</template>

<style>
body{
  padding: 0;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
