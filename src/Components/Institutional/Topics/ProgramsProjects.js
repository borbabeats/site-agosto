import React from 'react';
import { Button, Fade, Container, Row, Col } from "reactstrap";
import { useMediaQuery } from 'react-responsive';
function ProgramsProjects({ id }) {
    const isMobile = useMediaQuery({ maxWidth: 767 }); // Tamanho SM
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 }); // Tamanho MD
    const isDesktop = useMediaQuery({ minWidth: 992 });
    return <div className={`bg-white`}  id={id}>
        <Container>
            <Row>
                <Fade className="" baseClassActive={'show'} >
                    <Col className="ml-auto mr-auto" md="12" lg="15" sm="12">
                        <h2 className="title mt-5">Programas e Projetos Institucionais Maxiforja</h2>
                        <p className="description bg-danger text-white pt-5" > As atividades se destacam por serem desenvolvidas a partir de ações de Responsabilidade Social, voltadas à promoção da conscientização dentro da empresa para seus funcionários e também na melhoria dos recursos para a comunidade. </p>
                        <p className="description bg-danger text-white pt-5" > As atividades se destacam por serem desenvolvidas a partir de ações de Responsabilidade Social, voltadas à promoção da conscientização dentro da empresa para seus funcionários e também na melhoria dos recursos para a comunidade. </p>
                        <p className="description bg-danger text-white pt-5" > As atividades se destacam por serem desenvolvidas a partir de ações de Responsabilidade Social, voltadas à promoção da conscientização dentro da empresa para seus funcionários e também na melhoria dos recursos para a comunidade. </p>
                        <Button className="btn-round mt-5" color="info" href="#historic" onClick={(e) => e.preventDefault()} >
                            Saiba Mais
                        </Button>
                    </Col>
                </Fade>
            </Row>
        </Container>
    </div>;
}

export default ProgramsProjects;