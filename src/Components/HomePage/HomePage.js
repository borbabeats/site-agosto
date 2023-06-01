import SectionSince from "./SectionSince/SectionSince";
import CarouselComponent from "./Carousel/Carousel";
import { Fade } from "reactstrap";

export default function HomePage() {
    return (
        <Fade >
            <CarouselComponent />
            <SectionSince />
        </Fade>
    );
}