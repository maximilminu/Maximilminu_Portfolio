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
                        <h1>{` Maximiliano Minutillo`}
                            <br />
                            <span className='wrap' id='wrap-text'>{` ${text}`}</span>
                        </h1>
                        <div className='banner-text-container'>
                            <p>Mi nombre es Maximiliano Minutillo, soy de Buenos Aires, Argentina. Buscando cambios fue que decid?? realizar el Coding Bootcamp de Plataforma 5, ??ste es una capacitaci??n intensiva de m??s de 800 hs, trabajando con metodolog??as ??giles y aprendiendo a utilizar las herramientas m??s solicitadas de la industria IT.</p>
                            <p>Mi capacitaci??n como desarrollador Full-Stack, sumado a mi licenciatura en Comercio Internacional y mi amplia experiencia comercial, me han formado para ser una persona l??gica, anal??tica, eficiente, enfocada a resultados, con gran capacidad de adaptaci??n y aprendizaje.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Banner