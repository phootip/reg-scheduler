import Vue from 'vue';
import VueX from 'vuex';

const createStore = () => new VueX.Store({
  state: {
    courses: {
      2110316: {
        name: 'Prog Lang',
        code: '2110316',
        sections: {
          1: {
            number: 1,
            teacher: 'ASD',
            timeRanges: [
              { day: 'wed', start: '08:00', end: '09:00' },
            ],
          },
          2: {
            number: 2,
            teacher: 'DAM',
            timeRanges: [
              { day: 'mon', start: '08:00', end: '09:00' },
              { day: 'tue', start: '08:00', end: '09:00' },
            ],
          },
        },
        selectedSection: 1,
      },
      2110221: {
        name: 'Comp Eng Ess',
        code: '2110221',
        sections: {
          1: {
            number: 1,
            teacher: 'AST',
            timeRanges: [
              { day: 'mon', start: '08:00', end: '09:00' },
              { day: 'tue', start: '08:00', end: '09:00' },
            ],
          },
          2: {
            number: 2,
            teacher: 'DAM',
            timeRanges: [
              { day: 'thu', start: '09:00', end: '10:00' },
            ],
          },
        },
        selectedSection: 1,
      },
    },
  },
  mutations: {
    addCourse(state, course) {
      Vue.set(state.courses, course.code, course);
    },
    changeSelectedSection(state, payload) {
      state.courses[payload.courseIndex].selectedSection = payload.selectedSection;
    },
  },
});

export default createStore;
