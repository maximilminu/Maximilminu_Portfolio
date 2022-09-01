import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import logo from "../assets/img/logo-max.png"


const Footer = () => {
    return (
        <footer className='footer'>
            <Container>
                <Row className='container-logo-footer'>
                    <Col sm={8} alt="logo" className='footerLogo'>
                        <img src={logo} />
                    </Col>
                    <Col className="footer-icon-container" >
                        <div className='social-icon-footer'>
                            <a target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/maximiliano-minutillo/'><FontAwesomeIcon icon={faLinkedin} className="navbar-icon" /></a>
                            <a target="_blank" rel="noreferrer" href='https://github.com/maximilminu'><FontAwesomeIcon icon={faGithub} className="navbar-icon" /></a>
                            <a target="_blank" rel="noreferrer" href='https://drive.google.com/file/d/1HYZUR66zJ66EiUr-zqjeEaZPJZhglKkT/view?usp=sharing' id='cv-container'><div id='cv-text'>CV</div></a>
                        </div>
                    </Col>
                </Row>
            </Container>

        </footer>
    )
}

export default Footer