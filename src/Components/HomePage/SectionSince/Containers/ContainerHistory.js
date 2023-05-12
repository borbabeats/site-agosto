import React from 'react';
import imageFrente from '../../../../Config/Images/imageFrente.png'
import imageFirst from '../../../../Config/Images/firstPhoto.JPG'
import { Button, Fade, Card, CardBody, CardFooter, CardTitle, Form, Input, InputGroupAddon, InputGroupText, InputGroup, Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

const Highlights = [
    {
        id: 1,
        classNameIcon: 'nc-icon nc-single-copy-04',
        textForTitle: '1963',
        textForApresentation: "Constituição da CIME - Companhia Industrial de Materiais Elétricos, com 3 funcionários, em terreno de 4.500 m²,área construída de 550 m² e a finalidade de produzir eletroferragem galvanizada para energia elétrica.",

    },
    {
        id: 2,
        classNameIcon: 'nc-icon nc-bank',
        textForTitle: '1973',
        textForApresentation: "A empresa se transfere para o atual endereço, em terreno de 26.000 m² e área construída de 1.600 m². É Inaugurada a Forjaria I, equipada com Martelo Banning de 25 kJ.",

    },
    {
        id: 3,
        classNameIcon: 'nc-icon nc-chart-bar-32',
        textForTitle: '1991',
        textForApresentation: "Iniciada a produção de peças usinadas de precisão com tornos, retíficas e geradora de engrenagens CNC.",

    },
    {
        id: 4,
        classNameIcon: 'nc-icon nc-atom',
        textForTitle: '2004',
        textForApresentation: "Implantado o Laboratório de Teste de Fadiga e o projeto de produtos com tecnologia CAD, CAM e conformação em CAE.",

    },
]

function ContainerHistory() {
    return <div className="section text-center">
        <Container>
            <Row>
                <Fade className="mt-3" tag="h5" baseClassActive={'show'} >
                    <Col className="ml-auto mr-auto" md="12" lg="15" sm="12">
                        <h2 className="title">Nossa História!</h2>
                        <div className='d-flex text-center'>
                            <img src={imageFirst} alt="" style={{ maxHeight: '100%', width: '50%', borderRadius: 5, opacity: '0.8', background: 'rbga(0,0,0,0.8)', padding: 10 }} />
                            <img src={imageFrente} alt="" style={{ maxHeight: '100%', width: '50%', borderRadius: 5, opacity: '0.8', background: 'rbga(0,0,0,0.8)', padding: 10 }} />
                        </div>
                        <h5 className="description pt-5" >
                            De uma empresa com apenas 3 funcionários, passou a ser fornecedor global com tecnologias state-of-the-art em 2014
                        </h5>
                        <br />
                        <Link to="/institucional#historico">
                            <Button className="btn-round" color="info">
                                Saiba Mais
                            </Button>
                        </Link>
                    </Col>
                </Fade>
            </Row>
            <Row className='pt-4'>
                {Highlights && Highlights.map(({ id, classNameIcon, textForTitle, textForApresentation }) => {
                    return (
                        <Col className='p-3' md="3" key={id}>
                            <div className="info">
                                <div className="icon">
                                    <i className={classNameIcon} />
                                </div>
                                <div className="description">
                                    <div className='text-center text-break' style={{ height: '14rem' }}>
                                        <h3 className="info-title">{textForTitle}</h3>
                                        <p className="description " style={{ color: '#000000' }}>
                                            {textForApresentation}
                                        </p>
                                    </div>
                                    <Link to="/institucional#historico">
                                        <Button className="btn-link" color="" >
                                            Mais Informações
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </Col>
                    )
                })}
            </Row>
        </Container>
    </div>;
}

export default ContainerHistory;