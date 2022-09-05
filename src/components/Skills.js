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
                                    Herramientas
                                </h2>
                                <p>Dentro de los lenguajes, tecnologías y herramientas que tengo experiencia se encuentran JavaScript, React.JS, React Native, PostgreSQL, Node.JS, Github, Redux, HTML y CSS.</p>
                                <div className='skills-img-container'>
                                    <div className='skill-container'>
                                        <img src={javaScript} alt="javascript" />
                                        <p>JavaScript</p>
                                    </div>
                                    <div className='skill-container'>
                                        <img src={reactNative} alt="reactNative" />
                                        <p>React.Js</p>
                                    </div>
                                    <div className='skill-container'>
                                        <img src={NodeLogo} alt="Node.js" />
                                        <p>Node.Js</p>
                                    </div>
                                    <div className='skill-container'>
                                        <img src={postgresql} alt="PostgreSQL"/>
                                        <p>PostgreSQL</p>
                                    </div>
                                    <div className='skill-container'>
                                        <img src={express} alt="Express"/>
                                        <p>Express.Js</p>
                                    </div>
                                    <div className='skill-container'>
                                        <img src={bootstrap} alt="Bootstrap" />
                                        <p>Bootstrap</p>
                                    </div>
                                    <div className='skill-container'>
                                        <img src={git} alt="Git"/>
                                        <p>Git</p>
                                    </div>
                                    <div className='skill-container'>
                                        <img src={github} alt="Github"/>
                                        <p>Github</p>
                                    </div>
                                    <div className='skill-container'>
                                        <img src={html} alt="HTML"/>
                                        <p>HTML</p>
                                    </div>
                                    <div className='skill-container'>
                                        <img src={css} alt="CSS" />
                                        <p>Css</p>
                                    </div>
                                    <div className='skill-container'>
                                        <img src={redux} alt="Redux"/>
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