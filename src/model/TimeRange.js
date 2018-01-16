export default class TimeRange {
  set day(day) {
    if (!day) throw new Error('day name must have a value');
    switch (day.toLowerCase()) {
      case 'mon':
      case 'tue':
      case 'wed':
      case 'thu':
      case 'fri':
      case 'sat':
      case 'sun':
      case 'tdf':
        this.pDay = day;
        break;
      default:
        throw new Error('day name is invalid');
    }
  }
  get day() {
    return this.pDay;
  }

  set start(start) {
    if (!/\d\d:\d\d/.exec(start)) throw new Error('start time must have a value');
    const [hour, min] = start.split(':');

    try {
      const hourNum = parseInt(hour, 10);
      const minNum = parseInt(min, 10);
      if (hourNum < 0 || hourNum > 24) throw new Error();
      if (minNum < 0 || minNum > 59) throw new Error();
    } catch (e) {
      throw new Error('start time is invalid');
    }

    this.pStart = start;
  }
  get start() {
    return this.pStart;
  }

  constructor(day, start, end) {
    this.day = day;
    this.start = start;
    this.end = end;
  }
}
