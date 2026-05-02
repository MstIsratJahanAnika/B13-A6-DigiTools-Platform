// import React from 'react';

const EachAddedCard = ({addToCard, addedCard, handleDeleteCart}) => {
    return (
        <div>
             <div className="p-4 md:p-5 bg-[#F9FAFC] flex flex-col sm:flex-row 
                    items-start sm:items-center justify-between rounded-2xl">
                                <div className="flex items-center gap-4 w-full sm:w-auto">

                                    <span className="border-2 border-[#F2F2F2] bg-white rounded-4xl">
                                        <img className="p-2 md:p-3 w-10 h-10 md:w-12 md:h-12" src={addedCard.icon} alt="" />
                                    </span>
                                    <div className="space-y-1 md:space-y-2 flex flex-col items-start">
                                        <h4 className="text-[#101727] text-xl font-semibold">{addedCard.name}</h4>
                                        <p className="text-[#627382]">${addedCard.price}</p>
                                    </div>
                                </div>
                                <button onClick={()=>handleDeleteCart(addedCard)} className="btn rounded-2xl text-[#FF3980] mt-2.5 sm:mt-0  w-full sm:w-auto">Remove</button>
                            </div>
        </div>
    );
};

export default EachAddedCard;