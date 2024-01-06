import React, { useState } from "react";
import { Link } from 'react-router-dom';
import WebsiteQuotation from '../../../components/Forms/WebsiteQuotation';

import {
  ecommercewebsite,webrevamp,crm_ermpannel,
} from "../../../assets/data/Imagedata";


const BusinessWebsite = () => {
  {/*Popup Logic*/}
  const [isPopupOpen, setPopupOpen] = useState(false);

  const handleQuotationClick = () => {
    setPopupOpen(true);
  };

  const handlePopupClose = () => {
    setPopupOpen(false);
  }; {/*Popup Logic End*/}

  return (
    <div>
    {/* Title Card */}
    <section className="py-20 sm:py-40" style={{ backgroundImage: 'url("https://drive.google.com/uc?id=11NXjq2_6_yas4Hi8C3h8_V79PLb-9FzR")', backgroundSize: 'cover', backgroundPosition: 'left' }}>
     <div className="flex flex-col items-center md:flex-row justify-center">
       <div className="md:w-1/2 md:pr-10">
        
       </div>
       <div className="md:w-1/2 px-5">
         <div className="text-right md:text-left"> {/* Align titles to the right on mobile, left on larger screens */}
           <h1 className="text-2xl pb-5 md:text-6xl fade-in-down font-extrabold text-center text-white tracking-tight">
           Business Website
           </h1>
           <p className="text-white sm:text-sm text-xs text-center sm:ml-0">
             "Cyber Space Digital stands as a distinguished leader in the realm"
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
   
   {/*PopupButton */}
   <div className="flex justify-center items-center py-5">
   <button  className="flex justify-center items-center py-5" onClick={handleQuotationClick}>
        <section className="text-black text-center bg-yellow-500 block w-full rounded-3xl border hover:border-black px-12 py-3 text-sm font-medium hover:text-black hover:bg-white sm:w-auto">
          Website Quotation <p className="text-xs text-black">Get your Website Quotation now! </p>
        </section>
        </button>
          {isPopupOpen && (
            <WebsiteQuotation onClose={handlePopupClose} />
          )}
    </div>


     {/*Line of Engagement */}
 <section id="services" className="cursor-default section relative pt-10 pb-8 md:pt-16 md:pb-10">
  <div className="xl:max-w-8xl mx-auto px-4">
    {/* Heading for "Line of Engagement" section */}

    <section className="text-center mx-auto mb-12 lg:px-20">

    <p className="text-xl font-medium text-black">
        website for startup compines
      </p>
      <h2 className="pb-2 font-extrabold text-transparent text-2xl md:text-5xl lg:text-6xl bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600 ">
        Build Your Web Office Online.
      </h2>
      <p className="text-sm font-medium text-black">
      "Every business requires a unique website to effectively reach its customers or clients. At Cyber Space Digital, we're here to help you discover the best choices tailored to your needs."
      </p>
    </section>


    {/* "Business Websites" section */}
    
    <div className="flex flex-wrap flex-row -mx-4 text-center">
      <div className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/4 lg:px-16  ">
        <div style={{ backgroundImage: 'url("https://drive.google.com/uc?id=11NXjq2_6_yas4Hi8C3h8_V79PLb-9FzR")', backgroundSize: 'cover', backgroundPosition: 'left' }} className="py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2 " >
         
          <h3 className="text-lg leading-normal mb-2 font-semibold text-white">
           Website for Start-up Compines
          </h3>
          <p className="text-gray-200 text-sm">
          Catalyzing Business Success: Our business website solutions are designed to drive growth, enhance visibility, and boost profitability in the digital landscape.
          </p>
          <Link to='/best-website-for-small-business'>
          <button className="mt-5 text-xs sm:text-sm transform rounded bg-yellow-500 border border-slate-200 px-12 py-2 font-medium text-black transition-colors hover:bg-slate-50 "> Get Quotation</button>
          </Link>
        </div>
      </div>


      {/* "E-commerce Website" section */}
      <div className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/4 lg:px-6 " >

        <div className="py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
          <div className="inline-block text-gray-900 mb-4">
            <img
              src={ecommercewebsite}
              className="w-40 ml-auto"
              alt="illustration"
              loading="lazy"
              width={900}
              height={600} />
          </div>
          <h3 className="text-lg leading-normal mb-2 font-semibold text-black">
          Website for Marketing and Sales
          </h3>
          <p className="text-gray-500 text-sm">
          Crafting E-Commerce Excellence: Elevate your online retail with our bespoke e-commerce solutions. Boost sales, engage customers, and thrive online.
          </p>
          <Link to='/ecommerce-website-india'><button className="mt-5 text-xs sm:text-sm transform rounded bg-yellow-500 border border-slate-200 px-12 py-2 font-medium text-black transition-colors hover:bg-slate-50 "> Get Quotation</button>
          </Link></div>
      </div>

      {/* "Web Revamp" section */}
      <div className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/4 lg:px-6 "
        
        data-wow-delay=".3s"
        style={{
          visibility: "visible",
          animationDuration: "1s",
          animationDelay: "0.3s",
          animationName: "fadeInUp"
        }}>
        <div className="py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
          <div className="inline-block text-gray-900 mb-4">
            <img
              src={webrevamp}
              className="w-40 ml-auto"
              alt="illustration"
              loading="lazy"
              width={900}
              height={600} />
          </div>
          <h3 className="text-lg leading-normal mb-2 font-semibold text-black">
          Single Website Page for SEO
          </h3>
          <p className="text-gray-500 text-sm">
          Revamp Your Online Presence: Transform and modernize your existing website with our web revamp services. Stay ahead and impress your audience.
          </p>
          <Link to='/website-rebuild'><button className="mt-5 text-xs sm:text-sm transform rounded bg-yellow-500 border border-slate-200 px-12 py-2 font-medium text-black transition-colors hover:bg-slate-50 "> Get Quotation</button>
          </Link></div>
      </div>


      {/* "CRM/ERM Panels" section */}
      <div className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/4 lg:px-6 "
        
        data-wow-delay=".3s"
        style={{
          visibility: "visible",
          animationDuration: "1s",
          animationDelay: "0.3s",
          animationName: "fadeInUp"
        }}>
        <div className="py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
          <div className="inline-block text-gray-900 mb-4">
            <img
              src={crm_ermpannel}
              className="w-40 ml-auto"
              alt="illustration"
              loading="lazy"
              width={900}
              height={600} />
          </div>
          <h3 className="text-lg leading-normal mb-2 font-semibold text-black">
          Website for Enterprise
          </h3>
          <p className="text-gray-500 text-sm">
          Efficient CRM/ERM Solutions: Enhance business operations with our CRM/ERM panels. Streamline processes, manage data, and boost productivity effectively.
          </p>
          <Link to='/control-center-for-business'><button className="mt-5 text-xs sm:text-sm transform rounded bg-yellow-500 border border-slate-200 px-12 py-2 font-medium text-black transition-colors hover:bg-slate-50 "> Get Quotation</button>
          </Link></div>
      </div>
    </div>
  </div>
</section>



   
   </div>
  )
}

export default BusinessWebsite