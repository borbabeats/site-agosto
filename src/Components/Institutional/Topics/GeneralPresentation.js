import { useEffect } from 'react';
import { Fade, Container, Row, Col } from "reactstrap";
import { useMediaQuery } from 'react-responsive';
// import { Container } from './styles';
import { useTranslation } from "react-i18next";

function GeneralPresentation({ id }) {
    const { t } = useTranslation()
    const isDesktop = useMediaQuery({ minWidth: 992 });

    useEffect(() => {
        if (window.location.hash) {
            const element = document.querySelector(window.location.hash);
            if (element) {
                const navbarHeight = document.querySelector("#navbar").offsetHeight; // altura da navbar
                window.scrollTo({ top: element.offsetTop - navbarHeight, behavior: "smooth" });
            }
        }
    }, []);

    return <div style={{ padding: (isDesktop ? '5rem 0 2rem 0' : '5rem 15px 2rem 15px') }} className={`bg-white`} id={id}>
        <Container>
            <Row className='mt-3'>
                <Fade className="mt-3" baseClassActive={'show'} >
                    <Col className="ml-auto mr-auto" md="12" lg="15" sm="12">
                        <h2 className="title mt-3 color-maxi-invert" style={{ fontWeight: '' }}>{t('institucional.apresentacao.titulo')}</h2>
                        {t('institucional.apresentacao.texto', { returnObjects: true }).map(({ titulo, subtitulo, texto }, index) => <div key={index}>
                            {titulo && <h2 className='title' >{titulo}</h2>}
                            {subtitulo && <h3 className='color-maxi'> {subtitulo} </h3>}
                            {texto && texto.map((text, index) => <p className="description mt-3 text-whit" key={index}> {text} </p>)}
                        </div>)}
                    </Col>
                </Fade>
            </Row>
        </Container>
    </div>
}

export default GeneralPresentation;