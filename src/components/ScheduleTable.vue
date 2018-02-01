<template>
  <div class="schedule-container schedule-row">
    <div class="schedule-column offset-top border-horizontal">
      <div
        v-for="(mainHeader, index) in mainHeaders"
        class="schedule-cell"
        :class="{'alt-background': index%2 === 0}"
        :key="mainHeader.name"
      >
        {{ mainHeader.name }}
      </div>
    </div>
    <div class="schedule-column schedule-item-container grow border-horizontal">
      <div class="schedule-cell">
        <ScheduleTableItem
          v-for="crossHeader in crossHeaders"
          :key="crossHeader.id"
          :time-range="crossHeader.timeRange"
          :total-range-value="totalRangeValue"
          header
        >
          {{ crossHeader.name }}
        </ScheduleTableItem>
      </div>
      <div
        v-for="(mainHeader, index) in mainHeaders"
        class="schedule-cell"
        :class="{'alt-background': index%2 === 0}"
        :key="mainHeader.key"
      >
        <ScheduleTableItem
          v-for="item in items[mainHeader.key]"
          :key="item.id"
          :time-range="item.timeRange"
          :total-range-value="totalRangeValue"
          :style="{
            backgroundColor: item.color,
          }"
        >
          {{ item.name }}
        </ScheduleTableItem>
      </div>
    </div>
  </div>
</template>

<script>
import ScheduleHeader from '../model/ScheduleHeader';
import ScheduleItem from '../model/ScheduleItem';
import TimeRange from '../model/TimeRange';
import ScheduleTableItem from './ScheduleTableItem';

export default {
  name: 'ScheduleTable',
  props: {
    mainHeaders: {
      type: Array,
      default() {
        return [
          new ScheduleHeader('Monday', 'mon'),
          new ScheduleHeader('Tuesday', 'tue'),
          new ScheduleHeader('Wednesday', 'wed'),
          new ScheduleHeader('Thursday', 'thu'),
          new ScheduleHeader('Friday', 'fri'),
        ];
      },
    },
    totalRange: {
      type: TimeRange,
      default() {
        return new TimeRange('mon', '08:00', '16:00');
      },
    },
    items: {
      type: Object,
      default() {
        const items = {
          mon: [
            new ScheduleItem('foo', new TimeRange('mon', '08:00', '09:30'), 0, 'red'),
            new ScheduleItem('bar', new TimeRange('mon', '09:30', '12:30'), 1, 'green'),
          ],
          tue: [
            new ScheduleItem('baz', new TimeRange('mon', '09:00', '11:00'), 2, 'blue'),
          ],
          wed: [],
          thu: [
            new ScheduleItem('qux', new TimeRange('mon', '13:00', '16:00'), 3, 'yellow'),
            new ScheduleItem('quux', new TimeRange('mon', '14:00', '15:30'), 4, 'red'),
          ],
          fri: [
            new ScheduleItem('quuz', new TimeRange('mon', '12:00', '14:00'), 5, 'gray'),
          ],
        };
        return items;
        // return {};
      },
    },
  },
  computed: {
    crossHeaders() {
      return Object.values(this.items)
        .reduce((prev, current) => prev.concat(current), [])
        .map(item => item.timeRange)
        .sort((timeRangeA, timeRangeB) => TimeRange.compareTime(timeRangeA.start, timeRangeB.start))
        .reduceRight((prev, current) => [
          new TimeRange('mon', current.start, prev[0].start),
          ...prev,
        ], [new TimeRange('mon', this.totalRange.end, this.totalRange.end)])
        .slice(0, -1)
        .map(timeRange => new ScheduleItem(timeRange.start, timeRange));
    },
    totalRangeValue() {
      return TimeRange.getValue(this.totalRange.end) - TimeRange.getValue(this.totalRange.start);
    },
  },
  components: {
    ScheduleTableItem,
  },
};
</script>

<style scoped>
.schedule-container {
  width: 100%;
}
.schedule-row {
  display: flex;
  justify-content: stretch;
}
.schedule-column {
  display: flex;
  flex-direction: column;
  justify-content: stretch;
}
.schedule-cell {
  height: 2.5rem;
  padding: 0.5rem;
  text-align: center;
}
.schedule-item-container {
  position: relative;
}
.schedule-item {
  position: absolute;
}
.schedule-item-header {
  text-align: left;
  border-left: 1px solid #dbdbdb;
  top: 0;
  left: 0;
  height: 100%;
}
.grow {
  flex-basis: 0;
  flex-grow: 1;
}
.offset-top {
  padding-top: 2.5rem;
}
.alt-background {
  background-color: whitesmoke;
}
.border-horizontal {
  border-left: 1px solid #dbdbdb;
  border-right: 1px solid #dbdbdb;
}
</style>
