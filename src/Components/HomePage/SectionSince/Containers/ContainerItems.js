import { useState } from 'react';
import { Button, Card, CardBody, CardFooter, CardTitle, Form, Input, InputGroupAddon, InputGroupText, InputGroup, Container, Row, Col } from "reactstrap";
import Conjuntobarras from '../../../../Config/Images/Conjuntobarras.jpg'
import ConjuntoNivelador from '../../../../Config/Images/ConjuntoNivelador.jpg'
import ConjuntoTerceiroPonto from '../../../../Config/Images/ConjuntoTerceiroPonto.jpg'
import Eixostransmissao from '../../../../Config/Images/Eixostransmissao.jpg'

const ItemsApresentation = [
    {
        id: 1,
        col: 4,
        src: Conjuntobarras,
        title: 'Automotivo',
        className: 'img-itens-apresentation'
    },
    {
        id: 2,
        col: 4,
        src: ConjuntoNivelador,
        title: 'Agrícola',
        className: 'img-itens-apresentation'
    },
    {
        id: 3,
        col: 4,
        src: ConjuntoTerceiroPonto,
        title: 'Máquinas e Equipamentos de Construção',
        className: 'img-itens-apresentation'
    },
]

function ContainersItems() {

    const ItemsApresentationComponent = ({ col, id, src, title, className }) => {
        return (<Col md={col} key={id}>
            <Card className="card-profile card-plain">
                <div className="" >
                    <img alt="..." src={src} className={className} />
                </div>
                <CardBody>
                        <CardTitle className='text-white' tag="h4"  >{title}</CardTitle>
                </CardBody>
            </Card>
        </Col>);
    }

    return <div className="section bg-maxi text-center ">
        <Container>
            <h2 className="title text-white">Produtos (Aguardando usinagem)</h2>
            <Row>
                {ItemsApresentation && ItemsApresentation.map(({ id, col, src, subtitle, textbody, title, className }) =>
                    <ItemsApresentationComponent col={col} id={id} src={src} title={title} subtitle={subtitle} textbody={textbody} className={className} key={id} />
                )}
            </Row>
        </Container>
    </div>;
}



export default ContainersItems;