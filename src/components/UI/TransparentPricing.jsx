// import React from 'react';


const TransparentPricing = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 justify-center mx-auto gap-7.5 px-10 md:px-20 lg:px-50 pr-10 md:pr-30 py-10 md:py-30">
            {/* 1st card */}
            <div className="card bg-[#F9FAFC] shadow-sm">
                <div className="card-body">

                    <h2 className="text-2xl font-bold text-[#001931]">Starter</h2>
                    <p className="text-[#627382] mb-2">Perfect for getting started</p>
                    <p className="text-[#627382]"><span className="text-[#101727] font-bold text-2xl">$0</span>/Month</p>
                    <ul className="mt-6 flex flex-col gap-2 text-xs text-[#627382]">
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span>Access to 10 free tools</span>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span>Basic templates</span>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span>Community support</span>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span>1 project per month</span>
                        </li>
                    </ul>
                    <div className="mt-6">
                        <button className="btn px-4 py-3 bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white font-bold btn-block rounded-4xl">Get Started Free</button>
                    </div>
                </div>
            </div>

            {/* 2nd card */}
            <div className="card bg-linear-to-r from-[#4F39F6] to-[#9514FA] shadow-sm relative">
                <span className="badge badge-md rounded-4xl bg-[#FEF3C6] text-[#BB4D00] absolute left-1/2 -translate-x-1/2 -translate-y-1/2">Most Popular</span>
                <div className="card-body text-white">

                    <h2 className="text-2xl font-bold">Pro</h2>
                    <p className="mb-2">Best for professionals</p>
                    <p><span className="font-bold text-2xl">$29</span>/Month</p>
                    <ul className="mt-6 flex flex-col gap-2 text-xs">
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span>Access to all premium tools</span>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span>Unlimited templates</span>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span>Priority support</span>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span>Unlimited projects</span>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span>Cloud sync</span>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span>Advanced analytics</span>
                        </li>
                    </ul>
                    <div className="mt-6">
                        <button className="flex items-center gap-2 btn px-4 py-3 btn-block rounded-4xl bg-white">
                            <span className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
                                Start Pro Trial
                            </span>
                        </button>
                    </div>
                </div>
            </div>

            {/* 3rd card */}
            <div className="card bg-[#F9FAFC] shadow-sm">
                <div className="card-body">

                    <h2 className="text-2xl font-bold text-[#001931]">Enterprise</h2>
                    <p className="text-[#627382] mb-2">For teams and businesses</p>
                    <p className="text-[#627382]"><span className="text-[#101727] font-bold text-2xl">$99</span>/Month</p>
                    <ul className="mt-6 flex flex-col gap-2 text-xs text-[#627382]">
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span>Everything in Pro</span>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span>Team collaboration</span>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span>Custom integrations</span>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span>Dedicated support</span>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span>SLA guarantee</span>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span>Custom branding</span>
                        </li>
                    </ul>
                    <div className="mt-6">
                        <button className="btn px-4 py-3 bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white font-bold btn-block rounded-4xl">Contact Sales</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default TransparentPricing;