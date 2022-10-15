import React, { Fragment } from 'react';
import {Link} from 'react-router-dom';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Navbar = () => {
  return (
    <main class ='sticky top-0 z-50 bg-white' >
    <div className=' w-full h-20 flex justify-between items-center px-2 text-black shadow-md z-50'>
      <Link to='/'><img class="h-auto w-14 " src={require('../../assets/Common/csd_navbarlogo.png')} alt='csd_logo' /></Link>
      
      <div class=" justify-end ">
      <ul className='flex items-center '>
        <li className='p-4 hidden md:block'>
          <Menu as='div' className='relative inline-block text-left '>
            <Menu.Button >Services</Menu.Button>
            <Transition
              as={Fragment}
              enter='transition ease-out duration-100'
              enterFrom='transform opacity-0 scale-95'
              enterTo='transform opacity-100 scale-100'
              leave='transition ease-in duration-100'
              leaveFrom='transform opacity-100 scale-100'
              leaveTo='transform opacity-0 scale-95'
            >
              <Menu.Items className='origin-top-left absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white divide-y divide-gray-100 focus:outline-none'>
                <div className='py-1'>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href='#'
                        className={classNames(
                          active
                            ? 'bg-gray-100 text-gray-900'
                            : 'text-gray-700',
                          'block px-4 py-2 text-sm'
                        )}
                      >
                        For Companies
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href='#'
                        className={classNames(
                          active
                            ? 'bg-gray-100 text-gray-900'
                            : 'text-gray-700',
                          'block px-4 py-2 text-sm'
                        )}
                      >
                        For Investors
                      </a>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </li>
        <li className='p-4 hidden md:block'><Link to='/technologies'>Technologies</Link></li>
        <li className='p-4 hidden md:block'><Link to='/getquotation'>Get Quotation</Link></li>
        <li className='p-4 hidden md:block'><Link to='/aboutus'>About us</Link></li>
        <li className='p-4 hidden md:block'><Link to='/contactus'>Contact us</Link></li>
        <li className='p-4'>
        <Menu as='div' className='relative inline-block text-left '>
            <div>
              <Menu.Button className='inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500'>
                More
                <ChevronDownIcon
                  className='-mr-1 ml-2 h-5 w-5'
                  aria-hidden='true'
                />
              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter='transition ease-out duration-100'
              enterFrom='transform opacity-0 scale-95'
              enterTo='transform opacity-100 scale-100'
              leave='transition ease-in duration-75'
              leaveFrom='transform opacity-100 scale-100'
              leaveTo='transform opacity-0 scale-95'
            >
              <Menu.Items className='origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none z-50'>
                <div className='py-1  md:hidden '>
                  <Menu.Item>
                    {({ active }) => (
                      <Link to='/services'><a
                        className={classNames(
                          active
                            ? 'bg-gray-100 text-gray-900'
                            : 'text-gray-700',
                          'block px-4 py-2 text-sm'
                        )}
                      >
                      Services
                        
                      </a></Link>
                    )}
                  </Menu.Item>
                  <Menu.Item >
                    {({ active }) => (
                      <Link to='/getquotation'><a
                        className={classNames(
                          active
                            ? 'bg-gray-100 text-gray-900'
                            : 'text-gray-700',
                          'block px-4 py-2 text-sm'
                        )}
                      >
                      Get Quotation
                      </a></Link>
                    )}
                  </Menu.Item>
                  <Menu.Item >
                    {({ active }) => (
                      <Link to='/technologies'><a
                        className={classNames(
                          active
                            ? 'bg-gray-100 text-gray-900'
                            : 'text-gray-700',
                          'block px-4 py-2 text-sm'
                        )}
                      >
                      Technologies
                      </a></Link>
                    )}
                  </Menu.Item>
                </div>
                <div className='py-1'>
                  <Menu.Item>
                    {({ active }) => (
                      <Link to='/clients'><a
                      
                        className={classNames(
                          active
                            ? 'bg-gray-100 text-gray-900'
                            : 'text-gray-700',
                          'block px-4 py-2 text-sm'
                        )}
                      >
                        Clients
                        
                      </a></Link>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <Link to='/reviews'><a
                        className={classNames(
                          active
                            ? 'bg-gray-100 text-gray-900'
                            : 'text-gray-700',
                          'block px-4 py-2 text-sm'
                        )}
                      >
                        Reviews
                      </a></Link>
                    )}
                  </Menu.Item>
                </div>
                <div className='py-1 md:hidden '>
                  <Menu.Item>
                    {({ active }) => (
                      <Link to='/aboutus'><a

                        className={classNames(
                          active
                            ? 'bg-gray-100 text-gray-900'
                            : 'text-gray-700',
                          'block px-4 py-2 text-sm'
                        )}
                      >
                        About us
                     
                      </a></Link>
                    )}
                  </Menu.Item>
                  <Menu.Item >
                    {({ active }) => (
                      <Link to='/contactus'><a
                        className={classNames(
                          active
                            ? 'bg-gray-100 text-gray-900'
                            : 'text-gray-700',
                          'block px-4 py-2 text-sm'
                        )}
                      >
                       Contact us
                      </a></Link>
                    )}
                  </Menu.Item>
                </div>
                <div className='py-1'>
                  <Menu.Item disabled>
                    {({ active }) => (
                      <a
            
                        className={classNames(
                          active
                            ? 'bg-gray-100 text-gray-900'
                            : 'text-gray-700',
                          'block px-4 py-2 text-sm'
                        )}
                      >
                        Share
                      </a>
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
    </main>
  );
};

export default Navbar;