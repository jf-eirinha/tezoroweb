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
import HowContent from './components/HowContent';
import ArchComponent from './components/ArchComponent';
import EconomicsComponent from './components/EconomicsComponent';
import TezoroBoxIcon from './components/TezoroBoxIcon';
import StackedIcon from './components/StackedIcon';
import TransportIcon from './components/TransportIcon';

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
          className="main-content"
          id="how">
          <HowContent />
        </Grid>

        <Grid container
          direction="row"
          justify="space-around"
          alignItems="center"
          id="value">
          <ConsumerContent />
          <MainMediaContent />
        </Grid>

        <Grid container
          direction="row"
          justify="center"
          alignItems="center"
          className="main-content">
          <MainMediaContent />
          <BrandContent />
        </Grid>
        
        <h1 id="economics">Does the economics work?</h1>
        <Grid container
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Grid item xs={12} sm={12}>
            <EconomicsComponent title="On a unit basis">
              <div className="economics-row">
                <TezoroBoxIcon />
                <div className="scheme-block">yoh</div>
                <div className="scheme-block">yoh</div>                
              </div>
              <div className="economics-row">
                <StackedIcon />
                <div className="scheme-block">yoh</div>
                <div className="scheme-block">yoh</div>
              </div>
              <div className="economics-row">
                <TransportIcon />
                <div className="scheme-block">yoh</div>
                <div className="scheme-block">yoh</div>
              </div>
            </EconomicsComponent>
            <div>yoh</div>
          </Grid>
          <Grid item xs={12} sm={12}>
            <EconomicsComponent title="vs. Traditional Deposit-Return Schemes">
            </EconomicsComponent>
          </Grid>
        </Grid>

        <h1 id="googlesap">Powered by Google and SAP</h1>
        <Grid container
          direction="row"
          justify="center"
          alignItems="center">
          <Grid item xs={12} sm={6}>
            <MainMediaContent />
          </Grid>
          <Grid item xs={12} sm={6}>
            <ArchComponent />
          </Grid>
        </Grid>

        <Grid container
          direction="row"
          justify="space-around"
          alignItems="center">
          <Grid item xs={12} sm={4}>
            <CardComponent title="Tezoro Everywhere" text="text" logoclass="logo-wrapper">
              <GoogleCloudLogo />
            </CardComponent>
          </Grid>
          <Grid item xs={12} sm={4}>
            <CardComponent title="Flexible Framework" text="text" logoclass="logo-wrapper">
              <TensorFlowLogo />
            </CardComponent>
          </Grid>
          <Grid item xs={12} sm={4}>
            <CardComponent title="Less time coding" text="text" logoclass="logo-wrapper">
              <FlutterLogo />
            </CardComponent>
          </Grid>
        </Grid>

        <Grid container
          direction="row"
          justify="center"
          alignItems="center"
          className="footer">
          <Grid item xs={12} sm={6}>
            <div className="footer-title">
              <h6>Legal Disclaimer</h6>
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div className="footer-text">
              <p>Tezoro is not a legal entity. It represents a personal initiative to enter the contest "Circular Economy 2030", sponsored by Google LLC and SAP SE.</p>
              <p>This website is solely intended as support material for entering such contest.</p>
              <p>We do not own any of the trademarked logos featured on the website. Its use was not authorized and does not constitute an endorsement by any of such brands.</p>
              <p>The content of the website contains forward looking statements such as "we will build", "we will have", "we will pay" which are not meant as any guarantee or future obligation, but rather representing future plans of this initiative.</p>
            </div>
          </Grid>
        </Grid>

      </Grid>
    );
  }
}

export default App;
