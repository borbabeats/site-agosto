import React from 'react';
import { Button, Fade, Container, Row, Col } from "reactstrap";
import ImgSegMEC from '../../../Config/Images/mec.png'
import { useMediaQuery } from 'react-responsive';
// import { Container } from './styles';

function EquipmentConstructionTracking({ id }) {
    const isMobile = useMediaQuery({ maxWidth: 767 }); // Tamanho SM
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 }); // Tamanho MD
    const isDesktop = useMediaQuery({ minWidth: 992 });
    return <div className={`topics-div ${isMobile ? 'isMobile' : ''}`} id={id}>
        <Container>
            <Row>
                <Fade className="mt-3" baseClassActive={'show'} >
                    <Col className="ml-auto mr-auto" md="12" lg="15" sm="12">
                        <h2 className="title mt-5">Segmento de Máquinas e Equipamentos de Construção ou Segmento Industrial? (Aguardando Engenharia)</h2>
                        <img src={ImgSegMEC} alt="" style={{ width: '100%' }} />
                    </Col>
                </Fade>
            </Row>
        </Container>
    </div>;
}

export default EquipmentConstructionTracking;