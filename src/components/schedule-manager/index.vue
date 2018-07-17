<template>
  <div>
    <div class="is-fixed-left">
      <ScrollbarHider>
        <Sidebar/>
      </ScrollbarHider>
    </div>
    <div class="columns">
      <div class="column is-offset-one-third is-two-third">
        <ScrollbarHider>
          <ScheduleView/>
          <!-- TODO: faded content at bottom to indicate scrollable -->
        </ScrollbarHider>
      </div>
    </div>
  </div>
</template>

<script>
import ScrollbarHider from '@/components/scroll-bar-hider';
import Sidebar from './sidebar';
import ScheduleView from './schedule-view';

export default {
  name: 'ScheduleManager',
  components: {
    Sidebar,
    ScheduleView,
    ScrollbarHider,
  },
};
</script>

<style scoped>
  .is-fixed-left {
    position: fixed;
    top: 0;
    bottom: 0;
    min-width: 33%;
    margin-top: 3.25rem;
    z-index: 30;
  }
</style>
