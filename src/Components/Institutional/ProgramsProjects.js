import React from 'react';
import { Button, Fade, Container, Row, Col } from "reactstrap";

function ProgramsProjects({id}) {
  return <div className='div-constitutional' id={id}>
      <Container>
          <Row>
              <Fade className=""   baseClassActive={'show'} >
                  <Col className="ml-auto mr-auto"  md="12" lg="15" sm="12">
                      <h2 className="title">Programas e Projetos Institucionais Maxiforja</h2>
                      <h5 className="description pt-5" > As atividades se destacam por serem desenvolvidas a partir de ações de Responsabilidade Social, voltadas à promoção da conscientização dentro da empresa para seus funcionários e também na melhoria dos recursos para a comunidade. </h5>
                      <h5 className="description pt-5" > As atividades se destacam por serem desenvolvidas a partir de ações de Responsabilidade Social, voltadas à promoção da conscientização dentro da empresa para seus funcionários e também na melhoria dos recursos para a comunidade. </h5>
                      <h5 className="description pt-5" > As atividades se destacam por serem desenvolvidas a partir de ações de Responsabilidade Social, voltadas à promoção da conscientização dentro da empresa para seus funcionários e também na melhoria dos recursos para a comunidade. </h5>
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