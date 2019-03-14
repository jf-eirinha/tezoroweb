import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

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
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}