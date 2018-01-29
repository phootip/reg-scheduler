import Section from './Section';

export default class Course {
  constructor(courseName) {
    if (typeof courseName === 'object') {
      const { id, name, color, sections } = courseName;
      this.id = id || null;
      this.name = name;
      this.color = color || null;
      this.sections = sections || [];
      return;
    }
    this.id = null;
    this.name = courseName;
    this.color = null;
    this.sections = [];
  }
  set name(name) {
    if (typeof name !== 'string') throw new Error('course name must be a string');
    this.pName = name;
  }
  get name() {
    return this.pName;
  }
  set sections(sections) {
    this.pSection = [];
    sections.forEach(section => this.addSection(section));
  }
  get sections() {
    return this.pSection;
  }
  addSection(section) {
    const cSection = Section.parseSection(section);
    const isDuplicate = this.sections.map(s => s.number).includes(cSection.number);
    if (isDuplicate) throw new Error('section numbers must be unique');
    this.sections.push(cSection);
  }
  removeSection(index) {
    this.sections.splice(index, 1);
  }
  isConflictWith(another) {
    let isConflict = false;
    this.sections.forEach((section1) => {
      another.sections.forEach((section2) => {
        if (section1.isConflictWith(section2)) isConflict = true;
      });
    });
    return isConflict;
  }
}
