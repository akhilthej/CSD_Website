import React from 'react';
import {Link} from 'react-router-dom';

import ClientHeader from '../../../assets/ImagesPage/ClientHeader.png';

const ClientsHeader = () => {
  return (
    <main>

  <div className="  flex items-center justify-center my-2 pt-20">
    <div className="mx-auto w-full max-w-screen-lg  px-5  ">
      <div className="grid gap-5 md:grid-cols-2 md:gap-10 lg:gap-20">
        <div className="flex justify-center md:justify-end">
          <img
            className="w-full max-w-xl"
            src={ClientHeader}
            alt="Marketing newsletter via computer Illustration in PNG, SVG"
          />
        </div>
        <div className="flex items-center">
          <div className="mx-auto md:mx-0">
            <h3 className="text-4xl fade-in-down font-extrabold text-transparent  md:text-6xl bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-600 to-yellow-400 tracking-tight">Our Clients</h3>
            <p className="mt-2 max-w-[20rem] text-lg text-white">
              Join our weekly digest. You'll also receive some of our best posts
              today.
            </p>
            
            <div class="mt-8 flex flex-wrap justify-center gap-4">
        <Link to= '/contactus'><a
          class="transform rounded-mdpx-6 rounded bg-gradient-to-r from-orange-400 to-pink-600 px-5 py-3 font-medium text-white transition-colors hover:from-pink-600 hover:to-orange-400">
          Get in-touch
        </a></Link>

        <Link to= '/aboutus'><a
          class="transform rounded-md border border-slate-200 px-5 py-3 font-medium text-white transition-colors hover:bg-slate-50 hover:text-black">
          Learn More
        </a></Link>
      </div>
           
          </div>
        </div>
      </div>
    </div>
  </div>
</main>
  )
}

export default ClientsHeader