// import React from 'react';

import Card from "./card/Card";

const CardContainer = () => {
    return (

        //card container a cards render hobe
        <div className="lg:mx-50 mx-10 mt-10 mb-30">
            <div className="gird lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
            {/* Card render hobe Card.jsx theke */}
                <Card />
            </div>
        </div>
    );
};

export default CardContainer;