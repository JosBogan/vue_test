<template>
  <div id="app">
      <TopNavbar />
      <main class="main_container">
        <router-view></router-view>
      </main>
  </div>
</template>

<script>

import TopNavbar from './components/TopNavbar'

export default {
  name: 'app',
  components: {
    TopNavbar
  },
  data() {
    return {
      message: 'Hello',
      second: 'hello2'
    }
  }
}
</script>

<style>

  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  overscroll-behavior: none;
}

  #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

  .main_container {
    min-height: 100vh;
    background-color: #2c3e50;
    padding-top: 60px;
  }

</style>
