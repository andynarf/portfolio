import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import './projects.css'



export default function Project(props) {
    const {name, live, github, text, image} = props.project
    return (
<Card className='cards'border='light'
   >
  <Card.Img className='card-img' variant="top" src={image} />
  <Card.Body className='project-button'>
    <Card.Title className='project-name'><a target='_blank'rel="noopener noreferrer"  href={live} className='card-title'> {name} </a></Card.Title>
    <Card.Text>
      {text}
    </Card.Text>
    <Button  variant="info" target='_blank' rel="noopener noreferrer" href={github}>GitHub</Button>
  </Card.Body>
</Card>
    )
}

