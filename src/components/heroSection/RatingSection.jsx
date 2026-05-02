// import React from 'react';

const RatingSection = () => {
    return (
        <div className="px-4 md:px-10 lg:px-20 py-10 md:py-14 bg-linear-to-r from-[#4F39F6] to-[#9514FA]">
            <div className="text-white flex flex-col md:flex-row items-center justify-between gap-6 divide-y md:divide-y-0 md:divide-x divide-white/50">

                <div className="text-center lg:px-30 md:px-6 py-4 md:py-0">
                    <h2 className="font-extrabold text-4xl lg:text-[60px] md:text-5xl">50k+</h2>
                    <p className="text-2xl">Active Users</p>
                </div>

                <div className="text-center lg:px-30 md:px-6 py-4 md:py-0">
                    <h2 className="font-extrabold text-4xl lg:text-[60px] md:text-5xl">200+</h2>
                    <p className="text-2xl">Premium Tools</p>
                </div>

                <div className="text-center lg:px-30 md:px-6 py-4 md:py-0">
                    <h2 className="font-extrabold text-4xl lg:text-[60px] md:text-5xl">4.9</h2>
                    <p className="text-2xl">Rating</p>
                </div>

            </div>
        </div>
    );
};

export default RatingSection;