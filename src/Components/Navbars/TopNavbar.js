import { Collapse, NavbarBrand, Navbar, NavItem, NavLink, Nav, Container, } from "reactstrap";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import classnames from "classnames";
import iconMaxi from '../../Config/Images/iconMaxi.png';

const NavItems = [
    { id: 2, Name: 'Institucional', tag: Link, href: "/institucional", },
    { id: 3, Name: 'Atuação', tag: Link, href: "/atuacao", },
    { id: 4, Name: 'Tecnologia', tag: Link, href: "/tecnologia", },
    { id: 5, Name: 'Fique por Dentro', tag: Link, href: "/fique-por-dentro", },
    { id: 6, Name: 'Sustentabilidade', tag: Link, href: "/sustentabilidade", },
    { id: 7, Name: 'Contato', tag: Link, href: "/contato", },
]

export default function TopNavbar() {
    const [navbarColor, setNavbarColor] = useState("navbar-transparent");
    const [navbarCollapse, setNavbarCollapse] = useState(false);

    const location = useLocation();

    useEffect(() => {
        setNavbarColor(window.location.pathname === '/index' ? 'navbar-transparent' : '');
    }, [location]);

    const toggleNavbarCollapse = () => {
        setNavbarCollapse(!navbarCollapse);
        document.documentElement.classList.toggle("nav-open");
    };

    useEffect(() => {
        const updateNavbarColor = () => {
            if (document.documentElement.scrollTop > 299 || document.body.scrollTop > 299)
                setNavbarColor("");
            else if ((document.documentElement.scrollTop < 300 || document.body.scrollTop < 300) && window.location.pathname === '/index')
                setNavbarColor("navbar-transparent");
        };

        window.addEventListener("scroll", updateNavbarColor);

        return function cleanup() {
            window.removeEventListener("scroll", updateNavbarColor);
        };
    });


    const ClickInNavLinkOrNavbarBrand = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <Navbar className={`${classnames("fixed-top", navbarColor)}`} color-on-scroll="300" expand="xl" id="navbar"  >
            <Container>
                <div className="navbar-translate">
                    <NavbarBrand to="/index" title="Maxiforja" onClick={ClickInNavLinkOrNavbarBrand} tag={Link} >
                        <img src={iconMaxi} alt="" style={{ width: '10rem' }} />
                    </NavbarBrand>
                    <button aria-expanded={navbarCollapse} className={classnames("navbar-toggler navbar-toggler", { toggled: navbarCollapse })} onClick={toggleNavbarCollapse} >
                        <span className="navbar-toggler-bar bar1" />
                        <span className="navbar-toggler-bar bar2" />
                        <span className="navbar-toggler-bar bar3" />
                    </button>
                </div>
                <Collapse className="justify-content-end" navbar isOpen={navbarCollapse} >
                    <Nav navbar>
                        {NavItems.map(({ Name, classNameIcon, href, id, tag }) => {
                            return <NavItem key={id}>
                                <NavLink to={href} tag={tag} onClick={ClickInNavLinkOrNavbarBrand} className="color-secondary">
                                    <i className={classNameIcon} /> {Name}
                                </NavLink>
                            </NavItem>
                        })}
                    </Nav>
                </Collapse>
            </Container>
        </Navbar>
    );
}

