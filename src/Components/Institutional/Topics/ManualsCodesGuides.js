import React from 'react';
import { Fade, Container, Row, Col, ListGroup, ListGroupItem, ListGroupItemHeading } from "reactstrap";
import { useMediaQuery } from 'react-responsive';
import { BsBoxArrowUpRight } from 'react-icons/bs';

const itemsManualCodesGuides = [
    {
        id: 1,
        name: 'Código de Ética',
        data: '',
        link: require('../../../Config/PDF/codigoetica.pdf'),
    },
    {
        id: 2,
        name: 'Guia de Gestão Ambiental',
        data: '',
        link: require('../../../Config/PDF/GuiaGestaoAmbiental.pdf'),
    },
    {
        id: 3,
        name: 'Guia de Visitanets e Prestadores Serviços',
        data: '',
        link: require('../../../Config/PDF/GuiaVisitantesPrestadoresServico.pdf'),
    },
]

function ManualsCodesGuides({ id }) {
    const isMobile = useMediaQuery({ maxWidth: 767 }); // Tamanho SM
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 }); // Tamanho MD
    const isDesktop = useMediaQuery({ minWidth: 992 });

    return <div className={`bg-white vh-100`} style={{ padding: (isDesktop ? '0 0 2rem 0' : '0 15px 2rem 15px'), paddingBottom: '2rem' }} id={id}>
        <Container >
            <Fade className="" baseClassActive={'show'} >
                <Row>
                    <Col className="ml-auto mr-auto" md="12" lg="15" sm="12">
                        <h2 className="title color-maxi-invert">Manuais, Códigos e Guias</h2>
                    </Col>
                </Row>
                        <h5>Segue abaixo a lista de materiais disponíveis para download:</h5>
                <Row className='pt-5'>
                    <Col className="" md="12" lg="15" sm="12">
                        <ListGroup flush  >
                            <ListGroupItem className='w-100' tag={'h5'}>
                                <b>
                                Arquivos:
                                </b>
                            </ListGroupItem>
                            {itemsManualCodesGuides && itemsManualCodesGuides
                                .map(({ id, name, data, link }) => <ListGroupItem className='w-100' key={id}>
                                    <Row>
                                        <Col sm="12" md="12" lg="6" className='text-left' >
                                            <p>{name}</p>
                                        </Col>
                                        <Col sm="12" md="12" lg="6" className='text-right align-items-baseline'>
                                            <a href={link} className='' target='_blank'><p className='maxi-color'>Ver Arquivo <BsBoxArrowUpRight /></p></a>
                                        </Col>
                                    </Row>
                                </ListGroupItem>

                                )}
                            {/* 
                            <ListGroupItem className='w-100'>
                                Cras justo odio
                            </ListGroupItem>

                        */}
                        </ListGroup>
                    </Col>
                </Row>

            </Fade>
        </Container>
    </div>;
}

export default ManualsCodesGuides;