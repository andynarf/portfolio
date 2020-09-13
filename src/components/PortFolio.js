import React from 'react'
import Project from './Project'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import dodge from '../images/dodge.png'
import calc from '../images/calc.png'
import tictactoe from '../images/tictactoe.png'
import todo from '../images/todo.png'


export default function PortFolio() {
    const projects = [
        {
            name: 'Dodge Game',
            live: 'https://dodge-game.netlify.app/',
            github: 'https://github.com/andynarf/Dodge-Game',
            image: dodge,
            text: 'Browser-based game that simulates a ship going through some sort of tunnel while encountering different obstacles.'
        },
        {
            name: 'ToDo List',
            live: 'https://rawcdn.githack.com/andynarf/todo_list/6bd0153118d565b2f15adfe701be401d4f451ad8/dist/index.html',
            github: 'https://github.com/andynarf/todo_list',
            image: todo,
            text: 'This is a ToDo list, made with HTML5, CSS and Vanilla Javascript. It uses Local Storage to save the List so the data persist on the browser.'
        },
        {
            name: 'Ruby TicTacToe',
            live: 'https://tic-tac-toe-test.andynarf.repl.run/',
            github: 'https://github.com/andynarf/tic_tac_toe',
            image: tictactoe,
            text: 'A Tic Tac Toe game made on Ruby.'
        }, {
            name: 'react calculator',
            live: 'https://andy-calculator.herokuapp.com/',
            github: 'https://github.com/andynarf/my_calculator',
            image: calc,
            text: 'A calculator built with React.'
        },

    ]
    return (
        <div>
            <Container fluid>
                <Row>
                    <Col md={6}>
                        <Project project={projects[0]}></Project>
                    </Col>
                    <Col md={6}>
                        <Project project={projects[1]}></Project>
                    </Col>
                    <Col md={6}>
                        <Project project={projects[2]}></Project>
                    </Col>
                    <Col md={6}>
                        <Project project={projects[3]}></Project>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
