import { useState, useRef, useEffect } from 'react';
import { Fade, Container, Row, Col } from "reactstrap";
import ImgSegAgri from '../../../Config/Images/ImageTractor/TRATOR.png'
import ImageMapper from "react-img-mapper" ;
import { useMediaQuery } from 'react-responsive';

const fillColor = 'rgba(0, 31, 61,0.5)'
const strokeColor = 'rgba(0,0,0,0.1)'

function AgriculturalFollowup({ id }) {
    const mapSegAgri = {
        name: 'image-map-agri',
        areas: [
            {
                name: "Terceiro Ponto",
                shape: 'poly',
                fillColor: fillColor,
                strokeColor: strokeColor,
                coords: [133,511,116,511,107,522,114,530,126,521,141,519,153,517,173,514,192,510,219,503,244,503,247,487,231,485,221,492,192,498,174,503,151,508],
                img: require('../../../Config/Images/ImageTractor/DrawBar.png')
            },
            {
                name: "Eixo Longo",
                shape: 'poly',
                fillColor: fillColor,
                strokeColor: strokeColor,
                coords: [358,560,404,585,411,586,422,592,482,623,484,632,479,637,466,637,406,605,349,576,349,567],
                img: require('../../../Config/Images/ImageTractor/RearBarAxle.png')
            },
            {
                name: "Eixo Longo",
                shape: 'poly',
                fillColor: fillColor,
                strokeColor: strokeColor,
                coords: [144,473,269,534,278,520,153,456,144,464],
                img: require('../../../Config/Images/ImageTractor/RearBarAxle.png')
            },
            {
                name: "Eixo do Lenvante Hidráulico",
                shape: 'poly',
                fillColor: fillColor,
                strokeColor: strokeColor,
                coords: [237,460,313,501,322,498,320,490,244,450,235,451],
                img: require('../../../Config/Images/ImageTractor/HydraulicLiftShaft.png')
            },
            {
                name: "Eixo de Ligação",
                shape: 'poly',
                fillColor: fillColor,
                strokeColor: strokeColor,
                coords: [224,583,235,579,310,624,304,631],
                img: require('../../../Config/Images/ImageTractor/DrawBar.png')
            },
            {
                name: "Barra de Tração",
                shape: 'poly',
                fillColor: fillColor,
                strokeColor: strokeColor,
                coords: [290,599,301,605,210,642,199,655,160,671,149,671,146,663,149,646,173,638,192,636],
                img: require('../../../Config/Images/ImageTractor/DrawBar.png')
            },
            {
                name: "Barra Inferior",
                shape: 'poly',
                fillColor: fillColor,
                strokeColor: strokeColor,
                coords: [75,643,60,650,50,648,50,636,62,627,73,623,221,586,240,584,233,602],
                img: require('../../../Config/Images/ImageTractor/LowerLink.png')
            },
            {
                name: "Eixo de Ligação das Barras",
                shape: 'poly',
                fillColor: fillColor,
                strokeColor: strokeColor,
                coords: [274,497,256,493,251,508,254,533,212,681,244,655,265,520],
                img: require('../../../Config/Images/ImageTractor/LiftRod.png')
            },
            {
                name: "Estabilizador",
                shape: 'poly',
                fillColor: fillColor,
                strokeColor: strokeColor,
                coords: [244,660,331,642,340,637,350,642,347,651,326,651,226,671],
                img: require('../../../Config/Images/ImageTractor/Stabilizer.png')
            },
            {
                name: "Pino Mestre",
                shape: 'poly',
                fillColor: fillColor,
                strokeColor: strokeColor,
                coords: [653,337,678,346,651,362,628,348],
                img: require('../../../Config/Images/ImageTractor/KingPin.png')
            },
            {
                name: "Pino Mestre",
                shape: 'poly',
                fillColor: fillColor,
                strokeColor: strokeColor,
                coords: [824,419,842,433,824,447,795,431],
                img: require('../../../Config/Images/ImageTractor/KingPin.png')
            },
            {
                name: "Flange",
                shape: 'poly',
                fillColor: fillColor,
                strokeColor: strokeColor,
                coords: [688,397,692,410,685,420,676,416,672,409,678,397],
                img: require('../../../Config/Images/ImageTractor/Flange.png')
            },
            {
                name: "Gancho",
                shape: 'poly',
                fillColor: fillColor,
                strokeColor: strokeColor,
                coords: [649,419,678,431,678,460,664,467,662,476,644,474,635,465,628,431],
                img: require('../../../Config/Images/ImageTractor/Hook.png')
            },
            {
                name: "Yoke",
                shape: 'poly',
                fillColor: fillColor,
                strokeColor: strokeColor,
                coords: [602,428,619,435,609,453,598,450,600,439,596,434],
                img: require('../../../Config/Images/ImageTractor/Yoke.png')
            },
        ],
    };

    const divImageAgri = useRef();
    const [divPosition, setDivPosition] = useState({ left: 0, top: 0 });
    const [imageWidth, SetImageWidth] = useState(0);
    const [infoPiece, SetInfoPiece] = useState(null);
    const isMobile = useMediaQuery({ maxWidth: 767 }); // Tamanho SM
    const [isVisible, setIsVisible] = useState(false);
    const [text, setText] = useState('');

    const onMouseEnter = (area, ind, event) => {
        if (!event) return
        const { clientX, clientY } = event;
        const { left, top } = event.currentTarget.getBoundingClientRect();
        const adjustedX = clientX - left;
        const adjustedY = clientY - top;
        setDivPosition({ left: adjustedX, top: adjustedY })
        SetInfoPiece(area);
        setIsVisible(true);
    }

    const onMouseLeave = () => {
        setIsVisible(false);
    }

    const onMouseEnterDiv = () => {
        setIsVisible(true);
    }

    const onMouseLeaveDiv = () => {
        setIsVisible(false);
    }

    useEffect(() => {
        if (!divImageAgri.current) return
        SetImageWidth(divImageAgri.current.offsetWidth);

        const handleResize = () => {
            if (!divImageAgri.current) return
            SetImageWidth(divImageAgri.current.offsetWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    return <div style={{ paddingTop: "5rem" }} className={`bg-white`} id={id}>
        <Container>
            <div ref={divImageAgri} className='row'>
                <Fade className="mt-3" baseClassActive={'show'} >
                    <Col className="" md="12" lg="15" sm="12" >
                    <h2 className="title mt-5">Segmento Agrícola</h2>
                        <div className='' style={{ position: 'relative' }}>
                            {isVisible && <div onMouseEnter={onMouseEnterDiv} onMouseLeave={onMouseLeaveDiv}
                                style={{
                                    left: divPosition.left,
                                    top: divPosition.top,
                                    position: 'absolute',
                                    zIndex: 99,
                                    width: 190,
                                    height: 190,
                                    backgroundColor: '#fff',
                                    color: '#001f3d',
                                    overflow: 'hidden',
                                    borderRadius: 100,
                                    border: '3px solid #f25500',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    textAlign : 'center'
                                    //  alignItems: 'center', justifyContent: 'center',
                                }}>
                                <img src={infoPiece.img} style={{ height: 'auto', width: '60%', padding : 15 }} alt="" />
                                <h6 style={{ margin: 5 }}>{infoPiece.name}</h6>
                            </div>}
                            {imageWidth && <ImageMapper src={ImgSegAgri}  map={mapSegAgri} width={imageWidth} imgWidth={1007} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} />}

                        </div>
                    </Col>
                </Fade>


            </div>
        </Container>
    </div>;
}

export default AgriculturalFollowup;

{/* <img src="TRATOR.png" usemap="#image-map">

<map name="image-map">
    <area target="" alt="Terceiro Ponto" 
    <area target="" alt="Eixo Longo" 
    <area target="" alt="Terceiro Ponto" 
    <area target="" alt="Eixo do Lenvante Hidráulico" 
    <area target="" alt="Eixo de Ligação" 
    <area target="" alt="Barra de Tração" 
    <area target="" alt="Barra Inferior" 
    <area target="" alt="Eixo de Ligação das Barras" 
    <area target="" alt="Estabilizador" 
    <area target="" alt="Pino Mestre" 
    <area target="" alt="Pino Mestre" 
    <area target="" alt="Flange" 
    <area target="" alt="Gancho" 
    <area target="" alt="Yoke" 
</map> */}



