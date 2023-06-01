export default function ItemsCarousel({ image, textH1, textH2 }) {
    return (
        <div className="page-header">
            <div className="motto filter text-center" style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <img src={image} style={{ objectFit: 'cover', objectPosition: 'center', height: '100vh', width: '100vw' }} alt="" />
                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                    <h1>{textH1}</h1>
                    <h4>{textH2}</h4>
                </div>
            </div>
        </div>
    );
}

