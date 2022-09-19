import React, { useEffect, useState } from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import logo from "../assets/img/logo-max.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'


const NavBar = () => {
    const [activeLink, setActiveLink] = useState("home")
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        }

        window.addEventListener("scroll", onScroll)
        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value)
    }

    return (
        <div>
            <Navbar expand="lg" className={scrolled ? "scrolled" : ""} >
                <Container>
                    <Navbar.Brand href="#home">
                        <img src={logo} alt="Logo" id='logo-Nav' />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav">
                        <span className='navbar-toggler-icon'></span>
                    </Navbar.Toggle>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home" className={activeLink === "home" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink("home")} >Inicio</Nav.Link>
                            <Nav.Link href="#skills" className={activeLink === "skills" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink("skills")}>Herramientas</Nav.Link>
                            <Nav.Link href="#projects" className={activeLink === "projects" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink("projects")}>Proyectos</Nav.Link>
                            <Nav.Link href="#connect" className={activeLink === "connect" ? "active navbar-link" : "navbar-link"} onClick={() => onUpdateActiveLink("connect")}>Contacto</Nav.Link>
                        </Nav>
                        <span className='navbar-text'>
                            <div className='social-icon'>
                                <a target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/maximiliano-minutillo/'><FontAwesomeIcon icon={faLinkedin} className="navbar-icon"/></a>
                                <a target="_blank" rel="noreferrer" href='https://github.com/maximilminu'><FontAwesomeIcon icon={faGithub} className="navbar-icon"/></a>
                                <a target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/1HYZUR66zJ66EiUr-zqjeEaZPJZhglKkT/view?usp=sharing" id='cv-container'><div id='cv-text'>CV</div></a>
                            </div>
                            {/* <button className='vvd'>
                                <Nav.Link href="#connect"> <span>Contacto</span></Nav.Link>
                            </button> */}
                        </span>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavBar