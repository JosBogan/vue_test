<template>
  <nav class="navbar">
    <div class="button_container">
      <NavButton 
        v-bind:text="'Logo'"
        v-bind:url="'/'"
      />
    </div>
    <div class="button_container">
      <NavButton 
        v-bind:text="'Browse'"
        v-bind:url="'/browse'"
      />
      <NavButton 
        v-bind:text="'Search'"
        v-bind:url="'/'"
      />
      <NavButton 
        v-bind:text="'Home'"
        v-bind:url="'/'"
      />
    </div>
  </nav>
</template>

<script>

import NavButton from './micro/NavButton'

  export default {
    name: 'TopNavbar',
    components: {
      NavButton
    }
  }
  
</script>

<style lang="scss">

  .navbar {
    display: flex;
    justify-content: space-between;
    height: 60px;
    padding: 0 30px;
    width: 100%;
    position: fixed;
    border-bottom: 1px solid whitesmoke;
    /* top: 0; */
    z-index: 2;
    .button_container {
      display: flex;
    }
  }

</style>