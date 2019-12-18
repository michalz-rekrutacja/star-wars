import drawWinner from './index';

describe('picks the winner correctly', () => {
  it('returns 1 when the first player has a greater value', () => {
    const winner = drawWinner(5000, 100);
    expect(winner).toEqual(1);
  });

  it('returns 2 when the first player has a greater value', () => {
    const winner = drawWinner(63, 2198);
    expect(winner).toEqual(2);
  });

  it('returns 0 if the values are equal', () => {
    const winner = drawWinner(100, 100);
    expect(winner).toEqual(0);
  });

  it('returns 0 if supplied arguments are not numbers', () => {
    const winner = drawWinner('string', ['94, 1238']);
    expect(winner).toEqual(0);
  });
});
