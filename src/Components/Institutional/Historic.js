import {useEffect} from 'react';
import { Button, Fade, Container, Row, Col } from "reactstrap";
import Timeline from './TimeLine/TimeLine';

function Historic({ id }) {
    useEffect(() => {
        // Se o hash na URL corresponde a um elemento com um id existente, rolamos a página para esse elemento
        if (window.location.hash) {
          const element = document.querySelector(window.location.hash);
          if (element) {
            const navbarHeight = document.querySelector("#navbar").offsetHeight; // altura da navbar
            window.scrollTo({ top: element.offsetTop - navbarHeight, behavior: "smooth" });
          }
        }
      }, []);
      
    return <div className='div-constitutional'id={id} >
        <Container >
            <Row>
                <Fade className="mt-3" baseClassActive={'show'} >
                    <Col className="ml-auto mr-auto" md="12" lg="15" sm="12">
                        <Timeline />
                    </Col>
                </Fade>
            </Row>
            <Row>
                <Fade className="mt-3" baseClassActive={'show'} >
                    <Col className="ml-auto mr-auto" md="12" lg="15" sm="12">
                        <h2 className="title">1963</h2>
                        <h5 className="description pt-5" >
                            Constituição da CIME - Companhia Industrial de Materiais Elétricos, com 3 funcionários, em terreno de 4.500 m²,área construída de 550 m² e a finalidade de produzir eletroferragem galvanizada para energia elétrica.
                        </h5>
                    </Col>
                </Fade>
            </Row>
            <Row>
                <Fade className="mt-3" baseClassActive={'show'} >
                    <Col className="ml-auto mr-auto" md="12" lg="15" sm="12">
                        <h2 className="title">1963</h2>
                        <h5 className="description pt-5" >
                            Constituição da CIME - Companhia Industrial de Materiais Elétricos, com 3 funcionários, em terreno de 4.500 m²,área construída de 550 m² e a finalidade de produzir eletroferragem galvanizada para energia elétrica.
                        </h5>
                    </Col>
                </Fade>
            </Row>
            <Row>
                <Fade className="mt-3" baseClassActive={'show'} >
                    <Col className="ml-auto mr-auto" md="12" lg="15" sm="12">
                        <h2 className="title">1963</h2>
                        <h5 className="description pt-5" >
                            Constituição da CIME - Companhia Industrial de Materiais Elétricos, com 3 funcionários, em terreno de 4.500 m²,área construída de 550 m² e a finalidade de produzir eletroferragem galvanizada para energia elétrica.
                        </h5>
                    </Col>
                </Fade>
            </Row>
        </Container>
    </div>
}

export default Historic;