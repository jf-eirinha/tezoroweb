import React, { Component } from 'react';
import './App.css';
import Grid from '@material-ui/core/Grid';

class App extends Component {
  render() {
    return (
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center">
        <Grid item>
          <Grid container
            direction="row"
            justify="center"
            alignItems="center"
            spacing={40}>
              <Grid item>1</Grid>
              <Grid item>2</Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container
            direction="row"
            justify="center"
            alignItems="center"
            spacing={40}>
              <Grid item>3</Grid>
              <Grid item>4</Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default App;
