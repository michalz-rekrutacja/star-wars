import React from 'react';

import { CssBaseline, Container, Grid } from '@material-ui/core';

import Header from '../Header';
import Wrapper from '../Wrapper';

const App: React.FC = () => {
  return (
    <>
      <CssBaseline />
      <Header heading="Star Wars" highlight="Battle for galaxy" />
      <Container>
        <Grid container direction="row" justify="center" alignItems="center">
          <Wrapper />
        </Grid>
      </Container>
    </>
  );
};

export default App;
