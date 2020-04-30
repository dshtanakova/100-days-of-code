<template>
  <div id="app">
    <navbar/>
    <router-vue/>
  </div>
</template>


<script>

import Navigation from './components/Navigation';

export default {
  name: 'app',
  components: {
    "navbar": Navigation
  }
}


</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body {
  background: red
}
</style>

