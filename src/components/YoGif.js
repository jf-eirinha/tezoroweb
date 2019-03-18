import React, { Component } from 'react'

export default class YoGif extends Component {
    render() {
        return (
            <img
                src={require('../yo.gif')}
                alt="yo gif"
            />
        )
    }
}
