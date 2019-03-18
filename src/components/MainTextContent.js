import React, { Component } from 'react'
import ArrowDownComponent from './ArrowDownComponent';

const noDec= {
  textDecoration: 'none',
};

export default class MainTextContent extends Component {

  render() {
    return (
          <div className="main-text-content">
              <h1 className="title-font">From Trash to Treasure with Google AI and SAP</h1>
              <p className="p-highlight">Welcome! Tezoro is a platform that incentivises consumers to reuse. We hope it will change consumer behavior in such a way that will forever transform product and package design.</p>
              <a className="font-link" href="#how" style={noDec}>
                  <ArrowDownComponent> </ArrowDownComponent>
                  <span className="align-center font-link" style={noDec}>SCROLL TO KNOW MORE</span>
              </a>
          </div>
    )
  }
}

