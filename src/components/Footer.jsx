import React from 'react';
import logo from '../assets/seachain.png'; 

function Footer() {
  return (
    <footer className="bg-[#0C2B5B] text-white py-10 px-4 md:px-8 lg:px-16">
      <div className="container mx-auto flex flex-col md:flex-row justify-between mb-8">
        {/* Left Section */}
        <div className="flex flex-col mb-8 md:mb-0 md:w-1/3 lg:w-1/4">
          <img src={logo} alt="SEACHAIN Logo" className="w-36 h-auto mb-4" />
          <p className="text-base font-['Poppins'] text-[#A6B1C3]">Smarter Recycling, Stronger Blue Economy</p>
        </div>

        {/* Middle Section - Navigation and Contact */}
        <div className="flex flex-col md:flex-row md:w-2/3 lg:w-1/2 justify-around">
          {/* About Section */}
          <div className="mb-8 md:mb-0">
            <h3 className="text-xl font-['Poppins'] font-semibold mb-4">About</h3>
            <ul>
              <li className="mb-2"><a href="https://www.preventedoceanplastic.com/category/pop-south-east-asia/" className="font-['Poppins'] hover:underline">POPSEA</a></li>
              <li className="mb-2"><a href="https://containder.com/home" className="font-['Poppins'] hover:underline">Smash.id</a></li>
              <li className="mb-2"><a href="https://www.smash.id/" className="font-['Poppins'] hover:underline">Container</a></li>
            </ul>
          </div>

          {/* Location Section */}
          <div className="mb-8 md:mb-0">
            <h3 className="text-xl font-['Poppins'] font-semibold mb-4">Location</h3>
            <p className="font-['Poppins']">Denpasar, Bali</p>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-xl font-['Poppins'] font-semibold mb-4">Contact</h3>
            <p className="mb-2 font-['Poppins']"><a href="https://wa.me/628112338817" className="hover:underline">+62 811-2338-817</a></p>
          </div>
        </div>
      </div>

      {/* Bottom Section - Social and Copyright */}
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center pt-8 border-t border-[#34495E]">
        <div className="flex space-x-6 mb-4 md:mb-0">
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-white text-2xl hover:opacity-80">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-white text-2xl hover:opacity-80">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-white text-2xl hover:opacity-80">
            <i className="fab fa-facebook"></i>
          </a>
        </div>
        <p className="text-sm font-['Poppins'] text-[#A6B1C3]">&copy; 2025 SEACHAIN. All right reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;