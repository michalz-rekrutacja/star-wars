const drawWinner = (first: number, second: number): 0 | 1 | 2 => {
  if (typeof first !== 'number' || typeof second !== 'number') {
    return 0;
  }
  if (first > second) {
    return 1;
  }

  if (second > first) {
    return 2;
  }

  return 0;
};

export default drawWinner;
