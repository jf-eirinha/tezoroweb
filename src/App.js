import React, { Component } from 'react';
import './App.scss';
import Grid from '@material-ui/core/Grid';
import Topbar from './components/Topbar';
import MainTextContent from './components/MainTextContent';
import MainMediaContent from './components/MainMediaContent';
import BrandContent from './components/BrandContent';
import ConsumerContent from './components/ConsumerContent';
import HowContent from './components/HowContent';
import ArchComponent from './components/ArchComponent';
import EconomicsComponent from './components/EconomicsComponent';
import TezoroBoxIcon from './components/TezoroBoxIcon';
import StackedIcon from './components/StackedIcon';
import TransportIcon from './components/TransportIcon';
import DistChartComponent from './components/DistChartComponent';
import SchemeComponent from './components/SchemeComponent';
import EggsGif from './components/EggsGif';
import YoGif from './components/YoGif';
import BrandsGif from './components/BrandsGif';

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
            <EggsGif />
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
          <YoGif />
        </Grid>

        <Grid container
          direction="row"
          justify="center"
          alignItems="center"
          className="main-content">
          <BrandsGif />
          <BrandContent />
        </Grid>

        <h1 id="economics" className="section-title">The Economics</h1>
        <Grid container
          direction="row"
          justify="center"
          alignItems="flex-start"
        >

          <Grid item xs={12} sm={6}>
            <h4 className="bullet-title center-title">On a unit basis</h4>
            <EconomicsComponent>
              <div className="divide">
                <div>
                  <div className="economics-row">
                    <TezoroBoxIcon />
                    <div className="scheme-block font-detail">
                      <p className="number-highlight">$3</p>
                      <p>value of each box with 15-20 packages</p>
                    </div>
                  </div>
                  <div className="economics-row">
                    <StackedIcon />
                    <div className="scheme-block font-detail">
                      <p className="number-highlight">6</p>
                      <p>boxes minimum for each pick-up</p>
                    </div>
                  </div>
                  <div className="economics-row">
                    <TransportIcon />
                    <div className="scheme-block font-detail">
                      <p className="number-highlight">$3.5</p>
                      <p>cost of each pick-up</p>
                    </div>
                  </div>
                </div>
                <DistChartComponent />
              </div>


            </EconomicsComponent>
          </Grid>
          <Grid item xs={12} sm={6}>
            <h4 className="bullet-title center-title">vs. Traditional Deposit-Return Schemes</h4>
            <EconomicsComponent>
              <p className="p-normal-small">Comparing with the German Pfand system, one of the most successful DRS implented Pfand system, Tezoro improves the user value proposition by eliminating the hassle of reusing.</p>
              <p className="p-normal-small">Pfand's adhering retailers to operate the deposit system at profit despite holding many significant costs which Tezoro will not bear, namely: the costs with reverse vending machines and space/area costs.</p>
              <p className="p-normal-small">By giving out rewards rather than money Tezoro will manage to gain some extra value by buying the rewards at a slight discount to face value. This will also represent a significant working capital advantage, as it delays the redenmention of the user's credit and enables us to pay do suppliers later.</p>
            </EconomicsComponent>
          </Grid>
        </Grid>

        <h1 id="googlesap" className="section-title"> Powered by Google and SAP</h1>
        <Grid container
          direction="row"
          justify="center"
          alignItems="center"
          className="googlesap">
          <Grid item xs={12} sm={6}>
            <div className="scheme-wrapper">
              <SchemeComponent />
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <ArchComponent />
          </Grid>
        </Grid>

        {/* <Grid container
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
        </Grid> */}



        <Grid container
          direction="row"
          justify="center"
          alignItems="flex-start"
          className="footer">
          <Grid item xs={12} sm={6}
          direction="row"
          justify="center"
          alignItems="center"
          >
            
          </Grid>
          <Grid item xs={12} sm={6}>
          <div className="footer-title">
              Legal Disclaimer
            </div>
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
