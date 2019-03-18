import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import GitHubLogo from './GitHubLogo';
import LinkedinLogo from './LinkedinLogo';

export default class Topbar extends React.Component {

    render() {
        return (
            <Navbar bg="white" expand="lg">
                <Navbar.Brand href="#home">
                    <img
                        src={require('../logo.svg')}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt="Tezoro logo"
                    />
                    {' Tezoro '}
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <Nav.Link href="https://github.com/john-law/tezoro/"><GitHubLogo></GitHubLogo></Nav.Link>
                        <Nav.Link href="https://www.linkedin.com/in/joao-eirinha/"><LinkedinLogo></LinkedinLogo></Nav.Link>
                        <Nav.Link href="#how">How it works</Nav.Link>
                        <Nav.Link href="#value">Why should I used it?</Nav.Link>
                        <Nav.Link href="#googlesap">Google and SAP</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}