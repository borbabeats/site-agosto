
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption } from "reactstrap";
import usinadoPontaEixo from "../../../Config/Images/usinadoPontaEixo.jpg";
import ItemsCarousel from "./ItemsCarousel/ItemsCarousel";
import pageHome from "../../../Config/Images/pageHome.jpg";
import Fornada from "../../../Config/Images/Fornada.jpg";
import Forno from "../../../Config/Images/forno.jpg";
import robo from "../../../Config/Images/robo.jpg";
import React, { useState } from 'react';

const items = [
    {
        id: 1,
        html: <ItemsCarousel image={Fornada} textH1={'Buscando na tecnologia e na excelência'} textH2={'Os melhores resultados.'} />,
    },
    {
        id: 2,
        html: <ItemsCarousel image={Forno} textH1={'Referência no mercado da indústria'} textH2={'Nacional e Internacional'} />,
    },
    {
        id: 3,
        html: <ItemsCarousel image={pageHome} />,
    },
    {
        id: 4,
        html: <ItemsCarousel image={usinadoPontaEixo} textH1={'Excelência e sustentabilidade são chaves para o sucesso'} textH2={'Além de trazer ao cliente a solução mais adequada, rápida e eficiente'} />,
    },
    {
        id: 5,
        html: <ItemsCarousel image={robo} />,
    },
];



export default function CarouselComponent(props) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    };

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    };

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    };

    const slides = items.map((item) => {
        return (
            <CarouselItem className="custom-tag items-center" tag="div" key={item.id} onExiting={() => setAnimating(true)} onExited={() => setAnimating(false)} >
                {item.html}
                <CarouselCaption captionText={''}/>
            </CarouselItem>
        );
    });

    return (
        <div style={{ backgroundColor: 'black', height: '100vh' }}>
            <Carousel activeIndex={activeIndex} next={next} previous={previous}>
                <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
                {slides}
                <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
                <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
            </Carousel>
        </div>
    );
}

