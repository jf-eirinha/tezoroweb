import React, { Component } from 'react';
import './App.scss';
import Grid from '@material-ui/core/Grid';
import Topbar from './components/Topbar';
import MainTextContent from './components/MainTextContent';
import MainMediaContent from './components/MainMediaContent';

class App extends Component {
  render() {
    return (
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center">

        <Grid container>
           <Topbar></Topbar>
        </Grid>

        <Grid container
          direction="row"
          justify="center"
          alignItems="center"
          className="main-content">
            <Grid item>
              <MainTextContent/>
            </Grid>
            <Grid item>
              <MainMediaContent/>
            </Grid>
        </Grid>

        <Grid container
          direction="row"
          justify="space-around"
          alignItems="center">
            <Grid item>Hello 3</Grid>
            <Grid item>Hello 4</Grid>
        </Grid>

      </Grid>
    );
  }
}

export default App;
