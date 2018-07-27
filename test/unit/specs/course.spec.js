import Course from '@/model/course';
import Section from '@/model/section';
import TimeRange from '@/model/time-range';

describe('Course', () => {
  let course;
  beforeEach(() => {
    course = new Course('mycourse');
  });
  it('has many fields', () => {
    expect(course.id).toEqual(null);
    expect(course.name).toEqual('mycourse');
    expect(course.color).toEqual(null);
    expect(course.sections).toEqual([]);
  });
  it('must have course name and it must be String', () => {
    expect(() => new Course()).toThrow();
    expect(() => {
      course.name = null;
    }).toThrow();
    expect(() => new Course(1)).toThrow();
  });
  it('can set sections', () => {
    course.sections = [new Section(1), new Section(2)];
    expect(course.sections).toEqual([new Section(1), new Section(2)]);
    course.sections = [new Section(2), new Section(3)];
    expect(course.sections).toEqual([new Section(2), new Section(3)]);
  });
  it('can add more section', () => {
    course.sections = [new Section(1), new Section(2)];
    course.addSection(new Section(3));
    expect(course.sections).toEqual([new Section(1), new Section(2), new Section(3)]);
  });
  it('can remove section', () => {
    course.sections = [new Section(0), new Section(1), new Section(2)];
    course.removeSection(1);
    expect(course.sections).toEqual([new Section(0), new Section(2)]);
  });
  it("section's number must be unique", () => {
    expect(() => {
      course.sections = [new Section(1), new Section(1)];
    }).toThrow();
    expect(() => {
      course.addSection(new Section(1));
      course.addSection(new Section(1));
    }).toThrow();
  });
  it('can check conflict with another course', () => {
    const course1 = new Course('course1');
    const section1 = new Section(1);
    section1.addTimeRange(new TimeRange('mon', '10:00', '12:00'));
    course1.addSection(section1);
    const course2 = new Course('course2');
    const section2 = new Section(2);
    section2.addTimeRange(new TimeRange('mon', '11:00', '12:30'));
    course2.addSection(section2);
    expect(course1.isConflictWith(course2)).toEqual(true);
  });
  it('can parse json object', () => {
    const section1 = {
      number: 1,
      timeRanges: [
        { day: 'mon', start: '19:30', end: '20:30' },
        new TimeRange('thu', '17:00', '19:00'),
      ],
    };
    const section2 = new Section({
      number: 2,
      timeRanges: [
        { day: 'mon', start: '19:30', end: '20:30' },
        new TimeRange('thu', '17:00', '19:00'),
      ],
    });
    const courseFromJson = new Course({
      id: 2110420,
      name: 'COMP',
      sections: [section1, section2],
    });
    expect(courseFromJson.id).toEqual(2110420);
    expect(courseFromJson.sections).toEqual([
      new Section({
        number: 1,
        timeRanges: [
          new TimeRange('mon', '19:30', '20:30'),
          new TimeRange('thu', '17:00', '19:00'),
        ],
      }),
      new Section({
        number: 2,
        timeRanges: [
          new TimeRange('mon', '19:30', '20:30'),
          new TimeRange('thu', '17:00', '19:00'),
        ],
      }),
    ]);
  });
});
