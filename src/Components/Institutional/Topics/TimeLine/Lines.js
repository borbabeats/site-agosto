import firstPhoto from '../../../../Config/Images/Home/firstPhoto.jpg'
import { Container, Row, Col, Image } from 'react-bootstrap'
import { useMediaQuery } from 'react-responsive';
import { useState } from 'react'

const items = [
    {
        id: 1,
        year: "1963",
        img: firstPhoto,
        text: "Texto Constituição da CIME - Companhia Industrial de Materiais Elétricos com a finalidade de produzir eletroferragem galvanizada para rede de energia elétrica"
    },
    {
        id: 2,
        year: "1970",
        img: firstPhoto,
        text: "Início da gestão da Família Veit"
    },
    {
        id: 3,
        year: "1973",
        img: firstPhoto,
        text: "A empresa se transfere para o atual endereço, em terreno de 26000m² e área construída de 1600m². Inaugurada a Forjaria I, com Martelo Banning de 25kj"
    },
    {
        id: 4,
        year: "1975",
        img: firstPhoto,
        text: "Entra em operação Martelo Banning de 50 kj."
    },
    {
        id: 5,
        year: "1988",
        img: firstPhoto,
        text: "Inaugurada a Forjaria II com prensa Smeral de 4.000 t. "
    },
    {
        id: 6,
        year: "1992",
        img: firstPhoto,
        text: "Iniciada a produção de peças usinadas de precisão com tornos, retíficas e geradora de engrenagens CNC"
    },
    {
        id: 7,
        year: "1995",
        img: firstPhoto,
        text: "Iniciada a produção de braços de direção para caminhões"
    },
    {
        id: 8,
        year: "1998",
        img: firstPhoto,
        text: "Implantada a unidade para produção de componentes do sistema de 3º Ponto de Tratores Agrícolas"
    },
    {
        id: 9,
        year: "2001",
        img: firstPhoto,
        text: "Empresa passa a utilizar o software Solid Edge para CAD e o Unigraphics para aplicações CAD/CAM"
    },

]

export default function Lines() {
    const [activeYear, setActiveYear] = useState(items[0].id)
    const isMobile = useMediaQuery({ maxWidth: 767 }); // Tamanho SM
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 }); // Tamanho MD
    const isDesktop = useMediaQuery({ minWidth: 992 }); // Tamanho LG

    const handleYearClick = (event) => setActiveYear(event)

    const Navbar = ({ items }) => {
        return <nav style={{ zIndex: 90 }}>
            <ul className="navbar d-lg-inline-flex d-none d-none " style={{ zIndex: 91, backgroundColor: 'transparent' }}>
                {items && items.map(({ id, year, index }) => {
                    return <li className={`${year} nav-item  ${activeYear === id && 'active'}`} onClick={() => handleYearClick(id)} key={`nav-bar-activeYear-${index}`}>
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
            {items && items.map(({ id, year, img, text }) => id === activeYear && <Row className="h-100">
                <div className='div-animate-smaller ' style={{ color: '#484848', borderRadius: 15, position: 'absolute', top: '4%', left: '4%', fontSize: '18rem' }}>{year}</div>
                <div className='div-animate-bigger ' style={{ color: '#484848', borderRadius: 15, position: 'absolute', top: '20%', right: '25%', fontSize: '40rem' }}>{year}</div>
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
        : <Container fluid style={{ display: 'block', width: '100vw', padding: 0, margin: 0 }} >
            {/* <Carousels items={items} /> */}

        </Container>



}


