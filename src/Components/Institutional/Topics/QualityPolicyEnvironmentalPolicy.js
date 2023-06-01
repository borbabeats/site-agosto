import React from 'react';
import { Fade, Container, Row, Col } from "reactstrap";
import { useMediaQuery } from 'react-responsive';

const itemContainers = [
    {
        id: 1,
        title: 'Política do Sistema de Gestão da Qualidade e Ambiental',
        subtitle: 'A Maxiforja Componentes Automotivos Ltda. fornece soluções em componentes e sistemas para os segmentos automotivo, agrícola e industrial utilizando metodologia de gestão para:',
        text: [],
        topics: [
            'Atender às expectativas dos clientes com criação, inovação e tecnologia;',
            'Incentivar o trabalho participativo buscando desenvolver relações duradouras com nossos colaboradores, fornecedores e clientes;',
            'Melhorar continuamente a eficácia do sistema de gestão da qualidade e ambiental e os resultados de desempenho e lucratividade; ',
            'Atender aos requisitos legais aplicáveis e os requisitos subscritos pela organização;',
            'Proteger o meio ambiente por meio da prevenção da poluição e do gerenciamento dos resíduos.',
        ]

    },
    {
        id: 2,
        title: 'Política de Segurança e Saúde',
        subtitle: 'Nós conduziremos nosso negócio de modo a proteger nossos funcionários, clientes, comunidade, fornecedores e o meio ambiente.',
        text: [
            'O amplo foco da empresa na qualidade é estendido aos nossos programas de Segurança, Meio Ambiente e Saúde, os quais dão ênfase à melhoria contínua. Nós acreditamos que este compromisso com a gestão responsável dos recursos humanos e naturais contribui para o crescimento sustentável da nossa empresa.',
            'Com este propósito, a Maxiforja se compromete a:'
        ],
        topics: [
            'Considerar as questões de Segurança e Saúde uma prioridade no planejamento estratégico e na tomada de decisões;',
            'Desenvolver e implementar sistemas de gestão de Segurança e Saúde, minimizando os impactos adversos inerentes às atividades industriais;',
            'Fornecer recursos financeiros e humanos adequados para os programas de Segurança e Saúde;',
            'Atuar na promoção da saúde e na proteção do ser humano mediante identificação, controle, monitoramento e prevenção de riscos;',
            'Buscar a melhoria contínua da gestão e do desempenho de Segurança e Saúde, com atendimento à legislação aplicável e subscritas pela organização.',
        ]

    },
]


function QualityPolicyEnvironmentalPolicy({ id }) {
    const isMobile = useMediaQuery({ maxWidth: 767 }); // Tamanho SM
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 }); // Tamanho MD
    const isDesktop = useMediaQuery({ minWidth: 992 });

    return <div className={`bg-white`} style={{ padding: (isDesktop ? '0 0 2rem 0' : '0 15px 2rem 15px'), paddingBottom: '2rem' }} id={id}>
        <Container >
            <Row>
                <Fade className="mt-3" baseClassActive={'show'} >
                    {itemContainers && itemContainers.map(({ id, subtitle, text, title, topics }) =>
                        <Col className="ml-auto mr-auto m-5" md="12" lg="15" sm="12" key={`QualityPolicyEnvironmentalPolicy-${id}`} >
                            {title && <h2 className="title mt-3 color-maxi-invert" >  {title} </h2>}
                            {title && <h3 className='title mt-3'> {subtitle} </h3>}
                            {text && text.map((m, index) => <p className="description mt-3" key={`qpe-text-${index}`} >{m}</p>)}
                            {topics && topics.map((m, index) => <p className="description mt-3" key={`qpe-topics-${index}`} >{`${index + 1}. ${m}`}</p>)}
                        </Col>
                    )}
                </Fade>
            </Row>
        </Container>
    </div>;
}

export default QualityPolicyEnvironmentalPolicy;