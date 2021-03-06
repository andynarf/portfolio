import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./intro.css";

export default function Intro() {
  return (
    <div className="intro">
      <Row>
        <Col md={2}></Col>
        <Col md={10}>
          <h1 className="no-centered my-name">Andres Rodriguez</h1>
          <h5 className="no-centered subtitle">Software Developer</h5>
        </Col>
      </Row>
      <Row>
        <Col md={2}></Col>

        <Col md={6}>
          <p className="no-centered intro-text">
            Full stack developer and former Itamae (Traditional Japanese chef)
            hoping to combine my passion for building responsive apps and
            designs with my education, pair-programming experience, and
            precision knife skills.
            <br />
            Just kidding on the knife skills. ¯\_(ツ)_/¯
          </p>
        </Col>
      </Row>
      <Row className="social-container">
        <Col md={2}></Col>
        <Col className="align-right social-media-back" md={6}>
          <p className="media-text">Contact me on Social Media</p>
          <div className="media-icons">
            <a
              target="_blank"
              className="azul-oscuro"
              rel="noopener noreferrer"
              href="https://twitter.com/untalandy"
            >
              {" "}
              <FontAwesomeIcon size="2x" icon={["fab", "twitter"]} />
            </a>
            <a
              target="_blank"
              className="azul-oscuro"
              rel="noopener noreferrer"
              href="https://angel.co/u/carlos-andres-rodriguez"
            >
              {" "}
              <FontAwesomeIcon size="2x" icon={["fab", "angellist"]} />
            </a>

            <a
              target="_blank"
              className="azul-oscuro"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/andres-dev/"
            >
              {" "}
              <FontAwesomeIcon size="2x" icon={["fab", "linkedin"]} />
            </a>
            <a
              target="_blank"
              className="azul-oscuro"
              rel="noopener noreferrer"
              href="https://github.com/andynarf"
            >
              {" "}
              <FontAwesomeIcon size="2x" icon={["fab", "github"]} />
            </a>
          </div>
        </Col>
        <Col md={4}></Col>
      </Row>
    </div>
  );
}
