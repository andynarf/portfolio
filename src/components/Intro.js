import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function Intro() {
    return (
        <div>
            <h1>Andres Rodriguez</h1>
            <p>
                Full stack developer and former
                Itamae (Traditional Japanese chef)
                hoping to combine my passion for
                building responsive apps and designs
                with my education, pair-programming
                experience, and precision knife skills.

                Just kidding on the knife skills. :)
            </p>
            <div>
            <a target='_blank' rel="noopener noreferrer" href='https://github.com/andynarf'> <FontAwesomeIcon size='3x'icon={['fab', 'github']} /></a>
            <a target='_blank' rel="noopener noreferrer" href='https://www.linkedin.com/in/andres-dev/'>   <FontAwesomeIcon size='3x'icon={['fab', 'linkedin']}  /></a>
            </div>

        </div>
    )
}
