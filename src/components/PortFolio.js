import React from 'react'
import Project from './Project'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import dodge from '../images/dodge.png'
import hulu from '../images/hulu.png'
import tictactoe from '../images/tictactoe.png'
import todo from '../images/todo.png'
import cocktails from '../images/cocktails.png'
import facebook from '../images/facebook.png'
import './portfolio.css'


export default function PortFolio() {
    const projects = [
        {
            name: 'Cocktails Search',
            live: 'https://tcdb.netlify.app/',
            github: 'https://github.com/andynarf/Dodge-Game',
            image: cocktails,
            text: 'An application wherer you can see lots of cocktails, and search for your favourite one.'
        },
        {
            name: 'Dodge Game',
            live: 'https://dodge-game.netlify.app/',
            github: 'https://github.com/andynarf/cocktails-search',
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
            name: 'Hulu UI clone',
            live: 'https://hulu-ui-clone.netlify.app/',
            github: 'https://github.com/andynarf/hulu_clone',
            image: hulu,
            text: "This a clone of Hulu, the app to watch movies and series . Made in React, It's a fully responsive site."

        },{
            name: 'Facebook Rails clone',
            live: 'https://floating-wave-46859.herokuapp.com/',
            github: 'https://github.com/webmarkyn/facebook-clone',
            image: facebook,
            text: "This is a Facebook clone built with Ruby on Rails"

        },

    ]
    return (
        <Row>
            <Col md={1}></Col>
        <Col md={10}>
            <h2 className='portfolio-title-container'><a id='PortFolio' className='section-title' href='#PortFolio'> MY PORTFOLIO</a></h2>
                <Container fluid>
                
                <Row>
                    {projects.map((item)=>{
                       return <Col md={6}>
                            <Project project={item}></Project>
                        </Col> 
                    })}
                </Row>
            </Container>
        </Col>
        
        </Row>
    )
}

