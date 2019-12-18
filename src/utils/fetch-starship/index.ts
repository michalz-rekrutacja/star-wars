import getRandomNumber from '../random-number';
import { StarshipProps } from '../../components/GameCard';

import configuration from '../../configuration';

const fetchStarship = async (): Promise<StarshipProps | 0> => {
  let success = false;
  let retryCounter = 0;
  let data: any = {}; // eslint-disable-line @typescript-eslint/no-explicit-any

  while (!success && retryCounter < configuration.MAX_RETRIES) {
    const id = getRandomNumber(configuration.MIN_ID, configuration.MAX_ID);
    data = await fetch(
      `${configuration.API_ROOT}/starships/${id}/?format=json`
    );
    success = data.status === 200 ? true : false;
    retryCounter++;
  }

  if (!success && retryCounter >= configuration.MAX_RETRIES) {
    return 0;
  }

  const starshipData = await data.json();

  return {
    name: starshipData.name,
    model: starshipData.model,
    passengers: Number(starshipData.passengers),
    crew: Number(starshipData.crew)
  };
};

export default fetchStarship;
