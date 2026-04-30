// import React from 'react';

const DigitalToolsDescription = () => {
    return (
        <div className="mt-30 mb-10 space-y-4 text-center">
            <div className="space-y-4">
                <h3 className="font-extrabold text-5xl text-[#001931]">Premium Digital Tools</h3>
                <p className="text-[#627382]">Choose from our curated collection of premium digital products designed <br/>to boost your productivity and creativity.</p>
            </div>

            {/* nested pill-button */}
            <div className="inline-flex items-center bg-base-200 rounded-full p-1">
                <button className="px-4 py-2 rounded-full btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white font-bold">
                    Products
                </button>

                <button className="px-4 py-2 rounded-full text-[#25065D]">
                    Cart()
                </button>

            </div>
        </div>
    );
};

export default DigitalToolsDescription;