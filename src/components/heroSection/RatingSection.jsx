// import React from 'react';

const RatingSection = () => {
    return (
        <div className="px-50 py-15 bg-linear-to-r from-[#4F39F6] to-[#9514FA]">
            <div className="text-white flex flex-col md:flex-row md:justify-around space-y-4 
                    md:space-y-0 items-center divide-y md:divide-y-0 md:divide-x md:divide-white/50">

                <div className="px-30">
                    <h2 className="font-extrabold text-[60px]">50k+</h2>
                    <p className="text-2xl">Active Users</p>
                </div>

                <div className="px-30">
                    <h2 className="font-extrabold text-[60px]">200+</h2>
                    <p className="text-2xl">Premium Tools</p>
                </div>

                <div className="px-30">
                    <h2 className="font-extrabold text-[60px]">4.9</h2>
                    <p className="text-2xl">Rating</p>
                </div>

            </div>
        </div>
    );
};

export default RatingSection;