<template>
  <section class="hero is-fullheight is-overlay">
    <div class="hero-head" v-show="$slots.head">
      <slot name="head"></slot>
    </div>
    <div class="hero-body">
      <slot></slot>
    </div>
    <div class="hero-foot" v-show="$slots.foot">
      <slot name="foot"></slot>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Layout',
};
</script>
