import React, { Component } from 'react'

export default class DistChartComponent extends Component {
    render() {
        return (
            <img
                src={require('../distchart.svg')}
                alt="distribution chart"
            />
        )   
    }
}
