import { useEffect } from 'react'
import { Fade, Container, Row, Col } from "reactstrap"
import spm from "../../../Config/Images/spm.png"
import { useMediaQuery } from 'react-responsive';

const itemsGuidingPrinciples = [
    {
        id: 1,
        title: 'Missão',
        description: ['Desenvolver e fornecer soluções sustentáveis em forjados, usinados e conjuntos montados gerando valor para clientes, colaboradores e acionistas.']
    },
    {
        id: 2,
        title: 'Visão',
        description: ['Ser uma empresa reconhecida pelos seus clientes por sua capacidade competitiva e vocação inovadora no desenvolvimento de tecnologias para forjados, usinados e conjuntos montados.']
    },
    {
        id: 3,
        title: 'Valores',
        description: ['Cliente em primeiro lugar;', 'Ética, respeito e integridade nos relacionamentos;', 'Certo a partir de mim; ', 'Excelência na manufatura.',]
    },
    {
        id: 4,
        title: 'Negócio',
        description: ['Soluções em forjados, usinados e conjuntos montados ',]
    },
]

function OrganizationalPhilosophy({ id }) {
    const isMobile = useMediaQuery({ maxWidth: 767 }); // Tamanho SM
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 }); // Tamanho MD
    const isDesktop = useMediaQuery({ minWidth: 992 });

    useEffect(() => {
        if (window.location.hash) {
            const element = document.querySelector(window.location.hash);
            if (element) {
                const navbarHeight = document.querySelector("#navbar").offsetHeight; // altura da navbar
                window.scrollTo({ top: element.offsetTop - navbarHeight, behavior: "smooth" });
            }
        }
    }, []);

    return <div className={`bg-white`} id={id} style={{
        padding: (isDesktop ? '0 0 2rem 0' : '0 15px 2rem 15px')
        , borderEndStartRadius: 10, paddingBottom: '2rem'
    }}>
        <Container>
            <Row>
                <Fade className="mt-3" baseClassActive={'show'} >
                    <Col className="ml-auto mr-auto" md="12" lg="15" sm="12">
                        <h2 className="title color-maxi-invert ">Princípios Norteadores</h2>
                    </Col>
                </Fade>
            </Row>
            <Row>
                <Fade className="mt-3" baseClassActive={'show'} >
                    {itemsGuidingPrinciples && itemsGuidingPrinciples.map(({ id, title, description }) =>
                        <Col className="ml-auto mr-auto" md="12" lg="15" sm="12" key={`org-phy-${id}`}>
                            <h3 className="title color-maxi">{title}</h3>
                            {description && description.map((m, index) =>
                                <p className="description" key={`org-phy-desc-${index}`} > {description.length > 1 && `${(index + 1)}.`} {m}</p>
                            )}
                        </Col>
                    )}
                </Fade>
            </Row>
            <Row className=" text-center items-align d-flex justify-content-center align-items-center mt-3" >
                <Fade className=""   >
                    <img src={spm} alt="spm" style={{ width: '70%', height: 'auto', borderRadius: 10 }} />
                    {/* <h1 className='bg-danger text-white'>(Adriana está devendo retorno)</h1> */}
                </Fade>
            </Row>
        </Container>
    </div>
}

export default OrganizationalPhilosophy 