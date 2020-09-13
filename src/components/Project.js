import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'




export default function Project(props) {
    const {name, live, github, text, image} = props.project
    return (
<Card  >
  <Card.Img variant="top" src={image} />
  <Card.Body>
    <Card.Title><a target='_blank'rel="noopener noreferrer" href={live}> {name} </a></Card.Title>
    <Card.Text>
      {text}
    </Card.Text>
    <Button variant="outline-primary" target='_blank' rel="noopener noreferrer" href={github}>GitHub</Button>
  </Card.Body>
</Card>
    )
}

