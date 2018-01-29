<template>
  <div class="container row">
    <div class="column offset-top">
      <div v-for="mainHeader in mainHeaders" :key="mainHeader.name" class="cell">
        {{ mainHeader.name }}
      </div>
    </div>
    <div class="column grow">
      <div class="row">
        <div v-for="crossHeader in crossHeaders" :key="crossHeader" class="column grow">
          <div class="cell">
            {{ crossHeader }}
          </div>
        </div>
      </div>
      <div v-for="mainHeader in mainHeaders" :key="mainHeader.key" class="cell">
        <div
          v-for="item in items[mainHeader.key]"
          :key="item.id"
          class="item"
          :style="{ backgroundColor: item.color, left: 'auto', width: '10%' }"
        >
          {{ item.id }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ScheduleTable',
  props: {
    mainHeaders: {
      type: Array,
      default() {
        return [
          {
            key: 'mon',
            name: 'Monday',
          },
          {
            key: 'tue',
            name: 'Tuesday',
          },
          {
            key: 'wed',
            name: 'Wednesday',
          },
          {
            key: 'thu',
            name: 'Thursday',
          },
          {
            key: 'fri',
            name: 'Friday',
          },
        ];
      },
    },
    crossHeaders: {
      type: Array,
      default() {
        return [
          '',
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
.container {
  width: 100%;
}
.row {
  display: flex;
  justify-content: stretch;
}
.column {
  display: flex;
  flex-direction: column;
  justify-content: stretch;
}
.offset-top {
  padding-top: 3rem;
}
.cell {
  height: 2rem;
  padding: 0.5rem;
  text-align: center;
}
.grow {
  flex-basis: 0;
  flex-grow: 1;
}
.item {
  position: absolute;
  padding: 0;
}
</style>
