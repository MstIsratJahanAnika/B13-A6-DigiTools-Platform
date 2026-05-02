// import React from 'react';

import AddedCards from "../../AddedCards/AddedCards";
import AvailableCards from "./AvailableCards/AvailableCards";

const CardContainer = ({ toolCards, products, setProducts, addToCart, setAddToCart }) => {
    // console.log(toolCards, 'toolCards'); //success
    return (

        //card container a cards render hobe

        // dynamically dui ta conditionally show korbe - conditionally render
        <div className="lg:mx-50 mx-10 mt-10 mb-30">
            {
                products? 
                    <AvailableCards toolCards={toolCards} products={products} setProducts={setProducts} addToCart={addToCart} setAddToCart={setAddToCart}/>
                    : <AddedCards addToCart={addToCart} setAddToCart={setAddToCart}/>
            }
        </div>
    );
};

export default CardContainer;