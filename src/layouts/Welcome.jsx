// layouts/Welcome.jsx
import React from 'react';
import Bottleblur from '../assets/Bottleblur.png';

const Welcome = () => {
    return (
        <div id="home" className="relative w-screen min-h-screen md:min-h-[120vh] bg-[#EBF4F6] overflow-hidden">
            <img
                src={Bottleblur}
                alt="Bottle Blur Background"
                className="absolute inset-0 w-full h-full object-cover z-0"
                style={{ transform: 'translateY(-15%)' }}
            />
            <div className="relative inset-0 bg-black z-0"></div>
            <div className="relative z-10 px-4 md:px-8 lg:px-12 text-white flex flex-col justify-between h-full">
                <div className="max-w-full text-left mt-24 md:mt-36 lg:mt-48 mb-12 md:mb-20 lg:mb-28">
                    {/* Ukuran font yang lebih kecil untuk layar sangat kecil */}
                    <h1 className="font-['Instrument Sans'] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-[90px] font-extrabold italic leading-tight mb-3 md:mb-5 text-white">
                        Smarter Recycling, <br />Stronger Blue Economy
                    </h1>
                    {/* Ukuran font yang lebih kecil untuk layar sangat kecil */}
                    <p className="font-['Poppins'] text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-[30px] leading-relaxed mb-4 md:mb-8 text-white">
                        Powered by <strong className="font-bold">Containder</strong>, <strong className="font-bold">Smash.id</strong> and <strong className="font-bold">Popsea</strong> to build a transparent, <br className="hidden md:block"/>data driven PET recycling ecosystem in Bali.
                    </p>
                    <button className="flex items-center justify-center px-5 py-2 md:px-7 md:py-3 bg-[#EBF4F6] text-[#37B7C3] font-['Poppins'] font-semibold rounded-full shadow-lg hover:bg-[#EBF4F6] transition-colors duration-300 text-sm md:text-base">
                        Learn More
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 ml-1 md:ml-2"
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
                {/* Menyesuaikan grid untuk InfoBox agar lebih responsif */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-6 max-w-7xl mx-auto pt-8 pb-8 md:pb-16"> {/* Mengurangi gap dan padding */}
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
        <div className="bg-[#EBF4F6] bg-opacity-30 backdrop-filter backdrop-blur-lg rounded-[5px] p-2 md:p-3 text-center border shadow-lg h-[120px] sm:h-[140px] md:h-[160px] lg:h-[185px] flex flex-col justify-center items-center" style={{ boxShadow: '4px 4px 8px rgba(0, 0, 0, 0.2)' }}>
            <h3 className="font-['Instrument Sans'] text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-[#071952] mb-1">
                {value}
            </h3>
            <p className="font-['Poppins'] text-xs md:text-sm opacity-90 text-[#088395]">
                {description}
            </p>
        </div>
    );
};

export default Welcome;
