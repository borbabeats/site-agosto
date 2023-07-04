import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { Fade, Container, Row, Col } from "reactstrap";

function Technology() {
    const isDesktop = useMediaQuery({ minWidth: 992 });

  return<div style={{ padding: (isDesktop ? '5rem 0 2rem 0' : '5rem 15px 2rem 15px') }} className={`bg-white`}>
  <Container >
      <Row>
          <Fade className="mt-3 vh-100" baseClassActive={'show'} >
              <Col className="ml-auto mr-auto" md="12" lg="15" sm="12">
                <h1>Falta as tecnologias</h1>
              </Col>
          </Fade>
      </Row>
  </Container>
</div>;
}

export default Technology;