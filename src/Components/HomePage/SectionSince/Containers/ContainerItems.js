import { useState } from 'react';
import { Button, Card, CardBody, CardFooter, CardTitle, Form, Input, InputGroupAddon, InputGroupText, InputGroup, Container, Row, Col } from "reactstrap";
import Conjuntobarras from '../../../../Config/Images/Conjuntobarras.jpg'
import ConjuntoNivelador from '../../../../Config/Images/ConjuntoNivelador.jpg'
import ConjuntoTerceiroPonto from '../../../../Config/Images/ConjuntoTerceiroPonto.jpg'
import Eixostransmissao from '../../../../Config/Images/Eixostransmissao.jpg'

const ItemsApresentation = [
    {
        id: 1,
        col: 6,
        src: Conjuntobarras,
        title: 'title',
        subtitle: 'subtitle',
        textbody: 'texto sobre o produto texto sobre o produto',
        className : 'img-itens-apresentation'
    },
    {
        id: 2,
        col: 6,
        src: ConjuntoNivelador,
        title: 'title',
        subtitle: 'subtitle',
        textbody: 'texto sobre o produto texto sobre o produto',
        className : 'img-itens-apresentation'
    },
    {
        id: 3,
        col: 6,
        src: ConjuntoTerceiroPonto,
        title: 'title',
        subtitle: 'subtitle',
        textbody: 'texto sobre o produto texto sobre o produto',
        className : 'img-itens-apresentation'
    },
    {
        id: 4,
        col: 6,
        src: Eixostransmissao,
        title: 'title',
        subtitle: 'subtitle',
        textbody: 'texto sobre o produto texto sobre o produto',
        className : 'img-itens-apresentation'
    },
]

function ContainersItems() {

    const ItemsApresentationComponent = ({ col, id, src, title, subtitle, textbody, className}) => {
        return (<Col md={col} key={id}>
            <Card className="card-profile card-plain">
                <div className="" >
                    <img alt="..." src={src} className={className}/>
                </div>
                <CardBody>
                    <a onClick={e => e.preventDefault()}>
                        <div className="author ">
                            <CardTitle className='text-white' tag="h4">{title}</CardTitle>
                            <h6 className="card-category text-white">{subtitle}</h6>
                        </div>
                    </a>
                    <p className="card-description text-center text-white"> {textbody} </p>
                </CardBody>
                <CardFooter className="text-center">

                </CardFooter>
            </Card>
        </Col>);
    }



    return <div className="section containers-items text-center " style={{backgroundColor : '#001f3d'}}>
        <Container>
            <h2 className="title text-white">Produtos</h2>
            <Row>
                {ItemsApresentation && ItemsApresentation.map(({ id, col, src, subtitle, textbody, title, className}) => {
                    return <ItemsApresentationComponent col={col} id={id} src={src} title={title} subtitle={subtitle} textbody={textbody} className={className} key={id}/>
                })}
            </Row>
        </Container>
    </div>;
}



export default ContainersItems;