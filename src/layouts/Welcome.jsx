// layouts/Welcome.jsx
import React from 'react';
import Bottleblur from '../assets/Bottleblur.png';

const Welcome = () => {
    return (
        <div className="relative w-screen min-h-[120vh] bg-[#EBF4F6] overflow-hidden">
            <img
                src={Bottleblur}
                alt="Bottle Blur Background"
                className="absolute inset-0 w-full h-full object-cover z-0"
                style={{ transform: 'translateY(-15%)' }}
            />
            <div className="relative inset-0 bg-black z-0"></div>
            <div className="relative z-10 p-8 md:p-12 lg:p-16 text-white">
                <div className="max-w-screen text-left mt-52 mb-64">
                    <h1 className="font-['Instrument Sans'] text-[90px] font-extrabold italic leading-tight mb-6 text-white">
                        Smarter Recycling, <br />Stronger Blue Economy
                    </h1>
                    <p className="font-['Poppins'] text-[30px] leading-relaxed mb-10 text-white">
                        Powered by <strong className="font-bold">Containder</strong>, <strong className="font-bold">Smash.id</strong> and <strong className="font-bold">Popsea</strong> to build a transparent, <br />data driven PET recycling ecosystem in Bali.
                    </p>
                    <button className="flex items-center justify-center px-8 py-3 bg-[#EBF4F6] text-[#37B7C3] font-['Poppins'] font-semibold rounded-full shadow-lg hover:bg-[#EBF4F6] transition-colors duration-300">
                        Learn More
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 ml-2"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 0 010 1.414l-5 5a1 0 01-1.414 0z"
                                clipRule="evenodd"
                            />
                            <path
                                fillRule="evenodd"
                                d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 0 011.414-1.414l5 5a1 0 010 1.414l-5 5a1 0 01-1.414 0z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 max-w-7xl mx-auto pt-10 pb-20">
                    <InfoBox
                        value="45.560"
                        description="Tons Unmanaged Plastic Waste / Year"
                    />
                    <InfoBox
                        value="12%"
                        description="Waste Traceability Percentage"
                    />
                    <InfoBox
                        value="71"
                        description="Total Number of Waste Banks"
                    />
                    <InfoBox
                        value="18"
                        description="Active Waste Banks"
                    />
                    <InfoBox
                        value="53"
                        description="Inactive Waste Banks"
                    />
                </div>
            </div>
        </div>
    );
};

const InfoBox = ({ value, description }) => {
    return (
        <div className="bg-[#EBF4F6] bg-opacity-30 backdrop-filter backdrop-blur-lg rounded-[5px] p-6 text-center border shadow-lg h-[185px]" style={{ boxShadow: '4px 4px 8px rgba(0, 0, 0, 0.2)' }}>
            <h3 className="font-['Instrument Sans'] text-4xl md:text-5xl font-bold text-[#071952] mb-2">
                {value}
            </h3>
            <p className="font-['Poppins'] text-base md:text-lg opacity-90 text-[#088395]">
                {description}
            </p>
        </div>
    );
};

export default Welcome;
