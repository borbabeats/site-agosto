import QualityPolicyEnvironmentalPolicy from './Topics/QualityPolicyEnvironmentalPolicy'
import OrganizationalPhilosoph from './Topics/OrganizationalPhilosophy'
import GeneralPresentation from './Topics/GeneralPresentation'
import ProgramsProjects from './Topics/ProgramsProjects'
import { Container, Row, Col } from 'reactstrap'
import { useState, useEffect, useCallback } from 'react'
import Certification from './Topics/Certificates'
import { Nav } from 'react-bootstrap'
import { Link } from 'react-scroll'
import Historic from './Topics/Historic'
import ManualsCodesGuides from './Topics/ManualsCodesGuides'

const ItemsNavLinkInstitucional = [
    {
        id: 1,
        Text: "Apresentação Geral",
        href: "apresentacao-geral",
    },
    {
        id: 2,
        Text: "Filosofia Organizacional",
        href: "filosofia-organizacional",
    },
    {
        id: 3,
        Text: "Histórico",
        href: "historico",
    },
    {
        id: 4,
        Text: "Certificações",
        href: "certificados",
    },
    {
        id: 5,
        Text: "Políticas Organizacionais",
        href: "politica-organizacionais",
    },
    {
        id: 5,
        Text: "Manuais, Códigos e Guias",
        href: "manuais-codigos-guia",
    },
    // {
    //     id: 6,
    //     Text: "Programas e Projetos",
    //     href: "programas_projetos",
    // },
]

export default function Institucional() {
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
        return <Nav defaultActiveKey="#apresentacao-geral" className="navbar-sidebar text-dark flex-column" style={{ backgroundColor: '#001f3d', position: 'fixed', top: 0, left: 0, paddingTop: '8%', zIndex: 9, bottom: 0, }} >
            {ItemsNavLinkInstitucional.map(({ id, Text, href }) => <Nav.Link key={id} className={`text-white`} style={{ transition: 'ease', height: '7rem' }} as={Link} to={href} activeClass='selected' spy smooth offset={-70} duration={500} active={activeSection === href} >
                <p className='text-change-color text-change-size'>{Text}</p>
            </Nav.Link>)}
        </Nav>
    }

    return <Container fluid className='bg-maxi' style={{ overflow: 'hidden' }}  >
        <Row >
            <Col xs={2} lg={2} sm={2} className="d-none d-lg-block bg-maxi" style={{ padding: 0, paddingTop: '10rem' }}>
                <SideNavBar activeSection={activeSection} ItemsNavLinkInstitucional={ItemsNavLinkInstitucional} />
            </Col>
            <Col xs={12} lg={10} sm={12} className="" style={{ height: 'auto', padding: 0, }}>
                <GeneralPresentation id={'apresentacao-geral'} />
                <OrganizationalPhilosoph id={'filosofia-organizacional'} />
                <Historic id={'historico'} />
                <Certification id={'certificados'} />
                <QualityPolicyEnvironmentalPolicy id={'politica-organizacionais'} />
                <ManualsCodesGuides id={'manuais-codigos-guia'} />
            </Col>
        </Row>
    </Container>
}