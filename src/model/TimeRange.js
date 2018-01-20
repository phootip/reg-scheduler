export default class TimeRange {
  constructor(day, start, end) {
    if (typeof day === 'object') {
      const { day: tDay, start: tStart, end: tEnd } = day;
      this.day = tDay;
      this.start = tStart;
      this.end = tEnd;
    } else {
      this.day = day;
      this.start = start;
      this.end = end;
    }
  }
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
    TimeRange.validateTime(start);
    this.pStart = start;
    this.validateStartEnd();
  }
  get start() {
    return this.pStart;
  }

  set end(end) {
    TimeRange.validateTime(end);
    this.pEnd = end;
    this.validateStartEnd();
  }
  get end() {
    return this.pEnd;
  }

  static validateTime(time) {
    if (time === 'tdf') {
      return;
    }
    if (!/\d\d:\d\d/.exec(time)) throw new Error('start time must have a value');
    const [hour, min] = time.split(':');

    try {
      const hourNum = parseInt(hour, 10);
      const minNum = parseInt(min, 10);
      if (hourNum < 0 || hourNum > 24) throw new Error();
      if (minNum < 0 || minNum > 59) throw new Error();
    } catch (e) {
      throw new Error('start time is invalid');
    }
  }

  static parseTimeRange(timeRange) {
    if (timeRange instanceof TimeRange) return timeRange;
    return new TimeRange(timeRange);
  }

  static tokenizeTime(time) {
    if (time === 'tdf') return 'tdf';
    const [hour, min] = time.split(':');
    return {
      hour: parseInt(hour, 10),
      min: parseInt(min, 10),
    };
  }

  static compareTime(time1, time2) {
    const t1 = TimeRange.tokenizeTime(time1);
    const t2 = TimeRange.tokenizeTime(time2);
    if (t1.hour === t2.hour) {
      if (t1.min < t2.min) return -1;
      else if (t1.min > t2.min) return 1;
      return 0;
    } else if (t1.hour < t2.hour) {
      return -1;
    }
    return 1;
  }

  validateStartEnd() {
    const { start, end } = this;
    if (this.checkTdf()) return;
    if (start && end) {
      if (TimeRange.compareTime(start, end) > 0) throw new Error('start should be before end');
    }
  }

  isConflictWith(another) {
    if (this.checkTdf() || another.checkTdf()) return false;
    if (this.day !== another.day) return false;
    if (TimeRange.compareTime(this.end, another.start) <= 0) {
      return false;
    }
    if (TimeRange.compareTime(this.start, another.end) >= 0) {
      return false;
    }
    return true;
  }

  checkTdf() {
    if (this.day === 'tdf' || this.start === 'tdf' || this.end === 'tdf') return true;
    return false;
  }
}
