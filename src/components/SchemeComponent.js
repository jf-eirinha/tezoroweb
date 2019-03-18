import React, { Component } from 'react'

export default class SchemeComponent extends Component {
    render() {
        return (
            <img
                src={require('../archscheme.png')}
                width="430"
                height="525"
                className="d-inline-block align-top"
                alt="GitHub logo"
            />
        )
    }
}
