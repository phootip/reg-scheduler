<template>
  <div class="card">
    <div class="card-content">
      <div class="media-content">
        <span class="title is-size-4">
          {{ course.name || 'No Name'}}
        </span>
        <span class="subtitle is-size-6">
          {{ course.code || ''}}
        </span>
      </div>
      <br/>
      <table class="table is-narrow is-marginless">
        <thead>
          <th>#</th>
          <th>Teacher</th>
          <th class="has-text-centered">Time</th>
        </thead>
        <tbody>
          <tr>
            <td>{{ selectedSection.number || ''}}</td>
            <td>{{ selectedSection.teacher }}</td>
            <td>
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
      <a href="#" class="card-footer-item">Change</a>
      <a href="#" class="card-footer-item">Unselect</a>
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
