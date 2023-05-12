import React from 'react';
import ImgagemCertificates from '../../Config/Images/certificates.png';
import { Button, Fade, Container, Row, Col } from "reactstrap";


// import { Container } from './styles';

function Certification({ id }) {
    return <div className='div-constitutional' id={id}>
        <Container >
            <Row>
                <Fade className="mt-3" tag="h5" baseClassActive={'show'} >
                    <Col className="ml-auto mr-auto" md="12" lg="15" sm="12">
                        <h2 className="title">Buscamos, na tecnologia e na excelência, resultados cada vez melhores.</h2>

                        <div className='d-flex text-center'>
                            <Row className="ml-auto mr-auto" md="12" lg="15" sm="12">
                                <img src={ImgagemCertificates} alt="" style={{ maxHeight: '100%', width: '100%', borderRadius: 5, opacity: '0.8', background: 'rbga(0,0,0,0.8)', padding: 10 }} />
                                <img src={ImgagemCertificates} alt="" style={{ maxHeight: '100%', width: '100%', borderRadius: 5, opacity: '0.8', background: 'rbga(0,0,0,0.8)', padding: 10 }} />
                                <img src={ImgagemCertificates} alt="" style={{ maxHeight: '100%', width: '100%', borderRadius: 5, opacity: '0.8', background: 'rbga(0,0,0,0.8)', padding: 10 }} />

                            </Row>
                        </div>
                        <h5 className="description pt-5" >
                            Conheça as certificações já conquistadas pela Maxiforja.
                        </h5>

                    </Col>
                </Fade>
            </Row>
        </Container>
    </div>
}

export default Certification;