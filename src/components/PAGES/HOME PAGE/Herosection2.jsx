import React from 'react'
import {Link} from 'react-router-dom';

const Herosection2 = () => {
  return (
    <div className="bg-gray-200">
    <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8">
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        <span className="pl-5 block">Lets start building!</span>
        <span className="pl-5 pt-2 block text-indigo-600 text-xl">Are you Ready to build your project with us?</span>
      </h2>
      <div className="pr-40 mt-8 flex lg:mt-0 lg:flex-shrink-0">
        <div className="inline-flex rounded-md shadow">
        <Link to = '/services'><a
            
            className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium text-white hover:bg-indigo-700"
          >
            started
          </a></Link>
        </div>
        <div className="ml-3 inline-flex rounded-md shadow">
        <Link to = '/aboutus'><a
            href="#"
            className="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-indigo-600 hover:bg-indigo-50"
          >
            more
          </a></Link>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Herosection2