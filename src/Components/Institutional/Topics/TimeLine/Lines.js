import firstPhoto from '../../../../Config/Images/firstPhoto.jpg'
import { Container, Row, Col, Image } from 'react-bootstrap'
import { useState, useEffect, useContext } from 'react'
import FormContext from "../../../../Config/Hooks/UseContext"
import Carousels from "./Carousel/CarouselLines"
import { useMediaQuery } from 'react-responsive';

const items = [
    {
        index: 0,
        year: "2010",
        img: firstPhoto,
        text: "Lorem ipsum dolor amet consectetur adi pisicing elit sed eiusm tempor incididunt ut labore dolore magna aliqua enim ad minim veniam quis.nostrud exercita.laboris nisi ut aliquip ea commodo conse quatuis aute irure."
    },
    {
        year: "2011",
        img: firstPhoto,
        text: "Lorem ipsum dolor amet consectetur adi pisicing elit sed eiusm tempor incididunt ut labore dolore magna aliqua enim ad minim veniam quis.nostrud exercita.laboris nisi ut aliquip ea commodo conse quatuis aute irure."
    },
    {
        year: "2012",
        img: firstPhoto,
        text: "Lorem ipsum dolor amet consectetur adi pisicing elit sed eiusm tempor incididunt ut labore dolore magna aliqua enim ad minim veniam quis.nostrud exercita.laboris nisi ut aliquip ea commodo conse quatuis aute irure."
    },
    {
        year: "2013",
        img: firstPhoto,
        text: "Lorem ipsum dolor amet consectetur adi pisicing elit sed eiusm tempor incididunt ut labore dolore magna aliqua enim ad minim veniam quis.nostrud exercita.laboris nisi ut aliquip ea commodo conse quatuis aute irure."
    },
    {
        year: "2014",
        img: firstPhoto,
        text: "Lorem ipsum dolor amet consectetur adi pisicing elit sed eiusm tempor incididunt ut labore dolore magna aliqua enim ad minim veniam quis.nostrud exercita.laboris nisi ut aliquip ea commodo conse quatuis aute irure."
    },
    {
        year: "2015",
        img: firstPhoto,
        text: "Lorem ipsum dolor amet consectetur adi pisicing elit sed eiusm tempor incididunt ut labore dolore magna aliqua enim ad minim veniam quis.nostrud exercita.laboris nisi ut aliquip ea commodo conse quatuis aute irure."
    },
    {
        year: "2016",
        img: firstPhoto,
        text: "Lorem ipsum dolor amet consectetur adi pisicing elit sed eiusm tempor incididunt ut labore dolore magna aliqua enim ad minim veniam quis.nostrud exercita.laboris nisi ut aliquip ea commodo conse quatuis aute irure.Lorem ipsum dolor amet consectetur adi pisicing elit sed eiusm tempor incididunt ut labore dolore magna aliqua enim ad minim veniam quis.nostrud exercita.laboris nisi ut aliquip ea commodo conse quatuis aute irure."
    },
    {
        year: "2017",
        img: firstPhoto,
        text: "Lorem ipsum dolor amet consectetur adi pisicing elit sed eiusm tempor incididunt ut labore dolore magna aliqua enim ad minim veniam quis.nostrud exercita.laboris nisi ut aliquip ea commodo conse quatuis aute irure."
    },
    {
        year: "2018",
        img: firstPhoto,
        text: "Lorem ipsum dolor amet consectetur adi pisicing elit sed eiusm tempor incididunt ut labore dolore magna aliqua enim ad minim veniam quis.nostrud exercita.laboris nisi ut aliquip ea commodo conse quatuis aute irure."
    }
]

export default function Lines() {
    const [activeYear, setActiveYear] = useState(items[0].year)
    const isMobile = useMediaQuery({ maxWidth: 767 }); // Tamanho SM
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 }); // Tamanho MD
    const isDesktop = useMediaQuery({ minWidth: 992 }); // Tamanho LG

    // const { registerFields } = useContext(FormContext)

    // useEffect(() => {
    //     registerFields({ isMobile, isTablet, isDesktop })
    // }, [isMobile, isTablet, isDesktop])

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
                            {/* <Image src={img} className='d-lg-none d-sm-block div-animate-img mr-auto ml-auto' style={{ borderRadius: 15, width: '100%' }} /> */}
                        </Col>
                    </Row>
                </Col>
            </Row>)}
        </Container>
        : <Container fluid style={{ display: 'block', width: '100vw', padding : 0, margin : 0 }} >
            {/* <Carousels items={items} /> */}

        </Container>



}


