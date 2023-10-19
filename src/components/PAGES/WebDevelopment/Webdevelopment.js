import React from 'react'
import { Link } from 'react-router-dom'


import {
    FixedPrice,
    OntimeDelivery,
    TimeManage,
    HiringModel,
  } from "../../data/data";

const Webdevelopment = () => {
  return (
    <main>
  {/* Title Card */}
  <section className="mx-4 md:mx-10 lg:mx-20 my-10">
    <div className="flex flex-col items-center md:flex-row justify-center">
      <div className="md:w-1/2 md:pr-10">
        <img
          className="w-full max-w-xl rounded"
          src="https://drive.google.com/uc?id=1IcH87oN0edQXe0_lqG6l8fUdNfvdYBHn"
          alt="WebDevelopment"
        />
      </div>
      <div className="md:w-1/2">
        <h3 className="text-4xl pb-5 md:text-6xl fade-in-down font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600 tracking-tight">
          Best Web Development & Designing Company
        </h3>
        <p className=" text-black text-sm">
          "Cyber Space Digital stands as a distinguished leader in the realm of web design and development, known for crafting captivating online experiences. Our innovative solutions and expertise propel businesses towards the fast lane of growth. With a dedicated team of creative professionals, we bring your digital aspirations to life, ensuring your online presence sets you apart in the digital landscape. Explore the limitless possibilities with Cyber Space Digital – where excellence meets innovation."
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link to="/contactus">
            <a className="transform rounded-md border bg-gradient-to-r from-yellow-500 to-orange-600 px-5 py-3 font-medium text-white transition-colors hover:from-orange-600 hover:to-orange-400">
              Get in Touch
            </a>
          </Link>

          <a href="https://api.whatsapp.com/send?phone=918143407758&text=Welcome%20to%20Cyberspacedigital">
            <a className="transform rounded-md border border-slate-200 px-5 py-3 font-medium text-black transition-colors hover:bg-slate-50 hover:text-black">
              WhatsApp
            </a>
          </a>
        </div>
      </div>
    </div>
  </section>





     {/*Line of Engagement */}
 <section id="services" className="cursor-default section relative pt-10 pb-8 md:pt-16 md:pb-10">
  <div className="xl:max-w-8xl mx-auto px-4">
    {/* Heading for "Line of Engagement" section */}

    <section className="text-center mx-auto mb-12 lg:px-20">

    <p className="text-xl font-medium text-black">
        Websites as your Business Need
      </p>
      <h2 className="pb-2 font-extrabold text-transparent text-2xl md:text-5xl lg:text-6xl bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600 ">
        Build Your Web Office Online.
      </h2>
      <p className="text-sm font-medium text-black">
      "Every business requires a unique website to effectively reach its customers or clients. At Cyber Space Digital, we're here to help you discover the best choices tailored to your needs."
      </p>
    </section>

    {/* "Fixed Price Model" section */}
    <div className="flex flex-wrap flex-row -mx-4 text-center">
      <div className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/4 lg:px-6 wow fadeInUp"
        data-wow-duration="1s"
        style={{
          visibility: "visible",
          animationDuration: "1s",
          animationName: "fadeInUp"
        }}>
        <div className="py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
          <div className="inline-block text-gray-900 mb-4">
            <img
              src={FixedPrice}
              className="w-40 ml-auto"
              alt="illustration"
              loading="lazy"
              width={900}
              height={600} />
          </div>
          <h3 className="text-lg leading-normal mb-2 font-semibold text-black">
            Fixed Price Model
          </h3>
          <p className="text-gray-500 text-sm">
            Under this model, the web development company and the client agree on a fixed price for the entire project scope.
          </p>
          <button className="mt-5 text-xs sm:text-sm transform rounded bg-yellow-500 border border-slate-200 px-12 py-2 font-medium text-black transition-colors hover:bg-slate-50 "> Know More</button>
        </div>
      </div>

      {/* "Time and Materials Model" section */}
      <div className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/4 lg:px-6 wow fadeInUp"
        data-wow-duration="1s"
        data-wow-delay=".1s"
        style={{
          visibility: "visible",
          animationDuration: "1s",
          animationDelay: "0.1s",
          animationName: "fadeInUp"
        }}>
        <div className="py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
          <div className="inline-block text-gray-900 mb-4">
            <img
              src={TimeManage}
              className="w-40 ml-auto"
              alt="illustration"
              loading="lazy"
              width={900}
              height={600} />
          </div>
          <h3 className="text-lg leading-normal mb-2 font-semibold text-black">
            Time and Materials Model
          </h3>
          <p className="text-gray-500 text-sm">
            The client pays based on the time and resources spent on the project.
          </p>
          <button className="mt-5 text-xs sm:text-sm transform rounded bg-yellow-500 border border-slate-200 px-12 py-2 font-medium text-black transition-colors hover:bg-slate-50 "> Know More</button>
        </div>
      </div>

      {/* "On-Time Delivery" section */}
      <div className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/4 lg:px-6 wow fadeInUp"
        data-wow-duration="1s"
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
              src={OntimeDelivery}
              className="w-40 ml-auto"
              alt="illustration"
              loading="lazy"
              width={900}
              height={600} />
          </div>
          <h3 className="text-lg leading-normal mb-2 font-semibold text-black">
            On-Time Delivery
          </h3>
          <p className="text-gray-500 text-sm">
            The web development company commits to delivering projects on or before agreed-upon deadlines.
          </p>
          <button className="mt-5 text-xs sm:text-sm transform rounded bg-yellow-500 border border-slate-200 px-12 py-2 font-medium text-black transition-colors hover:bg-slate-50 "> Know More</button>
        </div>
      </div>


      {/* "Hiring Model" section */}
      <div className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/4 lg:px-6 wow fadeInUp"
        data-wow-duration="1s"
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
              src={HiringModel}
              className="w-40 ml-auto"
              alt="illustration"
              loading="lazy"
              width={900}
              height={600} />
          </div>
          <h3 className="text-lg leading-normal mb-2 font-semibold text-black">
          Hiring Model
          </h3>
          <p className="text-gray-500 text-sm">
          if your project requires additional manpower and extra resources, we're ready to scale up and bring in the necessary talent to meet your needs.
          </p>
          <button className="mt-5 text-xs sm:text-sm transform rounded bg-yellow-500 border border-slate-200 px-12 py-2 font-medium text-black transition-colors hover:bg-slate-50 "> Know More</button>
        </div>
      </div>
    </div>
  </div>
</section>




 {/* Help section */}
 <section className="text-center mx-auto my-8">
      <h2 className="cursor-default pb-2 font-extrabold text-transparent text-2xl md:text-5xl lg:text-6xl bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600 mt-3  tracking-tight ">
        Need Help ?
      </h2>
      <p className="cursor-default text-sm font-medium text-black mt-5 mb-10">
        Explore our comprehensive documentation for more information on our services.
      </p>
    
<div className="flex items-center justify-center gap-4 flex-wrap">
<Link to='/contactus'>
  <button className="text-xs sm:text-sm transform rounded bg-yellow-500 border border-slate-200 px-20 py-2 font-medium text-black transition-colors hover:bg-slate-50 ">
    FAQ
  </button></Link>
  <Link to='/contactus'>
  <button className="text-xs sm:text-sm transform rounded border border-slate-200 px-14 py-2 font-medium text-black transition-colors hover:bg-slate-50 hover:text-black">
    Contact us
  </button></Link>
 </div>
 </section>

</main>

  )
}

export default Webdevelopment