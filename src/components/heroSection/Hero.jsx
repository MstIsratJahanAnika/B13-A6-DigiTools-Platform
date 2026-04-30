// import React from 'react';

// import { CiPlay1 } from "react-icons/ci";
import { IoPlayOutline } from "react-icons/io5";

const Hero = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col-reverse  md:flex-col gap-15 flex-1 lg:flex-row">
                <div className="space-y-8">
                    <button className="bg-[#E1E7FF] py-2 px-4 flex gap-2 items-center rounded-4xl">
                        <img className="p-0 w-4 h-4" src="../../../assets/badgeImg.png" alt="" />
                        <span className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
                            New: AI-Powered Tools Available
                        </span>
                    </button>
                    <h1 className="text-7xl font-bold text-[#101727]">Supercharge Your Digital Workflow</h1>
                    <p className="text-[#627382]">
                        Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today. Explore Products
                    </p>

                    {/* button div */}
                    <div className="space-x-4">
                        <button className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-4xl">
                            Get Started
                        </button>

                        <button className="btn p-[1.5px] rounded-[100px] bg-linear-to-r from-[#4F39F6] to-[#9514FA]">
                            <span className="flex items-center gap-2 px-4 py-2 rounded-4xl bg-white">
                                <IoPlayOutline className="text-[#6D28D9]" />
                                <span className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
                                    Watch Demo
                                </span>
                            </span>
                        </button>
                    </div>

                </div>
                <img src="https://i.ibb.co.com/vCMwWT9K/banner.png"
                    className="w-fit rounded-lg shadow-2xl"/>
            </div>
        </div>
    );
};

export default Hero;