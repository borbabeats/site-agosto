import { useEffect, useState, useCallback } from 'react'
import { Container, Row, Col, Fade } from "reactstrap"
import TimeLine from './TimeLine/TimeLine'
import { useMediaQuery } from 'react-responsive';

function Historic({ id }) {
    const isMobile = useMediaQuery({ maxWidth: 767 }); // Tamanho SM
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 }); // Tamanho MD
    const isDesktop = useMediaQuery({ minWidth: 992 });
    const [index, setIndex] = useState(0)

    const registerFields = useCallback((result) => {
        // SetSaveMetrics(old => [...old.filter(f => f.id !== result.id), result])
    }, [])

    useEffect(() => {
        if (window.location.hash) {
            const element = document.querySelector(window.location.hash);
            if (element) {
                const targetOffsetTop = element.offsetTop;
                window.scrollTo({ top: targetOffsetTop, behavior: "smooth" });
            }
        }
    }, []);

    return <div className={`bg-maxi `} style={{ padding: (isDesktop ? '0 0 2rem 0' : '0 15px 2rem 15px') }} id={id} >
        <Container className=''>
            <Row>
                <Fade  >
                    <Col className="ml-auto mr-auto" md="12" lg="15" sm="12">
                        <h2 className="title mt-5 text-white">Histórico</h2>
                    </Col>
                    <Col className="ml-auto mr-auto" md="15" lg="15" sm="15">
                        <TimeLine index={index} onChange={setIndex} />
                    </Col>
                </Fade>
            </Row>
        </Container>
    </div>
}

export default Historic

