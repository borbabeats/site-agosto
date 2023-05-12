import { useEffect } from 'react';
import { Button, Fade, Container, Row, Col } from "reactstrap";

// import { Container } from './styles';

function GeneralPresentation({ id }) {
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

    return <div style={{ paddingTop: "5rem" }} className='div-constitutional ' id={id}>
        <Container>
            <Row>
                <Fade className="mt-3" baseClassActive={'show'} >
                    <Col className="ml-auto mr-auto" md="12" lg="15" sm="12">
                        <h2 className="title">Referência nacional e internacional em tecnologia.</h2>
                        <h5 className="description pt-5" >
                            Excelência e sustentabilidade são chaves para o sucesso, além de trazer ao cliente a solução mais adequada, rápida e eficiente. Foi pensando assim que a Maxiforja tornou-se referência em soluções para produtos forjados, usinados e conjuntos montados para os segmentos automotivo, agrícola e industrial.
                            A empresa, atualmente, é uma das maiores forjarias do Brasil e ocupa uma área construída de cerca de 30.500 m². Sua história de inovação, aliada à constante busca da satisfação do cliente e à modernização, realizada por meio de investimentos, permitem hoje uma produção de até 30.000 ton/ano.
                        </h5>
                        <Button className="btn-round mt-4" color="info" href="#historic" onClick={(e) => e.preventDefault()} >
                            Saiba Mais
                        </Button>
                    </Col>
                </Fade>
            </Row>
        </Container>
    </div>
}

export default GeneralPresentation;