import React, { Component } from 'react'

export default class TransportIcon extends Component {
    render() {
        return (
            <img
                src={require('../truck.svg')}
                className="scheme-block"
                alt="Tezoro transport icon"
            />
        )   
    }
}
