import React, { Component } from 'react'

export default class ScreenshotComponent extends Component {
    render() {
        return (
            <img
                src={require('../screen.svg')}
                width="320"
                height="650"
                className="d-inline-block align-top"
                alt="screenshot"
            />
        )
    }
}
