import React from 'react'
import Container from 'react-bootstrap/Container'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './contact.css'


export default function Contact() {
    return (
        <Container>
            <h2> <a id='Contact'href='#Contact'>Get In Touch  </a></h2>
            <p>To get in touch with me, you can send me an email, or contact me via GitHub or LinkedIn.</p>

            {/* <h3><FontAwesomeIcon size='2x' className='icon' icon={'envelope'} /><a className='myemail' href="mailto:andresrodriguez4@outlook.com.ar">andresrodriguez4@outlook.com.ar</a></h3> */}
            <h3><FontAwesomeIcon size='2x' className='icon' icon={'mobile-alt'} />(+54) 11-6019-0598 </h3>
            <div>
            <a target='_blank' rel="noopener noreferrer" href='https://github.com/andynarf'> <FontAwesomeIcon size='3x'icon={['fab', 'github']} /></a>
            <a target='_blank' rel="noopener noreferrer" href='https://www.linkedin.com/in/andres-dev/'>   <FontAwesomeIcon size='3x'icon={['fab', 'linkedin']}  /></a>
            </div>

        </Container>
    )
}