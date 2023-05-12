import React from 'react';
import { Button, Fade, Container, Row, Col } from "reactstrap";

function OrganizationalPhilosophy({id}) {
    return <div className='div-constitutional' id={id}>
        <Container>
            <Row>
                <Fade className="mt-3"   baseClassActive={'show'} >
                    <Col className="ml-auto mr-auto"  md="12" lg="15" sm="12">
                        <h2 className="title">Missão</h2>
                        <h5 className="description pt-5" >
                            Desenvolver e fornecer soluções sustentáveis em forjados, usinados e conjuntos montados gerando valor para clientes, colaboradores e acionistas.
                        </h5>
                    </Col>
                </Fade>
            </Row>
            <Row>
                <Fade className="mt-3"   baseClassActive={'show'} >
                    <Col className="ml-auto mr-auto"  md="12" lg="15" sm="12">
                        <h2 className="title">Visão</h2>
                        <h5 className="description pt-5" >
                            Ser uma empresa reconhecida pela sua capacidade competitiva e vocação inovadora no desenvolvimento de tecnologias para forjados, usinados e conjuntos montados.
                        </h5>
                    </Col>
                </Fade>
            </Row>
            <Row>
                <Fade className="mt-3"   baseClassActive={'show'} >
                    <Col className="ml-auto mr-auto"  md="12" lg="15" sm="12">
                        <h2 className="title">Valores</h2>
                        <h5 className="description pt-5" >
                            Cliente em primeiro lugar;
                            Ética, respeito e integridade nos relacionamentos;
                            Certo a partir de mim;
                            Excelência na manufatura.
                        </h5>
                    </Col>
                </Fade>
            </Row>
        </Container>
    </div>;
}

export default OrganizationalPhilosophy;