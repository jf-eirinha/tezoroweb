import React, { Component } from 'react'

export default class StackedIcon extends Component {
    render() {
        return (
            <img
                src={require('../stackedicon.svg')}
                className="scheme-block"
                alt="Tezoro boxes icon"
            />
        )   
    }
}
