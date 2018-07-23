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
        Midterms Schedule (flipped)
      </h1>
    </div>
    <schedule-table :main-headers="midtermDates" flipped />
    <div class="hero has-text-centered is-success">
      <h1 class="is-uppercase is-size-7">
        Finals Schedule
      </h1>
    </div>
    <schedule-table :main-headers="finalDates" />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import ScheduleTable from '@/components/schedule-table';
import ScheduleHeader from '@/model/schedule-header';
import ScheduleItem from '@/model/schedule-item';
// import TimeRange from '@/model/timerange';

export default {
  name: 'ScheduleManagerMainView',
  components: {
    ScheduleTable,
  },
  computed: {
    ...mapState({
      scheduleItems(state) {
        return Object.values(state.courses).reduce((acc, course) => {
          course.sections[course.selectedSection].timeRanges.forEach((timeRange) => {
            if (acc[timeRange.day] === undefined) {
              acc[timeRange.day] = [];
            }
            acc[timeRange.day].push(new ScheduleItem(course.code, timeRange));
          });
          return acc;
        }, {});
      },
    }),
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
      height: 90vh;
    }
  }
</style>
