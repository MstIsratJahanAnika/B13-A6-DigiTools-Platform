// import React from 'react';

import AddedCards from "../../AddedCards/AddedCards";
import AvailableCards from "./AvailableCards/AvailableCards";

const CardContainer = ({ toolCards, products, setProducts, addToCart, setAddToCart }) => {


    // selected card delete from cart
    const handleDeleteCart = (toolCard) => {

        // je clicked sheta dekhabe na
        const filterCard = addToCart.filter(deleteCard => deleteCard.id !== toolCard.id)
        console.log(filterCard, 'filtered card');

        // state update hobe setAddToCart diye
        setAddToCart(filterCard);
    }

    // console.log(toolCards, 'toolCards'); //success
    return (

        //card container a cards render hobe

        // dynamically dui ta conditionally show korbe - conditionally render
        <div className="lg:mx-50 mx-10 mt-10 mb-30">
            {
                products? 
                    <AvailableCards toolCards={toolCards} products={products} setProducts={setProducts} addToCart={addToCart} setAddToCart={setAddToCart}/>
                    : <AddedCards addToCart={addToCart} setAddToCart={setAddToCart} handleDeleteCart={handleDeleteCart}/>
            }
        </div>
    );
};

export default CardContainer;