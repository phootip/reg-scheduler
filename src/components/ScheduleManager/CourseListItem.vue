<template>
  <div class="card">
    <div class="card-content">
      <div class="media-content">
        <span class="subtitle is-size-6">
          {{ course.code || ''}}
        </span>
        <span class="title is-size-4-desktop is-size-6-touch is-uppercase">
          {{ course.name || 'No Name'}}
        </span>
      </div>
      <br/>
      <table class="table is-narrow is-marginless is-hidden-touch">
        <thead>
          <th>#</th>
          <th>Teacher</th>
          <th class="has-text-centered">Time</th>
        </thead>
        <tbody>
          <tr>
            <td>{{ selectedSection.number || ''}}</td>
            <td class="has-text-centered">{{ selectedSection.teacher }}</td>
            <td v-if="selectedSectionNumber">
              <table class="table is-narrow" style="margin: 0;">
                <tbody style="margin: 0;">
                  <tr v-for="(timeRange, index) in selectedSection.timeRanges" :key="index"
                  style="margin-top: 0;">
                    <td class="is-uppercase" style="padding-top: 0;">{{timeRange.day}}</td>
                    <td style="padding-top: 0;">{{timeRange.start}}</td>
                    -
                    <td style="padding-top: 0;">{{timeRange.end}}</td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="card-footer">
<<<<<<< HEAD
      <a class="card-footer-item" @click="() => this.$emit('changeSection', index)">Change</a>
=======
      <a
        href="#"
        class="card-footer-item"
        @click="() => this.$emit('changeSection', index)"
      >
        Change
      </a>
>>>>>>> refs/remotes/origin/master
      <a href="#" class="card-footer-item">Hide</a>
      <a href="#" class="card-footer-item">Delete</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ScheduleManagerCourseListItem',
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
    index: {
      type: Number,
      default() {
        return 0;
      },
    },
  },
  computed: {
    selectedSection() {
      return this.course.sections.filter(
        section => section.number === this.selectedSectionNumber,
      )[0];
    },
  },
};
</script>
