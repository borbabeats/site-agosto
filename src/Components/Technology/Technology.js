import React from 'react';
import { Fade, Container, Row, Col } from "reactstrap";

function Technology() {
  return<Fade >
  <Container >
      <Row>
          <Fade className="mt-3 vh-100" baseClassActive={'show'} >
              <Col className="ml-auto mr-auto" md="12" lg="15" sm="12">
              </Col>
          </Fade>
      </Row>
  </Container>
</Fade>;
}

export default Technology;