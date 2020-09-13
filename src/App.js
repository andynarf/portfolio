import React from 'react';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faMobileAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import NavBar from './components/NavBar'
import Intro from './components/Intro'
import PortFolio from './components/PortFolio'
import About from './components/About'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Contact from './components/Contact'

library.add(fab, faMobileAlt, faEnvelope)


function App() {
  return (
    <Container fluid className="App">
      <Row>
        <Col md={4}>
          <NavBar></NavBar>
        </Col>
        <Col md={8}>
          <Intro></Intro>
          <PortFolio></PortFolio>
          <About></About>
          <Contact></Contact>
        </Col>
      </Row>

    </Container>
  )
}

export default App;
