import React from 'react';

import { Typography, Grid } from '@material-ui/core';

interface InformationProps {
  text: string;
}

const Information: React.FC<InformationProps> = ({ text }) => {
  if (!text) {
    return null;
  }

  return (
    <Grid item xs={12}>
      <Typography align="center">{text}</Typography>
    </Grid>
  );
};

export default Information;
