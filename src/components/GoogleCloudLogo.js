import React, { Component } from 'react'

export default class GoogleCloudLogo extends Component {
    render() {
        return (
            <img
                src={require('../cloudlogo.png')}
                width="125"
                height="125"
                className="d-inline-block align-top"
                alt="Tezoro logo"
            />
        )
    }
}
