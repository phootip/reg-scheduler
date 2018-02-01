<template>
  <div id="scheduleManagerMainView">
    <div class="hero has-text-centered is-success">
      <h1 class="is-uppercase is-size-7">
        Class Schedule
      </h1>
    </div>
    <schedule-table :items="scheduleItems" />
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
import ScheduleItem from '../../model/ScheduleItem';
import TimeRange from '../../model/TimeRange';

export default {
  name: 'ScheduleManagerMainView',
  components: {
    ScheduleTable,
  },
  computed: {
    scheduleItems() {
      return {
        mon: [
          new ScheduleItem('8.00-9.30', new TimeRange('mon', '08:00', '09:30'), 0, 'red'),
          new ScheduleItem('9.30-12.30', new TimeRange('mon', '09:30', '12:30'), 1, 'green'),
        ],
        tue: [
          new ScheduleItem('9.00-11.00', new TimeRange('mon', '09:00', '11:00'), 2, 'blue'),
        ],
        wed: [],
        thu: [
          new ScheduleItem('13.00-16.00', new TimeRange('mon', '13:00', '16:00'), 3, 'yellow'),
          new ScheduleItem('14.00-15.00', new TimeRange('mon', '14:00', '15:30'), 4, 'red'),
        ],
        fri: [
          new ScheduleItem('12.00-14.00', new TimeRange('mon', '12:00', '14:00'), 5, 'gray'),
        ],
      };
    },
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
  #scheduleManagerMainView {
    overflow-y: hidden;
    height: 90vh;
  }

  #scheduleManagerMainView:hover {
    overflow-y: overlay;
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
