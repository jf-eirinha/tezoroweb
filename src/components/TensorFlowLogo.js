import React, { Component } from 'react'

export default class TensorFlowLogo extends Component {
    render() {
        return (
            <img
                src={require('../tflogo.svg')}
                width="200"
                height="127"
                className="d-inline-block align-top"
                alt="Tezoro logo"
            />
        )
    }
}
