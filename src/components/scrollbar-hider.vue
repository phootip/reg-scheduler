<template>
  <div class="scrollbar-hider">
    <div
      class="scrollbar-hidden"
      ref="container"
      :style="{ marginRight: -scrollbarWidth + 'px' }"
    >
      <slot></slot>
      <div class="fade-overlay"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ScrollbarHider',
  data() {
    return {
      offsetWidth: 17,
      clientWidth: 0,
    };
  },
  computed: {
    scrollbarWidth() {
      return this.offsetWidth - this.clientWidth;
    },
  },
  mounted() {
    this.$nextTick(function setWidthProperties() {
      this.offsetWidth = this.$refs.container.offsetWidth;
      this.clientWidth = this.$refs.container.clientWidth;
    });
  },
};
</script>

<style scoped>
  .scrollbar-hider {
    position: relative;
    height: 100%;
    width: 100%;
    overflow: hidden
  }
  .scrollbar-hidden {
    height: 100%;
    overflow-y: scroll;
    -ms-overflow-style: none;
  }
  .scrollbar-hidden::-webkit-scrollbar {
    width: 0;
    background: transparent;
  }
  .fade-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1.5rem;
    background-image: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0),
      white 100%
    );
    pointer-events: none;
  }
</style>
