const getRandomNumber = (min: number, max: number): number => {
  if (typeof min === 'number' && typeof max === 'number') {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  return 0;
};

export default getRandomNumber;
