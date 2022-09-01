import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
// import { ArrowRightCircle } from 'react-bootstrap-icons'

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
                            <p>Mi nombre es Maximiliano Minutillo y soy Full-Stack Developer. Tengo muchas ganas de desarrollarme en la industria y seguir aprendiendo.</p>
                            <p>Buscando cambios fue que decidí realizar el Coding Bootcamp de Plataforma 5, donde nos egresamos con más de 800 horas de codeo, trabajando con metodologías ágiles y 3 proyectos finalizados entre profesionales e individuales.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Banner