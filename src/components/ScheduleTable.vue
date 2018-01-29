<template>
  <div class="schedule-container schedule-row">
    <div class="schedule-column offset-top border-horizontal">
      <div v-for="mainHeader in mainHeaders" :key="mainHeader.name" class="schedule-cell">
        {{ mainHeader.name }}
      </div>
    </div>
    <div class="schedule-column grow border-horizontal">
      <div class="schedule-row">
        <div v-for="crossHeader in crossHeaders" :key="crossHeader" class="schedule-column grow">
          <div class="schedule-cell">
            {{ crossHeader.name }}
          </div>
        </div>
      </div>
      <div v-for="mainHeader in mainHeaders" :key="mainHeader.key" class="schedule-cell">
        <div
          v-for="item in items[mainHeader.key]"
          :key="item.id"
          class="schedule-item"
          :style="{ backgroundColor: item.color, left: 'auto', width: '10%' }"
        >
          {{ item.id }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ScheduleHeader from '../model/ScheduleHeader';
import ScheduleItem from '../model/ScheduleItem';
import TimeRange from '../model/TimeRange';

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
    crossHeaders: {
      type: Array,
      default() {
        return [
          new ScheduleItem('', new TimeRange('mon', '08:00', '16:00')),
        ];
      },
    },
    items: {
      type: Object,
      default() {
        return {};
      },
    },
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
.offset-top {
  padding-top: 2.5rem;
}
.schedule-cell {
  height: 2.5rem;
  padding: 0.5rem;
  text-align: center;
}
.grow {
  flex-basis: 0;
  flex-grow: 1;
}
.schedule-item {
  position: absolute;
  padding: 0;
}
.border-horizontal {
  border-left: 1px solid #dbdbdb;
  border-right: 1px solid #dbdbdb;
}
</style>
