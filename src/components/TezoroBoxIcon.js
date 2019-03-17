import React, { Component } from 'react'

export default class TezoroBoxIcon extends Component {
    render() {
        return (
            <img
                src={require('../tezoroboxicon.svg')}
                className="d-inline-block align-top"
                alt="Tezoro box icon"
            />
        )   
    }
}
