import firstPhoto from '../../../../Config/Images/Home/firstPhoto.jpg'
import { Container, Row, Col, Image } from 'react-bootstrap'
import { useMediaQuery } from 'react-responsive';
import { useState } from 'react'

const items = [
    {
        year: "1963",
        img: firstPhoto,
        text: "Constituição da CIME -Companhia Industrial de Materiais Elétricos, com 5 colaboradores,   em terreno de 4500 m², área construída de 550 m² e a finalidade de produzir eletro ferragem galvanizada para energia elétrica"
    },
    {
        year: "1968",
        img: firstPhoto,
        text: "Início da gestão da Família Veit"
    },
    {
        year: "1971",
        img: firstPhoto,
        text: "Entra em operação uma prensa fricção de 250 toneladas para produção de forjados destinados ao mercado de implementos agrícolas e rodoviários"
    },
    {
        year: "1973",
        img: firstPhoto,
        text: "A empresa se transfere para o atual endereço, em terreno de 26000m² e área construída de 1600m². Inaugurada a Forjaria I, com Martelo Banning de 25kj"
    },
    {
        year: "1975",
        img: firstPhoto,
        text: "Entra em operação Martelo Banning de 50 kj. Implantado o primeiro computador NCR"
    },
    {
        year: "1988",
        img: firstPhoto,
        text: "Inaugurada a Forjaria II com prensa Smeral de 4.000 t. "
    },
    {
        year: "1991",
        img: firstPhoto,
        text: "Iniciada a produção de peças usinadas de precisão com tornos, retíficas e geradora de engrenagens CNC"
    },
    {
        year: "1995",
        img: firstPhoto,
        text: "Iniciada a produção de braços de direção para caminhões"
    },
    {
        year: "1998",
        img: firstPhoto,
        text: "Implantada a unidade para produção de componentes do sistema de 3º Ponto de Tratores Agrícolas"
    },
    {
        year: "2002",
        img: firstPhoto,
        text: "Certificação ISO/TS 16949:1999"
    },
    {
        year: "2003",
        img: firstPhoto,
        text: "Iniciada a produção de braços para caminhões para o mercado norte-americano (Detroit Diesel Corporation, na época Aliance Axle Company)"
    },
    {
        year: "2005",
        img: firstPhoto,
        text: "Início Fornecimento Scania"
    },
    {
        year: "2008",
        img: firstPhoto,
        text: "Iniciada a produção de forjados extrudados a quente. Instalação linha extrusão (GR41) e início da produção de pontas do eixo traseiro"
    },
    {
        year: "2010",
        img: firstPhoto,
        text: "Implantada linhas de produção em célula na Usinagem"
    },
    {
        year: "2013",
        img: firstPhoto,
        text: "Implantada a usinagem em célula de manufatura. O atual terreno da empresa tem 75.000 m² e 26.000 m² de área construída"
    },
    {
        year: "2015",
        img: firstPhoto,
        text: "Início Fornecimento Caterpillar e VWCO, Início fornecimento família de Knuckles"
    },
    {
        year: "2016",
        img: firstPhoto,
        text: "Implantação de Estação de Tratamento Efluentes: Fisico/Químico e Biológico"
    },
    {
        year: "2018",
        img: firstPhoto,
        text: "Certificação IATF 16949:2016 / ISO9001:2015 e Certificação ISO14001:2015"
    },
    {
        year: "2020",
        img: firstPhoto,
        text: "Início Fornecimento Mack Trucks"
    },
    {
        year: "2021",
        img: firstPhoto,
        text: "Implantação sistema de inspeção por imagem de produtos forjados"
    },
]

export default function Lines() {
    const [activeYear, setActiveYear] = useState(items[0].year)
    const isMobile = useMediaQuery({ maxWidth: 767 }); // Tamanho SM
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 }); // Tamanho MD
    const isDesktop = useMediaQuery({ minWidth: 992 }); // Tamanho LG

    const handleYearClick = (event) => setActiveYear(event)

    const Navbar = ({ items }) => {
        return <nav style={{ zIndex: 90 }}>
            <ul className="navbar d-lg-inline-flex d-none d-none " style={{ zIndex: 91, backgroundColor: 'transparent' }}>
                {items && items.map(({ year, index }) => {
                    return <li className={`${year} nav-item  ${activeYear === year && 'active'}`} onClick={() => handleYearClick(year)} key={`nav-bar-activeYear-${index}`}>
                        <span className="year">{year}</span>
                        <span className="bullet" />
                    </li>
                })}
            </ul>
        </nav>
    }

    return !isMobile ?
        <Container fluid className="vh-100 ">
            <Col> <Navbar items={items} /> </Col>
            {items && items.map(({ year, img, text }) => year === activeYear && <Row className="h-100">
                <div className='div-animate-smaller ' style={{ color: '#484848', borderRadius: 15, position: 'absolute', top: '4%', left: '4%', fontSize: '18rem' }}>{activeYear}</div>
                <div className='div-animate-bigger ' style={{ color: '#484848', borderRadius: 15, position: 'absolute', top: '20%', right: '25%', fontSize: '40rem' }}>{activeYear}</div>
                <Col lg={12} className="h-100">
                    <Row className="h-100">
                        <Col lg={6} sm={12} md={12} className="d-flex align-items-center">
                            <div className="p-4 d-none d-lg-block  mr-auto ml-auto div-animate-text fade-in text-break text-white">
                                <div style={{ borderRadius: 15, position: 'absolute', bottom: '35%', left: '20% ', width: '60%', }}>
                                    <p style={{ fontSize: '2rem' }}>{text}</p>
                                </div>
                            </div>
                            <div className="p-5 text-white d-lg-none d-sm-block  mr-auto ml-auto div-animate-text fade-in text-break">
                                <p style={{ fontSize: '2rem' }}>{text}</p>
                            </div>
                        </Col>
                        <Col lg={6} sm={12} md={12} >
                            <Image src={img} className='d-none d-lg-block div-animate-img mr-auto ml-auto' style={{ borderRadius: 15, position: 'absolute', top: '0%', right: '30% ', width: '60%' }} />
                        </Col>
                    </Row>
                </Col>
            </Row>)}
        </Container>
        : <Container fluid style={{ display: 'block', width: '100vw', padding : 0, margin : 0 }} >
            {/* <Carousels items={items} /> */}

        </Container>



}


