export default function ItemsCarousel({ image, textH1, textH2 }) {
    return (
        <div className="page-header" style={{ backgroundImage: `url(${image})`, objectFit: 'cover', objectPosition: 'center' }}>
            <div className="filter"/>
            <div className="motto text-center">
                <h1>{textH1}</h1>
                <h4>{textH2}</h4>
            </div>
        </div>
    );
}

