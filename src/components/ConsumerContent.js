import React, { Component } from 'react'

export default class ConsumerContent extends Component {
  render() {
    return (
      <div className="main-text-content">
        <h1 className="section-title">For Consumers</h1>

        <h6 className="bullet-title">These are just pennies, righ?</h6>
        <p className="p-normal-small">Every year an average US household will throw away about worth of package.</p>

        <h6 className="bullet-title">Creating value, sharing it with consumers</h6>
        <p className="p-normal-small">Tezoro will sell the returnable package back to companies and will give back most of that value to consumers. The remaining will cover our transport and sorting costs.</p>

        <h6 className="bullet-title">Go green!</h6>
        <p className="p-normal-small">When it cames to the products you buy there's no environmentally better option than to reuse it. Families can dramatically reduce the waste they produce, much of which would end up in landfill. In addition, by displacing production of new package a lot of energy and natural resources are saved too.</p>

        <h6 className="bullet-title">It's simple and transparent</h6>
        <p className="p-normal-small">Recycling is makes a real impact. But different sorting criteria depending on State, Municipality or Country make the process confusing for a lot of people. With Tezoro there are no caveats: you give us the package and it gets reused!</p>

      </div>
    )
  }
}
