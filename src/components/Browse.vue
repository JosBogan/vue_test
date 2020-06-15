<template>
  <div> 
    {{console.log(data)}}
    <!-- <div v-for="art in data" :key="art.name">
    <div>{{art.name}}</div>
    </div> -->
  </div>
</template>

<script>

import data from '../assets/data'
// console.log(data)

  export default {
    name: 'Browse',
    state: {
      data
    }
  }
</script>

<style lang="scss" scoped>

</style>