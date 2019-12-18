import validateCard from './index';

const properObject = {
  name: 'Sample name',
  model: 'Sample model',
  crew: 1000,
  passengers: 100
};

const improperObject = {
  name: 1000,
  model: ['array', 'of', 'something'],
  crew: '199',
  passengers: '100'
};

describe('card validation', () => {
  it('works with proper objects', () => {
    const cardStatus = validateCard(properObject);
    expect(cardStatus).toEqual(true);
  });

  it('works with improper objects', () => {
    const cardStatus = validateCard(improperObject);
    expect(cardStatus).toEqual(false);
  });

  it('works with other data types', () => {
    const cardStatus = validateCard('Something');
    expect(cardStatus).toEqual(false);
  });
});
