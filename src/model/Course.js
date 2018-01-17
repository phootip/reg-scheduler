export default class Course {
  constructor(courseName) {
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
    const isDuplicate = this.sections.map(s => s.number).includes(section.number);
    if (isDuplicate) throw new Error('section numbers must be unique');
    this.sections.push(section);
  }
  removeSection(index) {
    this.sections.splice(index, 1);
  }
}
