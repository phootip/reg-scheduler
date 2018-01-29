import ExamTimeRange from '../../../src/model/ExamTimeRange';

describe('ExamTimeRange', () => {
  it('has the start, end time', () => {
    const t = new ExamTimeRange('mon', '18:00', '20:00', '11/12/2018');
    expect(t.day).toEqual('mon');
    expect(t.dayNum).toEqual(11);
    expect(t.month).toEqual(12);
    expect(t.year).toEqual(2018);
    expect(t.date).toEqual('11/12/2018');
    expect(t.start).toEqual('18:00');
    expect(t.end).toEqual('20:00');
  });

  it('can be parsed from JSON', () => {
    const json = {
      date: '15/05/2561',
      day: 'TUE',
      end: '11:30',
      start: '08:30',
    };
    const t = new ExamTimeRange(json);
    expect(t.day).toEqual('TUE');
    expect(t.start).toEqual('08:30');
    expect(t.end).toEqual('11:30');
    expect(t.dayNum).toEqual(15);
    expect(t.month).toEqual(5);
    expect(t.year).toEqual(2561);
    expect(t.date).toEqual('15/05/2561');
  });

  it('can check conflict with another ExamTime', () => {
    const t1 = new ExamTimeRange({
      date: '15/05/2561',
      day: 'TUE',
      end: '11:30',
      start: '08:30',
    });
    const t2 = new ExamTimeRange({
      date: '15/05/2561',
      day: 'TUE',
      end: '11:30',
      start: '08:30',
    });
    const t3 = new ExamTimeRange({
      date: '16/05/2561',
      day: 'TUE',
      end: '11:30',
      start: '08:30',
    });
    expect(t1.isConflictWith(t2)).toEqual(true);
    expect(t1.isConflictWith(t3)).toEqual(false);
  });
});
