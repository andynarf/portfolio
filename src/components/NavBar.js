import React from 'react'
import andy from '../images/andy.jpg'
import Image from 'react-bootstrap/Image'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './NavBar.css'




export default function NavBar() {
    return (
        <Container  className="nav-container">
            <Row>
                <Col md={12} sm={2} xs={2} >
                    <Image className='andyimg' src={andy} roundedCircle />
                </Col>
                <Col md={12} s={10} xs={10} className='nav-bar'>
                    <Nav className="flex-md-column justify-content-end navigation">
                        <Nav.Link className='nav-link' href="#PortFolio">Portfolio</Nav.Link>
                        <Nav.Link className='nav-link' href="#About">About</Nav.Link>
                        <Nav.Link className='nav-link' href="#Contact">Contact</Nav.Link>
                    </Nav>
                </Col>
            </Row>
        </Container>

    )
}
