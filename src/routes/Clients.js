import React from 'react';
import {Link} from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import ClientHeader from '../assets/ImagesPage/ClientHeader.png'
import {Archivitus ,serpsit , labelanuneni ,ilahe ,laytonskincare,AlohaTechLogo } from '../components/data/data'

import {LabelAnuneniwhite,LabelAnunenipc,LaytonSkinpc,LaytonSkinWhite,Ilahewhite,Ilahepc,Arkwhite,Arkwhitepc} from '../components/data/data'


const Clients = () => {
  return (
    <div className='Clients'>
      <Helmet>
                <title>Cyber Space Digital - Clients</title>
                <meta name="description" content='Cyberspacedigital, Technologies we deal with to full fill your digital needs. Our research will be posted below.'/>
                <link rel="canonical" href="/technologies" />
      </Helmet>
    
<section>
{/* Header*/}
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
          <p className="mt-2 max-w-[20rem] text-lg text-black">
            Join our weekly digest. You'll also receive some of our best posts
            today.
          </p>
          
          <div class="mt-8 flex flex-wrap justify-center gap-4">
      <Link to= '/contactus'><a
        class="transform rounded-mdpx-6 rounded bg-gradient-to-r from-orange-400 to-orange-600 px-5 py-3 font-medium text-white transition-colors hover:from-orange-600 hover:to-orange-400">
        Get in-touch
      </a></Link>

      <Link to= '/aboutus'><a
        class="transform rounded-md border bg-black px-5 py-3 font-medium text-white transition-colors hover:bg-slate-50 hover:text-black">
        Learn More
      </a></Link>
    </div>
         
        </div>
      </div>
    </div>
  </div>
</div>




      {/* Brands Section Start */}
      <section >
  <div class="container mx-auto">
    <div class="-mx-4 flex flex-wrap">
      <div class="w-full px-1">
        <div class="flex flex-wrap items-center justify-center ">
          <a href="https://archivitusdesigners.com/" title="Created on-2022-08-01 . Expires-2023-08-01 "
            class="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]" >
            <img src= {Archivitus}
              class="h-10 w-full" />
          </a>
          <a href="https://serpsit.com/" title="Created on-2022-10-01 . Expires-Jul 17, 2025"
            class="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]" >
            <img src={serpsit}
              class="h-10 w-full" />
          </a>
          <a href="https://labelanuneni.com" title="Created on-2022-08-01 . Expires-2023-08-01"
            class="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]" >
            <img src={labelanuneni}
              class="h-10 w-full" />
          </a>
          <a href="http://ilahe.in/" title="Created on-2022-08-01 . Expires-2023-08-01"
            class="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]" >
            <img src={ilahe}
              class="h-10 w-full" />
          </a>
          <a href="https://laytonskin.in/" title="Created on-2023-03-15 . Expires-2024-03-15"
            class="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]" >
            <img src={laytonskincare}
              class="h-10 w-full" />
          </a>
          <a href="https://alohatechnologies.ca" title="Created on-2023-03-15 . Expires-2024-03-15"
            class="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]" >
            <img src={AlohaTechLogo}
              class="h-10 w-full" />
          </a>
        </div>
      </div>
    </div>
  </div>
</section>




{/* ====== Brands Section End */}
</section>
<section className="text-center portfolio text-4xl font-extrabold text-transparent  md:text-6xl bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400 tracking-tight" >
      {/* heading */}
      <div>
      <span >Recent Projects</span>
      <span>Portfolio</span></div>

      {/* mock-upimages */}
      <section class='labelanuneniMockup'>
        <div className="tracking-normal 2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
            <div className="flex flex-col lg:flex-row justify-between gap-8">
                <div className="w-full lg:w-5/12 flex flex-col justify-center">         
                    <h1 className="text-3xl lg:text-4xl font-bold leading-9 pb-4 text-orange-600">LabelAnuneni.com</h1>
                    <p className="font-normal text-sm text-black pb-4">The Art of Indian Handlooms is the greatest treasure one can preserve, and our authentic hand weaves are the "Labour of Love."</p>
                    <img className="fade-in-down mt-6 active mx-auto  w-full max-w-sm" src= {LabelAnunenipc} alt="labelanunenimockup-2" />
                </div>
                <div className="w-full lg:w-8/12 ">
                    <img className="fade-in-down w-full max-w-xl mx-auto" src= {LabelAnuneniwhite} alt="labelanunenimockup" />
                    <h1 className="text-3xl lg:text-4xl font-bold leading-9 pb-4 text-yellow-500">Tech Details</h1>
                    <p className="font-normal   text-base leading-6 text-black ">An e-commerce website with custom payment gate ways and auto delivery system.</p>
                </div>
            </div>
        </div>
      </section>  

      <section class='ilihaMockup'>
        <div className="tracking-normal 2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
            <div className="flex flex-col lg:flex-row justify-between gap-8">
                <div className="w-full lg:w-5/12 flex flex-col justify-center">         
                    <h1 className="text-3xl lg:text-4xl font-bold leading-9 pb-4 text-orange-600">ilahe.in</h1>
                    <p className="font-normal text-sm text-black pb-4">Modeling and Finishing School</p>
                    <img className="fade-in-down mt-6 active mx-auto  w-full max-w-sm" src= {Ilahepc} alt="ilihaMockup-2" />
                </div>
                <div className="w-full lg:w-8/12 ">
                    <img className="fade-in-down w-full max-w-xl mx-auto" src= {Ilahewhite} alt="ilihaMockup" />
                    <h1 className="text-3xl lg:text-4xl font-bold leading-9 pb-4 text-yellow-500">Tech Details</h1>
                    <p className="font-normal   text-base leading-6 text-black ">Wordpress developed website. Custom forms and elementor pro Designer tool.</p>
                </div>
            </div>
        </div>
      </section>  

      <section class='labelanuneniMockup'>
        <div className="tracking-normal 2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
            <div className="flex flex-col lg:flex-row justify-between gap-8">
                <div className="w-full lg:w-5/12 flex flex-col justify-center">         
                    <h1 className="text-3xl lg:text-4xl font-bold leading-9 pb-4 text-orange-600">Laytonskin.in</h1>
                    <p className="font-normal text-sm text-black pb-4">An e-commerce website from beauty and skin care products.</p>
                    <img className="fade-in-down mt-6 active mx-auto  w-full max-w-sm" src= {LaytonSkinpc} alt="labelanunenimockup-2" />
                </div>
                <div className="w-full lg:w-8/12 ">
                    <img className="fade-in-down w-full max-w-xl mx-auto" src= {LaytonSkinWhite} alt="labelanunenimockup" />
                    <h1 className="text-3xl lg:text-4xl font-bold leading-9 pb-4 text-yellow-500">Tech Details</h1>
                    <p className="font-normal   text-base leading-6 text-black ">An e-commerce website with custom payment gate ways and auto delivery system.</p>
                </div>
            </div>
        </div>
      </section>  


      <section class='arkMockup'>
        <div className="tracking-normal 2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
            <div className="flex flex-col lg:flex-row justify-between gap-8">
                <div className="w-full lg:w-5/12 flex flex-col justify-center">         
                    <h1 className="text-3xl lg:text-4xl font-bold leading-9 pb-4 text-orange-600">archivitusdesigners.com</h1>
                    <p className="font-normal text-sm text-black pb-4">Interior Designer / Construction</p>
                    <img className="fade-in-down mt-6 active mx-auto  w-full max-w-sm" src= {Arkwhitepc} alt="arkMockup-2" />
                </div>
                <div className="w-full lg:w-8/12 ">
                    <img className="fade-in-down w-full max-w-xl mx-auto" src= {Arkwhite} alt="arkMockup" />
                    <h1 className="text-3xl lg:text-4xl font-bold leading-9 pb-4 text-yellow-500">Tech Details</h1>
                    <p className="font-normal   text-base leading-6 text-black ">Wordpress developed website. Custom forms and elementor pro Designer tool.</p>
                </div>
            </div>
        </div>
      </section> 

    </section>
    
    </div>
  )
}

export default Clients