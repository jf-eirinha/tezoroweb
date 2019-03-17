import React, { Component } from 'react'

export default class TransportIcon extends Component {
    render() {
        return (
            <img
                src={require('../truck.svg')}
                className="d-inline-block align-top"
                alt="Tezoro transport icon"
            />
        )   
    }
}
