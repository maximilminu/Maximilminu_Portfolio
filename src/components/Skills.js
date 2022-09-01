import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-multi-carousel/lib/styles.css";

import javaScript from "../assets/img/javascript.png"
import bootstrap from "../assets/img/bootstrap.png"
import express from "../assets/img/express.png"
import git from "../assets/img/git.png"
import github from "../assets/img/github.png"
import redux from "../assets/img/redux.png"
import NodeLogo from "../assets/img/nodejs.png"
import html from "../assets/img/html-5.png"
import postgresql from "../assets/img/postgresql.png"
import css from "../assets/img/css3.png"
import reactNative from "../assets/img/react-native.png"



const Skills = () => {

    return (
        <div>
            <section className='skill' id='skills'>
                <Container>
                    <Row>
                        <Col>
                            <div className='skill-bx' >
                                <h2>
                                    Tecnologías
                                </h2>
                                <p>Dentro de los lenguajes, tecnologías y herramientas que tengo experiencia se encuentran JavaScript, React.JS, React Native, PostgreSQL, Node.JS, Github, Redux, HTML y CSS.</p>
                                <div className='skills-img-container'>
                                    <div className='skill-container'>
                                        <img src={javaScript} />
                                        <p>JavaScript</p>
                                    </div>
                                    <div className='skill-container'>
                                        <img src={reactNative} />
                                        <p>React.Js</p>
                                    </div>
                                    <div className='skill-container'>
                                        <img src={NodeLogo} />
                                        <p>Node.Js</p>
                                    </div>
                                    <div className='skill-container'>
                                        <img src={postgresql} />
                                        <p>PostgreSQL</p>
                                    </div>
                                    <div className='skill-container'>
                                        <img src={express} />
                                        <p>Express.Js</p>
                                    </div>
                                    <div className='skill-container'>
                                        <img src={bootstrap} />
                                        <p>Bootstrap</p>
                                    </div>
                                    <div className='skill-container'>
                                        <img src={git} />
                                        <p>Git</p>
                                    </div>
                                    <div className='skill-container'>
                                        <img src={github} />
                                        <p>Github</p>
                                    </div>
                                    <div className='skill-container'>
                                        <img src={html} />
                                        <p>HTML</p>
                                    </div>
                                    <div className='skill-container'>
                                        <img src={css} />
                                        <p>Css</p>
                                    </div>
                                    <div className='skill-container'>
                                        <img src={redux} />
                                        <p>Redux</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    )
}

export default Skills