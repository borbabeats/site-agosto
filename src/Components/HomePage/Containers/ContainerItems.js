import { Card, CardTitle, Container, Row, Col } from "reactstrap";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function ContainersItems() {
    const { t } = useTranslation()

    const ItemsApresentation = [
        {
            id: 1,
            col: 4,
            src: [
                require('../../../Config/Images/ImageAutomotivo/Axle End 2.png'),
                require('../../../Config/Images/ImageAutomotivo/Steering Knuckle.png'),
                require('../../../Config/Images/ImageAutomotivo/Break CamShaft.png'),
                require('../../../Config/Images/ImageAutomotivo/Tie Rod Arm.png'),
            ],
            title: t('home.produto.automotivo'),
            className: 'img-itens-apresentation'
        }, {
            id: 2,
            col: 4,
            src: [
                require('../../../Config/Images/ImagensTrator/Rear Bar Axle.png'),
                require('../../../Config/Images/ImagensTrator/Stabilizer.png'),
                require('../../../Config/Images/ImagensTrator/Hook.png'),
                require('../../../Config/Images/ImagensTrator/Center Link.png'),
            ],
            title: t('home.produto.agricola'),
            className: 'img-itens-apresentation'
        }, {
            id: 3,
            col: 4,
            src: [
                require('../../../Config/Images/ImagesConstruction/Lift Cylinder Yoke.png'),
                require('../../../Config/Images/ImagesConstruction/Lock-Hook.png'),
                require('../../../Config/Images/ImagesConstruction/Cap.png'),
                require('../../../Config/Images/ImagesConstruction/Retainer.png'),
            ],
            title: t('home.produto.MEC'),
            className: 'img-itens-apresentation'
        },
    ]

    const ItemsApresentationComponent = ({ col, id, src, title, className, link }) => {
        return (<Col md={col} key={id} >
            <Card className="card-profile card-plain " >
                <Link to={'/produtos'} onClick={e => window.scrollTo({ top: 0, behavior: 'smooth' })} style={{ padding: 0, margin: 0, border: 0 }}>
                    <div className="grid-container " style={{ borderRadius: 10, backgroundColor : '#757575' }} >
                        {src && src.map((m, index) => <div className="grid-item" key={index}>
                            <img alt="..." src={m} className={className} />
                        </div>)}
                    </div>
                    <CardTitle className='text-white' tag="h4"  >{title}</CardTitle>
                </Link>
            </Card>
        </Col>);
    }

    return <div className="section bg-maxi text-center">
        <Container>
            <h2 className="title text-white">{t('home.produto.produto')}</h2>
            <Row >
                {ItemsApresentation && ItemsApresentation.map(props =>
                    <ItemsApresentationComponent  {...props} />
                )}
            </Row>
        </Container>
    </div>;
}




export default ContainersItems;