import { Fade, Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { BsBoxArrowUpRight } from 'react-icons/bs';
import { useMediaQuery } from 'react-responsive';
import { useTranslation } from "react-i18next";

const itemsManualCodesGuides = [
    {
        name: 'institucional.manuais.arquivos.codigo-etica',
        link: require('../../../Config/PDF/Código de Ética.pdf'),
    }, {
        name: 'institucional.manuais.arquivos.guia-ambiental',
        link: require('../../../Config/PDF/Guia de Gestão Ambiental.pdf'),
    }, {
        name: 'institucional.manuais.arquivos.guia-visitante',
        link: require('../../../Config/PDF/Guia de Visitantes e Prestadores de Serviço.pdf'),
    },
]

function ManualsCodesGuides({ id }) {
    const { t } = useTranslation()
    const isDesktop = useMediaQuery({ minWidth: 992 });

    return <div className={`bg-white`} style={{ minHeight: '70vh', padding: (isDesktop ? '0 0 2rem 0' : '0 15px 2rem 15px'), paddingBottom: '2rem', borderEndStartRadius: 20 }} id={id}>
        <Container >
            <Row >
                <Col className="ml-auto mr-auto" md="12" lg="15" sm="12">
                    <h2 className="title ">{t('institucional.manuais.titulo')}</h2>
                    {t('institucional.manuais.texto', { returnObjects: true }).map(({ titulo, subtitulo, texto }, index) => <div key={index}>
                        {titulo && <h2>{titulo}</h2>}
                        {subtitulo && <h3 className='color-maxi'> {subtitulo} </h3>}
                        {texto && texto.map((text, index) => <p className="description mt-3 bg-dange text-whit" key={index}> {text} </p>)}
                    </div>)}
                </Col>
            </Row>
            <Row className='pt-4'>
                <Col md="12" lg="15" sm="12">
                    <ListGroup flush >
                        <ListGroupItem className='w-100' tag={'h3'}>
                            <strong> Arquivos: </strong>
                        </ListGroupItem>
                        {itemsManualCodesGuides && itemsManualCodesGuides.map(({ name, link }, index) => <ListGroupItem className='w-100' key={index}>
                            <Row>
                                <Col sm="12" md="12" lg="6" className='text-left' > <p>{t(name)}</p> </Col>
                                <Col sm="12" md="12" lg="6" className='text-right align-items-baseline'>
                                    <a href={link} className='' target='_blank'><p className='maxi-color'>{t('institucional.manuais.arquivos.ver')} <BsBoxArrowUpRight /></p></a>
                                </Col>
                            </Row>
                        </ListGroupItem>)}
                    </ListGroup>
                </Col>
            </Row>
        </Container>
    </div>;
}

export default ManualsCodesGuides;