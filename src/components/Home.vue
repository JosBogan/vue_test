<template>
  <div class="home_container">
    <h1 class="home_title">
    Home
    </h1>
  </div>
</template>

<script>
  export default {
    name: 'Home'
  }
</script>

<style lang="scss" scoped>

.home_container {
  height: calc(100vh - 60px);
  display: flex;
  justify-content: center;
  align-items: center;
  color: whitesmoke;
  .home_title {
    font-weight: 400;
    font-size: 80px;
  }
}

</style>