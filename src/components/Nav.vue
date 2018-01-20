<template>
  <nav class="navbar">
    <div class="container">
      <div class="navbar-brand">
        <router-link to="/" class="navbar-item">
          reg-scheduler
        </router-link>
        <div class="navbar-burger" :class="{ 'is-active': isMenuActive }" @click="toggleMenu">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div class="navbar-menu" :class="{ 'is-active': isMenuActive }">
        <a class="navbar-item">
          Link1
        </a>
        <a class="navbar-item">
          Link2
        </a>
        <div class="navbar-end">
          <router-link to="/about" class="navbar-item">
            About
          </router-link>
          <a href="https://github.com/phootip/reg-scheduler" target="_blank" class="navbar-item">
            GitHub
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Nav',
  data() {
    return {
      isMenuActive: false,
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuActive = !this.isMenuActive;
    }
  }
};
</script>

