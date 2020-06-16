<template>
  <div 
    class="artwork"
  >
    <img class="artwork_image" :src="data.url" alt="">
    <div 
      class="artwork_overlay"
      @mouseenter="mouseE"
      v-bind:class="{ invis: active }"
    >
      <div class="artwork_overlay_inner">
        <div>{{data.name}}</div>
        <div>{{data.user}}</div>
      </div>
      <div class="artwork_overlay_inner">
        <div></div>
        <div></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'art',
    d: {
      active: false
    },
    props: ['data'],
    methods: {
      mouseE() {
        this.active = !this.active
      }
    }
  }
</script>

<style lang="scss" scoped>

.artwork {
  position: relative;
  width: 25%;
  transition: all 0.3s linear;
  z-index: 0;
  :hover {
    transform: scale(1.1);
    z-index: 1;
  }
}


.artwork_image {
  max-width: 100%;
}

.artwork_overlay {
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  // z-index: 1;
  display: none;

}

.artwork_overlay_inner {
  display: flex;
  justify-content: space-between;
}

.invis {
  display: none;
}

</style>