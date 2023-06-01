import { useState } from 'react';
import { Button, Fade, Container, Row, Col, Card, CardBody, CardTitle, CardSubtitle, CardText, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";


const ItemsCardNews = [
    {
        id: 1, col: '6', img: require('../../Config/Images/Fotos Maxiatualidades/selo60anos.jpg'),
        Title: `2023: Vem aí os 60 anos da Maxiforja`,
        Subtitle: `Empresa relembra sua história e já prepara ações comemorativas à data.`,
        Text: `A Maxiforja já iniciou a contagem regressiva rumo às comemorações dos seus 60 anos de história, em julho de 2023. Os preparativos para a data reúnem uma série de ações, que
        incluem o resgate da história da empresa, homenagens e agradecimentos a colaboradores, parceiros e clientes.` ,
        textComplement: [
            {
                title: '',
                text: `O início desta história é em 1963, em Canoas/RS, ainda como Companhia Industrial de Materiais Elétricos (CIME). A empresa começou sua operação com a produção de eletroferragem
            galvanizada para redes de energia elétrica e apenas três colaboradores. Em 1966, entrou no
            mercado de peças forjadas, produzindo acessórios para isoladores de vidro. As produções
            para atender os mercados de implementos agrícolas e rodoviários iniciaram em 1971, quando entrou em operação uma prensa de fricção de 250 toneladas para produção de forjados.
            Logo, esse crescimento exigiu mais espaço físico e estrutura, o que transformou a pequena
            fabricante de eletroferragem em uma forjaria em plena expansão.`,
            }, {
                title: '',
                text: `O nome Maxiforja Forjaria e Metalurgia veio dez anos depois, em 1973, quando aconteceu a transferência para a sede atual, também em Canoas/RS. A partir da aquisição
            do primeiro Martelo de Forjamento de 25 kJ, inaugurou-se a Forjaria I – ampliada dois
            anos mais tarde. A década de 1980, com a chegada da Prensa Smeral de 1.000 tonf, foi
            marcada pelo início de operações com prensas rápidas. Para acompanhar a evolução
            do maquinário, inaugurou-se a Forjaria II, com prensas Smeral de até 4.000 tonf., a
            maior do RS. Neste período, a Maxiforja iniciou a produção de peças usinadas para os
            mercados automotivo e agrícola, atividade que colocaria a empresa como referência
            para o mercado nacional.`,
            }, {
                title: '',
                text: `E por esse caminho, sempre atenta às inovações, a história da Maxiforja se desenvolveu. A partir da década de 90, se voltou ainda mais para os mercados automotivo e agrícola, sendo que, em 2008, alterou seu nome para Maxiforja Componentes Automotivos,
            tendo sua principal atividade o desenvolvimento e a fabricação de componentes e sistemas forjados e usinados para os mercados agrícola, automotivo e de linha amarela.`,
            }, {
                title: '',
                text:
                    `Os investimentos em Pesquisa & Desenvolvimento, as conquistas de ISOs, os investimentos em subestações de energia, o aprimoramento de processos, a gestão de colaboradores, a qualidade das entregas e o bom atendimento ao cliente são marcas constantes nesta trajetória. “Com uma gestão comprometida com a ética e a transparência,
            a Maxiforja adota as melhores práticas de governança corporativa e de compliance na
            condução do negócio. Entendemos que nosso diferencial, para que os investimentos
            tragam o retorno esperado, está baseado na nossa estratégia de planejamento e constante pesquisa em tecnologias de manufatura de última geração”, afirma Gustavo Veit,
            gerente geral da Maxiforja.`
            }
        ]
    },
    {
        id: 2, col: '3', img: require('../../Config/Images/Fotos Maxiatualidades/WhatsApp Image 2022-11-14 at 16.45.12.jpeg'),
        Title: `Tendências e inovações sempre no radar da Maxiforja`,
        Subtitle: `Empresa participa de eventos nacionais e internacionais para acompanhar
        de perto os movimentos do mercado`,

        Text: `Uma das principais características da Maxiforja, em quase seis décadas de
        história, é acompanhar de perto as movimentações do mercado nacional e
        internacional, em especial as tendências e inovações dos setores automotivos
        e do agronegócio... ` ,
        textComplement: [
            {
                title: '',
                text: `Uma das principais características da Maxiforja, em quase seis décadas de
                história, é acompanhar de perto as movimentações do mercado nacional e
                internacional, em especial as tendências e inovações dos setores automotivos
                e do agronegócio. Para isso, além da análise permanente do comportamento
                dos players, dos cenários econômicos e políticos mundiais, a empresa participa
                de importantes eventos setoriais, com o objetivo de conhecer de perto as demandas tecnológicas destes mercados.`,
            }, {
                title: '',
                text: `Em setembro, a Maxiforja visitou a IAA Transportation 2022, em Hannover, na
            Alemanha, uma das maiores feiras mundiais de caminhões pesados. Conforme
            Roberto Koeche, gerente comercial da Maxiforja e que esteve presente no evento, a feira trouxe inovações e tendências deste mercado, com foco especial na
            eletrificação dos veículos. “Conforme estabelecido pelos países membros da
            CEE (Comunidade Econômica Europeia), as montadoras estão focadas em zerar
            a emissão de carbono até 2030. Precisamos entender como essa adaptação ou
            migração tecnológica influenciará nos nossos produtos”, explica Koeche. Antes
            disso, “estamos atentos ao Euro 6, que entrará em vigor em janeiro de 2023 e
            define nova regra para emissões de poluentes para caminhões e ônibus com
            peso bruto total a partir de 3,5 toneladas no Brasil”, completa. `,
            }, {
                title: '',
                text:
                    `Também no Brasil, a equipe Maxiforja participou no mês de novembro da Fenatran 2022, em São Paulo, para entender o comportamento do mercado nacional.
            “Estivemos visitando nossos clientes e conhecendo de perto as previsões de
            inovação e desenvolvimento tecnológico para o mercado nacional. A Fenatran
            é a IAA brasileira”, salienta Koeche. `,
            }, {
                title: '',
                text:
                    `Em relação a volumes, para o próximo ano, a expectativa é de estabilidade no
            mercado local, com retomada do crescimento a partir de 2024.`
            },
        ]
    },
    {
        id: 3, col: '3', img: require('../../Config/Images/Fotos Maxiatualidades/Mastermover.jpg'),
        Title: `Estação de Tratamento de Efluentes (ETE)`,
        Subtitle: `Compromisso com o Meio Ambiente `,
        Text: ` Seguindo os mais altos padrões e com certificação internacional,
        cuidamos e protegemos o meio ambiente através de uma estação
        interna de tratamento de efluentes.` ,
        textComplement: [
            {
                title: `Seguindo os mais altos padrões e com certificação internacional,
                cuidamos e protegemos o meio ambiente através de uma estação
                interna de tratamento de efluentes.`,
                text: ` A água está presente em quase todos os processos de produção industrial e também nas rotinas de nosso
                dia a dia. Ela é essencial em várias etapas, desde a limpeza interna dos ambientes e dos maquinários, para
                nosso uso em áreas comuns como refeitório e banheiros, está presente no resfriamento das máquinas e
                até mesmo na produção de nossas peças. `,
            }, {
                title: '',
                text: `De acordo com dados oficiais do governo Federal, as indústrias são responsáveis por 22% do consumo de 
                água no país. Por fazer parte desta parcela tão importante, a Maxiforja se preocupa e busca contribuir com
                o meio ambiente através do tratamento dos efluentes produzidos na empresa. Internamente, criamos estações para tratar de forma primária 
                e secundária os efluentes industriais e biológicos. Toda a água utilizada em nossa indústria passa pelo processo, que segue as mais rigorosas 
                diretrizes. O tratamento de efluentes considera duas fases: na primeira, existe uma etapa físico-química onde através de uma reação química, a
                parte sólida e a parte líquida do efluente se destacam para que depois sejam removidas em um processo de separação. Já na segunda fase, que é
                a fase biológica, uma série de microorganismos e bactérias se encarregam de consumir a matéria orgânica poluente através de um processo 
                respiratório. Com mais de 800 colaboradores e uma produção contínua de produtos, nossa própria ETE (Estação de Tratamento de Efluentes) foi 
                inaugurada em 2016 e é um grande diferencial de mercado. Essa e outras ações nos trouxeram a certificação
                ISO 14.001, que especifica os requisitos de um Sistema de Gestão Ambiental e comprova nosso compromisso em proteger o meio ambiente.`,
            }, {
                title: '',
                text: `Com a utilização desse novo modal, foi necessário desenvolver carros de movimentação, que foram aperfeiçoados com conceitos padronizados e intercambiáveis. Entre suas vantagens estão o sistema de suspensão que garante maior
            estabilidade na movimentação e preservação do piso, calço de proteção anti-tombamento e sistema de freio estacionário.`,
            }, {
                title: '',
                text:
                    `Segundo gestor da área de logística, Alan Camargo, a novidade ainda traz
            benefícios para o sistema produtivo da Maxiforja. “Neste formato, temos uma
            melhoria também na ergonomia, visto que o operador não precisa mais fazer
            esforço tracionando carros manualmente, pois o equipamento faz esse movimento”, comenta ele.`,
            }, {
                title: '',
                text: `Além das questões de segurança, o uso do novo modal traz algumas vantagens
            na operação como redução de paradas de linha, autonomia operacional da
            pintura, eliminação de movimentação de peças manuais e redução de espaço
            no chão de fábrica.`,
            }
        ]
    },
    {
        id: 4, col: '3', img: require('../../Config/Images/Fotos Maxiatualidades/PremioExportacao.jpg'),
        Title: `PRÊMIO EXPORTAÇÃO RS 2022`,
        Text: `Pelo sétimo ano consecutivo, a Maxiforja conquista o Prêmio Exportação RS. Este é o maior reconhecimento do Sul do país ao segmento exportador, no qual
        a empresa foi agraciada mais uma vez com o Destaque Setorial - Metalúrgico.`,
        Subtitle: 'Excelência Exportadora Reconhecida pelo Prêmio Exportação RS - Destaque Setorial no Segmento Metalúrgico',
        textComplement: [
            {
                title: '',
                text: `Pelo sétimo ano consecutivo, a Maxiforja
                conquista o Prêmio Exportação RS. Este
                é o maior reconhecimento do Sul do
                país ao segmento exportador, no qual
                a empresa foi agraciada mais uma vez
                com o Destaque Setorial - Metalúrgico. `,
            },
            {
                title: '',
                text: `A Maxiforja foi escolhida por se qualificar constantemente para encontrar
                novas oportunidades de crescimento. Acima de tudo, por mostrar que
                exportar é um objetivo permanente, com o desenvolvimento de competências e com energia para inovar.`
            },
            {
                title: '',
                text: `Agradecemos a todos os clientes,
                parceiros e colaboradores que contribuíram para mais esta conquista!`
            },

        ]
    },
    {
        id: 5, col: '3', img: require('../../Config/Images/Fotos Maxiatualidades/PremioMeritor.jpg'),
        Title: `PRÊMIO SUPPLIER AWARD 2022 `,
        Text: `Em novembro, a Maxiforja conquistou o Prêmio Supplier Award, da Meritor, nas categorias Qualidade, Logística,
        Competitividade e Desenvolvimento dentro do prazo.`,
        textComplement: [
            {
                title: '',
                text: `Em novembro, a Maxiforja conquistou
                o Prêmio Supplier Award, da Meritor,
                nas categorias Qualidade, Logística,
                Competitividade e Desenvolvimento
                dentro do prazo.`
            },
            {
                title: '',
                text: `Esta conquista vem através da análise
                de níveis de qualidade, de entrega nos
                prazos, de competitividade em relação
                ao preço, de novos desenvolvimentos –
                prazos de entrega – e proatividade em
                proposta de melhoria continua. Agradecemos a todos pela contribuição para esta conquista!`
            },
        ]
    },
    {
        id: 6, col: '3', img: require('../../Config/Images/100marcas.png'),
        Title: `100 Marcas do RS`,
        Subtitle: 'Um Ícone da Identidade Empresarial Gaúcha - Destaque no Livro 100 Marcas do RS',
        Text: `Em 2022, a Maxiforja ficou entre as marcas gaúchas destaque na 2ª edição do
        Livro 100 Marcas do RS, do Grupo Amanhã. A publicação ressalta a história
        de marcas consagradas como ícones da identidade e da cultura empresarial
        gaúcha. `,
        textComplement: [{
            title: '',
            text: `Em 2022, a Maxiforja ficou entre as marcas gaúchas destaque na 2ª edição do
            Livro 100 Marcas do RS, do Grupo Amanhã. A publicação ressalta a história
            de marcas consagradas como ícones da identidade e da cultura empresarial
            gaúcha. `
        }
        ]
    },
    {
        id: 7, col: '3', img: require('../../Config/Images/Fotos Maxiatualidades/Mastermover.jpg'),
        Title: `Mastermover: mais segurança e melhorias na logística`,
        Subtitle: `O novo modal de movimentação logística da Maxiforja facilita o abastecimento de operações e garante mais segurança aos colaboradores.`,
        Text: `Pensando nos diversos pontos essenciais de segurança no trabalho aliados
        
        ao setor de logística, a Maxiforja começou a trabalhar com um novo modal
        de movimentação...` ,
        textComplement: [
            {
                title: '',
                text: `Pensando nos diversos pontos essenciais de segurança no trabalho aliados
            ao setor de logística, a Maxiforja começou a trabalhar com um novo modal
            de movimentação. Através do uso de equipamentos Mastermover, a empresa
            passou a realizar o abastecimento das linhas de pintura, de usinagem e de
            solda de barras. `,
            }, {
                title: '',
                text: `O Mastermover consiste em um rebocador elétrico utilizado para mover cargas
            através da movimentação de carros de maneira segura e eficiente, oferecendo
            capacidade de manobra e confiabilidade excepcionais. Por ser uma ferramenta
            compacta e elétrica, o Mastermover traz melhorias de segurança e ergonomia,
            onde não é necessário fazer esforço de tração manual. Além disso, com o novo
            modal, deixa de haver circulação intensa de pessoas e empilhadeiras no mesmo ambiente, o que diminui a possibilidade de acidentes. `,
            }, {
                title: '',
                text: `Com a utilização desse novo modal, foi necessário desenvolver carros de movimentação, que foram aperfeiçoados com conceitos padronizados e intercambiáveis. Entre suas vantagens estão o sistema de suspensão que garante maior
            estabilidade na movimentação e preservação do piso, calço de proteção anti-tombamento e sistema de freio estacionário.`,
            }, {
                title: '',
                text:
                    `Segundo gestor da área de logística, Alan Camargo, a novidade ainda traz
            benefícios para o sistema produtivo da Maxiforja. “Neste formato, temos uma
            melhoria também na ergonomia, visto que o operador não precisa mais fazer
            esforço tracionando carros manualmente, pois o equipamento faz esse movimento”, comenta ele.`,
            }, {
                title: '',
                text: `Além das questões de segurança, o uso do novo modal traz algumas vantagens
            na operação como redução de paradas de linha, autonomia operacional da
            pintura, eliminação de movimentação de peças manuais e redução de espaço
            no chão de fábrica.`,
            }
        ]
    },
]


function StayIn() {
    const ItemCard = ({ Subtitle, Text, Title, id, img, col, textComplement }) => {
        const [modal, setModal] = useState(false);

        const toggle = () => setModal(!modal);

        return <Col className="ml-auto mr-auto" md={12} lg={col} sm={12} key={id}>
            <Card body color="light" className='' style={{ padding: 0, maxHeight: '50rem', minHeight: '45rem', border: 0 }}>
                <img alt={Title} src={img} style={{ maxHeight: '20rem', width: 'auto', objectFit: 'cover', objectPosition: 'center', }} />
                <CardBody>
                    <CardTitle tag="h3" className='mb-2' > {Title} </CardTitle>
                    <CardSubtitle className="mb-2 text-muted " tag="h6" > {Subtitle} </CardSubtitle>
                    <CardText className='' tag='h5'> {Text} </CardText>
                    <div style={{ position: 'absolute', bottom: 20, left: 20 }}>
                        <Button className='btn-maxi-color' onClick={toggle}> Saiba Mais </Button>
                    </div>
                </CardBody>
            </Card>
            <Modal isOpen={modal} toggle={toggle} fullscreen={'xl'} size={'xl'} >
                <div style={{ display: 'block', alignItems: 'center', alignContent: 'center', textAlign: 'center', justifyContent: 'center', marginTop: '2rem', marginBottom: '2rem', borderBottom: '1px solid #dddddd' }}>
                    <h2 className="title color-maxi mt-3">{Title}</h2>
                    <h3 className='m-3'>{Subtitle}</h3>
                </div>
                <ModalBody>
                    <div style={{ display: 'block', alignItems: 'center', alignContent: 'center', textAlign: 'center', justifyContent: 'center', marginBottom: '2rem' }}>
                        <img alt={Title} src={img} style={{ maxHeight: '25rem', maxWidth: '25rem', borderRadius: 10 }} />
                    </div>
                    <div >
                        {textComplement && textComplement.map(({ title, text }, index) => <div key={index}>
                            {title && <h3 className='color-maxi text-center pb-2'>{title}</h3>}
                            {text && <p className='description text-justify'> &emsp;{`${text}`}</p>}
                        </div>
                        )}
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button className='btn-maxi-color m-3' onClick={toggle}>
                        Fechar
                    </Button>
                </ModalFooter>
            </Modal>
        </Col>
    }

    return <div className="" style={{ marginTop: '8rem' }}>
        <Container>
            <Row> {ItemsCardNews && ItemsCardNews.map(map => <ItemCard {...map} />)} </Row>
        </Container>
    </div>
}

export default StayIn;
