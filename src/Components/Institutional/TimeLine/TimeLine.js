import React, { useState } from "react";

const decadeInfo = [
    { decade: "Década de 1950", info: "Informações da década de 1950" },
    { decade: "Década de 1960", info: "Informações da década de 1960" },
    { decade: "Década de 1970", info: "Informações da década de 1970" },
    { decade: "Década de 1980", info: "Informações da década de 1980" },
    { decade: "Década de 1990", info: "Informações da década de 1990" },
    { decade: "Década de 2000", info: "Informações da década de 2000" },
    { decade: "Década de 2010", info: "Informações da década de 2010" },
    { decade: "Década de 2020", info: "Informações da década de 2020" },
];

const Decade = ({ decade, info }) => {
    const [showInfo, setShowInfo] = useState(false);

    const handleClick = () => {
        setShowInfo(!showInfo);
    };

    return (
        <div onClick={handleClick}>
            <h3>{decade}</h3>
            {showInfo && <p>{info}</p>}
        </div>
    );
};

const Information = ({ info }) => {
    return <p>{info}</p>;
};

const Timeline = () => {
    const [selectedDecade, setSelectedDecade] = useState(null);

    const handleDecadeClick = (decade) => {
        setSelectedDecade(decade);
    };

    return (
        <div>
            <h2>Timeline</h2>
            {decadeInfo.map((decade) => (
                <Decade
                    key={decade.decade}
                    decade={decade.decade}
                    info={decade.info}
                    onClick={() => handleDecadeClick(decade)}
                />
            ))}
            {selectedDecade && (
                <Information info={selectedDecade.info} />
            )}
        </div>
    );
};

export default Timeline;
