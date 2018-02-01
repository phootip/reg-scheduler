import { mount } from '@vue/test-utils';
import ScheduleTable from '@/components/ScheduleTable';
import ScheduleItem from '@/model/ScheduleItem';
import TimeRange from '@/model/TimeRange';

describe('ScheduleTable.vue', () => {
  const wrapper = mount(ScheduleTable);
  it('should render an empty table with no props', () => {
    expect(wrapper.contains('.schedule-item')).toBe(false);
  });
  it('should render items correctly', () => {
    const items = {
      mon: [
        new ScheduleItem('foo', new TimeRange('mon', '08:00', '09:30'), 0, 'red'),
        new ScheduleItem('bar', new TimeRange('mon', '09:30', '12:30'), 1, 'green'),
      ],
      tue: [
        new ScheduleItem('baz', new TimeRange('mon', '09:00', '11:00'), 2, 'blue'),
      ],
      wed: [],
      thu: [
        new ScheduleItem('qux', new TimeRange('mon', '13:00', '16:00'), 3, 'yellow'),
        new ScheduleItem('quux', new TimeRange('mon', '14:00', '15:30'), 4, 'red'),
      ],
      fri: [
        new ScheduleItem('quuz', new TimeRange('mon', '12:00', '14:00'), 5, 'gray'),
      ],
    };
    wrapper.setProps({ items });
    expect(wrapper.contains('.schedule-item')).toBe(true);
  });
});
