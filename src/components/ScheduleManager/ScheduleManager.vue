<template>
  <div class="hero fullscreen">
    <div class="columns">
      <div class="column is-one-third sidebar">
        <schedule-manager-side-bar/>
      </div>
      <div class="column">
        <h1>Main View</h1>
      </div>
    </div>
  </div>
</template>

<script>
import ScheduleManagerSideBar from './SideBar'
export default {
  name: 'ScheduleManager',
  components: {
    ScheduleManagerSideBar
  },
}
</script>

<style scoped>
  .fullscreen {
    width: 100%;
    height: 90vh;
    max-height: 90vh;
    top: 0;
  }
  .sidebar {
    padding-bottom: 0;
    padding-top: 0;
    height: 92vh;
    position: relative; 
  }
</style>
