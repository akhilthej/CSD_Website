// HamburgerMenu.js
import React, { useState } from "react";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative z-10">
      <button
        className="text-3xl md:hidden"
        onClick={toggleMenu}
      >
        ☰
      </button>
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-900 text-white p-4">
          <div className="flex flex-col">
            <a href="#about" className="text-2xl my-2">
              About
            </a>
            <a href="#contact" className="text-2xl my-2">
              Contact Us
            </a>
            <div className="relative group">
              <span className="text-2xl my-2 cursor-pointer group-hover:text-blue-400">
                Services
              </span>
              <ul className="hidden absolute left-10 top-0 bg-gray-900 p-2 text-white">
                <li>
                  <a href="#web" className="my-1">
                    Web
                  </a>
                </li>
                <li>
                  <a href="#tv" className="my-1">
                    TV
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
