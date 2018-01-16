import Section from '../../../src/model/Section';
import TimeRange from '../../../src/model/TimeRange';

describe('Section', () => {
  it('has many fields', () => {
    const section = new Section();
    section.courseId = 2110211;
    section.courseName = 'Comp Eng Ess';
    expect(section.courseId).toEqual(2110211);
  });
  it('has list of time range', () => {
    const section = new Section();
    expect(section.timeRanges).toEqual([]);
  });
  it('can set time ranges', () => {
    const section = new Section();
    section.timeRanges = [
      new TimeRange('mon', '18:00', '19:00'),
      new TimeRange('tue', '17:00', '19:00'),
    ];
    expect(section.timeRanges).toContainEqual(new TimeRange('mon', '18:00', '19:00'));
    expect(section.timeRanges).toContainEqual(new TimeRange('tue', '17:00', '19:00'));
    section.timeRanges = [
      new TimeRange('mon', '18:00', '19:00'),
      new TimeRange('tue', '17:00', '19:00'),
    ];
    expect(section.timeRanges).toContainEqual(new TimeRange('mon', '18:00', '19:00'));
    expect(section.timeRanges).toContainEqual(new TimeRange('tue', '17:00', '19:00'));
  });
  it('can add more time range', () => {
    const section = new Section();
    const t1 = new TimeRange('mon', '18:00', '19:00');
    section.addTimeRange(t1);
    expect(section.timeRanges.length).toEqual(1);
    expect(section.timeRanges).toContain(t1);
  });
  it('can remove time range', () => {
    const section = new Section();
    section.timeRanges = [
      new TimeRange('mon', '18:00', '19:00'),
      new TimeRange('tue', '17:00', '19:00'),
    ];
    section.removeTimeRange(1);
    expect(section.timeRanges).toContainEqual(new TimeRange('mon', '18:00', '19:00'));
    expect(section.timeRanges).not.toContainEqual(new TimeRange('tue', '17:00', '19:00'));
  });
  it('will error if has time ranges conflict', () => {
    const section = new Section();
    expect(() => {
      section.timeRanges = [
        new TimeRange('mon', '18:00', '19:00'),
        new TimeRange('mon', '17:00', '19:00'),
      ];
    }).toThrow();
  });
  it('can check conflict with other section', () => {
    const section1 = new Section();
    section1.timeRanges = [
      new TimeRange('wed', '17:00', '19:00'),
      new TimeRange('mon', '18:00', '19:00'),
    ];
    const section2 = new Section();
    section2.timeRanges = [
      new TimeRange('mon', '18:30', '19:30'),
      new TimeRange('thu', '17:00', '19:00'),
    ];
    const section3 = new Section();
    section3.timeRanges = [
      new TimeRange('mon', '19:30', '20:30'),
      new TimeRange('thu', '17:00', '19:00'),
    ];
    expect(section1.isConflictWith(section3)).toEqual(false);
  });
});
