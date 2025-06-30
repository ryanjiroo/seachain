import React, { useState, useEffect } from 'react';

// Import images
import Bottle3 from '../assets/Bottle3.png';
import containerLogo from '../assets/containder.png';
import smashidLogo from '../assets/smashid.png';
import popseaLogo from '../assets/popsea.png';
import smashidTech from '../assets/smashidTech.png';
import popseaTech from '../assets/popseaTech.png';

// Data untuk setiap slide
const slides = [
    {
        id: 0,
        logo: containerLogo,
        slogan: 'Empowering Waste Banks and Local Jobs',
        techImage: null, // Container does not have a tech image in the provided designs
        ctaText: 'Container empowers grassroots to boost plastic waste collection.',
    },
    {
        id: 1,
        logo: smashidLogo,
        slogan: 'Data-Driven Waste Management',
        techImage: smashidTech,
        ctaText: 'Smash.id manages waste collectors with real-time data & traceability.',
    },
    {
        id: 2,
        logo: popseaLogo,
        slogan: 'Verified Recycling, Trusted Globally',
        techImage: popseaTech, // This is the image of plastic waste and products from image SOLUTION (2).jpg
        ctaText: 'Popsea turns plastic waste into high-value recycled PET for the global market.',
    },
];

const Solution = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const slideInterval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        }, 5000); // Auto-slide every 5 seconds

        return () => clearInterval(slideInterval); // Cleanup on component unmount
    }, []);

    const goToNextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    };

    const goToPrevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
    };

    const currentSlideData = slides[currentSlide];

    return (
        <div id="solution" className="font-sans text-gray-800">
            {/* Top Section - SEACHAIN connects... */}
            <section
                className="relative h-[400px] md:h-[550px] lg:h-[650px] flex items-center justify-center text-center text-white overflow-hidden bg-cover bg-center px-4"
                style={{ backgroundImage: `url(${Bottle3})` }}
            >
                <div className="absolute inset-0 bg-[#088395] opacity-65 z-10"></div>
                <div className="relative z-20 max-w-4xl mx-auto">
                    {/* Tambahan judul di sini */}
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-['Instrument Sans'] font-bold mb-4 md:mb-8">Our Solution</h1>
                    {/* Akhir tambahan judul */}
                    <p className="text-base md:text-xl lg:text-2xl font-['Poppins'] italic leading-relaxed font-medium">
                        SEACHAIN connects local waste banks, digital traceability, and ethical recycling into
                        one circular system. It ensures every plastic bottle is collected, tracked, and
                        transformed with impact.
                    </p>
                </div>
            </section>

            {/* Dynamic Slide Section (Popsea, Smash.id, Container) */}
            <section className="bg-gray-50 py-10 md:py-16 px-4 md:px-8 relative min-h-[500px] md:min-h-[600px] flex items-center justify-center">
                <div className="container mx-auto flex flex-col items-center relative w-full">
                    {/* Left Arrow */}
                    <button
                        onClick={goToPrevSlide}
                        className="absolute left-0 md:left-4 lg:left-8 top-1/2 -translate-y-1/2 bg-transparent p-2 md:p-3 rounded-full hover:bg-gray-200 focus:outline-none z-30"
                    >
                        <i className="fas fa-chevron-left text-gray-700 text-2xl md:text-3xl"></i>
                    </button>

                    {/* Slide Content */}
                    <div className="w-full max-w-sm md:max-w-xl lg:max-w-5xl p-6 md:p-8 lg:p-12 flex flex-col items-center text-center transition-opacity duration-700 ease-in-out">
                        <img src={currentSlideData.logo} alt={`${currentSlideData.title} Logo`} className="w-36 md:w-48 lg:w-56 h-auto mb-4 md:mb-6" />
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-1 md:mb-2">{currentSlideData.title}</h2>
                        <p className="text-base md:text-lg lg:text-xl font-['Poppins'] text-[#071952] italic font-medium mb-6 md:mb-8">
                            {currentSlideData.slogan}
                        </p>

                        {currentSlideData.techImage && (
                            <div className="my-4 md:my-8 w-full max-w-md md:max-w-xl lg:max-w-2xl">
                                <img src={currentSlideData.techImage} alt={`${currentSlideData.title} Technology`} className="max-w-full h-auto rounded-lg mx-auto" />
                            </div>
                        )}
                        <hr className="w-32 md:w-48 border-t-2 md:border-t-4 border-[#088395] mt-4 md:mt-6 mb-2 md:mb-4" />
                        <p className="text-lg md:text-xl lg:text-2xl font-['Poppins'] text-[#088395] font-semibold mt-4 md:mt-6">
                            {currentSlideData.ctaText}
                        </p>


                        {/* Dot Indicators */}
                        <div className="flex justify-center mt-8 md:mt-12">
                            {slides.map((_, index) => (
                                <button
                                    key={index}
                                    className={`h-2 w-2 md:h-3 md:w-3 rounded-full mx-1 md:mx-2 transition-all duration-300 ${currentSlide === index ? 'bg-blue-600 scale-125' : 'bg-gray-400'
                                        }`}
                                    onClick={() => setCurrentSlide(index)}
                                ></button>
                            ))}
                        </div>
                    </div>

                    {/* Right Arrow */}
                    <button
                        onClick={goToNextSlide}
                        className="absolute right-0 md:right-4 lg:right-8 top-1/2 -translate-y-1/2 bg-transparent p-2 md:p-3 rounded-full hover:bg-gray-200 focus:outline-none z-30"
                    >
                        <i className="fas fa-chevron-right text-gray-700 text-2xl md:text-3xl"></i>
                    </button>
                </div>
            </section>
        </div>
    );
};

export default Solution;