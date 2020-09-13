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
                <FontAwesomeIcon size='3x'icon={['fab', 'github']} />
                <FontAwesomeIcon size='3x'icon={['fab', 'linkedin']} />
            </div>

        </div>
    )
}
