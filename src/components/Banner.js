import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Banner = () => {
    const [loopNum, setLoopNum] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)
    const [text, setText] = useState("")
    const [delta, setDelta] = useState(200 - Math.random() * 100)
    const [index, setIndex] = useState(1)
    const toRotate = ["Web Developer", "Back-End Developer", "Front-End Developer"];
    const period = 1800

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => { clearInterval(ticker) };
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 1.6);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setIndex(prevIndex => prevIndex - 1);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setIndex(1);
            setDelta(200);
        } else {
            setIndex(prevIndex => prevIndex + 1);
        }
    }

    return (
        <section className='banner' id='home'>

            <div id="stars"></div>
            <div id="stars2"></div>
            <Container>
                <Row className='align-items-center'>
                    <Col sm={12}>
                        {/* <span className='tagline' >Bienvenido a mi Portfolio</span> */}
                        <h1>{` Maximiliano Minutillo`}
                            <br />
                            <span className='wrap' id='wrap-text'>{` ${text}`}</span>
                        </h1>
                        <div className='banner-text-container'>
                            <p>Mi nombre es Maximiliano Minutillo, soy de Buenos Aires, Argentina. Buscando cambios fue que decidí realizar el Coding Bootcamp de Plataforma 5, éste es una capacitación intensiva de más de 800 hs, trabajando con metodologías ágiles y aprendiendo a utilizar las herramientas más solicitadas de la industria IT.</p>
                            <p>Mi capacitación como desarrollador Full-Stack, sumado a mi licenciatura en Comercio Internacional y mi amplia experiencia comercial, me han formado para ser una persona lógica, analítica, eficiente, enfocada a resultados, con gran capacidad de adaptación y aprendizaje.</p>
                            {/* <p>Hoy mi mayor objetivo es encontrar un puesto como desarrollador web en un lugar donde pueda aplicar todos mis conocimientos y habilidades y que a su vez me permita seguir desarrollándome para el día de mañana ser un excelente profesional y aportar lo mayor posible a ese lugar</p> */}
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Banner