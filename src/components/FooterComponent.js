import React, { Component } from 'react'

export default class FooterComponent extends Component {
  render() {
    return (
      <div className="footer-wrapper">
        <div className="footer-title">
          <h6>Legal Disclaimer</h6>
        </div>
        <div className="footer-text">
          <p>Tezoro is not a legal entity. It represents a personal initiative to enter the contest "Circular Economy 2030", sponsored by Google LLC and SAP SE.</p>
          <p>This website is solely intended as support material for entering such contest.</p>
          <p>We do not own any of the trademarked logos featured on the website. Its use was not authorized and does not constitute an endorsement by any of such brands.</p>
          <p>The content of the website contains forward looking statements such as "we will build", "we will have", "we will pay" which are not meant as any guarantee or future obligation, but rather representing future plans of this initiative.</p>
        </div>
      </div>
    )
  }
}
