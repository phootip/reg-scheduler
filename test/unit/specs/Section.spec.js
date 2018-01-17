import Section from '@/model/Section';
import TimeRange from '@/model/TimeRange';

describe('Section', () => {
  let section;
  beforeEach(() => {
    section = new Section(0);
  });
  it('must have a (section)number', () => {
    expect(() => new Section()).toThrow();
    expect(() => new Section('124')).toThrow();
    expect(() => {
      section.number = 'lkjlk';
    }).toThrow();
  });
  it('has many fields', () => {
    expect(section.number).toEqual(0);
    expect(section.teacher).toEqual(null);
    expect(section.show).toEqual(null);
    expect(section.remark).toEqual(null);
    expect(section.tdf).toEqual(null);
  });
  it('has list of time range', () => {
    expect(section.timeRanges).toEqual([]);
  });
  it('can set time ranges', () => {
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
    const t1 = new TimeRange('mon', '18:00', '19:00');
    section.addTimeRange(t1);
    expect(section.timeRanges.length).toEqual(1);
    expect(section.timeRanges).toContain(t1);
  });
  it('can remove time range', () => {
    section.timeRanges = [
      new TimeRange('mon', '18:00', '19:00'),
      new TimeRange('tue', '17:00', '19:00'),
    ];
    section.removeTimeRange(1);
    expect(section.timeRanges).toContainEqual(new TimeRange('mon', '18:00', '19:00'));
    expect(section.timeRanges).not.toContainEqual(new TimeRange('tue', '17:00', '19:00'));
  });
  it('will error if has time ranges conflict', () => {
    expect(() => {
      section.timeRanges = [
        new TimeRange('mon', '18:00', '19:00'),
        new TimeRange('mon', '17:00', '19:00'),
      ];
    }).toThrow();
  });
  it('can check conflict with other section', () => {
    const section1 = new Section(1);
    section1.timeRanges = [
      new TimeRange('wed', '17:00', '19:00'),
      new TimeRange('mon', '18:00', '19:00'),
    ];
    const section2 = new Section(2);
    section2.timeRanges = [
      new TimeRange('mon', '18:30', '19:30'),
      new TimeRange('thu', '17:00', '19:00'),
    ];
    const section3 = new Section(3);
    section3.timeRanges = [
      new TimeRange('mon', '19:30', '20:30'),
      new TimeRange('thu', '17:00', '19:00'),
    ];
    expect(section1.isConflictWith(section3)).toEqual(false);
  });
});
