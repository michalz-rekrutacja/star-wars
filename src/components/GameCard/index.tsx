import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';

import validateCard from '../../utils/validate-card';

export interface StarshipProps {
  name: string;
  model: string;
  passengers: number;
  crew: number;
}

const GameCard: React.FC<StarshipProps> = props => {
  if (!validateCard) {
    return null;
  }

  return (
    <Card>
      <CardContent>
        {props.model && (
          <Typography color="textSecondary" gutterBottom>
            {props.model}
          </Typography>
        )}
        {props.name && (
          <Typography gutterBottom variant="h5" component="h2">
            {props.name}
          </Typography>
        )}
        {typeof props.passengers === 'number' && (
          <p>Passengers: {props.passengers}</p>
        )}
        {typeof props.crew === 'number' && <p>Crew: {props.crew}</p>}
      </CardContent>
    </Card>
  );
};

export default GameCard;
