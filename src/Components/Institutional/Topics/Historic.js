import { useEffect, useState, useCallback } from 'react'
import { Container, Row, Col, Fade } from "reactstrap"
import TimeLine from './TimeLine/TimeLine'
import { useMediaQuery } from 'react-responsive';
import { useTranslation } from "react-i18next";

function Historic({ id }) {
    const { t } = useTranslation()

    const isDesktop = useMediaQuery({ minWidth: 992 });
    const [index, setIndex] = useState(0)

    useEffect(() => {
        if (window.location.hash) {
            const element = document.querySelector(window.location.hash);
            if (element) {
                const targetOffsetTop = element.offsetTop;
                window.scrollTo({ top: targetOffsetTop, behavior: "smooth" });
            }
        }
    }, []);

    return <div className={`bg-maxi `} style={{ padding: (isDesktop ? '0 0 2rem 0' : '0 15px 2rem 15px') }} id={id} >
        <Container className=''>
            <Row>
                <Fade  >
                    <Col className="ml-auto mr-auto" md="12" lg="15" sm="12">
                        <h2 className="title mt-5 text-white">{t('institucional.historico.titulo')}</h2>
                        {t('institucional.historico.texto', { returnObjects: true }).map(({ titulo, subtitulo, texto }, index) => <div key={index}>
                            {titulo && <h2>{titulo}</h2>}
                            {subtitulo && <h3 className='color-maxi'> {subtitulo} </h3>}
                            {texto && texto.map((text, index) => <p className="description mt-3 bg-dange text-whit" key={index}> {text} </p>)}
                        </div>)}
                    
                    </Col>
                    <Col className="ml-auto mr-auto" md="15" lg="15" sm="15">
                        <TimeLine index={index} onChange={setIndex} />
                    </Col>
                </Fade>
            </Row>
        </Container>
    </div>
}

export default Historic