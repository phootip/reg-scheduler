<template>
  <div class="card">
    <a
      @click="isCollapsed = !isCollapsed"
      :class="{'card-header': true, 'has-background-light': !isCollapsed}"
    >
      <p class="card-header-title">
        <span class="has-text-weight-normal has-trailing-space">
          {{ course.code || '' }}
        </span>
        <span class="is-uppercase">
          {{ course.name || '' }}
        </span>
      </p>
    </a>
    <div class="card-content" v-if="!isCollapsed">
      <table class="table is-narrow is-marginless is-fullwidth is-hidden-touch">
        <thead>
          <th>#</th>
          <th class="has-text-centered">Teacher</th>
          <th class="has-text-centered">Time</th>
        </thead>
        <tbody>
          <tr>
            <td>{{ selectedSection.number || ''}}</td>
            <td class="has-text-centered">{{ selectedSection.teacher }}</td>
            <td v-if="selectedSectionNumber">
              <table class="table is-narrow">
                <tbody>
                  <tr v-for="(timeRange, index) in selectedSection.timeRanges" :key="index">
                    <td class="is-uppercase">{{timeRange.day}}</td>
                    <td>{{timeRange.start}}</td>
                    -
                    <td>{{timeRange.end}}</td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="card-footer" v-if="!isCollapsed">
      <a
        href="#"
        class="card-footer-item"
        @click="() => this.$emit('changeSection', courseCode)"
      >
        Change
      </a>
      <a href="#" class="card-footer-item">Hide</a>
      <a href="#" class="card-footer-item">Delete</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CourseListItem',
  props: {
    course: {
      type: Object,
      default() {
        return {
          name: 'ERROR',
          code: 'ERROR',
        };
      },
    },
    selectedSectionNumber: {
      type: Number,
      default() {
        return 0;
      },
    },
    courseCode: {
      type: String,
      default() {
        return '';
      },
    },
  },
  computed: {
    selectedSection() {
      return this.course.sections[this.selectedSectionNumber];
    },
  },
  data() {
    return {
      // TODO: can persist collapse state
      isCollapsed: true,
    };
  },
};
</script>

<style scoped>
.has-trailing-space::after {
  content: " ";
  white-space: pre;
}
a.card-header:hover {
  background-color: whitesmoke;
}
.card-content {
  padding: 0.5rem;
}
</style>
