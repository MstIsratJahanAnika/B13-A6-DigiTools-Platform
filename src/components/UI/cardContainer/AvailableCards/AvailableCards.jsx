// import React from 'react';
import Card from '../card/Card';

const AvailableCards = ({toolCards, products, setProducts, addToCart, setAddToCart}) => {
    return (
        <div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7">
                {
                    toolCards.map((toolCard) => {
                        // console.log(toolCard, 'toolcard'); //individual card pabo 
                        return (
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

export default AvailableCards;