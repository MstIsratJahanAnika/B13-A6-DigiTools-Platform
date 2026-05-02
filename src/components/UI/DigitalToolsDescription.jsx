// import React from 'react';

import { use, useState } from "react";
import CardContainer from "./cardContainer/CardContainer";

const DigitalToolsDescription = ({ getToolCardsPromise, addToCart, setAddToCart }) => {

    const toolCards = use(getToolCardsPromise)
    // console.log(toolCards); //success

    // card gula selected thakar khetre
    const [products, setProducts] = useState(true)  

    // all tools theke card cart a add hobe
    // const [addToCart, setAddToCart] = useState([]);

    return (
        <div className="mt-30 mb-10 space-y-4 text-center">
            {/* ei part static */}
            <div className="space-y-4">
                <h3 className="font-extrabold text-5xl text-[#001931]">Premium Digital Tools</h3>
                <p className="text-[#627382]">Choose from our curated collection of premium digital products designed <br />to boost your productivity and creativity.</p>
            </div>

            {/* nested pill-button - button toggle  -> conditionally render*/}
            <div className="inline-flex items-center bg-base-200 rounded-full p-1">
                <button onClick={()=> setProducts(true)} className={`px-4 py-2 rounded-full transition ${products? 'btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white font-bold': 'text-[#25065D]'}`}>
                    Products
                </button>

                <button onClick={()=> setProducts(false)} className={`px-4 py-2 rounded-full transition ${!products?'btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white font-bold': 'text-[#25065D]'}`}>
                    Cart({addToCart.length})
                </button>

            </div>

            {/* Card container call hobe */}
            <CardContainer toolCards={toolCards} products={products} setProducts={setProducts} addToCart={addToCart} setAddToCart={setAddToCart}/>
        </div>
    );
};

export default DigitalToolsDescription;