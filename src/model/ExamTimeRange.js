import TimeRange from './TimeRange';

export default class ExamTimeRange extends TimeRange {
  constructor(day, start, end, date) {
    if (typeof day === 'object') {
      super(day);
      this.date = day.date;
      return;
    }
    super(day, start, end);
    this.date = date;
  }
  set date(date) {
    this.pDate = date;
    const [dayNum, month, year] = date.split('/').map(x => parseInt(x, 10));
    this.dayNum = dayNum;
    this.month = month;
    this.year = year;
  }
  get date() {
    return this.pDate;
  }
  isConflictWith(other) {
    return super.isConflictWith(other) && this.date === other.date;
  }
}
