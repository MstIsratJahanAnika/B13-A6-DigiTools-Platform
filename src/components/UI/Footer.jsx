// import React from 'react';

import { FaFacebookSquare, FaRegCopyright } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
    return (
        <div className="px-50 pt-30 bg-[#101727] text-white text-center">
            <div className="grid grid-cols-3 md:grid-cols-5 pb-20">
                <div className="space-y-4">
                    <h2 className="text-4xl font-bold">DigiTools</h2>
                    <p className="text-[#A1A1AA]">Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.</p>
                </div>

                <ul className="text-[#A1A1AA] space-y-4">
                    <li className="text-[20px] text-white">Product</li>
                    <li>Features</li>
                    <li>Pricing</li>
                    <li>Templates</li>
                    <li>Integrations</li>
                </ul>
                <ul className="text-[#A1A1AA] space-y-4">
                    <li className="text-[20px] text-white">Company</li>
                    <li>About</li>
                    <li>Blog</li>
                    <li>Careers</li>
                    <li>Press</li>
                </ul>
                <ul className="text-[#A1A1AA] space-y-4">
                    <li className="text-[20px] text-white">Resources</li>
                    <li>Documentation</li>
                    <li>Help Center</li>
                    <li>Community</li>
                    <li>Contact</li>
                </ul>
                <div className="space-y-4">
                    <h2 className="text-[20px] text-white">Social Links</h2>
                    <ul className="flex justify-center items-center gap-4">
                        <li>
                            <a href="" className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-black text-xl">
                                <RiInstagramFill />
                            </a>
                        </li>
                        <li>
                            <a href="" className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-black text-xl">
                                <FaFacebookSquare />
                            </a>
                        </li>
                        <li>
                            <a href="" className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-black text-xl">
                                <FaXTwitter />
                            </a>
                        </li>

                    </ul>
                </div>
            </div>
            <hr className="border-[#7f7f8d]" />
            <div className="flex justify-between items-center text-[#7f7f8d]">
                <p className="py-7.5 flex items-center gap-2">
                    <FaRegCopyright />
                    2026 Digitools. All rights reserved.
                </p>
                <ul className="flex gap-3 items-center justify-center">
                    <li>Privacy Policy</li>
                    <li>Terms of Service</li>
                    <li> Cookies</li>
                </ul>
            </div>
        </div>
    );
};

export default Footer;