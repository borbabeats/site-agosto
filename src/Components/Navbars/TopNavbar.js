import { Collapse, NavbarBrand, Navbar, NavItem, NavLink, Nav, Container, } from "reactstrap";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import classnames from "classnames";
import iconMaxi from '../../Config/Images/iconMaxi.png';

const NavItems = [
    {
        id: 2,
        Name: 'Institucional',
        tag: Link,
        href: "/institucional",
        classNameIcon: 'nc-icon nc-book-bookmark'
    },
    {
        id: 3,
        Name: 'Produtos',
        tag: Link,
        href: "/produto",
        classNameIcon: 'nc-icon nc-layout-11'
    },
    {
        id: 4,
        Name: 'Tecnologia',
        tag: Link,
        href: "/index",
        classNameIcon: 'nc-icon nc-layout-11'
    },
    {
        id: 5,
        Name: 'Mercado',
        tag: Link,
        href: "/mercado",
        classNameIcon: 'nc-icon nc-layout-11'
    },
    {
        id: 6,
        Name: 'Fique por Dentro',
        tag: Link,
        href: "/index",
        classNameIcon: 'nc-icon nc-layout-11'
    },
    {
        id: 7,
        Name: 'Sustentabilidade',
        tag: Link,
        href: "/index",
        classNameIcon: 'nc-icon nc-layout-11'
    },
]


function TopNavbar() {
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
        <Navbar className={classnames("fixed-top", navbarColor)} color-on-scroll="300" expand="lg" id="navbar" >
            <Container>
                <div className="navbar-translate">
                    <NavbarBrand to="/index" title="Maxiforja" onClick={ClickInNavLinkOrNavbarBrand} tag={Link} >
                        <img src={iconMaxi} alt="" style={{width : '10rem'}}/>
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

export default TopNavbar;


// Children: [
//     {
//         Name: 'Apresentação Geral',
//         hRef: 'institucional',
//     },
//     {
//         Name: 'Filosofia Organizacional',
//         hRef: 'institucional',
//     },
//     {
//         Name: 'Histórico',
//         hRef: 'institucional',
//     },
//     {
//         Name: 'Certificações',
//         hRef: 'institucional',
//     },
//     {
//         Name: 'Política de Qualidade e Ambiental',
//         hRef: 'institucional',
//     },
//     {
//         Name: 'Programas e Projetos',
//         hRef: 'institucional',
//     },
// ]

{/*
<NavItem> 
     <NavLink
        data-placement="bottom"
        href="https://twitter.com/CreativeTim?ref=creativetim"
        target="_blank"
        title="Follow us on Twitter"
    >
        <i className="fa fa-twitter" />
        <p className="d-lg-none">Twitter</p>
    </NavLink>
</NavItem>
<NavItem>
    <NavLink
        data-placement="bottom"
        href="https://www.facebook.com/CreativeTim?ref=creativetim"
        target="_blank"
        title="Like us on Facebook"
    >
        <i className="fa fa-facebook-square" />
        <p className="d-lg-none">Facebook</p>
    </NavLink>
</NavItem>
<NavItem>
    <NavLink
        data-placement="bottom"
        href="https://www.instagram.com/CreativeTimOfficial?ref=creativetim"
        target="_blank"
        title="Follow us on Instagram"
    >
        <i className="fa fa-instagram" />
        <p className="d-lg-none">Instagram</p>
    </NavLink>
</NavItem>
<NavItem>
    <NavLink
        data-placement="bottom"
        href="https://www.github.com/CreativeTimOfficial?ref=creativetim"
        target="_blank"
        title="Star on GitHub"
    >
        <i className="fa fa-github" />
        <p className="d-lg-none">GitHub</p>
    </NavLink>
</NavItem>
<NavItem>
    <Button
        className="btn-round"
        color="danger"
        href="https://www.creative-tim.com/product/paper-kit-pro-react?ref=pkr-examples-navbar"
        target="_blank"
    >
        <i className="nc-icon nc-spaceship"></i> Upgrade to Pro
    </Button>
</NavItem> */}