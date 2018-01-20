import TimeRange, { compareTime } from '../../../src/model/TimeRange';

describe('TimeRange', () => {
  it('has the start, end time', () => {
    const t = new TimeRange('mon', '18:00', '20:00');
    expect(t.day).toEqual('mon');
    expect(t.start).toEqual('18:00');
    expect(t.end).toEqual('20:00');
  });

  it('day, start, end can be tdf', () => {
    const t = new TimeRange('tdf', 'tdf', 'tdf');
    expect(t.day).toEqual('tdf');
    expect(t.start).toEqual('tdf');
    expect(t.end).toEqual('tdf');
  });

  it('validates the day and will throw error', () => {
    const t = new TimeRange('mon', '18:00', '20:00');

    expect(() => {
      t.day = 'wow';
    }).toThrow();

    expect(() => new TimeRange()).toThrow();
  });

  it('validates the start time and will throw error', () => {
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

    expect(() => {
      t.end = '1090:001';
    }).toThrow();

    expect(() => new TimeRange('mon', '18:00')).toThrow();
  });

  it('will error if end time was before start time', () => {
    const t = new TimeRange('mon', '18:00', '19:00');
    expect(() => new TimeRange('mon', '18:00', '17:00')).toThrow();
    expect(() => {
      t.end = '17:00';
    }).toThrow();
    expect(() => {
      t.start = '20:00';
    }).toThrow();
  });

  it('has compareTime helper function', () => {
    expect(compareTime('18:00', '19:00')).toEqual(-1);
    expect(compareTime('19:30', '19:00')).toEqual(1);
    expect(compareTime('20:15', '20:45')).toEqual(-1);
    expect(compareTime('17:40', '19:00')).toEqual(-1);
    expect(compareTime('19:00', '17:40')).toEqual(1);
  });

  it('it can check the conflict with another TimeRange', () => {
    const t1 = new TimeRange('mon', '18:00', '20:00');
    const t2 = new TimeRange('mon', '19:00', '20:30');
    const t3 = new TimeRange('mon', '20:00', '21:00');
    const t4 = new TimeRange('wed', '00:00', '20:00');
    expect(t1.isConflictWith(t2)).toEqual(true);
    expect(t1.isConflictWith(t3)).toEqual(false);
    expect(t3.isConflictWith(t1)).toEqual(false);
    expect(t2.isConflictWith(t3)).toEqual(true);
    expect(t1.isConflictWith(t4)).toEqual(false);
  });

  it('tdf will never conflict', () => {
    const t1 = new TimeRange('mon', '18:00', '20:00');
    const tdf1 = new TimeRange('tdf', '18:00', '19:00');
    const tdf2 = new TimeRange('mon', 'tdf', 'tdf');
    const tdf3 = new TimeRange('mon', '18:00', 'tdf');
    const tdf4 = new TimeRange('mon', 'tdf', '19:00');
    expect(t1.isConflictWith(tdf1)).toEqual(false);
    expect(t1.isConflictWith(tdf2)).toEqual(false);
    expect(t1.isConflictWith(tdf3)).toEqual(false);
    expect(t1.isConflictWith(tdf4)).toEqual(false);
  });

  it('can parse the json object', () => {
    const json = {
      day: 'mon',
      start: '18:00',
      end: '20:00',
    };
    const timeRange = new TimeRange(json);
    expect(timeRange.day).toEqual('mon');
    expect(timeRange.start).toEqual('18:00');
    expect(timeRange.end).toEqual('20:00');
  });
});
