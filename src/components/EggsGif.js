import React, { Component } from 'react'

export default class EggsGif extends Component {
    render() {
        return (
            <img
                src={require('../eggs.gif')}
                alt="eggs gif"
            />
        )
    }
}
