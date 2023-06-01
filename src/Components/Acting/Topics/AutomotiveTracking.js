import { useState, useRef, useEffect } from 'react';
import { Fade, Container, Row, Col } from "reactstrap";
import ImgSegAuto from '../../../Config/Images/ImagesTruck/CAMINHÃO.png'
import ImageMapper from "react-img-mapper";
import { useMediaQuery } from 'react-responsive';

const fillColor = 'rgba(0, 31, 61,0.5)'
const strokeColor = 'rgba(0,0,0,0.1)'

function AutomotiveTracking({ id }) {
    const mapSegAutomotivo = {
        name: 'image-map-auto',
        areas: [
            {
                name: "Braço de Ligação",
                shape: 'poly',
                fillColor: fillColor,
                strokeColor: strokeColor,
                coords: [153, 481, 145, 492, 154, 495, 167, 504, 170, 517, 172, 525, 189, 538, 220, 523, 222, 516, 210, 513, 197, 519, 192, 510, 202, 501, 185, 487, 173, 491],
                img: require('../../../Config/Images/ImagesTruck/BracoLigacao.png')
            },
            {
                name: "Braço do Levante da Cabine",
                shape: 'poly',
                fillColor: fillColor,
                strokeColor: strokeColor,
                coords: [81, 512, 79, 529, 74, 534, 80, 538, 87, 535, 96, 517, 122, 503, 121, 493, 111, 490, 102, 499],
                img: require('../../../Config/Images/ImagesTruck/BracoLeanteCabine.png')
            },
            {
                name: "Sela de Mola",
                shape: 'poly',
                fillColor: fillColor,
                strokeColor: strokeColor,
                coords: [237, 530, 253, 539, 252, 547, 244, 547, 237, 552, 215, 546, 217, 538, 228, 537],
                img: require('../../../Config/Images/ImagesTruck/SelaMola.png')
            },
            {
                name: "Braço do Levante da Cabine",
                shape: 'poly',
                fillColor: fillColor,
                strokeColor: strokeColor,
                coords: [221, 552, 232, 562, 220, 569, 196, 576, 188, 588, 177, 592, 179, 571, 212, 560],
                img: require('../../../Config/Images/ImagesTruck/BracoLeanteCabine.png')
            },
            {
                name: "Braço Pitman",
                shape: 'poly',
                fillColor: fillColor,
                strokeColor: strokeColor,
                coords: [252, 602, 268, 597, 268, 643, 256, 648, 257, 629],
                img: require('../../../Config/Images/ImagesTruck/Pitman.png')
            },
            {
                name: "Braço Intermediario",
                shape: 'poly',
                fillColor: fillColor,
                strokeColor: strokeColor,
                coords: [298, 577, 285, 578, 292, 590, 287, 599, 292, 603, 302, 596, 306, 606, 311, 612, 318, 604, 317, 594, 320, 588, 316, 580, 326, 566, 318, 560, 314, 568, 303, 567],
                img: require('../../../Config/Images/ImagesTruck/BracoIntermediarioOne.png')
            },
            {
                name: "Suporte do Câmbio",
                shape: 'poly',
                fillColor: fillColor,
                strokeColor: strokeColor,
                coords: [305, 421, 337, 442, 317, 450, 300, 444, 294, 428],
                img: require('../../../Config/Images/ImagesTruck/SuporteCambio.png')
            },
            {
                name: "Suporte do Câmbio",
                shape: 'poly',
                fillColor: fillColor,
                strokeColor: strokeColor,
                coords: [388, 470, 374, 481, 393, 506, 423, 488],
                img: require('../../../Config/Images/ImagesTruck/SuporteCambio.png')
            },
            {
                name: "Manga do Eixo",
                shape: 'poly',
                fillColor: fillColor,
                strokeColor: strokeColor,
                coords: [347, 376, 369, 386, 376, 403, 392, 419, 423, 407, 415, 395, 399, 400, 403, 386, 384, 369, 355, 366],
                img: require('../../../Config/Images/ImagesTruck/MangaEixo.png')
            },
            {
                name: "Sela de Mola",
                shape: 'poly',
                fillColor: fillColor,
                strokeColor: strokeColor,
                coords: [434, 412, 461, 422, 437, 439, 412, 428],
                img: require('../../../Config/Images/ImagesTruck/SelaMola.png')
            },
            {
                name: "Flange",
                shape: 'poly',
                fillColor: fillColor,
                strokeColor: strokeColor,
                coords: [460, 383, 487, 395, 481, 415, 453, 406],
                img: require('../../../Config/Images/ImagesTruck/Flange.png')
            },
            {
                name: "Braço Intermediário",
                shape: 'poly',
                fillColor: fillColor,
                strokeColor: strokeColor,
                coords: [449, 488, 447, 503, 455, 509, 463, 504, 465, 530, 479, 532, 478, 516, 487, 506, 484, 495, 502, 474, 490, 466, 469, 471],
                img: require('../../../Config/Images/ImagesTruck/BracoIntermediario.png')
            },
            {
                name: "Manga do Eixo",
                shape: 'poly',
                fillColor: fillColor,
                strokeColor: strokeColor,
                coords: [565, 469, 529, 490, 548, 503, 557, 495, 586, 511, 573, 525, 592, 535, 605, 529, 619, 527, 627, 519, 615, 512, 618, 501, 586, 492],
                img: require('../../../Config/Images/ImagesTruck/MangaEixo.png')
            },
            {
                name: "Flange",
                shape: 'poly',
                fillColor: fillColor,
                strokeColor: strokeColor,
                coords: [689, 304, 716, 319, 712, 346, 685, 330],
                img: require('../../../Config/Images/ImagesTruck/Flange.png')
            },
            {
                name: "Suporte de Amortecedor",
                shape: 'poly',
                fillColor: fillColor,
                strokeColor: strokeColor,
                coords: [639, 253, 637, 243, 647, 235, 651, 247, 657, 243, 653, 227, 637, 227, 627, 239, 631, 254],
                img: require('../../../Config/Images/ImagesTruck/SuporteAmortecedor.png')
            },
            {
                name: "Ponta de Eixo",
                shape: 'poly',
                fillColor: fillColor,
                strokeColor: strokeColor,
                coords: [658, 242, 695, 259, 684, 279, 648, 257],
                img: require('../../../Config/Images/ImagesTruck/PontaEixo.png')
            },
            {
                name: "Eixo 'S'",
                shape: 'poly',
                fillColor: fillColor,
                strokeColor: strokeColor,
                coords: [677, 225, 731, 258, 725, 263, 669, 234],
                img: require('../../../Config/Images/ImagesTruck/EixoS.png')
            },
            {
                name: "Eixo 'S'",
                shape: 'poly',
                fillColor: fillColor,
                strokeColor: strokeColor,
                coords: [795, 304, 849, 338, 859, 331, 799, 298],
                img: require('../../../Config/Images/ImagesTruck/EixoS.png')
            },
            {
                name: "Suporte do Eixo",
                shape: 'poly',
                fillColor: fillColor,
                strokeColor: strokeColor,
                coords: [736, 251, 765, 268, 754, 280, 727, 267],
                img: require('../../../Config/Images/ImagesTruck/SuporteEixo.png')
            },
            {
                name: "Sela de Mola",
                shape: 'poly',
                fillColor: fillColor,
                strokeColor: strokeColor,
                coords: [682, 287, 690, 296, 703, 301, 710, 301, 710, 288, 695, 282, 687, 275],
                img: require('../../../Config/Images/ImagesTruck/SelaMola.png')
            },
            {
                name: "Sela de Mola",
                shape: 'poly',
                fillColor: fillColor,
                strokeColor: strokeColor,
                coords: [709, 273, 733, 287, 738, 281, 732, 272, 710, 260],
                img: require('../../../Config/Images/ImagesTruck/SelaMola.png')
            },
            {
                name: "Ponta de Eixo e Anel Retificado",
                shape: 'poly',
                fillColor: fillColor,
                strokeColor: strokeColor,
                coords: [813, 328, 827, 336, 845, 352, 838, 362, 820, 355, 801, 349, 801, 336],
                img: require('../../../Config/Images/ImagesTruck/PontaEixo.png')
            },
            {
                name: "Sela de Mola",
                shape: 'poly',
                fillColor: fillColor,
                strokeColor: strokeColor,
                coords: [762, 318, 770, 325, 784, 326, 786, 349, 767, 339, 756, 331],
                img: require('../../../Config/Images/ImagesTruck/SelaMola.png')
            },
            {
                name: "Suporte de Amortecedor",
                shape: 'poly',
                fillColor: fillColor,
                strokeColor: strokeColor,
                coords: [760, 325, 754, 312, 767, 301, 781, 299, 781, 314, 775, 318, 772, 309, 764, 315],
                img: require('../../../Config/Images/ImagesTruck/SuporteAmortecedor.png')
            },
            {
                name: "Sela de Moda",
                shape: 'poly',
                fillColor: fillColor,
                strokeColor: strokeColor,
                coords: [784, 302, 799, 310, 810, 314, 810, 330, 781, 317],
                img: require('../../../Config/Images/ImagesTruck/SelaMola.png')
            },
            {
                name: "Trunnion",
                shape: 'poly',
                fillColor: fillColor,
                strokeColor: strokeColor,
                coords: [748, 181, 806, 215, 796, 226, 741, 197],
                img: require('../../../Config/Images/ImagesTruck/Trunnion.png')
            },
            {
                name: "Trunnion",
                shape: 'poly',
                fillColor: fillColor,
                strokeColor: strokeColor,
                coords: [857, 242, 917, 278, 903, 292, 847, 257],
                img: require('../../../Config/Images/ImagesTruck/Trunnion.png')
            },
            {
                name: "Suporte de Amortecedor",
                shape: 'poly',
                fillColor: fillColor,
                strokeColor: strokeColor,
                coords: [790, 145, 794, 162, 802, 162, 799, 151, 809, 142, 811, 151, 818, 150, 816, 134, 801, 135],
                img: require('../../../Config/Images/ImagesTruck/SuporteAmortecedor.png')
            },
            {
                name: "Ponta de Eixo",
                shape: 'poly',
                fillColor: fillColor,
                strokeColor: strokeColor,
                coords: [818, 151, 852, 163, 850, 179, 841, 185, 828, 178, 820, 171, 807, 158],
                img: require('../../../Config/Images/ImagesTruck/PontaEixo.png')
            },
            {
                name: "Sela de Mola",
                shape: 'poly',
                fillColor: fillColor,
                strokeColor: strokeColor,
                coords: [845, 180, 853, 187, 861, 192, 869, 193, 873, 204, 863, 207, 854, 204, 847, 199, 845, 189],
                img: require('../../../Config/Images/ImagesTruck/SelaMola.png')
            },
            {
                name: "Suporte de Amortecedor",
                shape: 'poly',
                fillColor: fillColor,
                strokeColor: strokeColor,
                coords: [919, 216, 927, 209, 942, 207, 942, 223, 935, 224, 935, 216, 924, 223, 924, 233, 916, 233],
                img: require('../../../Config/Images/ImagesTruck/SuporteAmortecedor.png')
            },
            {
                name: "Sela de Mola",
                shape: 'poly',
                fillColor: fillColor,
                strokeColor: strokeColor,
                coords: [926, 228, 939, 236, 945, 237, 946, 247, 937, 250, 928, 249, 919, 241, 918, 233],
                img: require('../../../Config/Images/ImagesTruck/SelaMola.png')
            },
            {
                name: "Ponta de Eixo",
                shape: 'poly',
                fillColor: fillColor,
                strokeColor: strokeColor,
                coords: [965, 241, 975, 234, 985, 245, 996, 252, 1004, 257, 1002, 269, 993, 268, 982, 262, 961, 257],
                img: require('../../../Config/Images/ImagesTruck/PontaEixoEnd.png')
            },
            {
                name: "Sela de Mola",
                shape: 'poly',
                fillColor: fillColor,
                strokeColor: strokeColor,
                coords: [956, 218, 966, 225, 966, 236, 954, 232, 939, 222, 943, 213],
                img: require('../../../Config/Images/ImagesTruck/SelaMola.png')
            },
            {
                name: "Eixo 'S'",
                shape: 'poly',
                fillColor: fillColor,
                strokeColor: strokeColor,
                coords: [829, 140, 837, 134, 845, 139, 890, 166, 885, 172],
                img: require('../../../Config/Images/ImagesTruck/EixoS.png')
            },
            {
                name: "Eixo 'S'",
                shape: 'poly',
                fillColor: fillColor,
                strokeColor: strokeColor,
                coords: [956, 210, 1003, 238, 1008, 247, 1020, 238, 1012, 234, 1001, 230, 962, 207],
                img: require('../../../Config/Images/ImagesTruck/EixoS.png')
            },
            {
                name: "Suporte do Eixo",
                shape: 'poly',
                fillColor: fillColor,
                strokeColor: strokeColor,
                coords: [899, 159, 917, 168, 927, 180, 912, 188, 892, 176],
                img: require('../../../Config/Images/ImagesTruck/SuporteEixo.png')
            },
            {
                name: "Sela de Mola",
                shape: 'poly',
                fillColor: fillColor,
                strokeColor: strokeColor,
                coords: [869, 167, 894, 181, 897, 192, 893, 196, 869, 181],
                img: require('../../../Config/Images/ImagesTruck/SelaMola.png')
            },
            {
                name: "Braço de Direção e Manda de Eixo",
                shape: 'poly',
                fillColor: fillColor,
                strokeColor: strokeColor,
                coords: [344, 592, 326, 604, 346, 620, 356, 614, 384, 629, 373, 640, 391, 651, 401, 648, 408, 643, 420, 647, 427, 641, 414, 631, 413, 615, 391, 605, 383, 610, 375, 598, 357, 584],
                img: require('../../../Config/Images/ImagesTruck/BracoDirecao.png')
            },
        ],
    };
    const [divPosition, setDivPosition] = useState({ left: 0, top: 0 });
    const divImageAuto = useRef();
    const [imageWidth, SetImageWidth] = useState(0);
    const [infoPiece, SetInfoPiece] = useState(null);
    const isMobile = useMediaQuery({ maxWidth: 767 }); // Tamanho SM
    const imageSrc = ImgSegAuto;
    const [isVisible, setIsVisible] = useState(false);
    const [text, setText] = useState('');

    const onMouseEnter = (area, _, event) => {
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
        const handleResize = () => {
            if (!divImageAuto.current) return
            SetImageWidth(divImageAuto.current.offsetWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        if (!divImageAuto.current) return
        SetImageWidth(divImageAuto.current.offsetWidth);
    }, [])

    return <div style={{ paddingTop: "5rem" }} className={`bg-white`} id={id}>
        <Container>
            <div ref={divImageAuto} className='row mt-3'>
                    <Col className="" md="12" lg="15" sm="12" >
                        <h2 className="title mt-5">Segmento Automotivo</h2>
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
                            {imageWidth && <ImageMapper src={imageSrc}  map={mapSegAutomotivo} width={imageWidth} imgWidth={1148} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} />}
                        </div>
                    </Col>


            </div>
        </Container>
    </div>;
}

export default AutomotiveTracking;



