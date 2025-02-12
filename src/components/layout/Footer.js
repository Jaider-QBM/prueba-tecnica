"use client"
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="w-full bg-gray-800 text-white">
      {/* Desktop Header */}
      <div className="hidden lg:flex justify-between items-center p-4">
        <div className="text-lg font-semibold">Mi Aplicación</div>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>

      {/* Mobile Header */}
      <div className="lg:hidden flex justify-between items-center p-4">
        <div className="text-lg font-semibold">Mi Aplicación</div>
        <button onClick={toggleMenu} className="text-white">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Lateral Menu (Mobile) */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
          <div className="bg-white w-64 h-full fixed left-0 top-0 p-6 shadow-lg transition-transform duration-300">
            {/* Botón de Cerrar (X) */}
            <button onClick={toggleMenu} className="absolute top-4 right-4 text-black">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <nav className="mt-10">
              <ul className="space-y-4 text-black">
                <li><a href="#home" className="block">Home</a></li>
                <li><a href="#about" className="block">About</a></li>
                <li><a href="#services" className="block">Services</a></li>
                <li><a href="#contact" className="block">Contact</a></li>
              </ul>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
