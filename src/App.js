import React, { Component } from 'react';
import './App.scss';
import Grid from '@material-ui/core/Grid';
import Topbar from './components/Topbar';
import MainTextContent from './components/MainTextContent';
import BrandContent from './components/BrandContent';
import ConsumerContent from './components/ConsumerContent';
import HowContent from './components/HowContent';
import ArchComponent from './components/ArchComponent';
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
          alignItems="center">
          <Grid className="main-content" item>
            <MainTextContent />
          </Grid>
          <Grid className="main-content" item>
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
          <Grid className="main-content" item>
            <YoGif />
          </Grid>
        </Grid>

        <Grid container
          direction="row"
          justify="center"
          alignItems="center"
          className="main-content">
          <Grid item className="main-content">
            <BrandsGif />
          </Grid>
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
              <Grid container
              direction="row"
              justify="center"
              alignItems="center">
              <Grid item xs={6}>
                <div className="economics-row">
                  <TezoroBoxIcon />
                  <div className="scheme-block font-detail">
                    <p className="number-highlight">$3</p>
                    <p>value of each box with 15-20 packages<sup>1</sup></p>
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
                </Grid>
                <Grid item xs={6}>
                <DistChartComponent />
                </Grid>
            </Grid>
        </Grid>

        <Grid item className="left-right-pd" xs={12} sm={6}>
          <h4 className="bullet-title center-title">vs. Traditional Deposit-Return Schemes</h4>
            <p className="p-normal-small">Comparing with the German Pfand system, one of the most successful DRS, Tezoro improves the user value proposition by eliminating the hassle of reusing.</p>
            <p className="p-normal-small">Pfand's adhering retailers manage to operate the deposit system at a profit despite holding many significant costs which Tezoro will not bear, namely: the costs with reverse vending machines and space/area costs.<sup>2</sup></p>
            <p className="p-normal-small">By giving out rewards rather than money Tezoro will manage to gain some extra value by buying the rewards at a slight discount to face value, as it will be offering brands an additional sales channel. This will also represent a significant working capital advantage, as it delays the redemption of the user's credit and enables us to pay suppliers later.</p>
            <div className="links-wrapper">
              <a href="https://forum.eionet.europa.eu/eea-west-balkans-cooperation-interest-group/library/eea-west-balkans-cooperation-2018/meeting-12-october/epa-network-interest-group-plastics-and-west-balkans/deposit-return-schemes-data-and-figures-16-member-countries-epa-network/download/en/1/IG%20Plastics%20-%20Deposit-Return%20Schemes-%20data%20and%20figures%20from%2016%20member%20countries%20of%20the%20EPA%20Network.pdf" className="reference-font"><sup>1</sup> Deposit-Return Schemes: Data and figures from 16 member countries of the EPA Networks, EPA Network</a>
              <a href="http://www.duh.de/fileadmin/user_upload/download/Projektinformation/Kreislaufwirtschaft/PwC-Study_reading_version.pdf" className="reference-font"><sup>2</sup> Reuse and Recycling Systems for Selected Beverage Packaging from a Sustainability Perspective, Albrecht, P. et al, PricewaterhouseCoopers AG WPG</a>
            </div>
        </Grid>
      </Grid>

      <h1 id="googlesap" className="section-title"> Powered by Google and SAP</h1>
      <Grid container
        direction="row"
        justify="center"
        alignItems="center"
        className="googlesap">
        <Grid className="scheme-class" item xs={12} sm={6}>
          <div className="scheme-wrapper">
            <SchemeComponent />
          </div>
        </Grid>
        <Grid className="wrap-text" item xs={12} sm={6}>
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
            <p>The content of the website contains forward looking statements such as or equivalent to "we will build", "we will have", "we will pay" which are not meant as any guarantee or future obligation, but rather representing future plans of this initiative.</p>
          </div>
        </Grid>
        </Grid>
      </Grid >
    );
  }
}

export default App;
