import React, { Component } from 'react'

export default class StackedIcon extends Component {
    render() {
        return (
            <img
                src={require('../stackedicon.svg')}
                className="d-inline-block align-top"
                alt="Tezoro boxes icon"
            />
        )   
    }
}
