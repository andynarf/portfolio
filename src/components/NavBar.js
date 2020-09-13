import React from 'react'
import andy from '../images/andy.jpg'
import './NavBar.css'
import Image from 'react-bootstrap/Image'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'



export default function NavBar() {
    return (
        <Container  >
            <Row>
                <Col md={12} sm={2} xs={2}>
                    <Image className='andyimg' src={andy} roundedCircle />
                </Col>
                <Col md={12} s={10} xs={10}>
                    <Nav className="flex-md-column">
                        <Nav.Link href="#">
                        </Nav.Link>
                        <Nav.Link href="#PortFolio">Portfolio</Nav.Link>
                        <Nav.Link href="#About">About</Nav.Link>
                        <Nav.Link href="#Contact">Contact</Nav.Link>
                    </Nav>
                </Col>
            </Row>
        </Container>

    )
}
