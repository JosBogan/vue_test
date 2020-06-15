<template>
<router-link
  :to="url"
  class="nav_button"
>
    {{ text }}
  </router-link>
</template>

<script>
export default {
  name: 'NavButton',
  props: {
    text: String,
    url: String,
  }
}
</script>

<style lang="scss" scoped>

  .nav_button {
    color: whitesmoke;
    height: 100%;
    width: 100px;
    background: none;
    border: none;
    font-weight: 800;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 15px;
    transform-origin: center;
    transition: all 0.2s;
    text-decoration: none;
    &:hover {
      cursor: pointer;
      transform: scale(1.1)
    }
  }

</style>