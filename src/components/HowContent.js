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
  return ['Scan the package using Tezoro', 'Scan the UID as indicated', 'Scan the box and drop it a pickup point','Package gets to a sorting facility', 'Credits get credited to user account'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return <HowCard>
        <p>User opens the Tezoro app and selects an option to scan a product.</p>
        <p>Take picture of the product to prompt a box with information regarding its value in credits and CO2 saved.</p>
        <p>This is the first instance in which we can access package integrity</p>
      </HowCard>;
    case 1:
      return <HowCard>
        <p>Scan label information which allows to comprove its uniqueness, i.e., the user is only scanning one item once.</p>
        <p>We hope to merge steps 1 and 2 in the future with a unique "stamp" per package with package info</p>
      </HowCard>;
    case 2:
      return <HowCard>
        <p>When the user fills up its Tezoro box requests through the app.</p>
        <p>The package is then dropped on a pick up point at a predesignated drop point. This allows to only pick up on locations with high number of boxes as to save transport costs</p>
        <p>Users can get a Tezoro box at retail partner location for a small fee which is returned once the box arrives to a sorting center.</p>
        <p>We want to offer an alternative system in which we identify the origin of each package by the box it came from. For this the user would instead of scanning each item would only need to scan a box unique code</p>
      </HowCard>;
    case 3:
      return <HowCard>
        <p>On a sorting facility each pack is pick up from the boxes and guided through a conveyor system where its scanned for the UID and its integrity is verified using another image recognition model</p>
        <p>The packages are then warehoused and prepared to be shipped to bottler or packager to be sanitized and used again!</p>
      </HowCard>;
    case 4:
      return <HowCard>
        <p>After the package UID gets scanned and its integrity is verified the credits are create in the user account.</p>
        <p>Once a user collects enough credits it can exchange them for rewards!</p>      
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
      <div className={classes.root}>
        <h1>How it Works</h1>
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((label, index) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
              <StepContent>
                <Typography>{getStepContent(index)}</Typography>
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
