import React from 'react';
import BottleBackground from '../assets/Bottle.png';
import SeachainLogo from '../assets/seachain.png';

const Welcome = () => {
    return (
        <>
            <style jsx>{`
        @keyframes fadeInSlideUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-welcome-element {
          animation: fadeInSlideUp 0.8s ease-out forwards; /* Durasi lebih cepat */
          opacity: 0; /* Pastikan elemen tersembunyi sebelum animasi */
        }

        /* Penundaan untuk setiap elemen */
        .animate-welcome-logo {
          animation-delay: 0.2s; /* Logo muncul lebih awal */
        }
        .animate-welcome-denpasar {
          animation-delay: 0.4s;
        }
        .animate-welcome-heading {
          animation-delay: 0.6s;
        }
        .animate-welcome-subheading {
          animation-delay: 0.8s;
        }
        .animate-welcome-button {
          animation-delay: 1.0s;
        }
      `}</style>
            <div
                className="relative flex flex-col min-h-screen w-screen text-white text-center overflow-hidden"
                style={{
                    backgroundImage: `url(${BottleBackground})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                {/* Gradient Overlay */}
                <div
                    className="absolute inset-0 bg-gradient-to-b from-transparent via-[#03292F]/80 to-[#088395] z-10"
                ></div>

                {/* Kontainer Konten Utama*/}
                <div className="relative z-20 flex flex-col w-full h-full px-6 py-6 md:px-10 md:py-10 lg:px-14 lg:py-14 flex-grow">

                    {/* Header dengan Logo dan Teks Denpasar */}
                    <header className="w-full flex justify-between items-center pb-8 md:pb-12">
                        <div className="animate-welcome-element animate-welcome-logo"> {/* <-- Animasi Logo */}
                            <img
                                src={SeachainLogo}
                                alt="Seachain Logo"
                                className="h-10 md:h-12 object-contain ml-0 lg:ml-36"
                            />
                        </div>
                        <div className="font-['Instrument_Sans'] text-base md:text-xl lg:text-3xl font-bold text-[#EBF4F6] mr-0 lg:mr-36 animate-welcome-element animate-welcome-denpasar"> {/* <-- Animasi Denpasar */}
                            Denpasar
                        </div>
                    </header>

                    {/* Main Content (Judul, Sub-judul, dan Tombol) */}
                    <main className="flex flex-col justify-center items-center flex-grow px-4 text-center">
                        <h1
                            className="font-['Instrument_Sans'] text-[#EBF4F6] font-bold text-3xl md:text-5xl lg:text-6xl leading-tight mb-4 md:mb-6 lg:mb-8 drop-shadow-lg animate-welcome-element animate-welcome-heading" // <-- Animasi Judul
                        >
                            Track Every Bottle, <br />
                            Grow The Blue Economy
                        </h1>
                        <p
                            className="font-['Instrument_Sans'] text-sm md:text-lg lg:text-xl max-w-xl md:max-w-2xl leading-relaxed drop-shadow-md opacity-90 mb-8 md:mb-10 animate-welcome-element animate-welcome-subheading" // <-- Animasi Sub-judul
                        >
                            SEACHAIN has successfully piloted in Bali and is ready to grow plastic removal efforts worldwide
                        </p>

                        {/* Tombol "Save Ocean" */}
                        <button
                            className="bg-white text-[#088395] font-['Instrument_Sans'] font-bold py-3 px-8 md:py-4 md:px-10 rounded-full shadow-md hover:bg-gray-100 transition-colors duration-300 animate-welcome-element animate-welcome-button" // <-- Animasi Tombol
                        >
                            Save Ocean
                        </button>
                    </main>
                </div>
            </div>
        </>
    );
};

export default Welcome;