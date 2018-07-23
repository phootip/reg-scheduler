import VueX from 'vuex';

const createStore = () => new VueX.Store({
  state: {
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
        selectedSection: 1,
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
        selectedSection: 1,
      },
    ],
  },
  mutations: {
    addCourse(state, course) {
      state.courses.push(course);
    },
    changeSelectedSection(state, payload) {
      state.courses[payload.courseIndex].selectedSection = payload.selectedSection;
    },
  },
});

export default createStore;
