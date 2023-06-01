import { useEffect } from 'react';
import { Button, Fade, Container, Row, Col } from "reactstrap";
import { useMediaQuery } from 'react-responsive';
// import { Container } from './styles';

function GeneralPresentation({ id }) {
    const isMobile = useMediaQuery({ maxWidth: 767 }); // Tamanho SM
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 }); // Tamanho MD
    const isDesktop = useMediaQuery({ minWidth: 992 });
    
    useEffect(() => {
        if (window.location.hash) {
            const element = document.querySelector(window.location.hash);
            if (element) {
                const navbarHeight = document.querySelector("#navbar").offsetHeight; // altura da navbar
                window.scrollTo({ top: element.offsetTop - navbarHeight, behavior: "smooth" });
            }
        }
    }, []);

    return <div style={{ padding: (isDesktop ? '5rem 0 2rem 0' : '5rem 15px 2rem 15px')  }} className={`bg-white`} id={id}>
        <Container>
            <Row>
                <Fade className="mt-3" baseClassActive={'show'} >
                    <Col className="ml-auto mr-auto" md="12" lg="15" sm="12">
                        <h2 className="title mt-3 color-maxi-invert" style={{fontWeight : ''}}>Referência nacional e internacional em tecnologia.</h2>
                        <p className="description mt-3 bg-dange text-whit" >
                            Excelência e sustentabilidade são chaves para o sucesso, além de trazer ao cliente a solução mais adequada, rápida e eficiente. Foi pensando assim que a Maxiforja tornou-se referência em soluções para produtos forjados, usinados e conjuntos montados para os segmentos automotivo, agrícola e industrial.
                            A empresa, atualmente, é uma das maiores forjarias do Brasil e ocupa uma área construída de cerca de 30.500 m². Sua história de inovação, aliada à constante busca da satisfação do cliente e à modernização, realizada por meio de investimentos, permitem hoje uma produção de até 30.000 ton/ano. (Texto com Adriana)
                        </p>
                        {/* <Button className="btn-round mt-4" color="info" href="#historic" onClick={(e) => e.preventDefault()} >
                            Saiba Mais
                        </Button> */}
                    </Col>
                </Fade>
            </Row>
        </Container>
    </div>
}

export default GeneralPresentation;