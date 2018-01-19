import { mount } from '@vue/test-utils';
import ScheduleTable from '@/components/ScheduleTable';

describe('ScheduleTable.vue', () => {
  const wrapper = mount(ScheduleTable);
  it('should render an empty table with no props', () => {
    expect(wrapper.contains('.item')).toBe(false);
  });
  it('should render sections correctly', () => {
    const items = {};
    wrapper.setProps({ items });
  });
});
