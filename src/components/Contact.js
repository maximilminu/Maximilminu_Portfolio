import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import contactImg from "../assets/img/contact-img.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faAddressCard } from '@fortawesome/free-solid-svg-icons'


const Contact = () => {

    const formInitialDetails = {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: ""
    }

    const [formDetails, setFormDetails] = useState(formInitialDetails)
    const [buttonText, setButtonText] = useState("Send")
    const [status, setStatus] = useState({})
    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value
        })
    }

    const handleSubmit = async (e) => {
        e.prevent()
        setButtonText("Sending...")
        let response = await fetch("https://localhost:5000/contact", {
            method: "POST",
            headers: {
                "Content-Type": "Application/json;charset=utf-8"
            },
            body: JSON.stringify(formDetails)
        })
        setButtonText("Send")
        let result = response.json()
        setFormDetails(formInitialDetails)

        if (result.code === 200) {
            setStatus({ success: true, message: "Message sent Successfully." })
        } else {
            setStatus({ success: false, message: "Somthing went wrong, please try again later." })
        }
    }

    return (
        <section className='contact' id="connect">
            <Container>
                <Row className='align-items-center'>
                    <Col md={6}>
                        <img src={contactImg} alt="Contact Us" />
                    </Col>
                    <Col md={6}>
                        <h2>Get in Touch</h2>
                        <Row>
                            <Col>
                                <a href="https://drive.google.com/file/d/1HYZUR66zJ66EiUr-zqjeEaZPJZhglKkT/view?usp=sharing">
                                    <FontAwesomeIcon icon={faAddressCard} className="contact-icon" id='cv-icon' />    Maximiliano Minutillo
                                </a>
                            </Col>
                            <Col sm={12}>
                                <a href=''>
                                    <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />    maximilminu@gmail.com
                                </a>
                            </Col>
                            <Col sm={12}>
                                <a href='https://www.linkedin.com/in/maximiliano-minutillo/'>
                                    <FontAwesomeIcon icon={faLinkedin} className="contact-icon-brand" />    /maximiliano-minutillo
                                </a>
                            </Col>
                            <Col>
                                <a href='https://wa.me/5491132836816'>
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