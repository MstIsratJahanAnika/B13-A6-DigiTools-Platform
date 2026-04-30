// import React from 'react';

const Card = () => {
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-sm">
                <div className="card-body">

                    {/* badge & image */}
                    <div className="flex justify-between">
                        <span className="border-2 border-[#F2F2F2] rounded-4xl">
                            <img className="p-3.5" src="https://i.ibb.co.com/nNC70sd5/writing-2327400-1.png" alt="" />
                        </span>
                        <span className="badge badge-md rounded-4xl bg-[#FEF3C6] text-[#BB4D00]">Best Seller</span>
                    </div>

                    <h2 className="text-2xl font-bold text-[#001931]">AI Writing Pro</h2>
                    <p className="text-[#627382] mb-2">Generate high-quality content, blogs, and marketing copy in seconds with advanced AI.</p>
                    <p className="text-[#627382]"><span className="text-[#101727] font-bold text-2xl">$29</span>/Mo</p>
                    <ul className="mt-6 flex flex-col gap-2 text-xs">
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span>High-resolution image generation</span>
                        </li>
                    </ul>
                    <div className="mt-6">
                        <button className="btn px-4 py-3 bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white font-bold btn-block rounded-4xl">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;