<template>
  <div id="app">
    {{ message }}
    <HelloWorld v-bind:msg='second' />
  </div>
</template>

<script>

import HelloWorld from './components/HelloWorld'

export default {
  name: 'fds',
  components: {
    HelloWorld
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
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
