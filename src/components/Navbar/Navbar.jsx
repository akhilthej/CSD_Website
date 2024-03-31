import React from 'react';
import { Link } from 'react-router-dom';
import CsdLogo from './csdv2Logo.svg';

const Navbar = () => {
  return (
    <nav>
      <div className="w-full fixed bottom-0 z-50 px-10">
        <div className="w-full flex flex-row items-center justify-between m-auto px-[10px]">
          {/* Left Column - Centered Logo */}
          <Link to="/" className="h-auto w-auto py-4 flex flex-row items-center">
            <img
              src={CsdLogo}
              alt="csdlogo"
              width={150}
              height={150}
              className="cursor-pointer"
            />
          </Link>

          {/* Center Column - Title */}
          <div className="flex-1 text-center"></div>
        </div>
      </div>

      <>
        <link
          rel="stylesheet"
          href="https://cdn.materialdesignicons.com/6.5.95/css/materialdesignicons.min.css"
        />

        {/* Container */}
        <div className="flex items-center fixed top-0 z-10 w-full justify-center">
          <div className="flex flex-col">
            <div className=" px-7 py-5 mx-auto rounded-2xl ">
              {/* Navigation Bar */}
              <div className="px-5 pt-3 bg-black/50 backdrop-blur-xl shadow-lg rounded-2xl">
                <div className="flex flex-row space-x-3">
                  {/* Item #1 */}
                  <div className="flex group">
                    <Link to="/services" className="p-3 text-white hover:text-yellow-500 flex flex-col items-center">
                      {/* Icon */}
                      <i
                        className="mdi mdi-layers-outline mdi-24px mx-1 text-white group-hover:text-yellow-500
                  transition-color duration-200"
                      />
                      {/* Text */}
                      <span className="text-xs mb-2 transition-all duration-200">
                        Services
                      </span>
                      {/* Focus Dot */}
                      <span
                        className="h-2 w-2 rounded-full group-hover:bg-yellow-500
                  transition-all duration-150 delay-100"
                      />
                    </Link>
                  </div>

                  {/* Item #2 */}
                  <div className="flex group">
                    <Link to="/blog" className="p-3 text-white hover:text-yellow-500 flex flex-col items-center">
                      {/* Icon */}
                      <i
                        className="mdi mdi-compass-outline mdi-24px mx-1 text-white group-hover:text-yellow-500
                  transition-color duration-200"
                      />
                      {/* Text */}
                      <span className="text-xs mb-2 transition-all duration-200">
                        Explore
                      </span>
                      {/* Focus Dot */}
                      <span
                        className="h-2 w-2 rounded-full group-hover:bg-yellow-500
                  transition-all duration-150 delay-100"
                      />
                    </Link>
                  </div>

                  {/* Item #3 Active */}
                  <div className="flex group">
                    <Link to="/" className="p-3 text-white hover:text-yellow-500 flex flex-col items-center">
                      {/* Icon */}
                      <i
                        className="mdi mdi-home-outline mdi-24px mx-1 text-white group-hover:text-yellow-500
                  transition-color duration-200"
                      />
                      {/* Text */}
                      <span className="text-xs mb-2 transition-all duration-200">
                        Home
                      </span>
                      {/* Focus Dot */}
                      <span
                        className="h-2 w-2 rounded-full group-hover:bg-yellow-500
                  transition-all duration-150 delay-100"
                      />
                    </Link>
                  </div>

                  {/* Item #4 */}
                  <div className="flex group">
                    <Link to="/aboutus" className="p-3 text-white hover:text-yellow-500 flex flex-col items-center">
                      {/* Icon */}
                      <i
                        className="mdi mdi-basket-plus-outline mdi-24px mx-1 text-white group-hover:text-yellow-500
                  transition-color duration-200"
                      />
                      {/* Text */}
                      <span className="text-xs mb-2 transition-all duration-200">
                        About
                      </span>
                      {/* Focus Dot */}
                      <span
                        className="h-2 w-2 rounded-full group-hover:bg-yellow-500
                  transition-all duration-150 delay-100"
                      />
                    </Link>
                  </div>

                  {/* Item #5 */}
                  <div className="flex group">
                    <Link to="/contactus" className="p-3 text-white hover:text-yellow-500 flex flex-col items-center">
                      {/* Icon */}
                      <i
                        className="mdi mdi-account-circle-outline mdi-24px mx-1 text-white group-hover:text-yellow-500
                  transition-color duration-200"
                      />
                      {/* Text */}
                      <span className="text-xs mb-2 transition-all duration-200">
                        Contact
                      </span>
                      {/* Focus Dot */}
                      <span
                        className="h-2 w-2 rounded-full group-hover:bg-yellow-500
                  transition-all duration-150 delay-100"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </nav>
  );
};

export default Navbar;
