import React from 'react';
import { Button, Grid } from '@material-ui/core';

interface PanelProps {
  handleRefresh: () => void;
  winner: number | undefined;
  scoreFirst: number;
  scoreSecond: number;
}

const Panel: React.FC<PanelProps> = props => {
  if (typeof props.handleRefresh !== 'function') {
    return null;
  }

  const handleClick = (e: React.MouseEvent): void => {
    e.preventDefault();
    props.handleRefresh();
  };

  return (
    <Grid container direction="row" justify="center" alignItems="center">
      <Grid item>
        <h2>Results:</h2>
        {typeof props.scoreFirst === 'number' && (
          <p>Player 1: {props.scoreFirst}</p>
        )}
        {typeof props.scoreSecond === 'number' && (
          <p>Player 2: {props.scoreSecond}</p>
        )}
        {(props.winner === 1 || props.winner === 2) && (
          <h4>Player {props.winner} won!</h4>
        )}
        {props.winner === 0 && <h4>Tie!</h4>}
        <Button onClick={handleClick} variant="contained" color="primary">
          Try again
        </Button>
      </Grid>
    </Grid>
  );
};

export default Panel;
