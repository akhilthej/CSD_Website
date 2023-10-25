import React from 'react';
import { Helmet } from 'react-helmet-async';

import {Link} from 'react-router-dom';


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



 {/* Title Card */}
 <section className="py-10 sm:py-40" style={{ backgroundImage: 'url("https://drive.google.com/uc?id=11GAD-il3FI4qTTGp9dFdDZx1ogX1NQ6B")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
  <div className="flex flex-col items-center md:flex-row justify-center">
    <div className="md:w-1/2 md:pr-10">
     
    </div>
    <div className="md:w-1/2 px-5">
      <div className="text-right md:text-left"> {/* Align titles to the right on mobile, left on larger screens */}
        <h3 className="text-2xl pb-5 md:text-6xl fade-in-down font-extrabold text-center text-white tracking-tight">
        Distribute your brand from&nbsp;Design to Code
        </h3>
        <p className="text-white sm:text-sm text-xs text-center sm:ml-0">
        Specify helps you unify your brand identity by collecting, storing and
            distributing design tokens and assets — automatically.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link to="/contactus">
            <a className="transform rounded-md bg-white px-5 py-3 font-medium text-black transition-colors hover:bg-black hover:text-white">
              Get in Touch
            </a>
          </Link>

          <a href="https://api.whatsapp.com/send?phone=918143407758&text=Welcome%20to%20Cyberspacedigital">
            <a className="transform rounded-md bg-white px-5 py-3 font-medium text-black transition-colors hover:bg-black hover:text-white">
              WhatsApp
            </a>
          </a>
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