import Section from '../../../src/model/Section';
import Course from '../../../src/model/Course';
import Schedule from '../../../src/model/Schedule';
import TimeRange from '../../../src/model/TimeRange';

describe('Schedule', () => {
  it('can generate possible combination of Sections', () => {
    const section11 = new Section({
      number: 1,
      timeRanges: [new TimeRange('mon', '15:00', '16:00')],
    });
    const section12 = new Section({
      number: 2,
      timeRanges: [new TimeRange('tue', '15:00', '16:00')],
    });
    const course1 = new Course({
      id: 2110222,
      name: 'COMP',
      sections: [section11, section12],
    });

    const section21 = new Section({
      number: 1,
      timeRanges: [new TimeRange('tue', '15:00', '16:00')],
    });
    const section22 = new Section({
      number: 2,
      timeRanges: [new TimeRange('tue', '15:00', '16:00')],
    });
    const course2 = new Course({
      id: 2110223,
      name: 'COMP2',
      sections: [section21, section22],
    });

    const generator = Schedule.generate([course1, course2]);
    expect(generator.next().value).toEqual([
      { course: course1, section: section11 },
      { course: course2, section: section21 },
    ]);
    expect(generator.next().value).toEqual([
      { course: course1, section: section11 },
      { course: course2, section: section22 },
    ]);
    expect(generator.next().value).toEqual([{ course: course1, section: section11 }]);
    expect(generator.next().value).toEqual([{ course: course1, section: section12 }]);
    expect(generator.next().value).toEqual([{ course: course2, section: section21 }]);
    expect(generator.next().value).toEqual([{ course: course2, section: section22 }]);
    expect(generator.next().value).toEqual([]);
    expect(generator.next().done).toEqual(true);
  });
});
