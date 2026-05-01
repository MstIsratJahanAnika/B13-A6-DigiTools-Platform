// import React from 'react';

import CardFeatures from "./CardFeatures";

const Card = ({ toolCard, products, setProducts, addToCart, setAddToCart }) => {

    // from json data
    const {
        name,
        description,
        price,
        period,
        tag,
        icon,
        features
    } = toolCard;

    const handleAddToCart = (toolCard) => {

    setAddToCart(addToCart => {
        const updated = [...addToCart, toolCard];
        console.log("updated cart", updated);
        return updated;
    });
};

    return (
        <div>
            <div className="card bg-base-100 shadow-sm">
                <div className="card-body">

                    {/* badge & image */}
                    <div className="flex justify-between">
                        <span className="border-2 border-[#F2F2F2] rounded-4xl">
                            <img className="p-3.5" src={icon} alt="" />
                        </span>

                        {/* conditional rendering of badge */}
                        <span
                            className={`badge badge-md rounded-4xl ${tag === "Best Seller" ? "bg-[#FEF3C6] text-[#BB4D00]" : tag === "Popular" ? "bg-[#E1E7FF] text-[#7769e0]" : "bg-[#DBFCE7] text-[#0A883E]"}`}>
                            {tag}
                        </span>
                    </div>

                    <h2 className="text-2xl font-bold text-[#001931]">{name}</h2>
                    <p className="text-[#627382] mb-2">{description}</p>
                    <p className="text-[#627382] flex items-center "><span className="text-[#101727] font-bold text-2xl">${price}</span>/{period}</p>
                    <ul className="mt-6 flex flex-col gap-2 text-xs">
                        {
                            features.map((feature, index) => (
                                <CardFeatures key={index} feature={feature} />
                            ))
                        }
                    </ul>
                    <div className="mt-6">
                        <button onClick={() => handleAddToCart(toolCard)} className="btn px-4 py-3 bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white font-bold btn-block rounded-4xl">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;