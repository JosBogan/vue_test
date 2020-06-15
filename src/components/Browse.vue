<template>
  <div class="browse_container"> 
    <!-- {{console.log(state.data)}} -->cd
    <div v-for="art in data" :key="art.name">
    <div>{{art.name}}dfsa</div>
    </div>
  </div>
</template>

<script>

import data from '../assets/data'
// console.log(data)

  export default {
    name: 'Browse',
    props: [data]
  }
</script>

<style lang="scss" scoped>

.browse_container {
    color: whitesmoke;
}

</style>