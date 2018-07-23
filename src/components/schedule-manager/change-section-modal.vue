<template>
  <div class="modal-card">
    <div class="modal-card-head is-paddingless">
      <h1 class="card-header-title">
        <span class="has-text-weight-normal" style="padding-right: 0.25rem">
          {{ course.code }}
        </span>
        {{ course.name }}
      </h1>
      <span class="has-text-right">
        <h1 class="card-header-title has-text-weight-light is-size-7">Change Section</h1>
      </span>
    </div>
    <div class="modal-card-body">
      <table class="table is-fullwidth">
        <thead>
          <th>#</th>
          <th>Teacher</th>
          <th>Time</th>
          <th></th>
        </thead>
        <tbody>
          <tr v-for="section in course.sections" :key="section.number">
            <td>{{ section.number }}</td>
            <td>{{ section.teacher }}</td>
            <td>
              <table class="table is-narrow is-marginless">
                <tbody v-for="(timeRange, index) in section.timeRanges" :key="index">
                  <td class="is-uppercase section-item">{{ timeRange.day }}</td>
                  <td class="section-item">{{ timeRange.start }}</td>
                  <td class="section-item">-</td>
                  <td class="section-item">{{ timeRange.end }}</td>
                </tbody>
              </table>
            </td>
            <td>
              <b-radio v-model="selectSection" :native-value="section.number"></b-radio>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="modal-card-foot is-paddingless">
      <a class="card-footer-item" @click="handleOk">OK</a>
      <a class="card-footer-item" @click="$parent.close()">Cancel</a>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'ChangeSectionModal',
  data() {
    return {
      selectSection: 0,
    };
  },
  methods: {
    handleOk() {
      this.$store.commit('changeSelectedSection', {
        courseIndex: this.courseIndex,
        selectedSection: this.selectSection,
      });
      this.$parent.close();
    },
  },
  props: [
    'courseIndex',
  ],
  computed: {
    ...mapState({
      course(state) {
        return state.courses[this.courseIndex];
      },
    }),
  },
};
</script>

<style scoped>
.section-item {
  padding-top: 0;
  border-width: 0;
}
</style>
