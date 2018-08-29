<template>
  <div id="app">
    <!--<blog-header></blog-header>-->
    <router-view></router-view>
  </div>
</template>

<script>
// import blogHeader from './components/blogHeader'
export default {
  name: 'App',
  comments: {
    // blogHeader

  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
