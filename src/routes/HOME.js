import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import HomeCode from '../components/PAGES/HOME PAGE/HomeCode';
import {HomeVideo} from '../components/data/data';


const Home = () => {
    return (
    <>
            <Helmet>
                <title>Cyber Space Digital</title>
                <meta name="Description" content='Web Development and Digital Marketing Company. We are here to build you business online. One stop for all your digital needs.'/>
                <link rel="canonical" href="/" />
            </Helmet>

<main className='my-20 sm:my-20 sm:mx-20'>
{/*herosection */}    
<header >
  <section className="flex items-center my-10 justify-center  bg-white ">
      <div className="mx-auto max-w-[55rem]">
        <div className="text-center">
          <p className="text-sm sm:text-2xl font-extrabold leading-8  text-orange-900">
           DESIGN . DEVELOP & DEPLOY
          </p>
          <h1 className="upanddown pb-8 font-extrabold text-transparent text-4xl md:text-5xl lg:text-8xl bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600 mt-3  leading-[3.5rem] tracking-tight text-black">
          Cyber Space Digital
          </h1>

          <p className="text-sm sm:text-2xl font-extrabold leading-8  text-orange-900">
          Take your brand online today for a global presence.
          </p>
        </div>
        <div className="mt-6 flex items-center justify-center gap-4 flex-wrap">
        
<Link to='/contactus'>
<button
    className="text-xs sm:text-sm transform rounded bg-yellow-500 border border-slate-200 px-12 py-2 font-medium text-black transition-colors hover:bg-slate-50 ">
    Build Today
  </button></Link>
  <Link to='/getquotation'>
  <button
    className="text-xs sm:text-sm transform rounded border border-slate-200 px-12 py-2 font-medium  text-black transition-colors hover:bg-orange-600 hover:text-black">
    Get Quotation
  </button></Link>

 </div>

      </div>
    </section>
</header>

{/* Video */}
<div className="flex justify-center items-center">
  <video className="rounded-lg" poster="" loop width="80%" height="auto" autoPlay muted playsInline>
    <source src={HomeVideo} type="video/mp4" />
  </video>
</div>


</main>
            <HomeCode />
        </>
           
        
        
    )
}

export default Home
