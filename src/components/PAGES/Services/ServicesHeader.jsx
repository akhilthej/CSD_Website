import React from 'react';
import {Link} from 'react-router-dom';

import {codeing ,graphicsdesign ,digitalmarketing ,mobiledev ,recruitment ,brand } from '../../data/data.jsx';

import ServicesHeaderimage from '../../../assets/ImagesPage/ServicesHeaderImage.webp';

const ServicesHeader = () => {
  return (
    <main>
      {/*Hero */}
  <section>
   <div className="bg-white  flex items-center justify-center mt-24 mb-5">
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
  </section>

  
    {/*MainFeatures */}
  <section>
      <section>
      <div className="pt-16 bg-gray-50 overflow-hidden">
      <div className="container m-auto px-6 space-y-8 text-gray-500 md:px-12">
      <div>
      <span className="text-gray-600 text-lg font-semibold">Main features</span>
      <h2 className="mt-4 text-2xl text-gray-900 font-bold md:text-4xl">
        Services, We Provide
      </h2>
      </div>
    
      <div className="mt-16 grid border divide-x divide-y rounded-xl overflow-hidden sm:grid-cols-2 lg:divide-y-0 lg:grid-cols-3 xl:grid-cols-4">
      <div className="relative group bg-white transition hover:z-[1] hover:shadow-2xl">
        <div className="relative p-8 space-y-8">
          <img src= {codeing}
            className="w-10"
            width={512}
            height={512}
            alt="coding_icon"
          /> 
          <div className="space-y-2">
            <h5 className="text-xl text-gray-800 font-medium transition group-hover:text-yellow-600">
              WEB DEVELOPMENT
            </h5>
            <p className="text-sm text-gray-600">
            Web development is the work involved in developing a website for the Internet (World Wide Web) or an intranet (a private network).
            </p>
          </div>
          <a href="#/services" className="flex justify-between items-center group-hover:text-yellow-600">
            <span className="text-sm">Read more</span>
            <span className="-translate-x-4 opacity-0 text-2xl transition duration-300 group-hover:opacity-100 group-hover:translate-x-0">
              →
            </span>
          </a>
        </div>
      </div>
      <div className="relative group bg-white transition hover:z-[1] hover:shadow-2xl">
        <div className="relative p-8 space-y-8">
          <img
            src= {recruitment}
            className="w-10"
            width={512}
            height={512}
            alt="burger illustration"
          />
          <div className="space-y-2">
            <h5 className="text-lg text-gray-800 font-medium transition group-hover:text-yellow-600">
              IT STAFFING & RECRUITING
            </h5>
            <p className="text-sm text-gray-600">
            IT staffing is the act of finding job candidates with the specialized skills needed to fill technology roles on your team.
            </p>
          </div>
          <a
            href="#/services"
            className="flex justify-between items-center group-hover:text-yellow-600"
          >
            <span className="text-sm">Read more</span>
            <span className="-translate-x-4 opacity-0 text-2xl transition duration-300 group-hover:opacity-100 group-hover:translate-x-0">
              →
            </span>
          </a>
        </div>
      </div>
      <div className="relative group bg-white transition hover:z-[1] hover:shadow-2xl">
        <div className="relative p-8 space-y-8">
          <img
            src= {mobiledev}
            className="w-10"
            width={512}
            height={512}
            alt="burger illustration"
          />
          <div className="space-y-2">
            <h5 className="text-base text-gray-800 font-medium transition group-hover:text-yellow-600">
              MOBILE APP DEVELOPMENT
            </h5>
            <p className="text-sm text-gray-600">
            The process of creating software applications that run on a mobile device.
            </p>
          </div>
          <a
            href="#/services"
            className="flex justify-between items-center group-hover:text-yellow-600"
          >
            <span className="text-sm">Read more</span>
            <span className="-translate-x-4 opacity-0 text-2xl transition duration-300 group-hover:opacity-100 group-hover:translate-x-0">
              →
            </span>
          </a>
        </div>
      </div>
      <div className="relative group bg-gray-100 transition hover:z-[1] hover:shadow-2xl lg:hidden xl:block">
        <div className="relative p-8 space-y-8 border-dashed rounded-lg transition duration-300 group-hover:bg-white group-hover:border group-hover:scale-90">
          <img
            src="https://tailus.io/sources/blocks/stacked/preview/images/avatars/metal.png"
            className="w-10"
            width={512}
            height={512}
            alt="burger illustration"
          />
          <div className="space-y-2">
            <h5 className="text-xl text-gray-800 font-medium transition group-hover:text-yellow-600">
              More features
            </h5>
            <p className="text-sm text-gray-600">
              Checkout of services page for more features or contact our support team if your looking for some new ideas.
            </p>
          </div>
          <a
            href="#/services"
            className="flex justify-between items-center group-hover:text-yellow-600"
          >
            <span className="text-sm">Read more</span>
            <span className="-translate-x-4 opacity-0 text-2xl transition duration-300 group-hover:opacity-100 group-hover:translate-x-0">
              →
            </span>
          </a>
        </div>
      </div>
      </div>
      </div>
        </div>
      </section>



      <section>
      <div className="pb-10 bg-gray-50 overflow-hidden">
        <div className="container m-auto px-6 space-y-8 text-gray-500 md:px-12">
        <div className="mt-0.5 grid border divide-x divide-y rounded-xl overflow-hidden sm:grid-cols-2 lg:divide-y-0 lg:grid-cols-3 xl:grid-cols-4">
      <div className="relative group bg-white transition hover:z-[1] hover:shadow-2xl">
        <div className="relative p-8 space-y-8">
          <img
            src= {graphicsdesign}
            className="w-10"
            width={512}
            height={512}
            alt="burger illustration"
          />
          <div className="space-y-2">
            <h5 className="text-xl text-gray-800 font-medium transition group-hover:text-yellow-600">
              UX/UI DESIGN
            </h5>
            <p className="text-sm text-gray-600">
            When it comes to product design, we often hear the terms “User Experience (UX)” and “User Interface (UI).”
            </p>
          </div>
          <a
            href="#/services"
            className="flex justify-between items-center group-hover:text-yellow-600"
          >
            <span className="text-sm">Read more</span>
            <span className="-translate-x-4 opacity-0 text-2xl transition duration-300 group-hover:opacity-100 group-hover:translate-x-0">
              →
            </span>
          </a>
        </div>
      </div>
      <div className="relative group bg-white transition hover:z-[1] hover:shadow-2xl">
        <div className="relative p-8 space-y-8">
          <img
            src= {digitalmarketing}
            className="w-10"
            width={512}
            height={512}
            alt="burger illustration"
          />
          <div className="space-y-2">
            <h5 className="text-xl text-gray-800 font-medium transition group-hover:text-yellow-600">
              DIGITAL MARKETING
            </h5>
            <p className="text-sm text-gray-600">
            Marketing has always been about connecting with your audience in the right place and at the right time. Today, that means you need to meet them where they are already spending time: on the internet.
            </p>
          </div>
          <a
            href="#/services"
            className="flex justify-between items-center group-hover:text-yellow-600"
          >
            <span className="text-sm">Read more</span>
            <span className="-translate-x-4 opacity-0 text-2xl transition duration-300 group-hover:opacity-100 group-hover:translate-x-0">
              →
            </span>
          </a>
        </div>
      </div>
      <div className="relative group bg-white transition hover:z-[1] hover:shadow-2xl">
        <div className="relative p-8 space-y-8">
          <img
            src={brand}
            className="w-10"
            width={512}
            height={512}
            alt="burger illustration"
          />
          <div className="space-y-2">
            <h5 className="text-xl text-gray-800 font-medium transition group-hover:text-yellow-600">
              ENDORSEMENT BRAND            </h5>
            <p className="text-sm text-gray-600">
            There are many potential methods that business professionals can use to develop successful branding strategies. Endorsed branding can allow companies to unify their branding efforts to meet their goals.
            </p>
          </div>
          <a
            href="#/services"
            className="flex justify-between items-center group-hover:text-yellow-600"
          >
            <span className="text-sm">Read more</span>
            <span className="-translate-x-4 opacity-0 text-2xl transition duration-300 group-hover:opacity-100 group-hover:translate-x-0">
              →
            </span>
          </a>
        </div>
      </div>
      <div className="relative group bg-gray-100 transition hover:z-[1] hover:shadow-2xl lg:hidden xl:block">
        <div className="relative p-8 space-y-8 border-dashed rounded-lg transition duration-300 group-hover:bg-white group-hover:border group-hover:scale-90">
          <img
            src="https://tailus.io/sources/blocks/stacked/preview/images/avatars/metal.png"
            className="w-10"
            width={512}
            height={512}
            alt="burger illustration"
          />
          <div className="space-y-2">
            <h5 className="text-xl text-gray-800 font-medium transition group-hover:text-yellow-600">
              More features
            </h5>
            <p className="text-sm text-gray-600">
            Checkout of services page for more features or contact our support team if your looking for some new ideas.
            </p>
          </div>
          <a
            href="#/services"
            className="flex justify-between items-center group-hover:text-yellow-600"
          >
            <span className="text-sm">Read more</span>
            <span className="-translate-x-4 opacity-0 text-2xl transition duration-300 group-hover:opacity-100 group-hover:translate-x-0">
              →
            </span>
          </a>
        </div>
      </div>
      </div>
      </div>
      </div>
      </section>
  </section>

</main>

  )
}

export default ServicesHeader