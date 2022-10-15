import React from 'react';
import {Link} from 'react-router-dom';

import codeing from '../../../assets/Icons/codeing.png';
import graphicsdesign from '../../../assets/Icons/graphicsdesign.png';
import digitalmarketing from '../../../assets/Icons/digitalmarketing.png';
import mobiledev from '../../../assets/Icons/mobiledev.png';
import recruitment from '../../../assets/Icons/recruitment.png';
import brand from '../../../assets/Icons/brand.png'



const HomeCards = () => {
  return (
    
    <main>
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
</main>
  )
}

export default HomeCards