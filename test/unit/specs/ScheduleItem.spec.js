import ScheduleItem from '@/model/schedule-item';
import TimeRange from '@/model/time-range';

describe('ScheduleItem', () => {
  it('has name, timeRange, id, color', () => {
    const item = new ScheduleItem('foo', new TimeRange('mon', '18:00', '20:00'), 1234567, 'red');
    expect(item.name).toEqual('foo');
    expect(item.timeRange.day).toEqual('mon');
    expect(item.timeRange.start).toEqual('18:00');
    expect(item.timeRange.end).toEqual('20:00');
    expect(item.id).toEqual(1234567);
    expect(item.color).toEqual('red');
  });

  it('sets id to name when not given', () => {
    const item = new ScheduleItem('no id', new TimeRange('mon', '18:00', '20:00'));
    expect(item.id).toEqual('no id');
  });

  it('sets color to transparent when not given', () => {
    const item = new ScheduleItem('no color', new TimeRange('mon', '18:00', '20:00'));
    expect(item.color).toEqual('transparent');
  });
});
