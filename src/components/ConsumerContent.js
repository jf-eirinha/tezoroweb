import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';

export default class ConsumerContent extends Component {
  render() {
    return (
      <Grid item className="main-text-content-consumers main-content">
        <h1 className="section-title">For Consumers</h1>

        <h6 className="bullet-title">These are just pennies, right?</h6>
        <p className="p-normal-small">40 cents for a bottle of wine, 30 cents for a jar of peanut butter or a shampoo, that 1 dollar for the cardboard box of your Amazon order, may not seem much, but every year a US household can throw away more than $700 dollars' worth of packaging<sup>1</sup> <sup>2</sup>. That is real value being thrown in the trash. With Tezoro you will be able to get that value back with no effort.</p>

        <h6 className="bullet-title">Creating value, sharing it with consumers</h6>
        <p className="p-normal-small">Tezoro will sell the returnable package back to companies and will give back most of that value to consumers. The remaining will cover our transport and sorting costs.</p>

        <h6 className="bullet-title">Go green!</h6>
        <p className="p-normal-small">When it comes to the products you buy there's no better option to the environment than to reuse it. Families can dramatically reduce the waste they produce, much of which would end up in landfill. In addition, by displacing production of new packages a lot of energy and natural resources are saved too.</p>

        <h6 className="bullet-title">It's simple and transparent</h6>
        <p className="p-normal-small">Recycling is great and it makes a real impact. But different sorting criteria depending on State, Municipality or Country make the process confusing for a lot of people. With Tezoro there are no caveats: you give us the package and it gets reused!</p>

        <div className="links-wrapper">
          <a href="https://www.ey.com/Publication/vwLUAssets/Unwrapping_the_packaging_industry_–_seven_factors_for_success/$FILE/EY_Unwrapping_the_packaging_industry_-_seven_success_factors.pdf" className="reference-font"><sup>1</sup> Unwrapping the Packaging Industry, Seven Factors for Succes, Neil-Boss, N., & Brooks, K., Ernst & Young</a>
          <a href="https://www.census.gov/data/tables/time-series/demo/families/households.html" className="reference-font"><sup>2</sup> United States Census Bureau, Historical Household Tables</a>
        </div>
      </Grid>
    )
  }
}
