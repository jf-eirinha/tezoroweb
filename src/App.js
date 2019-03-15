import React, { Component } from 'react';
import './App.scss';
import Grid from '@material-ui/core/Grid';
import Topbar from './components/Topbar';
import MainTextContent from './components/MainTextContent';
import MainMediaContent from './components/MainMediaContent';
import BrandContent from './components/BrandContent';
import ConsumerContent from './components/ConsumerContent';
import GoogleCloudLogo from './components/GoogleCloudLogo';
import TensorFlowLogo from './components/TensorFlowLogo';
import FlutterLogo from './components/FlutterLogo';
import CardComponent from './components/CardComponent';
import FooterComponent from './components/FooterComponent';

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
            <MainTextContent />
          </Grid>
          <Grid item>
            <MainMediaContent />
          </Grid>
        </Grid>

        <Grid container
          direction="row"
          justify="center"
          alignItems="center"
          className="main-content">
          <MainMediaContent />
          <BrandContent />
        </Grid>

        <Grid container
          direction="row"
          justify="space-around"
          alignItems="center">
          <ConsumerContent />
          <MainMediaContent />
        </Grid>

        <Grid container
          direction="row"
          justify="space-around"
          alignItems="center">
          <Grid item xs={12} sm={4}>
            <CardComponent title="Tezoro Everywhere" text="text">
              <GoogleCloudLogo />
            </CardComponent>
          </Grid>
          <Grid item xs={12} sm={4}>
            <CardComponent title="Flexible Framework" text="text">
              <TensorFlowLogo />
            </CardComponent>
          </Grid>
          <Grid item xs={12} sm={4}>
            <CardComponent title="Less time coding" text="text">
              <FlutterLogo />
            </CardComponent>
          </Grid>
        </Grid>

        <Grid container
          direction="row"
          justify="center"
          alignItems="center"
          className="footer">
          <FooterComponent/>
        </Grid>

      </Grid>
    );
  }
}

export default App;
