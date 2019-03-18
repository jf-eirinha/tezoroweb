import React, { Component } from 'react'

export default class BrandsGif extends Component {
    render() {
        return (
            <img
                src={require('../brands.gif')}
                alt="brands gif"
            />
        )
    }
}
