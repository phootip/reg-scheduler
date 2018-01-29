<template>
  <div id="app" class="is-fullheight is-overlay">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
  @media screen and (min-width: 1024px){
    #app {
      overflow: hidden;
    }
  }
</style>
