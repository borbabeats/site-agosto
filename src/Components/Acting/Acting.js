import EquipmentConstructionTracking from "./Topics/EquipmentConstructionTracking";
import AgriculturalFollowup from "./Topics/AgriculturalFollowup";
import AutomotiveTracking from "./Topics/AutomotiveTracking";
import PerformanceMarket from "./Topics/PerformanceMarket";
import { Fade, Container, Row, Col } from "reactstrap";
import { useState, useEffect } from 'react'
import { Nav } from 'react-bootstrap'
import { Link } from 'react-scroll'

const ItemsNavLinkActing = [
    {
        id: 1,
        Text: "Automotivo",
        href: "automotivo",
    },
    {
        id: 2,
        Text: "Agrícola",
        href: "agricola",
    },
    {
        id: 3,
        Text: "MEC",
        href: "maquina-equipamentos-construcao",
    },
    {
        id: 4,
        Text: "Mercado",
        href: "mercado",
    }
]

function Acting() {
    const [activeSection, setActiveSection] = useState('')

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset
            const sections = document.querySelectorAll('section')
            const sectionTops = Array.from(sections).map(section => ({
                id: section.id,
                top: section.offsetTop,
                bottom: section.offsetTop + section.offsetHeight
            }))
            for (let i = 0; i < sectionTops.length; i++) {
                if (currentScrollPos >= sectionTops[i].top && currentScrollPos <= sectionTops[i].bottom) {
                    setActiveSection(sectionTops[i].id)
                    break;
                }
            }
        }

        window.addEventListener('scroll', handleScroll)

        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const SideNavBar = ({ activeSection, ItemsNavLinkInstitucional }) => {
        return <Nav defaultActiveKey="#apresentacao_geral" className="navbar-sidebar text-dark flex-column" style={{ backgroundColor: '#001f3d', position: 'fixed', top: 0, left: 0, paddingTop: '8%', zIndex: 9, bottom: 0, }} >
            {ItemsNavLinkInstitucional.map(({ id, Text, href }) => <Nav.Link key={id} className={`text-white`} style={{ transition: 'ease', height: '7rem' }} as={Link} to={href} activeClass='selected' spy smooth offset={-70} duration={500} active={activeSection === href} >
                <p className='text-change-color text-change-size'>{Text}</p>
            </Nav.Link>)}
        </Nav>
    }

    return <Container fluid className='bg-maxi' style={{ overflow: 'hidden' }}  >
        <Row >
            <Col xs={2} lg={2} sm={2} className="d-none d-lg-block bg-maxi" style={{ padding: 0, paddingTop: '10rem' }}>
                <SideNavBar activeSection={activeSection} ItemsNavLinkInstitucional={ItemsNavLinkActing} />
            </Col>
            <Col xs={12} lg={10} sm={12} className="align-items-center justify-content-center bg-white " style={{ height: 'auto', padding: 0, }}>
                <AutomotiveTracking id={'automotivo'} />
                <AgriculturalFollowup id={'agricola'} />
                <EquipmentConstructionTracking id={'maquina-equipamentos-construcao'} />
                <PerformanceMarket id={'mercado'} />
            </Col>
        </Row>
    </Container>
}

export default Acting;