export default class Section {
  pTimeRanges = [];
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
