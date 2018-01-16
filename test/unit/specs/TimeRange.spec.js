import TimeRange from '../../../src/model/TimeRange';

describe('TimeRange', () => {
  it('has the start, end time', () => {
    const t = new TimeRange('mon', '18:00', '20:00');
    expect(t.day).toEqual('mon');
    expect(t.start).toEqual('18:00');
    expect(t.end).toEqual('20:00');
  });

  it('validates the day and will throw error', () => {
    const t = new TimeRange('mon', '18:00', '20:00');

    expect(() => {
      t.day = 'wow';
    }).toThrow();

    expect(() => new TimeRange()).toThrow();
  });

  it.only('validates the start time and will throw error', () => {
    const t = new TimeRange('mon', '18:00', '20:00');

    expect(() => {
      t.start = 'wow';
    }).toThrow();

    expect(() => {
      t.start = '108:01';
    }).toThrow();

    expect(() => new TimeRange('mon')).toThrow();
  });

  it('validates the end time and will throw error', () => {
    const t = new TimeRange('mon', '18:00', '20:00');

    expect(() => {
      t.end = 'wow';
    }).toThrow();

    expect(() => new TimeRange('mon', '18:00')).toThrow();
  });

  it('it can check the ', () => {});
});
