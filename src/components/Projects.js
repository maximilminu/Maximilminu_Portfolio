import React from 'react'
import { Col, Container, Row, Tab } from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav';
import projImg1 from "../assets/img/globalNews1.jpg"
import projImg2 from "../assets/img/cinema.jpg"
import projImg3 from "../assets/img/archer.jpg"
import projImg4 from "../assets/img/rick_y_morty.png"
import ProjectCard from './ProjectCard';


const Projects = () => {

    const projects1 = [
        {
            title: "Global News App",
            description: "Aplicación para el sector de RRHH, de la empresa Global News con vistas de usuario y permisos para el administrador. Se utilizó React Native, Redux, Express, PostgreSQL, JWT y metodología Scrum.",
            imgUrl: projImg1,
            link: "https://github.com/maximilminu/Global-News-Front"
        },
        {
            title: "Shoot-Off",
            description: "E-Commerce de productos de arquería, con vistas de cliente y permisos para el administrador, carrito de compras y reseñas. Se utilizó React, PostgreSql, Global Context, Passport y metodología Scrum.",
            imgUrl: projImg3,
            link: "https://github.com/maximilminu/shootoff"
        },
        {
            title: "The Movie Data Base",
            description: "Proyecto individual que consistió en crear una pagina web con la descripción, valoración y ranking de películas y series. Se utilizó la API de TMDB, React.Js, Node.Js y Express.",
            imgUrl: projImg2,
            link: "https://github.com/maximilminu/The_Movie_Data_Base",
        }
    ];

    const projects2 = [
        {
            title: "Rick & Morty",
            description: "Proyecto individual creado con la API de Rick & Morty, con información de cada uno de los personajes y performance de los pedidos. Se utilizó React, Redux y Bootstrap.",
            imgUrl: projImg4,
            link: "https://github.com/maximilminu/RickAndMorty"
        },
    ];

    return (
        <section className='project' id='projects'>
            <Container>
                <Row id='project-bx'>
                    <Col>
                        <h2>Projectos</h2>
                        <p>A continuación se encuentran los proyectos que he realizado con una breve descripción, donde además podran acceder a su repositorio de GitHub. Continuo trabajando en ellos, refactorizando, optimizando codigo y poniendo en práctica otras herramientas con el fin de seguir desarrollando mis habilidades.</p>
                        <Tab.Container id="projects-tabs" defaultActiveKey={"first"}>
                            <Nav variant="pills" className='nav-pills' id="pills-tab" >
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Tab One</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Tab Two</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Tab Three </Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first" >
                                    <Row id='custom-row'>
                                        {
                                            projects1.map((project, index) => {
                                                return (
                                                    <ProjectCard
                                                        key={index}
                                                        {...project}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                <Row id='custom-row'>
                                        {
                                            projects2.map((project, index) => {
                                                return (
                                                    <ProjectCard
                                                        key={index}
                                                        {...project}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">Lorem Ipsum</Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            {/* <img className="background-image-right" src={colorSharp2} /> */}

        </section>
    )
}
export default Projects