<template>
  <div class="hero fullscreen">
    <div class="columns is-gapless">
      <div class="column is-one-third sidebar">
        <SideBar/>
      </div>
      <div class="column">
        <MainView/>
      </div>
    </div>
  </div>
</template>

<script>
import ScheduleManagerSideBar from './SideBar'
import ScheduleManagerMainView from './MainView'

export default {
  name: 'ScheduleManager',
  components: {
    'SideBar': ScheduleManagerSideBar,
    'MainView': ScheduleManagerMainView,
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
    height: 92vh;
    position: relative; 
  }
</style>
