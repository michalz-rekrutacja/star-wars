import { StarshipProps } from '../../components/GameCard';

const validateCard = (obj: StarshipProps): boolean => {
  if (
    typeof obj === 'object' &&
    typeof obj.name === 'string' &&
    typeof obj.model === 'string' &&
    typeof obj.crew === 'number' &&
    typeof obj.passengers === 'number'
  ) {
    return true;
  }

  return false;
};

export default validateCard;
