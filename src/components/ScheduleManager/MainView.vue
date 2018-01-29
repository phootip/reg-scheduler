<template>
  <div id="scheduleManagerMainView">
    <div class="hero has-text-centered is-success">
      <h1 class="is-uppercase is-size-7">
        Class Schedule
      </h1>
    </div>
    <schedule-table />
    <div class="hero has-text-centered is-success">
      <h1 class="is-uppercase is-size-7">
        Midterms Schedule
      </h1>
    </div>
    <schedule-table :main-headers="midtermDates" />
    <div class="hero has-text-centered is-success">
      <h1 class="is-uppercase is-size-7">
        Finals Schedule
      </h1>
    </div>
    <schedule-table :main-headers="finalDates" />
  </div>
</template>

<script>
import ScheduleTable from '../ScheduleTable';
import ScheduleHeader from '../../model/ScheduleHeader';

export default {
  name: 'ScheduleManagerMainView',
  components: {
    ScheduleTable,
  },
  computed: {
    midtermDates() {
      return [
        new ScheduleHeader('FIRST DAY YAY', 'first'),
        new ScheduleHeader('LAST DAY YAY', 'last'),
      ];
    },
    finalDates() {
      return [
        new ScheduleHeader('30/02/2018', '30'),
        new ScheduleHeader('31/02/2018', '31'),
        new ScheduleHeader('01/03/2018', '01'),
        new ScheduleHeader('31/04/2018', '3104'),
      ];
    },
  },
};
</script>

<style scoped>
  @media screen and (min-width: 1024px) {
    #scheduleManagerMainView {
      overflow-y: hidden;
      height: 90vh;
    }
    #scheduleManagerMainView:hover {
      overflow-y: overlay;
    }
  }

  #scheduleManagerMainView::-webkit-scrollbar {
    background: none;
  }
  #scheduleManagerMainView::-webkit-scrollbar-track {
    background: rgba(100, 100, 100, 0.05);
    border-radius: 20px;
  }
  #scheduleManagerMainView::-webkit-scrollbar-thumb {
    background: rgba(200, 200, 200, 0.8);
    border-radius: 20px;
  }
</style>
