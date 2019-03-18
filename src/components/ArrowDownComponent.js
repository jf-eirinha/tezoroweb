import React, { Component } from 'react'

export default class ArrowDownComponent extends Component {
    render() {
        return (
            <img
                src={require('../arrowdown.svg')}
                width="18"
                height="18"
                className="d-inline-block align-center font-link"
                alt="arrow down"
            />
        )
    }
}
