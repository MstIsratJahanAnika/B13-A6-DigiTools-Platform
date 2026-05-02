// import React from 'react';

const AddedCards = ({ addToCart, setAddToCart }) => {

    if (addToCart.length === 0) {
        return (
            <div className="py-30 space-y-2 text-center">
                <h2 className="text-3xl font-bold bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">No Products Added to Cart</h2>
                <p className="text-[#627382] text-lg">Go to Products Section to Choose Products</p>
            </div>
        );
    }

    return (
        <div className="p-10 border-2 border-[#F2F2F2] space-y-6 mt-10 rounded-3xl">
            <h3 className="text-2xl font-bold text-[#101727] flex items-start">Your Cart</h3>
            {
                addToCart.map(addedCard => (
                    <div key={addedCard.id}>
                        <div>

                            <div className="p-5 bg-[#F9FAFC] flex items-center justify-between rounded-2xl">
                                <div className="flex items-center gap-4">

                                    <span className="border-2 border-[#F2F2F2] bg-white rounded-4xl">
                                        <img className="p-3.5" src={addedCard.icon} alt="" />
                                    </span>
                                    <div className="space-y-2 flex flex-col items-start">
                                        <h4 className="text-[#101727] text-xl font-semibold">{addedCard.name}</h4>
                                        <p className="text-[#627382]">${addedCard.price}</p>
                                    </div>
                                </div>
                                <button className="text-[#FF3980]">Remove</button>
                            </div>
                        </div>
                    </div>
                ))
            }

            {/* total price show */}
            <div className="flex justify-between items-center">
                <p className="text-[#627382]">Total:</p>
                <h4 className="text-2xl font-bold text-[#101727]">$78</h4>
            </div>

            {/* btn to delete all items from cart */}
            <button className="btn px-4 py-3 bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white font-bold btn-block rounded-4xl">
                Proceed To Checkout
            </button>
        </div>

    )
};

export default AddedCards;