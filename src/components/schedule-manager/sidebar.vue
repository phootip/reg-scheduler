<template>
  <div class="sidebar" id="scheduleManagerSideBar">
    <div class="hero has-text-centered is-success">
      <h1 class="is-uppercase is-size-7">
        All Classes
      </h1>
    </div>
    <div class="hero">
      <div class="hero has-text-centered">
        <a @click="isAddCourseModalActive = true" class="button is-small is-success">
          Add another Course
        </a>
      </div>
    </div>
    <div class="hero">
      <div class="hero-body">
        <ul id="scheduleManagerCourseList">
          <li v-for="(course, index) in courses" :key="course.name">
            <CourseListItem :course="course" :selectedSectionNumber="1" :index="index"
            @changeSection="showChangeSectionModal" />
            <br/>
          </li>
        </ul>
      </div>
    </div>
    <b-modal :active.sync="isAddCourseModalActive" has-modal-card>
      <AddCourseModal/>
    </b-modal>
    <b-modal :active.sync="isChangeSectionModalActive" has-modal-card>
      <ChangeSectionModal/>
    </b-modal>
    <br/>
  </div>
</template>

<script>
import ScheduleManagerCourseListItem from './course-list-item';
import ScheduleManagerAddCourseModal from './add-course-modal';
import ChangeSectionModal from './change-section-modal';

export default {
  name: 'ScheduleManagerSideBar',
  components: {
    CourseListItem: ScheduleManagerCourseListItem,
    AddCourseModal: ScheduleManagerAddCourseModal,
    ChangeSectionModal,
  },
  methods: {
    showChangeSectionModal() {
      this.isChangeSectionModalActive = true;
    },
  },
  data() {
    return {
      isAddCourseModalActive: false,
      isChangeSectionModalActive: false,
      courses: [
        {
          name: 'Prog Lang',
          code: '2110316',
          sections: [
            {
              number: 1,
              teacher: 'ASD',
              timeRanges: [
                { day: 'mon', start: '18:00', end: '19:00' },
              ],
            },
            {
              number: 2,
              teacher: 'DAM',
              timeRanges: [
                { day: 'mon', start: '18:00', end: '19:00' },
                { day: 'tue', start: '18:00', end: '19:00' },
              ],
            },
          ],
        },
        {
          name: 'Comp Eng Ess',
          code: '2110221',
          sections: [
            {
              number: 1,
              teacher: 'AST',
              timeRanges: [
                { day: 'mon', start: '18:00', end: '19:00' },
                { day: 'tue', start: '18:00', end: '19:00' },
              ],
            },
            {
              number: 2,
              teacher: 'DAM',
              timeRanges: [
                { day: 'mon', start: '18:00', end: '19:00' },
              ],
            },
          ],
        },
      ],
    };
  },
};
</script>

<style scoped>
@media screen and (min-width: 1024px) {
  .sidebar {
    height: 100%;
    width: 100%;
  }
}

@media screen and (max-width: 1024px){
  .sidebar {
    position: relative;
  }
}
</style>
