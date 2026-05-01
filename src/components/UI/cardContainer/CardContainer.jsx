// import React from 'react';

import Card from "./card/Card";

const CardContainer = ({ toolCards, products, setProducts, addToCart, setAddToCart}) => {
    // console.log(toolCards, 'toolCards'); //success
    return (

        //card container a cards render hobe
        <div className="lg:mx-50 mx-10 mt-10 mb-30">
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7">
                {
                    toolCards.map((toolCard) => {
                        // console.log(toolCard, 'toolcard'); //individual card pabo 
                        return(
                            // setSelectedPlayers er state handling card er moddhe e hobe 
                            <Card key={toolCard.id} toolCard={toolCard} products={products} setProducts={setProducts} 
                                    addToCart={addToCart} setAddToCart={setAddToCart}></Card>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default CardContainer;