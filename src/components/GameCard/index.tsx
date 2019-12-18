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
        <Typography color="textSecondary" gutterBottom>
          {props.model}
        </Typography>
        <Typography gutterBottom variant="h5" component="h2">
          {props.name}
        </Typography>
        <p>Passengers: {props.passengers}</p>
        <p>Crew: {props.crew}</p>
      </CardContent>
    </Card>
  );
};

export default GameCard;
