import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Menu, Transition } from "@headlessui/react";

import NavbarLogo from "./csdv2Logonavbar.svg";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  return (
    <section class="rounded-2xl sticky top-0 z-50 bg-white/90 drop-shadow-lg hidden sm:block ">
      <div className=" sm:px-2 w-full h-17 flex justify-between items-center text-black ">
        <Link to="/">
          <img
            class="pl-2 h-auto w-44  lg:w-52"
            src={NavbarLogo}
            alt="csd_logo"/>
        </Link>
        <div class=" justify-end ">
          <ul className="flex items-center">
            <Menu as="div" className="relative inline-block text-left ">
              <div>
                <Menu.Button className="lg:inline-flex font-semibold antialiased hidden justify-center w-full rounded-md  px-4 py-2  text-sm text-black hover:bg-yellow-500  focus:outline-none  ">
                  <Link to="/services">Services</Link>
                  <svg
                    xmlns="https://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-4 mt-0.5 ml-1"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-gray-300 ring-1 ring-black ring-opacity-5 divide-y divide-gray-400 focus:outline-none z-50">
                  <Menu.Item>
                    {({ active }) => (
                      <Link to="/best-web-developement-company">
                        <a
                          className={classNames(
                            active ? "bg-yellow-500 text-white" : "text-black",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          <div className="flex items-center">
                            <div>
                              Web Development
                              <p className="text-xs text-gray-700">
                                Let's Build Your Business Online.
                              </p>
                            </div>
                          </div>
                        </a>
                      </Link>
                    )}
                  </Menu.Item>

                  <Menu.Item>
                    {({ active }) => (
                      <Link to="/best-digital-marketing-company">
                        <a
                          className={classNames(
                            active
                              ? " bg-yellow-500 text-white"
                              : " text-black",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          Digital Marketing
                          <p className="text-xs text-gray-700">
                            Expand Your Business on a Global Scale.
                          </p>
                        </a>
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link to="/best-mobile-app-development-company">
                        <a
                          className={classNames(
                            active ? "bg-yellow-500 text-white" : "text-black",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          Mobile App Development
                          <p className="text-xs text-gray-700">
                            Transform Your Vision into a Mobile App Reality.
                          </p>
                        </a>
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link to="/best-graphic-designing-company">
                        <a
                          className={classNames(
                            active ? "bg-yellow-500 text-white" : "text-black",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          Graphic Design
                          <p className="text-xs text-gray-700">
                            Unlock Creativity and Inspire with Stunning Graphic
                            Designs.
                          </p>
                        </a>
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link to="/best-brand-services-company">
                        <a
                          className={classNames(
                            active ? "bg-yellow-500 text-white" : "text-black",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          Brand Services
                          <p className="text-xs text-gray-700">
                            Crafting Your Brand Identity for Success.
                          </p>
                        </a>
                      </Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link to="/best-advertising-company">
                        <a
                          className={classNames(
                            active ? "bg-yellow-500 text-white" : "text-black",
                            "block px-4 py-2 text-sm"
                          )}
                        >
                          Advertising
                          <p className="text-xs text-gray-700">
                            Amplify Your Message with Strategic Advertising
                            ATL/BTL.
                          </p>
                        </a>
                      </Link>
                    )}
                  </Menu.Item>
                </Menu.Items>
              </Transition>
            </Menu>

            <li className="p-4 text-sm hidden lg:block font-medium antialiased rounded-md  px-4 py-2   text-black hover:bg-yellow-500  focus:outline-none">
              <Link to="/clients">Clients</Link>
            </li>
            <li className="p-4 text-sm hidden lg:block font-medium antialiased rounded-md  px-4 py-2   text-black hover:bg-yellow-500  focus:outline-none">
              <Link to="/aboutus">About us</Link>
            </li>
            <li className="p-4 text-sm hidden lg:block font-medium antialiased rounded-md  px-4 py-2   text-black hover:bg-yellow-500  focus:outline-none">
              <Link to="/contactus">Contact us</Link>
            </li>
            <li className="p-4">
              <Menu as="div" className="relative inline-block text-left  ">
                <div>
                  <Menu.Button className=" text-3xl">
                  ☰
                  
                  </Menu.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-gray-300 ring-1 ring-black ring-opacity-5 divide-y divide-gray-400 focus:outline-none z-50">
                    <div className="py-1  lg:hidden ">
                      <Menu.Item>
                        {({ active }) => (
                          <Link to="/services">
                            <a
                              className={classNames(
                                active
                                  ? "bg-yellow-500 text-white"
                                  : "text-black",
                                "block px-4 py-2 text-sm"
                              )}
                            >
                              Services
                            </a>
                          </Link>
                        )}
                      </Menu.Item>

                      <Menu.Item>
                        {({ active }) => (
                          <Link to="/clients">
                            <a
                              className={classNames(
                                active
                                  ? "bg-yellow-500 text-white"
                                  : "text-black",
                                "block px-4 py-2 text-sm"
                              )}
                            >
                              Clients
                            </a>
                          </Link>
                        )}
                      </Menu.Item>
                    </div>

                    <Menu.Item>
                      {({ active }) => (
                        <Link to="/blogs">
                          <a
                            className={classNames(
                              active
                                ? "bg-yellow-500 text-white"
                                : "text-black",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            Blogs
                          </a>
                        </Link>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <Link to="/reviews">
                          <a
                            className={classNames(
                              active
                                ? "bg-yellow-500 text-white"
                                : "text-black",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            Reviews
                          </a>
                        </Link>
                      )}
                    </Menu.Item>

                    <div className="py-1 lg:hidden ">
                      <Menu.Item>
                        {({ active }) => (
                          <Link to="/aboutus">
                            <a
                              className={classNames(
                                active
                                  ? "bg-yellow-500 text-white"
                                  : "text-black",
                                "block px-4 py-2 text-sm"
                              )}
                            >
                              About us
                            </a>
                          </Link>
                        )}
                      </Menu.Item>

                      <Menu.Item>
                        {({ active }) => (
                          <Link to="/contactus">
                            <a
                              className={classNames(
                                active
                                  ? "bg-yellow-500 text-white"
                                  : "text-black",
                                "block px-4 py-2 text-sm"
                              )}
                            >
                              Contact us
                            </a>
                          </Link>
                        )}
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </li>
          </ul>
        </div>
      </div>
    </section>

  );
};




export default Navbar;
