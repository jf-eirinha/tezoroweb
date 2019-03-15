import React, { Component } from 'react'

export default class FlutterLogo extends Component {
    render() {
        return (
            <img
                src={require('../flutterlogo.png')}
                width="60"
                height="110"
                className="d-inline-block align-top"
                alt="Tezoro logo"
            />
        )
    }
}
