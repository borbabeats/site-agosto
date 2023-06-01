import { Fade, Container, Row, Col } from "reactstrap";
import React from 'react';

function Sustainability() {
  return <Fade >
  <Container >
      <Row>
          <Fade className="vh-100" baseClassActive={'show'}  style={{marginTop : '5rem'}}>
              <Col className="ml-auto mr-auto" md="12" lg="15" sm="12">
                <h2>Aguardando Projetos...</h2>
              </Col>
          </Fade>
      </Row>
  </Container>
</Fade>;
}

export default Sustainability;