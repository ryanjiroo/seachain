import React from 'react';

import EmpowerIcon from '../assets/empowering_waste_workers.png';
import PreventingIcon from '../assets/preventing_plastic_leakage.png';
import EcosystemIcon from '../assets/protecting_ecosystems.png';

import preventingPlasticImage from '../assets/Preventing.png';
import empoweringWorkersImage from '../assets/Empower.png';
import protectingEcosystemsImage from '../assets/ecoxyxtem.png';

const Impact = () => {
    return (
        <div id="impact" className="font-['Poppins'] bg-[#088395] text-[#071952]">

            {/* Header */}
            <section className="text-center py-10 md:py-16">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-['Instrument Sans'] font-bold text-white">Expected Impact</h1>
            </section>

            {/* Impact Cards */}
            <section className="max-w-7xl mx-auto px-4 md:px-6 lg:px-10 flex flex-col lg:flex-row justify-center items-center lg:items-stretch gap-8 md:gap-10 mb-16 md:mb-24">
                {/* Card Template */}
                {[
                    {
                        title: 'Preventing Plastic Leakage',
                        text: 'Real-time tracking supports waste banks and helps prevent plastic leakage into Bali’s environment.',
                        img: preventingPlasticImage,
                        icon: PreventingIcon,
                    },
                    {
                        title: 'Empowering Waste Workers',
                        text: 'Digital tools give waste pickers visibility, fair recognition, and access to better opportunities.',
                        img: empoweringWorkersImage,
                        icon: EmpowerIcon,
                    },
                    {
                        title: 'Protecting Ecosystems',
                        text: 'Early plastic interception and community action protect ecosystems and reduce pollution.',
                        img: protectingEcosystemsImage,
                        icon: EcosystemIcon,
                    },
                ].map((card, idx) => (
                    <div key={idx} className="bg-white shadow-[0_10px_20px_rgba(0,0,0,0.2)] rounded-2xl w-full max-w-xs sm:max-w-sm flex flex-col items-center text-center overflow-hidden">
                        <div className="relative w-full h-48 md:h-56">
                            <img src={card.img} alt={card.title} className="w-full h-full object-cover" />
                            <div className="absolute -bottom-4 md:-bottom-5 left-1/2 transform -translate-x-1/2">
                                <img src={card.icon} alt="Icon" className="w-12 h-12 md:w-14 md:h-14" />
                            </div>
                        </div>
                        <div className="pt-8 md:pt-10 px-4 md:px-6 pb-6 md:pb-8">
                            <h3 className="text-lg md:text-xl font-['Poppins'] font-bold mb-2 md:mb-3">{card.title}</h3>
                            <p className="text-sm md:text-base font-['Poppins'] text-[#088395] leading-relaxed">{card.text}</p>
                        </div>
                    </div>
                ))}
            </section>

            {/* CTA */}
            <section className="bg-[#EBF4F6] text-center py-10 md:py-16 px-4 md:px-6">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-['Instrument Sans'] font-bold mb-4 md:mb-6">Ready to Create Real Impact?</h2>
                <p className="text-base md:text-lg lg:text-xl font-['Poppins'] italic max-w-2xl mx-auto text-[#071952] mb-6 md:mb-8 leading-relaxed">
                    “Let’s build a smarter, traceable recycling system together for the ocean, for the people, and for the future!”
                </p>
                <hr className="w-20 md:w-24 lg:w-32 border-t-2 md:border-t-4 border-[#088395] mx-auto mb-8 md:mb-10" />
                <button className="bg-[#071952] hover:bg-[#062340] text-white font-semibold py-3 px-8 md:py-4 md:px-10 rounded-full text-base md:text-lg transition-all duration-300">
                    Join the Movement
                </button>
            </section>
        </div>
    );
};

export default Impact;