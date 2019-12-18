import React, { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';

import fetchStarship from '../../utils/fetch-starship';
import drawWinner from '../../utils/draw-winner';
import validateCard from '../../utils/validate-card';

import Panel from '../Panel';
import GameCard, { StarshipProps } from '../GameCard';
import Information from '../Information';

const Wrapper: React.FC = () => {
  const [fetching, setFetching] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [winner, setWinner] = useState<number>();
  const [scoreFirst, setScoreFirst] = useState<number>(0);
  const [scoreSecond, setScoreSecond] = useState<number>(0);
  const [cardData, setCardData] = useState<StarshipProps[]>([]);

  const fetchData = async (): Promise<void> => {
    setError(false);
    setFetching(true);
    const fetched: StarshipProps[] = [];

    const getAndPush = async (): Promise<void> => {
      const data = await fetchStarship();

      if (typeof data === 'object') {
        fetched.push(data);
      }

      if (data === 0) {
        setError(true);
        setCardData([]);
      }
    };

    const fetchPromises = [];

    for (let i = 0; i < 2; i++) {
      fetchPromises.push(getAndPush());
    }

    await Promise.all(fetchPromises); // eslint-disable-line no-undef

    setFetching(false);

    if (
      Array.isArray(fetched) &&
      fetched.length === 2 &&
      validateCard(fetched[0]) &&
      validateCard(fetched[1])
    ) {
      const winner = drawWinner(fetched[0].crew, fetched[1].crew);
      switch (winner) {
        case 0:
          setScoreFirst(prev => prev + 1);
          setScoreSecond(prev => prev + 1);
          break;
        case 1:
          setScoreFirst(prev => prev + 1);
          break;
        case 2:
          setScoreSecond(prev => prev + 1);
          break;
      }
      setWinner(winner);
      setCardData(fetched);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Grid container justify="center" alignItems="center" spacing={3}>
      <Panel
        handleRefresh={fetchData}
        winner={winner}
        scoreFirst={scoreFirst}
        scoreSecond={scoreSecond}
      />
      {!error &&
        !fetching &&
        cardData.length === 2 &&
        validateCard(cardData[0]) &&
        validateCard(cardData[1]) && (
          <>
            {cardData.map((singleCard: StarshipProps, index: number) => (
              <Grid item xs={12} md={5} key={`${singleCard.name}_${index}`}>
                <h2>Player {index + 1}:</h2>
                <GameCard
                  name={singleCard.name}
                  model={singleCard.model}
                  passengers={singleCard.passengers}
                  crew={singleCard.crew}
                />
              </Grid>
            ))}
          </>
        )}
      {fetching && <Information text="Fetching..." />}
      {!fetching && error && (
        <Information text="Error fetching data from the API - try again..." />
      )}
    </Grid>
  );
};

export default Wrapper;
