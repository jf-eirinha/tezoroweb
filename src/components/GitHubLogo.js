import React, { Component } from 'react'

export default class GitHubLogo extends Component {
    render() {
        return (
            <img
                src={require('../githublogo.png')}
                width="24"
                height="24"
                className="d-inline-block align-top"
                alt="GitHub logo"
            />
        )
    }
}
