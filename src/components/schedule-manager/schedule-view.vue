<template>
  <div id="schedule-view">
    <HeadingBar>
      Class Schedule
    </HeadingBar>
    <ScheduleTable :items="scheduleItems" />
    <HeadingBar>
      Midterms Schedule (flipped)
    </HeadingBar>
    <ScheduleTable :items="scheduleItems" flipped />
    <HeadingBar>
      Finals Schedule
    </HeadingBar>
    <ScheduleTable :main-headers="finalDates" />
  </div>
</template>

<script>
import HeadingBar from '@/components/heading-bar';
import ScheduleTable from '@/components/schedule-table';
import ScheduleHeader from '@/model/schedule-header';
import ScheduleItem from '@/model/schedule-item';
import TimeRange from '@/model/time-range';

export default {
  name: 'ScheduleView',
  components: {
    HeadingBar,
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
