// src/layouts/About.jsx
import React from 'react';
import Plastic from '../assets/Plastic.png';     // Gambar tumpukan plastik
import Balimaps from '../assets/Balimaps.png';   // Gambar peta Bali
import DenpasarImage from '../assets/Denpasar.png'; // Gambar pura (Tanah Lot)

// Import logo untuk Collaboration Group
import ContainderLogo from '../assets/containder.png';
import SmashidLogo from '../assets/smashid.png';
import PopseaLogo from '../assets/popsea.png';

const Collaboration = () => {
    return (
        <div className="bg-[#EBF4F6] py-16 px-8 md:px-16 lg:px-24">
            {/* About Us Section */}
            <div className="max-w-7xl mx-auto mb-20">
                <h2 className="text-4xl md:text-5xl font-extrabold text-[#088395] text-center mb-12 font-['Instrument Sans']">
                    About Us
                </h2>
                <div className="flex flex-col md:flex-row items-start gap-12">
                    {/* Left Text Content */}
                    <div className="md:w-3/5 text-[#088395] font-['Poppins'] text-[28px] md:text-[24px] leading-relaxed">
                        <p className="mb-6">
                            <strong>SEACHAIN</strong> stands for <strong>smarter recycling</strong> and a <strong>stronger blue
                                economy</strong>, creating real impact in <strong>Denpasar, Bali.</strong>
                        </p>
                        <p className="mb-6">
                            Each year, over <strong>45.560 tonnes</strong> of <strong>plastic waste in Bali</strong> go
                            unmanaged, putting at risk it’s rich marine biodiversity
                            including 805 reef fish species, 7 cetacean species, and
                            carbon rich seagrass ecosystems.
                        </p>
                        <p>
                            With only <strong>18 out of 71 waste banks</strong> currently active, just <strong>12 percent</strong>
                            of Bali’s waste is traceable, and <strong>SEACHAIN</strong> is working to close this
                            gap through <strong>innovative recycling solutions</strong> that <strong>protect the
                                ocean</strong> and <strong>empower local communities</strong>.
                        </p>
                    </div>

                    {/* Right Images Section - DIREVISI untuk meniru tata letak gambar */}
                    <div className="md:w-2/5 relative flex flex-col items-center justify-center h-[400px] md:h-[500px]">
                        {/* Gambar Plastic.png - posisi kanan atas */}
                        <img
                            src={Plastic}
                            alt="Plastic Waste"
                            className="relative top-1/4 left-1/2 -translate-x-1/4 w-4/5 md:w-full max-w-md h-64 object-contain z-10"
                        />
                        {/* Gambar Denpasar.png (Pura) - posisi kiri tengah */}
                        <img
                            src={DenpasarImage}
                            alt="Denpasar Scenery"
                            className="relative bottom-[52px] right-1/6 w-3/5 md:w-2/3 max-w-sm h-64 object-contain z-20"
                        />
                        <img
                            src={Balimaps}
                            alt="Bali Map with Denpasar"
                            className="relative bottom-1/3 left-[200px] -translate-x-1/4 w-4/5 md:w-full max-w-md h-64 object-contain z-30"
                        />
                        {/* Teks Lokasi - di bawah peta */}
                        <div className="absolute bottom-[-12px] right-[90px] flex items-center text-[#088395] font-['Poppins'] text-lg font-semibold whitespace-nowrap">
                            <svg
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-6 h-6 fill-current mr-2"
                            >
                                <path d="M11.3856 23.789C11.3856 23.789 11.3861 23.7894 12 23L12.6139 23.7894C12.2528 24.0702 11.7467 24.0699 11.3856 23.789Z" />
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M12 6C9.79086 6 8 7.79086 8 10C8 12.2091 9.79086 14 12 14C14.2091 14 16 12.2091 16 10C16 7.79086 14.2091 6 12 6ZM10 10C10 8.89543 10.8954 8 12 8C13.1046 8 14 8.89543 14 10C14 11.1046 13.1046 12 12 12C10.8954 12 10 11.1046 10 10Z"
                                />
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M11.3856 23.789L12 23C12.6139 23.7894 12.615 23.7885 12.615 23.7885L12.6169 23.7871L12.6231 23.7822L12.645 23.765C12.6638 23.7501 12.6909 23.7287 12.7258 23.7008C12.7954 23.6451 12.8961 23.5637 13.0233 23.4587C13.2776 23.2488 13.6385 22.944 14.0706 22.5599C14.9334 21.793 16.0867 20.7041 17.2433 19.419C18.397 18.1371 19.5731 16.639 20.4653 15.0528C21.3524 13.4758 22 11.7393 22 10C22 7.34784 20.9464 4.8043 19.0711 2.92893C17.1957 1.05357 14.6522 0 12 0C9.34784 0 6.8043 1.05357 4.92893 2.92893C3.05357 4.8043 2 7.34784 2 10C2 11.7393 2.64762 13.4758 3.53467 15.0528C4.42693 16.639 5.60303 18.1371 6.75671 19.419C7.91329 20.7041 9.06662 21.793 9.92939 22.5599C10.3615 22.944 10.7224 23.2488 10.9767 23.4587C11.1039 23.5637 11.2046 23.6451 11.2742 23.7008C11.3091 23.7287 11.3362 23.7501 11.355 23.765L11.3769 23.7822L11.3831 23.7871L11.3856 23.789ZM6.34315 4.34315C7.84344 2.84285 9.87827 2 12 2C14.1217 2 16.1566 2.84285 17.6569 4.34315C19.1571 5.84344 20 7.87827 20 10C20 11.2607 19.5226 12.6492 18.7222 14.0722C17.9269 15.486 16.853 16.8629 15.7567 18.081C14.6633 19.2959 13.5666 20.332 12.7419 21.0651C12.4576 21.3178 12.2065 21.5337 12 21.7078C11.7935 21.5337 11.5424 21.3178 11.2581 21.0651C10.4334 20.332 9.33671 19.2959 8.24329 18.081C7.14697 16.8629 6.07307 15.486 5.27783 14.0722C4.47738 12.6492 4 11.2607 4 10C4 7.87827 4.84285 5.84344 6.34315 4.34315Z"
                                />
                            </svg>
                            <span>Denpasar, Bali</span>
                        </div>

                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-extrabold text-[#088395] mb-12 font-['Instrument Sans']">
                    Collaboration Group
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3">
                    {/* Containder Box */}
                    <div className="relative bg-white flex flex-col items-center justify-center h-[201px] mt-[25.5px] overflow-visible after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-3 after:shadow-[0_8px_10px_0_#088395]">
                        <img src={ContainderLogo} alt="Containder Logo" className="h-32 mb-4 object-contain" />
                        <p className="text-[#088395] font-['Poppins'] text-[20px] font-semibold text-center">
                            Local plastic collection
                        </p>
                    </div>

                    {/* Smash.id Box */}
                    <div className="relative bg-white flex flex-col items-center justify-center h-[252px] overflow-visible after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-3 after:shadow-[0_8px_10px_0_#088395]">
                        <img src={SmashidLogo} alt="Smash.id Logo" className="h-38 mb-4 object-contain" />
                        <p className="text-[#088395] font-['Poppins'] text-[20px] font-semibold text-center">
                            Provides data tools
                        </p>
                    </div>

                    {/* Popsea Box */}
                    <div className="relative bg-white flex flex-col items-center justify-center h-[201px] mt-[25.5px] overflow-visible after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-3 after:shadow-[0_8px_10px_0_#088395]">
                        <img src={PopseaLogo} alt="Popsea Logo" className="h-28 mb-4 object-contain" />
                        <p className="text-[#088395] font-['Poppins'] text-[20px] font-semibold text-center">
                            Recycle the plastic bottle
                        </p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Collaboration;
