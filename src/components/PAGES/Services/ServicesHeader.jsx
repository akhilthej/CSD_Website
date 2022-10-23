import React from 'react';
import {Link} from 'react-router-dom';

import ServicesHeaderimage from '../../../assets/ImagesPage/ServicesHeaderImage.webp';

const ServicesHeader = () => {
  return (
    <>

  <div className="bg-white  flex items-center justify-center my-2">
    <div className="mx-auto w-full max-w-screen-lg bg-white px-5 ">
      <div className="grid gap-5 md:grid-cols-2 md:gap-10 lg:gap-20">
        <div className="flex justify-center md:justify-end">
          <img
            className="w-full max-w-xl"
            src={ServicesHeaderimage}
            alt="Marketing newsletter via computer Illustration in PNG, SVG"
          />
        </div>
        <div className="flex items-center">
          <div className="mx-auto md:mx-0">
            <h3 className="text-4xl font-bold text-black"> Distribute your brand from&nbsp;design to code</h3>
            <p className="mt-2 text-lg text-black">
            Specify helps you unify your brand identity by collecting, storing and
            distributing design tokens and assets — automatically.
            </p>
            
            <div class="mt-8 flex flex-wrap justify-center gap-4">
        <Link to= '/contactus'><a
          class=" block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-500 hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
          
        >
          Get in-touch
        </a></Link>

        <Link to= '/aboutus'><a
          class="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-500 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto "
          
        >
          Learn More
        </a></Link>
      </div>
           
          </div>
        </div>
      </div>
    </div>
  </div>
</>

  )
}

export default ServicesHeader