<template>
  <div class="schedule-item" :class="{'schedule-item-header': header}" :style="styleObject">
    <slot></slot>
  </div>
</template>

<script>
import TimeRange from '@/model/timerange';

export default {
  name: 'ScheduleTableItem',
  props: {
    header: {
      type: Boolean,
    },
    timeRange: {
      type: TimeRange,
    },
    totalRangeValue: {
      type: Number,
    },
    flipped: {
      type: Boolean,
    },
  },
  computed: {
    start() {
      const startValue = TimeRange.getValue(this.timeRange.start);
      return `${((startValue - this.totalRangeValue) * 100) / this.totalRangeValue}%`;
    },
    size() {
      const timeRangeValue =
        TimeRange.getValue(this.timeRange.end) - TimeRange.getValue(this.timeRange.start);
      return `${(timeRangeValue * 100) / this.totalRangeValue}%`;
    },
    styleObject() {
      if (this.flipped) {
        return {
          top: this.start,
          height: this.size,
        };
      }
      return {
        left: this.start,
        width: this.size,
      };
    },
  },
};
</script>

<style scoped>
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
</style>
