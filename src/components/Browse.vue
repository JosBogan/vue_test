<template>
  <div class="browse_container"> 
    <Container 
      v-for="art in data" 
      v-bind:key="art.id"
      v-bind:data="art"
    />
  </div>
</template>

<script>

import data from '../assets/data'
import Container from './art/Container'

  export default {
    name: 'Browse',
    components: {
      Container
    },
    // computed: {
    //   data() {
    //     return this.store.state.data
    //   }
    // },
    data() {
      return {
        data
      }
    } 
    // state: {
      // data: this.$store.state.data
    // }
  }
</script>

<style lang="scss" scoped>

.browse_container {
  color: whitesmoke;
  display: flex;
  flex-direction: column;
  max-height: 1500px;
  flex-wrap: wrap;

}

</style>