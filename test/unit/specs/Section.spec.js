import Section from '../../../src/model/Section';

describe('Section', () => {
  it('has list of time range', () => {
    const section = new Section();
    expect(section.timeRanges).toEqual([]);
  });
});
