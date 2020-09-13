import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './font-mfizz-2.4.1/font-mfizz.css'
import './about.css'



export default function About() {

    return (
        <Container>
            <Col md={6}><h2>About Me</h2></Col>

            <Col md={6}>
                <p>
                    I’m an aspiring web designer from Argentina, who loves everything about the web. I've  worked in lots of different jobs. I’m excited to bring my life experience to the process of building fantastic looking websites.

                    I’ve been a professional cook and I am a life-long learner who's always interested in expanding my skills.
            </p>
            <Button variant="outline-primary" target='_blank' href='https://docs.google.com/document/d/1P2gTCf940el0PSFMpxcaos8foX7Dbe2iPIQ8BRiUQVo/edit?usp=sharing'>Get my Resume</Button>


            </Col>
            <Row>
                <Col md={4}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Languages</Card.Title>
                            <Card.Text>
                                <ul>
                                    <li>JavaScript (ES5/ES6)</li>
                                    <li>Ruby</li>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                </ul>
                            </Card.Text>

                        </Card.Body>
                        <Card.Footer >
                            <i className="icon-javascript size"></i>
                            <i className="icon-ruby size"></i>
                            <i class="icon-html5 size"></i>
                            <i class="icon-css3 size"></i>
                        </Card.Footer>

                    </Card>

                </Col>

                <Col md={4}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Frameworks</Card.Title>
                            <Card.Text>
                                <ul>
                                    <li>Bootstrap</li>
                                    <li>Ruby on Rails</li>
                                    <li>Rspec</li>
                                    <li>React</li>
                                    <li>Phaser3</li>
                                </ul>
                            </Card.Text>

                        </Card.Body>
                        <Card.Footer >
                            <i className="icon-ruby-on-rails-alt size"></i>
                            <i class="icon-reactjs size"></i>
                            <i className="icon-bootstrap size"></i>
                        </Card.Footer>
                    </Card>
                </Col>

                <Col md={4}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Tools</Card.Title>
                            <Card.Text>
                                <ul>
                                    <li>Github</li>
                                    <li>Gitlab</li>
                                    <li>Codepen</li>
                                    <li>postgreSQL</li>
                                </ul>
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer >
                            <FontAwesomeIcon size='2x' className='icon' icon={['fab', 'github']} />
                            <FontAwesomeIcon size='2x' className='icon' icon={['fab', 'gitlab']} />
                            <FontAwesomeIcon size='2x' className='icon' icon={['fab', 'codepen']} />
                            <i class="icon-postgres size"></i>

                        </Card.Footer>
                    </Card>
                </Col>

            </Row>

        </Container>
    )
}
