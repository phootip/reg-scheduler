export default class Section {
  constructor(courseName) {
    this.courseId = null;
    this.courseName = courseName;
    this.number = null;
    this.timeRanges = [];
    this.teacher = null;
    this.color = null;
    this.show = null;
    this.remark = null;
  }
  set timeRanges(timeRanges) {
    this.pTimeRanges = [];
    timeRanges.forEach(timeRange => this.addTimeRange(timeRange));
  }
  get timeRanges() {
    return this.pTimeRanges;
  }
  addTimeRange(timeRange) {
    if (this.checkTimeRangesConflict(timeRange)) throw new Error('time ranges are conflicted');
    this.pTimeRanges.push(timeRange);
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
