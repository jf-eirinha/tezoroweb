import React from 'react';
import Grid from '@material-ui/core/Grid';

const HowCard = props => {
  const { title, children, image } = props

  return (
    <Grid container className="howcard-wrapper">
      <Grid item>
        {image}
      </Grid>
      <Grid item>
        <div className="card-content">
          <h5>{title}</h5>
          {children}
        </div>
      </Grid>
    </Grid>
  )
}

export default HowCard;