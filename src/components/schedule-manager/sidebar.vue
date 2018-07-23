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
            <CourseListItem
              :course="course"
              :selectedSectionNumber="course.selectedSection"
              :index="index"
              @changeSection="showChangeSectionModal(index)"
            />
            <br/>
          </li>
        </ul>
      </div>
    </div>
    <b-modal :active.sync="isAddCourseModalActive" has-modal-card>
      <AddCourseModal/>
    </b-modal>
    <b-modal :active.sync="isChangeSectionModalActive" has-modal-card>
      <ChangeSectionModal
        :courseIndex="changeSectionCourse"
      />
    </b-modal>
    <br/>
  </div>
</template>

<script>
import { mapState } from 'vuex';
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
    showChangeSectionModal(index) {
      this.changeSectionCourse = index;
      this.isChangeSectionModalActive = true;
    },
  },
  computed: {
    ...mapState([
      'courses',
    ]),
  },
  data() {
    return {
      isAddCourseModalActive: false,
      isChangeSectionModalActive: false,
      changeSectionCourse: null,
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
