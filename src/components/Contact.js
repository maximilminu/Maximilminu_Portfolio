import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faAddressCard } from '@fortawesome/free-solid-svg-icons'
import contactImg from "../assets/img/maxi.jpg"

const Contact = () => {

    return (
        <section className='contact' id="connect">
            <Container>
                <Row className='align-items-center'>
                    <Col md={6} id="contact-img">
                        <img src={contactImg} alt="Contact Us" id='maximinu-img' />
                    </Col>
                    <Col md={6}>
                        <h2>Conectemos</h2>
                        <Row>
                            <Col>
                                <a href="https://drive.google.com/file/d/1HYZUR66zJ66EiUr-zqjeEaZPJZhglKkT/view?usp=sharing" target="_blank" rel="noreferrer">
                                    <FontAwesomeIcon icon={faAddressCard} className="contact-icon" id='cv-icon' />    Maximiliano Minutillo
                                </a>
                            </Col>
                            <Col sm={12}>
                                <a href='mailto:maximilminu@gmail.com?subject=Trabajemos%20juntos'>
                                    <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />    maximilminu@gmail.com
                                </a>
                            </Col>
                            <Col sm={12}>
                                <a href='https://www.linkedin.com/in/maximiliano-minutillo/' target="_blank" rel="noreferrer">
                                    <FontAwesomeIcon icon={faLinkedin} className="contact-icon-brand" />    /maximiliano-minutillo
                                </a>
                            </Col>
                            <Col>
                                <a href='https://wa.me/5491132836816' target="_blank" rel="noreferrer">
                                    <FontAwesomeIcon icon={faWhatsapp} className="contact-icon-brand" />    +54 9 11 3283-6816
                                </a>
                            </Col>

                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Contact