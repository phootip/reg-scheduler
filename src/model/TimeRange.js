function validateTime(time) {
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
function tokenizeTime(time) {
  const [hour, min] = time.split(':');
  return {
    hour: parseInt(hour, 10),
    min: parseInt(min, 10),
  };
}
export function compareTime(time1, time2) {
  const t1 = tokenizeTime(time1);
  const t2 = tokenizeTime(time2);
  if (t1.hour === t2.hour) {
    if (t1.min < t2.min) return -1;
    else if (t1.min > t2.min) return 1;
    return 0;
  } else if (t1.hour < t2.hour) {
    return -1;
  }
  return 1;
}
export default class TimeRange {
  constructor(day, start, end) {
    this.day = day;
    this.start = start;
    this.end = end;
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
    validateTime(start);
    this.pStart = start;
    this.validateStartEnd();
  }
  get start() {
    return this.pStart;
  }

  set end(end) {
    validateTime(end);
    this.pEnd = end;
    this.validateStartEnd();
  }
  get end() {
    return this.pEnd;
  }

  validateStartEnd() {
    const { start, end } = this;
    if (start && end) {
      if (compareTime(start, end) > 0) throw new Error('start should be before end');
    }
  }

  isConflictWith(another) {
    if (this.day !== another.day) return false;
    if (compareTime(this.end, another.start) <= 0) {
      return false;
    }
    if (compareTime(this.start, another.end) >= 0) {
      return false;
    }
    return true;
  }
}
