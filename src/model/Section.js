import TimeRange from './TimeRange';

export default class Section {
  constructor(sectionNumber) {
    if (typeof sectionNumber === 'object') {
      const { number, timeRanges, teacher, show, remark, tdf } = sectionNumber;
      this.number = number;
      this.teacher = teacher || null;
      this.show = show || null;
      this.remark = remark || null;
      this.tdf = tdf || null;
      this.timeRanges = timeRanges || [];
      return;
    }
    this.number = sectionNumber;
    this.teacher = null;
    this.show = null;
    this.remark = null;
    this.tdf = null;
    this.timeRanges = [];
  }
  set number(number) {
    if (typeof number !== 'number') throw new Error('number must be a number');
    this.pNumber = number;
  }
  get number() {
    return this.pNumber;
  }
  set timeRanges(timeRanges) {
    this.pTimeRanges = [];
    timeRanges.forEach(timeRange => this.addTimeRange(timeRange));
  }
  get timeRanges() {
    return this.pTimeRanges;
  }
  addTimeRange(timeRange) {
    const cTimeRange = TimeRange.parseTimeRange(timeRange);
    if (this.checkTimeRangesConflict(cTimeRange)) throw new Error('time ranges are conflicted');
    this.pTimeRanges.push(cTimeRange);
  }
  removeTimeRange(index) {
    this.pTimeRanges.splice(index, 1);
  }
  checkTimeRangesConflict(newTimeRange) {
    const isConflict = this.pTimeRanges.reduce(
      (acc, currTimeRange) => acc || currTimeRange.isConflictWith(newTimeRange),
      false,
    );
    return isConflict;
  }
  isConflictWith(another) {
    const isConflict = this.pTimeRanges
      .map(curr => another.checkTimeRangesConflict(curr))
      .reduce((acc, curr) => acc || curr, false);
    return isConflict;
  }
}
