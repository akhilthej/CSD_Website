import React from 'react';
import { Helmet } from 'react-helmet-async';

import {Link} from 'react-router-dom';


import ServicesHeroImg from '../../assets/ImagesPage/ServicesHeaderImage.png';
import ServicesTab from '../../components/ServicesTab';

const SERVICES = () => {
  return (
    <div className='services'>
      <Helmet>
                <title>Cyber Space Digital - Services</title>
                <meta name="description" content='Web Development and Digital Marketing Company. We are here to build you business online. One stop for all your digital needs.'/>
                <link rel="canonical" href="/technologies" />
      </Helmet>


      <main>
      {/*Hero */}
  <section>
   <div className="flex items-center justify-center mt-24 mb-5">
    <div className="mx-auto w-full max-w-screen-lg  px-5 ">
      <div className="grid gap-5 md:grid-cols-2 md:gap-10 lg:gap-20">
        <div className="flex justify-center md:justify-end">
          <img
            className="w-full max-w-xl"
            src={ServicesHeroImg}
            alt="Marketing newsletter via computer Illustration in PNG, SVG"
          />
        </div>
        <div className="flex items-center">
          <div className="mx-auto md:mx-0">
            <h3 className="text-4xl fade-in-down font-extrabold text-transparent  md:text-6xl bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600 tracking-tight">Distribute your brand from&nbsp;Design to Code</h3>
            <p className="mt-2 text-lg text-black">
            Specify helps you unify your brand identity by collecting, storing and
            distributing design tokens and assets — automatically.
            </p>
            
            <div class="mt-8 flex flex-wrap justify-center gap-4">
        <Link to= '/contactus'>
        <a
          class="transform rounded-mdpx-6 rounded bg-gradient-to-r from-yellow-500 to-orange-600 px-5 py-3 font-medium text-white transition-colors hover:from-orange-600 hover:to-orange-400">
          Get in-touch
        </a></Link>

        <Link to= '/aboutus'><a
          class="transform rounded-md border border-slate-200 px-5 py-3 font-medium text-black transition-colors hover:bg-slate-50 hover:text-black">
          Learn More
        </a></Link>
      </div>
           
          </div>
        </div>
      </div>
    </div>
    </div>
  </section>

  <ServicesTab/>

</main>
    

    </div>
  )
}

export default SERVICES