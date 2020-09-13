import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Col from 'react-bootstrap/col'
import Row from 'react-bootstrap/Row'
import './intro.css'

export default function Intro() {
    return (
        <div className='intro'>
            <Row>
                <Col md={2}></Col>
                <Col md={10}>
                    <h1 className='no-centered'>Andres Rodriguez</h1>
                    <h5 className='no-centered'>Software Developer</h5>
                </Col></Row>
            <Row>
                <Col md={2}></Col>

                <Col md={6}>
                    <p className='no-centered'>
                        Full stack developer and former
                        Itamae (Traditional Japanese chef)
                        hoping to combine my passion for
                        building responsive apps and designs
                        with my education, pair-programming
                        experience, and precision knife skills.

                        Just kidding on the knife skills. :)
            </p>
                </Col>
            </Row>
            <Row>
                <Col className='align-right' md={8}>
                    <a target='_blank' rel="noopener noreferrer" href='https://github.com/andynarf'> <FontAwesomeIcon size='3x' icon={['fab', 'github']} /></a>
                    <a target='_blank' rel="noopener noreferrer" href='https://www.linkedin.com/in/andres-dev/'>   <FontAwesomeIcon size='3x' icon={['fab', 'linkedin']} /></a>
                </Col>
                <Col md={4}></Col>
            </Row>
        </div>
    )
}
