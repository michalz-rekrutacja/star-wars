import getRandomNumber from './index';

describe('random number generation', () => {
  it('works with positive numbers', () => {
    const value = getRandomNumber(1, 500);
    expect(value).toBeGreaterThanOrEqual(1);
    expect(value).toBeLessThan(500);
  });

  it('works with negative numbers', () => {
    const value = getRandomNumber(-1000, 0);
    expect(value).toBeGreaterThanOrEqual(-1000);
    expect(value).toBeLessThan(0);
  });

  it('returns 0 if supplied arguments are not numbers', () => {
    const value = getRandomNumber('a sample string', ['arr', 'test']);
    expect(value).toEqual(0);
  });
});
