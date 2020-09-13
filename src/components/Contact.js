import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function Contact() {
    return (
        <Container>
            <h2>Get In Touch</h2>
            <p>To get in touch with me, you can send me an email, or contact me via GitHub or LinkedIn.</p>

            <h3><FontAwesomeIcon size='2x' className='icon' icon={'envelope'} /><a href="mailto:andresrodriguez4@outlook.com.ar">andresrodriguez4@outlook.com.ar</a></h3>
            <h3><FontAwesomeIcon size='2x' className='icon' icon={'mobile-alt'} />(+54) 11-6019-0598 </h3>


        </Container>
    )
}