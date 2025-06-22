import React, { useEffect, useRef, useState } from 'react';
import ContainderLogo from '../assets/containder.png';
import SmashidLogo from '../assets/smashid.png';
import PopseaLogo from '../assets/popsea.png';

const Collaboration = () => {
    const [isVisible, setIsVisible] = useState(false);
    const domRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            });
        }, {
            rootMargin: '0px',
            threshold: 0.1
        });

        observer.observe(domRef.current);

        return () => observer.disconnect();
    }, []);

    return (
        <>
            <style jsx>{`
        /* Animasi Gelombang Laut */
        @keyframes wave-animation {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
        .animate-wave { animation: wave-animation 10s linear infinite; }

        @keyframes wave-animation-reverse {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(0); }
        }
        .animate-wave-reverse { animation: wave-animation-reverse 10s linear infinite; }

        @keyframes wave-animation-slow {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
        .animate-wave-slow { animation: wave-animation-slow 15s linear infinite; }

        /* Animasi Mengambang di Air */
        @keyframes float-on-water {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .animate-float { animation: float-on-water 8s ease-in-out infinite; }

        /* Animasi On-Scroll untuk Collaboration */
        .reveal-on-scroll {
          opacity: 0;
          transform: translateY(50px); /* Mulai dari bawah */
          transition: opacity 1s ease-out, transform 1s ease-out; /* Durasi dan easing */
        }
        .reveal-on-scroll.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* Penundaan untuk elemen di Collaboration */
        .collaboration-heading-delay {
          transition-delay: 0s; /* Judul muncul tanpa penundaan ekstra */
        }
        .collaboration-card-delay {
          transition-delay: 0.3s; /* Card muncul setelah judul */
        }
      `}</style>
            <div
                ref={domRef}
                // Kelas dasar reveal-on-scroll diterapkan di sini, is-visible ditambahkan saat terlihat
                className={`relative flex flex-col items-center justify-center min-h-screen bg-[#088395] py-16 px-4 sm:px-8 lg:px-12 overflow-hidden`}
            >
                <h2
                    className={`font-['Instrument_Sans'] text-[#EBF4F6] text-center text-4xl sm:text-5xl lg:text-6xl font-bold mb-12 md:mb-20 drop-shadow-md z-10 relative reveal-on-scroll collaboration-heading-delay ${isVisible ? 'is-visible' : ''}`} // <-- Animasi Judul
                >
                    Our Collaboration Group
                </h2>

                <div
                    className={`bg-white rounded-2xl shadow-xl p-8 sm:p-12 md:p-16 lg:p-20 max-w-5xl w-full mx-auto z-10 relative animate-float reveal-on-scroll collaboration-card-delay ${isVisible ? 'is-visible' : ''}`} // <-- Animasi Card
                >
                    <div className="flex flex-col md:flex-row md:justify-center md:gap-x-8 lg:justify-around lg:space-x-12 items-center md:items-start gap-y-8 md:gap-y-0 flex-wrap-reverse lg:flex-nowrap">

                        <div className="flex flex-col items-center text-center w-full sm:w-1/2 md:w-1/3 lg:max-w-[250px]">
                            <img
                                src={ContainderLogo}
                                alt="Containder Logo"
                                className="h-32 sm:h-36 md:h-40 lg:h-40 w-auto mb-4 lg:mb-6 object-contain"
                            />
                            <p className="font-['Instrument_Sans'] text-[#088395] text-base sm:text-lg lg:text-[28px] text-center leading-relaxed px-2">
                                Local plastic collection
                            </p>
                        </div>

                        <div className="flex flex-col items-center text-center w-full sm:w-1/2 md:w-1/3 lg:max-w-[250px]">
                            <img
                                src={SmashidLogo}
                                alt="Smashid Logo"
                                className="h-32 sm:h-36 md:h-40 lg:h-40 w-auto mb-4 lg:mb-6 object-contain"
                            />
                            <p className="font-['Instrument_Sans'] text-[#088395] text-base sm:text-lg lg:text-[28px] text-center leading-relaxed px-2">
                                Provides data tools
                            </p>
                        </div>

                        <div className="flex flex-col items-center text-center w-full sm:w-1/2 md:w-1/3 lg:max-w-[250px]">
                            <img
                                src={PopseaLogo}
                                alt="Popsea Logo"
                                className="h-32 sm:h-36 md:h-40 lg:h-40 w-auto mb-4 lg:mb-6 object-contain"
                            />
                            <p className="font-['Instrument_Sans'] text-[#088395] text-base sm:text-lg lg:text-[28px] text-center leading-relaxed px-2">
                                Recycle the plastic bottle
                            </p>
                        </div>

                    </div>
                </div>

                {/* Animasi Gelombang Laut di Bagian Bawah */}
                <div className="absolute bottom-0 left-0 w-full h-40 overflow-hidden z-0">
                    <div className="absolute bottom-0 left-0 w-[200%] h-full">
                        <svg className="w-full h-full animate-wave" viewBox="0 0 1000 100" preserveAspectRatio="none">
                            <path fill="rgba(255, 255, 255, 0.5)" d="M0,50 C150,100 350,0 500,50 C650,100 850,0 1000,50 L1000,100 L0,100 Z"></path>
                        </svg>
                    </div>
                    <div className="absolute bottom-0 left-0 w-[200%] h-full -mb-2">
                        <svg className="w-full h-full animate-wave-reverse" viewBox="0 0 1000 100" preserveAspectRatio="none">
                            <path fill="rgba(255, 255, 255, 0.6)" d="M0,60 C150,110 350,10 500,60 C650,110 850,10 1000,60 L1000,100 L0,100 Z"></path>
                        </svg>
                    </div>
                    <div className="absolute bottom-0 left-0 w-[200%] h-full -mb-4">
                        <svg className="w-full h-full animate-wave-slow" viewBox="0 0 1000 100" preserveAspectRatio="none">
                            <path fill="rgba(255, 255, 255, 0.7)" d="M0,70 C150,120 350,20 500,70 C650,120 850,20 1000,70 L1000,100 L0,100 Z"></path>
                        </svg>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Collaboration;