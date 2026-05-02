// import React from 'react';

const EachAddedCard = ({addToCard, addedCard, handleDeleteCart}) => {
    return (
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
                                <button onClick={()=>handleDeleteCart(addedCard)} className="btn rounded-2xl text-[#FF3980]">Remove</button>
                            </div>
        </div>
    );
};

export default EachAddedCard;