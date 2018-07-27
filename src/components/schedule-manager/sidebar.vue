<template>
  <aside id="sidebar">
    <div class="level">
      <div class="level-left">
        <div class="level-item">
          <h1 class="">
            All Courses
          </h1>
        </div>
      </div>
      <div class="level-right">
        <div class="level-item">
          <a @click="isAddCourseModalActive = true" class="button is-primary is-small">
            Add Course
          </a>
        </div>
      </div>
    </div>
    <ul>
      <li v-for="(course, index) in courses" :key="course.name">
        <CourseListItem
          :course="course"
          :selectedSectionNumber="1"
          :index="index"
          @changeSection="showChangeSectionModal"
        />
      </li>
    </ul>
    <b-modal :active.sync="isAddCourseModalActive" has-modal-card>
      <AddCourseModal/>
    </b-modal>
    <b-modal :active.sync="isChangeSectionModalActive" has-modal-card>
      <ChangeSectionModal/>
    </b-modal>
  </aside>
</template>

<script>
import HeadingBar from '@/components/heading-bar';
import CourseListItem from './course-list-item';
import AddCourseModal from './add-course-modal';
import ChangeSectionModal from './change-section-modal';

export default {
  name: 'Sidebar',
  components: {
    HeadingBar,
    CourseListItem,
    AddCourseModal,
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
  #sidebar {
    padding: 1.5rem;
  }
</style>
