import React, { useState, useEffect } from "react";
import NavbarLogo from "./csdv2Logonavbar.svg";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    let closeTimeout;
    if (isOpen) {
      closeTimeout = setTimeout(() => {
        closeMenu();
      }, 7000); // Close menu after 17 seconds
    }

    return () => {
      clearTimeout(closeTimeout);
    };
  }, [isOpen]);

  return (
    <div className="z-10 sticky top-0 bg-white px-5">
      <div className="flex items-center py-2">
        <img
          className="h-auto w-40 sm:hidden"
          src={NavbarLogo}
          alt="csd_logo"
        />
        <button className="text-3xl sm:hidden ml-auto" onClick={toggleMenu}>
          ☰
        </button>
      </div>
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-white text-black p-4 flex flex-col justify-center items-center">
          <button
            className="text-2xl absolute top-2 right-2"
            onClick={closeMenu}
          >
            ✕
          </button>
          <img
            className="pl-2 h-auto w-44 lg:w-52"
            src={NavbarLogo}
            alt="csd_logo"
          />
          <div className="flex flex-col mt-6">
            <a href="/aboutus" className="text-2xl my-2" onClick={closeMenu}>
              About
            </a>
            <a href="/contactus" className="text-2xl my-2" onClick={closeMenu}>
              Contact Us
            </a>
            <a href="/services" className="text-2xl my-2" onClick={closeMenu}>
              Services
            </a>
            <a href="/clients" className="text-2xl my-2" onClick={closeMenu}>
              Clients
            </a>
            <a href="/blogs" className="text-2xl my-2" onClick={closeMenu}>
              Blogs
            </a>
            <a href="/reviews" className="text-2xl my-2" onClick={closeMenu}>
              Reviews
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
