import { Button, Fade, Container, Row, Col } from "reactstrap";
import Agricola from "../../Config/Images/mapa.png";

function Marketing() {
  return <div style={{ backgroundColor: '#f9f9f9' }}>
  <Fade >
      {/* <Navbar bg="light" fixed="left" className='d-none d-lg-block'>
              <Navbar.Toggle aria-controls="navbar-nav" />
              <Navbar.Collapse id="navbar-nav">
              <Nav defaultActiveKey="/home" className="d-none d-lg-block flex-column text-left px-5 w-10 h-100 navbar-color-primary text-white" style={{ width: '12%', position: 'fixed', top: 0, left: 0, paddingTop: '8%', zIndex: 999, }}>
                  {ItemsNavLinkInstitucional.map(({ id, Text, href }) => {
                  return <Nav.Link key={id} className={` pt-5 nav-link-active-color ${classnames("text-white", classNames)}`}
                      as={Link} to={href} spy={true} smooth={true} offset={-70} duration={500} active={activeSection === href} > <p>{Text}</p> </Nav.Link>
                  })}
              </Nav>
              </Navbar.Collapse>
      </Navbar> */}
      <div className='pt-5' >
          <Container >
              <Row>
                  <Fade className="mt-3"   baseClassActive={'show'} >
                      <Col className="ml-auto mr-auto"  md="12" lg="15" sm="12">
                          <h2 className="title">Experiência e tecnologia, uma combinação de qualidade.</h2>
                          <h3 className="title">Seguimento Agricola</h3>
                          <img src={Agricola} alt="" srcset="" style={{ maxHeight: '100%', width: '100%', borderRadius: 5, opacity: '0.8', background: 'rbga(0,0,0,0.8)', padding: 10 }} />


                          <h5 className="description pt-5" > A Maxiforja aprimora sua linha de produtos, constantemente, suprindo as inovações e necessidades do mercado com excelência, conhecimento e dedicação.O foco da empresa é o atendimento de montadoras das linhas automotivas e agrícolas.  Conheça nossos produtos:</h5>
                      </Col>
                  </Fade>
              </Row>
          </Container>
      </div>
  </Fade>

</div>;
}

export default Marketing;