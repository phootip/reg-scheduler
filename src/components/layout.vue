<template>
  <section :class="{ hasHeadPadding: $slots.head }">
    <slot name="head"></slot>
    <slot></slot>
  </section>
</template>

<script>
export default {
  name: 'Layout',
};
</script>

<style scoped>
.hasHeadPadding {
  padding-top: 3.25rem;
}
</style>
