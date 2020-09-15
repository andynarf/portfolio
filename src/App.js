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
import Normalize from 'react-normalize'

library.add(fab, faMobileAlt, faEnvelope)


function App() {
  return (
    <>
      <Normalize></Normalize>
      <Container fluid className="App">
        <Row>
          <Col md={2}>
            <NavBar></NavBar>
          </Col>
          <Col md={10} className="right-side">
            <Intro></Intro>
            <PortFolio ></PortFolio>
            <div className='about-contact'>
              <About ></About>
              <Contact ></Contact>
            </div>
          </Col>
        </Row>

      </Container>
    </>
  )
}

export default App;
