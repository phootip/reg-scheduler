<template>
  <div class="hero fullscreen">
    <div class="columns is-gapless">
      <div class="column is-one-third sidebar">
        <ScrollbarHider>
          <SideBar/>
        </ScrollbarHider>
      </div>
      <div class="column">
        <ScrollbarHider>
          <MainView/>
        </ScrollbarHider>
      </div>
    </div>
  </div>
</template>

<script>
import ScheduleManagerSideBar from './sidebar';
import ScheduleManagerMainView from './main-view';
import ScrollbarHider from '@/scroll-bar-hider';

export default {
  name: 'ScheduleManager',
  components: {
    SideBar: ScheduleManagerSideBar,
    MainView: ScheduleManagerMainView,
    ScrollbarHider,
  },
};
</script>

<style scoped>
  .fullscreen {
    width: 100%;
    height: 90vh;
    max-height: 90vh;
    top: 0;
  }
  @media screen and (min-width: 1024px){
    .sidebar {
      padding-bottom: 0;
      height: 92vh;
      position: relative;
    }
  }
</style>
