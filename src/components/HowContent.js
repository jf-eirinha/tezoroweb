import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import HowCard from './HowCard';
import ScreenshotComponent from './ScreenshotComponent';

const styles = theme => ({
  root: {
    width: '90%',
  },
  button: {
    marginTop: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  actionsContainer: {
    marginBottom: theme.spacing.unit * 2,
  },
  resetContainer: {
    padding: theme.spacing.unit * 3,
  },
});

function getSteps() {
  return ['Scan the package', 'Scan the UID', 'Scan the box and drop at pick-up point','Package gets to a sorting facility', 'Credits are added to user account'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return <HowCard image={<ScreenshotComponent />}>
        <p className="p-normal">User opens the Tezoro app and selects an option to scan a product.</p>
        <p className="p-normal">Takes picture of the product to prompt a box with information regarding its value in credits and CO2 saved.</p>
        <p className="p-normal">This is the first instance in which we can access package integrity.</p>
      </HowCard>;
    case 1:
      return <HowCard>
        <p className="p-normal">User scans label information containing some unique data so that each item can only be registered once. A package illustration should appear on the screen indicating what area to scan.</p>
        <p className="p-normal">We hope to merge the first two steps in the future through the use of a unique "stamp" on each package label.</p>
      </HowCard>;
    case 2:
      return <HowCard>
        <p className="p-normal">When the user fills up its Tezoro box he uses the app to inform he will drop the box at a certain pick-up location.</p>
        <p className="p-normal">Pick-up points will be made available near most households. Pooling the drops of several users will allow us to save transport costs.</p>
        <p className="p-normal">Users can get a Tezoro box at a retail partner location for a small deposit which is returned once the box arrives to a sorting center.</p>
        <p className="p-normal">We also plan to offer an alternative system in which we identify the origin of each package by the box it came from. For this the user would only need to scan a box code instead of scanning each item individually.</p>
      </HowCard>;
    case 3:
      return <HowCard>
        <p className="p-normal">On a sorting facility each package is picked from the boxes and guided through an automated conveyor system where its scanned for the UID and its integrity is verified using another image recognition model.</p>
        <p className="p-normal">The packages are then warehoused and prepared to be shipped to bottler or packager to be sanitized and used again!</p>
      </HowCard>;
    case 4:
      return <HowCard>
        <p className="p-normal">After the package UID gets scanned and its integrity is verified the credits are added to the user account.</p>
        <p className="p-normal">Once a user collects enough credits it can exchange them for awesome rewards!</p>      
      </HowCard>;
    default:
      return 'Unknown step';
  }
}

class HowContent extends React.Component {
  state = {
    activeStep: 0,
  };

  handleNext = () => {
    this.setState(state => ({
      activeStep: state.activeStep + 1,
    }));
  };

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1,
    }));
  };

  handleReset = () => {
    this.setState({
      activeStep: 0,
    });
  };

  render() {
    const { classes } = this.props;
    const steps = getSteps();
    const { activeStep } = this.state;

    return (
      <div className={classes.root} style={{display: 'flex', flexDirection: 'column', width: '860px'}}>
        <h1 className="section-title">How it Works</h1>
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((label, index) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
              <StepContent>
                <Typography >{getStepContent(index)}</Typography>
                <div className={classes.actionsContainer}>
                  <div>
                    <Button
                      disabled={activeStep === 0}
                      onClick={this.handleBack}
                      className={classes.button}
                    >
                      Back
                    </Button>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={this.handleNext}
                      className={classes.button}
                    >
                      {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                    </Button>
                  </div>
                </div>
              </StepContent>
            </Step>
          ))}
        </Stepper>
        {activeStep === steps.length && (
          <Paper square elevation={0} className={classes.resetContainer}>
            <Button onClick={this.handleReset} className={classes.button}>
              Explain it again
            </Button>
          </Paper>
        )}
      </div>
    );
  }
}

HowContent.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(HowContent);
