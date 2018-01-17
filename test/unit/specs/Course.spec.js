import Course from '@/model/Course';
import Section from '@/model/Section';

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
});
