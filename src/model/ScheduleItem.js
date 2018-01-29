export default class ScheduleItem {
  constructor(name, timeRange, id = name, color = 'transparent') {
    this.name = name;
    this.timeRange = timeRange;
    this.id = id;
    this.color = color;
  }
}
