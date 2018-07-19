<template>
  <div class="schedule-container schedule-row" :class="{ 'schedule-flipped': flipped }">
    <div class="schedule-column offset-top border-horizontal">
      <div
        v-for="(mainHeader, index) in mainHeaders"
        class="schedule-cell"
        :class="{'alt-background': index%2 === 0}"
        :key="mainHeader.name"
      >
        <span class="content">
          {{ mainHeader.name }}
        </span>
      </div>
    </div>
    <div class="schedule-column grow border-horizontal">
      <div class="schedule-cell schedule-item-container">
        <ScheduleTableItem
          v-for="crossHeader in crossHeaders"
          :key="crossHeader.id"
          :time-range="crossHeader.timeRange"
          :total-range-value="totalRangeValue"
          :flipped="flipped"
          header
        >
          <span class="cross-content">
            {{ crossHeader.name }}
          </span>
        </ScheduleTableItem>
      </div>
      <div
        v-for="(mainHeader, index) in mainHeaders"
        class="schedule-cell schedule-item-container"
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
          :flipped="flipped"
        >
          {{ item.name }}
        </ScheduleTableItem>
      </div>
    </div>
  </div>
</template>

<script>
import ScheduleHeader from '@/model/schedule-header';
import ScheduleItem from '@/model/schedule-item';
import TimeRange from '@/model/time-range';
import ScheduleTableItem from './schedule-table-item';

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
        return {};
      },
    },
    flipped: {
      type: Boolean,
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
.schedule-flipped.schedule-container {
  width: unset;
  min-height: 480px;
  height: calc(100vh - 4rem);
}
.schedule-row {
  display: flex;
  justify-content: stretch;
}
.schedule-flipped.schedule-row {
  flex-direction: column;
}
.schedule-column {
  display: flex;
  flex-direction: column;
  justify-content: stretch;
}
.schedule-flipped .schedule-column {
  flex-direction: row;
}
.schedule-cell {
  height: 4rem;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}
.schedule-flipped .schedule-cell {
  height: unset;
  width: 8rem;
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
.schedule-flipped .schedule-item-header {
  border-left: unset;
  border-top: 1px solid #dbdbdb;
  height: unset;
  width: 100%;
}
.grow {
  flex-basis: 0;
  flex-grow: 1;
}
.offset-top {
  padding-top: 4rem;
}
.schedule-flipped .offset-top {
  padding-top: unset;
  padding-left: 8rem;
}
.content {
  margin: 0.5rem;
}
.cross-content {
  display: inline-block;
  transform: rotate(-90deg) translate(-1rem, -0.5rem);
}
.schedule-flipped .cross-content {
  transform: unset;
}
.alt-background {
  background-color: whitesmoke;
}
.border-horizontal {
  border-left: 1px solid #dbdbdb;
  border-right: 1px solid #dbdbdb;
}
.schedule-flipped .border-horizontal {
  border-left: unset;
  border-right: unset;
  border-top: 1px solid #dbdbdb;
  border-bottom: 1px solid #dbdbdb;
}
</style>
