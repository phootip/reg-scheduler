export default class Schedule {
  static* generate(courses) {
    if (courses.length === 0) yield [];
    else {
      const currentCourse = courses[courses.length - 1];
      const { sections } = currentCourse;
      const subCourses = courses.slice(0, courses.length - 1);
      /* eslint-disable no-restricted-syntax */
      for (const subGen of Schedule.generate(subCourses)) {
        for (const section of sections) {
          let isConflict = false;
          for (const sub of subGen) {
            if (sub.section.isConflictWith(section)) isConflict = true;
          }
          if (!isConflict) {
            yield [...subGen, { course: currentCourse, section }];
          }
        }
        yield subGen;
      }
      /* eslint-enable */
    }
  }
}
