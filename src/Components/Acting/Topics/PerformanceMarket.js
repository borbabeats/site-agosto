import React from 'react';
import { Button, Fade, Container, Row, Col } from "reactstrap";
import ImgSegMapa from '../../../Config/Images/mapa.png'
import { useMediaQuery } from 'react-responsive';
// import { Container } from './styles';

function PerformanceMarket({ id }) {
    const isMobile = useMediaQuery({ maxWidth: 767 }); // Tamanho SM
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 }); // Tamanho MD
    const isDesktop = useMediaQuery({ minWidth: 992 });
    
    return <div className={`mt-3 mb-5`} id={id}>
        <Container>
            <Row>
                <Fade className="" baseClassActive={'show'} >
                    <Col className="ml-auto mr-auto" md="12" lg="15" sm="12">
                        <h2 className="title mt-5">Atuação de Mercado Mundial (Aguardando Usina)</h2>
                        {/* <WorldMap/> */}
                        <img src={ImgSegMapa} alt="" style={{ width: '100%' }} />
                        <p className="description mt-5 bg-danger text-white" >
                            Excelência e sustentabilidade são chaves para o sucesso, além de trazer ao cliente a solução mais adequada, rápida e eficiente. Foi pensando assim que a Maxiforja tornou-se referência em soluções para produtos forjados, usinados e conjuntos montados para os segmentos automotivo, agrícola e industrial.
                            A empresa, atualmente, é uma das maiores forjarias do Brasil e ocupa uma área construída de cerca de 30.500 m². Sua história de inovação, aliada à constante busca da satisfação do cliente e à modernização, realizada por meio de investimentos, permitem hoje uma produção de até 30.000 ton/ano.
                        </p>
                        
                    </Col>
                </Fade>
            </Row>
        </Container>
    </div>;
}

export default PerformanceMarket;