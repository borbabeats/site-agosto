import QualityPolicyEnvironmentalPolicy from './QualityPolicyEnvironmentalPolicy';
import OrganizationalPhilosoph from './OrganizationalPhilosophy';
import GeneralPresentation from './GeneralPresentation';
import ProgramsProjects from './ProgramsProjects';
import { Navbar, Nav } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import Certification from './Certificates';
import classnames from "classnames";
import { Link } from 'react-scroll';
import Historic from './Historic';
import { Fade, Button } from "reactstrap";
// import { , Form, Input, div, InputGroupText, InputGroup, Container, Row, Col } from "reactstrap";


const ItemsNavLinkInstitucional = [
    {
        id: 1,
        Text: "Apresentação Geral",
        href: "apresentacao_geral",
    },
    {
        id: 2,
        Text: "Filosofia Organizacional",
        href: "filosofia_organizacional",
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
        Text: "Política de Qualidade e Ambiental",
        href: "politica_qualidade_ambiental",
    },
    {
        id: 5,
        Text: "Programas e Projetos",
        href: "programas_projetos",
    },
]

function Institucional() {
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            const sections = document.querySelectorAll('section');
            const sectionTops = Array.from(sections).map(section => ({
                id: section.id,
                top: section.offsetTop,
                bottom: section.offsetTop + section.offsetHeight
            }));
            for (let i = 0; i < sectionTops.length; i++) {
                if (currentScrollPos >= sectionTops[i].top && currentScrollPos <= sectionTops[i].bottom) {
                    setActiveSection(sectionTops[i].id);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return <div >
        <Navbar bg="light" fixed="left" className='d-none d-lg-block' id='sideNavBar'>
            <Navbar.Toggle aria-controls="navbar-nav" />
            <Navbar.Collapse id="navbar-nav">
                <Nav defaultActiveKey="/home" className="d-none d-lg-block flex-column text-left px-5 w-10 h-100 navbar-color-primary text-white" style={{ width: '12%', position: 'fixed', top: 0, left: 0, paddingTop: '8%', zIndex: 9, bottom: 0 }}>
                    {ItemsNavLinkInstitucional.map(({ id, Text, href }) => {
                        return <Nav.Link key={id} className={`mt-3 p-3 text-white`} activeClass='selected'
                            as={Link} to={href} spy={true} smooth={true} offset={-70} duration={500} active={activeSection === href} >
                            <p>{Text}</p>
                        </Nav.Link>
                    })}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        <GeneralPresentation id={'apresentacao_geral'} />
        <OrganizationalPhilosoph id={'filosofia_organizacional'} />
        <Historic id={'historico'} />
        <Certification id={'certificados'} />
        <QualityPolicyEnvironmentalPolicy id={'politica_qualidade_ambiental'} />
        <ProgramsProjects id={'programas_projetos'} />

    </div>;
}

export default Institucional;

