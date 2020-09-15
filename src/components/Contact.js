import React from 'react'
import Container from 'react-bootstrap/Container'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './contact.css'


export default function Contact() {
    return (
        <Container className='contact-container'>
            <h2> <a id='Contact' href='#Contact' className='section-title touch'>Get In Touch  </a></h2>
            <p className='contact-text'>To get in touch with me, you can send me an email, or contact me via GitHub or LinkedIn.</p>

            <h3 className='mail-container'>
                <FontAwesomeIcon className='icon' icon={'envelope'} />
                <a className='myemail' href="mailto:andresrodriguez4@outlook.com.ar">andresrodriguez4@outlook.com.ar</a>
            </h3>
            <h3 className='myemail'>
                <FontAwesomeIcon className='icon' icon={'mobile-alt'} />
            (+54) 11-6019-0598
            </h3>
            <div>
                <a target='_blank' rel="noopener noreferrer" href='https://github.com/andynarf'> <FontAwesomeIcon size='3x' icon={['fab', 'github']} className='contact-icon' /></a>
                <a target='_blank' rel="noopener noreferrer" href='https://www.linkedin.com/in/andres-dev/'>   <FontAwesomeIcon size='3x' icon={['fab', 'linkedin']} className='contact-icon' /></a>
            </div>

        </Container>
    )
}