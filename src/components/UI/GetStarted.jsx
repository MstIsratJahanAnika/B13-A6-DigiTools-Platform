// import React from 'react';

const GetStarted = () => {
    return (
        <div className='bg-[#F9FAFC] px-10 lg:px-50 md:mx-20 py-30 md:py-20'>
            <div>
                <div className="text-center space-y-4 mb-10">
                    <h2 className="lg:text-5xl text-3xl font-extrabold text-[#101727]">Get Started in 3 Steps</h2>
                    <p className="text-[#627382]">Start using premium digital tools in minutes, not hours.</p>
                </div>

                {/* static card */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-7.5">

                    {/* card-1 */}
                    <div className="card px-6 py-22 bg-base-100 shadow-sm text-center relative">
                        <span className="absolute top-5 right-5 w-10 h-10 flex items-center justify-center rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white">01</span>
                        <span className="mx-auto">
                            <img className="p-5 rounded-full bg-[#ebdaf8]"
                                src="../../../assets/user.png"
                                alt="" />
                        </span>
                        <div className="card-body text-center">
                            <h2 className="text-2xl font-bold text-[#101727]">Create Account</h2>
                            <p className="text-[#627382]">Sign up for free in seconds. No credit card required to get started.</p>                  
                        </div>
                    </div>

                    {/* card-2 */}
                    <div className="card px-6 py-22 bg-base-100 shadow-sm text-center relative">
                        <span className="absolute top-5 right-5 w-10 h-10 flex items-center justify-center rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white">02</span>
                        <span className="mx-auto">
                            <img className="p-5 rounded-full bg-[#ebdaf8]"
                                src="../../../assets/package.png"
                                alt="" />
                        </span>
                        <div className="card-body text-center">
                            <h2 className="text-2xl font-bold text-[#101727]">Choose Products</h2>
                            <p className="text-[#627382]">Browse our catalog and select the tools that fit your needs.</p>                  
                        </div>
                    </div>

                    {/* card-3 */}
                    <div className="card px-6 py-22 bg-base-100 shadow-sm text-center relative">
                        <span className="absolute top-5 right-5 w-10 h-10 flex items-center justify-center rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white">03</span>
                        <span className="mx-auto">
                            <img className="p-5 rounded-full bg-[#ebdaf8] object-contain"
                                src="../../../assets/rocket.png"
                                alt="" />
                        </span>
                        <div className="card-body text-center">
                            <h2 className="text-2xl font-bold text-[#101727]">Start Creating</h2>
                            <p className="text-[#627382]">Download and start using your premium tools immediately.</p>                  
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GetStarted;