import React from "react";
import andy from "../images/andy.jpg";
import Image from "react-bootstrap/Image";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./NavBar.css";

export default function NavBar() {
  return (
    <div className="position-relative">
      <Container className="nav-container">
        <Row className="nav-wrapper">
          <Col md={12} sm={3} xs={3} className="img-container">
            <Image className="andyimg" src={andy} roundedCircle />
          </Col>
          <Col md={12} s={9} xs={9} className="nav-bar">
            <Nav className="flex-md-column justify-content-end navigation">
              <Nav.Link className="nav-link" href="#PortFolio">
                PORTFOLIO
              </Nav.Link>
              <Nav.Link className="nav-link" href="#About">
                ABOUT
              </Nav.Link>
              <Nav.Link className="nav-link" href="#Contact">
                CONTACT
              </Nav.Link>
            </Nav>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
