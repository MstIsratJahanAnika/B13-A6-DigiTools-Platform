// import React from 'react';

const WorkFlow = () => {
    return (
        <div className="px-10 md:px-20 lg:px-50 py-20 md:py-30 bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white text-center">
            <div className="space-y-4">
                <h2 className="font-extrabold text-3xl md:text-[40px]">Ready to Transform Your Workflow?</h2>
                <p>Join thousands of professionals who are already using Digitools to work smarter.<br /> Start your free trial today.</p>
            </div>

            {/* buttons */}
            <div className="flex justify-center items-center mt-10 mb-4 gap-4">
                <button className="px-4 py-3  gap-2 btn rounded-4xl bg-white">
                    <span className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
                        Explore Products
                    </span>
                </button>
                <button className="text-white bg-transparent btn border-2 border-white px-4 py-3 rounded-4xl">View Pricing</button>
            </div>
            <p>14-day free trial<span> • </span>No credit card required <span> • </span>Cancel anytime</p>
        </div>
    );
};

export default WorkFlow;