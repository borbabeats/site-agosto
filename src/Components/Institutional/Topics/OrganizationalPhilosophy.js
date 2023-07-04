import { useEffect } from 'react'
import { Fade, Container, Row, Col } from "reactstrap"
import spm from "../../../Config/Images/SPM/SPM.png"
import { useMediaQuery } from 'react-responsive';
import { useTranslation } from "react-i18next";


function OrganizationalPhilosophy({ id }) {
    const { t } = useTranslation()

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
                        <h2 className="title color-maxi-invert ">{t('institucional.filosofia.titulo')}</h2>
                    </Col>
                </Fade>
            </Row>
            <Row>
                <Fade className="mt-3" baseClassActive={'show'} >
                    <Col className="ml-auto mr-auto" md="12" lg="15" sm="12" key={`org-phy-${id}`}>
                        {t('institucional.filosofia.texto', { returnObjects: true }).map(({ titulo, subtitulo, texto, icon }, index) => <div key={index}>
                            {titulo && <h2>{titulo}</h2>}
                            {subtitulo && <Row style={{textAlign : 'center'}}>
                                <img style={{height : '5%', width : '5%'}} src={require(`../../../Config/Icons/${icon}.svg`)} alt="" />
                                <h3 className='color-maxi'> {subtitulo} </h3>
                            </Row>}
                            {texto && texto.map((text, index) => <p className="description mt-3 bg-dange text-whit" key={index}> {text} </p>)}
                        </div>)}
                    </Col>
                </Fade>
            </Row>
            <Row className=" text-center items-align d-flex justify-content-center align-items-center mt-3" >
                <Fade className=""   >
                    <img src={spm} alt="spm" style={{ width: '100%', height: 'auto', borderRadius: 0 }} />
                </Fade>
            </Row>
        </Container>
    </div>
}



export default OrganizationalPhilosophy 