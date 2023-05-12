import React from 'react';
import ContainerHistory from './Containers/ContainerHistory';
import ContainersItems from './Containers/ContainerItems';
import ContainersContactUs from './Containers/ContainerContactUs';
import ContainerNews from './Containers/ContainerNews';


export default function SectionSince() {
    return <div className="main">
        <ContainerHistory/>
        <ContainersItems/>
        {/* <ContainersMap/> */}
        <ContainersContactUs/>
        <ContainerNews/>
    </div>;
}