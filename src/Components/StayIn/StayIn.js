import { Button, Container, Row, Col, Card, CardBody, CardTitle, CardSubtitle, CardText, Modal, ModalBody, ModalFooter } from "reactstrap";
import { useTranslation } from "react-i18next"
import { useRef, useState, useEffect } from "react";

const ItemsCardNews = [
    {
        id: 1, col: '6', img: require('../../Config/Images/Fotos Maxiatualidades/selo60anos.jpg'),
        titulo: 'fique-por-dentro.63anos.titulo',
        subtitulo: 'fique-por-dentro.63anos.titulo',
        texto: 'fique-por-dentro.63anos.texto',
        paragraph: 'fique-por-dentro.63anos.paragraph'
    },
    {
        id: 2, col: '3', img: require('../../Config/Images/Fotos Maxiatualidades/WhatsApp Image 2022-11-14 at 16.45.12.jpeg'),
        titulo: 'fique-por-dentro.tendencia.titulo',
        subtitulo: 'fique-por-dentro.tendencia.titulo',
        texto: 'fique-por-dentro.tendencia.texto',
        paragraph: 'fique-por-dentro.tendencia.paragraph'
    },
    {
        id: 3, col: '3', img: require('../../Config/Images/Fotos Maxiatualidades/ETE.jpg'),
        titulo: 'fique-por-dentro.ETE.titulo',
        subtitulo: 'fique-por-dentro.ETE.titulo',
        texto: 'fique-por-dentro.ETE.texto',
        paragraph: 'fique-por-dentro.ETE.paragraph'
    },
    {
        id: 4, col: '3', img: require('../../Config/Images/Fotos Maxiatualidades/PremioExportacao.jpg'),
        titulo: 'fique-por-dentro.exportacao.titulo',
        subtitulo: 'fique-por-dentro.exportacao.titulo',
        texto: 'fique-por-dentro.exportacao.texto',
        paragraph: 'fique-por-dentro.exportacao.paragraph'
    },
    {
        id: 5, col: '3', img: require('../../Config/Images/Fotos Maxiatualidades/PremioMeritor.jpg'),
        titulo: 'fique-por-dentro.supplier.titulo',
        subtitulo: 'fique-por-dentro.supplier.titulo',
        texto: 'fique-por-dentro.supplier.texto',
        paragraph: 'fique-por-dentro.supplier.paragraph'
    },
    {
        id: 6, col: '3', img: require('../../Config/Images/Fotos Maxiatualidades/100marcas.png'),
        titulo: 'fique-por-dentro.100marcas.titulo',
        subtitulo: 'fique-por-dentro.100marcas.titulo',
        texto: 'fique-por-dentro.100marcas.texto',
        paragraph: 'fique-por-dentro.100marcas.paragraph'
    },
    {
        id: 7, col: '3', img: require('../../Config/Images/Fotos Maxiatualidades/Mastermover.jpg'),
        titulo: 'fique-por-dentro.mastermover.titulo',
        subtitulo: 'fique-por-dentro.mastermover.titulo',
        texto: 'fique-por-dentro.mastermover.texto',
        paragraph: 'fique-por-dentro.mastermover.paragraph'
    },
]

function StayIn() {
    const { t } = useTranslation()

    const ItemCard = ({ id, col, img, titulo, subtitulo, texto, paragraph }) => {
        const [modal, setModal] = useState(false);

        useEffect(() => {
            if (window.location.hash.substring(1) === titulo)
                setModal(true)
        }, [])

        const toggle = () => setModal(!modal);

        return <Col className="ml-auto mr-auto" md={15} lg={col} sm={15} key={id}>
            <Card body color="light" className='' style={{ padding: 0, maxHeight: '45rem', minHeight: '45rem', border: 0 }}>
                {img && <img alt={titulo} src={img} style={{ maxHeight: '15rem', width: 'auto', objectFit: 'cover', objectPosition: 'center', }} />}
                <CardBody>
                    <CardTitle tag="h3" className='mb-2' > {t(titulo)} </CardTitle>
                    {/* <CardSubtitle className="mb-2 text-muted " tag="h6" > {t(subtitulo)} </CardSubtitle> */}
                    <CardText className='' tag='h5'> {t(texto)} </CardText>
                    <div style={{ position: 'absolute', bottom: 20, left: 20 }}>
                        <Button className='btn-maxi-color'  onClick={toggle}> {t('geral.saiba-mais')} </Button>
                    </div>
                </CardBody>
            </Card>
            <Modal isOpen={modal} toggle={toggle} fullscreen={'xl'} size={'xl'} >
                <div style={{ display: 'block', alignItems: 'center', alignContent: 'center', textAlign: 'center', justifyContent: 'center', marginTop: '2rem', marginBottom: '2rem', borderBottom: '1px solid #dddddd' }}>
                    <h2 className="title color-maxi mt-3">{t(titulo)}</h2>
                    {/* <h3 className='m-3'>{t(subtitulo)}</h3> */}
                </div>
                <ModalBody>
                    <div style={{ display: 'block', alignItems: 'center', alignContent: 'center', textAlign: 'center', justifyContent: 'center', marginBottom: '2rem' }}>
                        {img && <img alt={titulo} src={img} style={{ maxHeight: '25rem', maxWidth: '25rem', borderRadius: 10 }} />}
                    </div>
                    <div >
                        {t(paragraph, { returnObjects: true }).map(({ titulo, texto }, index) => <div key={index}>
                            {titulo && <h3 className='color-maxi text-center pb-2'>{titulo}</h3>}
                            {texto && <p className='description text-justify'> &emsp;{texto}</p>}
                        </div>
                        )}
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button className='btn-maxi-color m-3' onClick={toggle}>
                        {t('geral.fechar')}
                    </Button>
                </ModalFooter>
            </Modal>
        </Col>
    }

    return <div className="" style={{ marginTop: '8rem' }}>
        <Container>
            <Row> {ItemsCardNews && ItemsCardNews.map((map, index) => <ItemCard {...map} key={index} />)} </Row>
        </Container>
    </div>
}

export default StayIn;
