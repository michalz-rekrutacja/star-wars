import React from 'react';

import { Grid } from '@material-ui/core';

const Wrapper: React.FC = () => {
  return (
    <Grid container xs={8}>
      <Grid item xs={12} md={6}>
        <div />
      </Grid>
      <Grid item xs={12} md={6}>
        <div />
      </Grid>
    </Grid>
  );
};

export default Wrapper;
