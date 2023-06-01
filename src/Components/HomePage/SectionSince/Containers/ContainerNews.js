import React from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button, Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

const ItemsCardNews = [
    {
        id: 1, col: '4', img: require('../../../../Config/Images/Fotos Maxiatualidades/selo60anos.jpg'),
        Title: `2023: Vem aí os 60 anos da Maxiforja`,
        Subtitle: `Empresa relembra sua história e já prepara ações comemorativas à data.`,
        Text: `A Maxiforja já iniciou a contagem regressiva rumo às comemorações dos seus 60 anos de história, em julho de 2023. Os preparativos para a data reúnem uma série de ações, que
        incluem o resgate da história da empresa, homenagens e agradecimentos a colaboradores, parceiros e clientes.` ,
    },
    {
        id: 2, col: '4', img: require('../../../../Config/Images/Fotos Maxiatualidades/WhatsApp Image 2022-11-14 at 16.45.12.jpeg'),
        Title: `Tendências e inovações sempre no radar da Maxiforja`,
        Subtitle: `Empresa participa de eventos nacionais e internacionais para acompanhar
        de perto os movimentos do mercado`,
        Text: `Uma das principais características da Maxiforja, em quase seis décadas de
        história, é acompanhar de perto as movimentações do mercado nacional e
        internacional, em especial as tendências e inovações dos setores automotivos
        e do agronegócio... ` ,
    },
    {
        id: 3, col: '4', img: require('../../../../Config/Images/Fotos Maxiatualidades/Mastermover.jpg'),
        Title: `Mastermover: mais segurança e melhorias na logística`,
        Subtitle: `O novo modal de movimentação logística da Maxiforja facilita o abastecimento de operações e garante mais segurança aos colaboradores.`,
        Text: `Pensando nos diversos pontos essenciais de segurança no trabalho aliados
        ao setor de logística, a Maxiforja começou a trabalhar com um novo modal
        de movimentação...` ,
    },
]

const ClickInNewHomePage = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

function ContainerNews() {
    return <div className="section landing-section" >
        <Container>
            <Row>
                {ItemsCardNews && ItemsCardNews.map(({ Subtitle, Text, Title, id, img, col, textComplement }) => <Col className="ml-auto mr-auto" md={col} lg={col} sm={col} key={id}>
                    <Card body color="light" className='' style={{ padding: 0, height: '45rem', border: 0 }}>
                        <img alt={Title} src={img} style={{ maxHeight: '20rem', width: 'auto', objectFit: 'cover', objectPosition: 'center', }} />
                        <CardBody>
                            <CardTitle tag="h3" className='mb-2' > {Title} </CardTitle>
                            <CardSubtitle className="mb-2 text-muted " tag="h6" > {Subtitle} </CardSubtitle>
                            <CardText className='' tag='h5'> {Text} </CardText>
                            <div style={{ position: 'absolute', bottom: 10, left: 10 }}>
                                <Link to='/fique-por-dentro'>
                                    <Button className='btn-maxi-color m-2' onClick={ClickInNewHomePage} style={{ bottom: 0 }}> Saiba Mais </Button>
                                </Link>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                )}
            </Row>
        </Container>
    </div>;
}

export default ContainerNews;