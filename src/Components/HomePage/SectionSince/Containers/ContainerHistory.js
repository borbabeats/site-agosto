import React from 'react';
import FotosAereaHome from '../../../../Config/Images/FotosAereaHome.jpg'
import imageFirst from '../../../../Config/Images/firstPhoto.jpg'
import { Button, Fade, Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

const Highlights = [
    {
        id: 1,
        classNameIcon: 'nc-icon nc-single-copy-04',
        textForTitle: '1963',
        textForApresentation: "Início das atividades, produção de eletroferragens galvanizadas para o segmento de energia",
        img : ''

    },
    {
        id: 2,
        classNameIcon: 'nc-icon nc-bank',
        textForTitle: '1971',
        textForApresentation: "Iniciada a produção de peças para o segmento Agrícola",
        img : ''

    },
    {
        id: 3,
        classNameIcon: 'nc-icon nc-chart-bar-32',
        textForTitle: '1988 ',
        textForApresentation: "Inaugurada a Forjaria II com prensa Smeral de 4.000 t.",
        img : ''

    },
    {
        id: 4,
        classNameIcon: 'nc-icon nc-atom',
        textForTitle: '1995',
        textForApresentation: "Iniciada a produção de peças para o segmento Automotivo.",
        img : ''

    },
    {
        id: 5,
        classNameIcon: 'nc-icon nc-atom',
        textForTitle: '2008',
        textForApresentation: "Implementada nova linha de extrução a quente, focado na produção de pontas do eixo traseiro.",
        img : require('../../../../Config/Images/extrusão.png')

    },
    {
        id: 6,
        classNameIcon: 'nc-icon nc-atom',
        textForTitle: '2010',
        textForApresentation: "Início da produção em célula na Usinagem",
        img : ''

    },
]

function PageHome() {
    return <div className="section text-center">
        <Container>
            <Row>
                <Fade className="mt-3" tag="h5" baseClassActive={'show'} >
                    <Col className="ml-auto mr-auto" md="15" lg="15" sm="15">
                        <h2 className="title mt-5">Nossa História!</h2>
                        <div className='d-flex text-center'>
                            <img src={imageFirst} alt="" style={{ maxHeight: '100%', width: '50%', borderRadius: 20, opacity: '1', background: 'rbga(0,0,0,0.8)', padding: 10 }} />
                            <img src={FotosAereaHome} alt="" style={{ maxHeight: '100%', width: '50%', borderRadius: 20, opacity: '1', background: 'rbga(0,0,0,0.8)', padding: 10 }} />
                        </div>
                        <p className="description pt-3 text-white bg-danger" >
                            De uma empresa com apenas 3 funcionários, passou a ser fornecedor global com tecnologias state-of-the-art em 2014 (Texto com Adriana)
                        </p>
                    </Col>
                </Fade>
            </Row>
            <Row className='pt-4' >
                {Highlights && Highlights.map(({ id, classNameIcon, textForTitle, textForApresentation, img }) => {
                    return <Col className='p-2' md="2" key={id}>
                        <div className="info">
                            <div className="icon">
                                <img src={img} alt="" style={{width : 50, height : 50}} />
                                <i className={classNameIcon} />
                            </div>
                            <div className="description">
                                <div className='text-center text-break' style={{ height: 'auto', minHeight: '8rem' }}>
                                    <h3 className="info-title">{textForTitle}</h3>
                                    <p className="description " style={{ color: '#000000' }}>
                                        {textForApresentation}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Col>
                })}
            </Row>
            <Fade className="mt-3" tag="h5" >
                <Col className="ml-auto mr-auto text-center " md="15" lg="15" sm="15">
                    <Link to="/institucional#historico">
                        <Button className="btn-round btn-maxi-color "> Saiba Mais </Button>
                    </Link>
                </Col>
            </Fade>
        </Container>
    </div>;
}

export default PageHome;