<template>
  <div class="scrollbar-hider">
    <div
      class="scrollbar-hidden"
      ref="container"
      :style="{ marginRight: -scrollbarWidth + 'px' }"
    >
      <slot></slot>
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
</style>
