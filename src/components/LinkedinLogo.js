import React, { Component } from 'react'

export default class LinkedinLogo extends Component {
    render() {
        return (
            <img
                src={require('../linkedinlogo.png')}
                width="14"
                height="14"
                className="d-inline-block align-center"
                alt="Linkedin logo"
            />
        )
    }
}
