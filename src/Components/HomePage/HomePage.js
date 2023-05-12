import SectionSince from "./SectionSince/SectionSince";
import CarouselComponent from "./Carousel/Carousel";
import { useEffect } from "react";
import { Fade } from "reactstrap";

export default function HomePage() {
    document.documentElement.classList.remove("nav-open");

    useEffect(() => {
        document.body.classList.add("profile-page");
        return function cleanup() {
            document.body.classList.remove("profile-page");
        };
    });

    return (
        <Fade >
            <CarouselComponent />
            <SectionSince />
        </Fade>
    );
}