import React, { Component } from 'react';
import './App.css';
import Grid from '@material-ui/core/Grid';
import Topbar from './components/Topbar';

class App extends Component {
  render() {
    return (
      // <Grid
      //   container
      //   direction="column"
      //   justify="center"
      //   alignItems="center">

      //   <Grid container>
           <Topbar></Topbar>
      //   </Grid>

      //   <Grid container
      //     direction="row"
      //     justify="space-around"
      //     alignItems="center">
      //       <Grid item>Hello 1</Grid>
      //       <Grid item>Hello 2</Grid>
      //   </Grid>

      //   <Grid container
      //     direction="row"
      //     justify="space-around"
      //     alignItems="center">
      //       <Grid item>Hello 3</Grid>
      //       <Grid item>Hello 4</Grid>
      //   </Grid>

      // </Grid>
    );
  }
}

export default App;
