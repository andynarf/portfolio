import React from 'react'
import Image from 'react-bootstrap/Image'
import dodge from '../images/dodge.png'
import calc from '../images/calc.png'
import tictactoe from '../images/tictactoe.png'
import todo from '../images/todo.png'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'




export default function Project(props) {
    const {name, live, github, text, image} = props.project
    return (
<Card  >
  <Card.Img variant="top" src={image} />
  <Card.Body>
    <Card.Title><a target='_blank' href={live}> {name} </a></Card.Title>
    <Card.Text>
      {text}
    </Card.Text>
    <Button variant="outline-primary" target='_blank' href={github}>GitHub</Button>
  </Card.Body>
</Card>
    )
}

