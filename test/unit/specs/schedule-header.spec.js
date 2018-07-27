import ScheduleHeader from '@/model/schedule-header';

describe('ScheduleHeader', () => {
  it('has name and key', () => {
    const header = new ScheduleHeader('foo', 'bar');
    expect(header.name).toEqual('foo');
    expect(header.key).toEqual('bar');
  });

  it('sets key to empty string when not given', () => {
    const header = new ScheduleHeader('keyless');
    expect(header.key).toEqual('');
  });
});
