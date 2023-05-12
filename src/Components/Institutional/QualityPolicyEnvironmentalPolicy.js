import React from 'react';
import { Button, Fade, Container, Row, Col } from "reactstrap";

// import { Container } from './styles';

function QualityPolicyEnvironmentalPolicy({ id }) {
    return <div className='div-constitutional' id={id}>
        <Container >
            <Row>
                <Fade className="mt-3"   baseClassActive={'show'} >
                    <Col className="ml-auto mr-auto" md="12" lg="15" sm="12">
                        <h2 className="title">Política da Qualidade e Política Ambiental</h2>
                        <h5 className="description pt-3" > A Maxiforja Componentes Automotivos Ltda, localizada em Canoas, Rio Grande do Sul, fornece soluções em componentes e sistemas para os segmentos automotivo, agrícola e industrial, utilizando metodologia de gestão para:</h5>
                        <h5 className="description pt-3" > 1- Atender às expectativas dos clientes com criação, inovação e tecnologia;</h5>
                        <h5 className="description pt-3" > 2- Incentivar o trabalho participativo, buscando desenvolver relações duradouras com nossos colaboradores, fornecedores e clientes;</h5>
                        <h5 className="description pt-3" > 3- Melhorar continuamente a eficácia do Sistema de Gestão da Qualidade e Ambiental, assim como os resultados de desempenho e lucratividade;</h5>
                        <h5 className="description pt-3" > 4- Atender aos requisitos legais aplicáveis e aos requisitos subscritos pela organização;</h5>
                        <h5 className="description pt-3" > 5- Proteger o meio ambiente por meio da prevenção da poluição e do gerenciamento dos resíduos.</h5>
                        <h5 className="description pt-3" > Rev. 02</h5>
                    </Col>
                </Fade>
            </Row>
        </Container>
    </div>;
}

export default QualityPolicyEnvironmentalPolicy;