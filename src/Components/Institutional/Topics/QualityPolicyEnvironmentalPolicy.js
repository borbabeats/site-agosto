import React from 'react';
import { Fade, Container, Row, Col } from "reactstrap";
import { useMediaQuery } from 'react-responsive';
import { useTranslation } from "react-i18next";

function QualityPolicyEnvironmentalPolicy({ id }) {
    const { t } = useTranslation()
    // const politicas = t('politicas', { returnObjects: true })
    const isDesktop = useMediaQuery({ minWidth: 992 });
    return <div className={`bg-white`} style={{ padding: (isDesktop ? '0 0 2rem 0' : '0 15px 2rem 15px'), paddingBottom: '2rem' }} id={id}>
        <Container >
            <Row>
                <Fade className="" baseClassActive={'show'} >
                    <Col className="ml-auto mr-auto" md="12" lg="15" sm="12" key={`QualityPolicyEnvironmentalPolicy-${id}`} >
                        <h2 className="title ">{t('institucional.politica.titulo')}</h2>
                        {t('institucional.politica.texto', { returnObjects: true }).map(({ titulo, subtitulo, texto }, index) => <div key={index}>
                            {titulo && <h2>{titulo}</h2>}
                            {subtitulo && <h3 className='color-maxi'> {subtitulo} </h3>}
                            {texto && texto.map((text, index) => <p className="description mt-3 bg-dange text-whit" key={index}> {text} </p>)}
                        </div>)}
                    </Col>
                </Fade>
            </Row>
        </Container>
    </div>;
}

export default QualityPolicyEnvironmentalPolicy;