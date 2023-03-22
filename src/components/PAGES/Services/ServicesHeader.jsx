import React from 'react';
import {Link} from 'react-router-dom';

import {HeroCoverBG } from '../../data/data.jsx';
import {morefeatures,softwaredev,codeing ,graphicsdesign ,digitalmarketing ,mobiledev ,recruitment ,brand , } from '../../data/data.jsx';

import ServicesHeroImg from '../../../assets/ImagesPage/ServicesHeaderImage.png'

const ServicesHeader = () => {
  return (
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
            <h3 className="text-4xl fade-in-down font-extrabold text-transparent  md:text-6xl bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-600 tracking-tight">Distribute your brand from&nbsp;Design to Code</h3>
            <p className="mt-2 text-lg text-white">
            Specify helps you unify your brand identity by collecting, storing and
            distributing design tokens and assets — automatically.
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
  </section>

  
{/*MainFeatures */}
<section>
<div style={{ backgroundImage: `url(${HeroCoverBG})`,backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
      <section>
      <div className="overflow-hidden">
      <div className="container m-auto px-6 space-y-8 text-white md:px-12">
      <div>
      <span className="text-lg font-semibold">Main features</span>
      <h2 className="mt-4 text-2xl text-white font-bold md:text-4xl">
        Services, We Provide
      </h2>
      </div>
    
      <div className="mt-16 grid bg-black/80 border divide-x divide-y rounded-xl overflow-hidden sm:grid-cols-2 lg:divide-y-0 lg:grid-cols-3 xl:grid-cols-4">
      <div className="relative group  transition hover:z-[1] hover:shadow-2xl">
        <div className="relative p-8 space-y-8">
          <img src= {codeing}
            className="w-10"
            width={512}
            height={512}
            alt="coding_icon"
          /> 
          <div className="space-y-2">
            <h5 className="text-lg text-white font-medium transition group-hover:text-yellow-600">
              WEB DEVELOPMENT
            </h5>
            <p className="text-sm text-white">
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
      <div className="relative group  transition hover:z-[1] hover:shadow-2xl">
        <div className="relative p-8 space-y-8">
          <img
            src= {recruitment}
            className="w-10"
            width={512}
            height={512}
            alt="burger illustration"
          />
          <div className="space-y-2">
            <h5 className="text-lg text-white font-medium transition group-hover:text-yellow-600">
              IT STAFFING & RECRUITING
            </h5>
            <p className="text-sm text-white">
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
      <div className="relative group  transition hover:z-[1] hover:shadow-2xl">
        <div className="relative p-8 space-y-8">
          <img
            src= {mobiledev}
            className="w-10"
            width={512}
            height={512}
            alt="burger illustration"
          />
          <div className="space-y-2">
            <h5 className="text-base text-white font-medium transition group-hover:text-yellow-600">
              MOBILE APP DEVELOPMENT
            </h5>
            <p className="text-sm text-white">
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
      <div className="relative group  transition hover:z-[1] hover:shadow-2xl">
        <div className="relative p-8 space-y-8">
          <img
            src= {softwaredev}
            className="w-10"
            width={512}
            height={512}
            alt="burger illustration" />
          <div className="space-y-2">
            <h5 className="text-base text-white font-medium transition group-hover:text-yellow-600">
            SOFTWARE DEVELOPMENT
            </h5>
            <p className="text-sm text-white">
            Software development refers to a set of computer science activities dedicated to the process of creating, designing, deploying and supporting software.
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
      <div className="pb-10  overflow-hidden">
        <div className=" container m-auto px-6 space-y-8 text-gray-500 md:px-12">
        <div className="bg-black/80 mt-0.5 grid border divide-x divide-y rounded-xl overflow-hidden sm:grid-cols-2 lg:divide-y-0 lg:grid-cols-3 xl:grid-cols-4">
      <div className="relative group transition hover:z-[1] hover:shadow-2xl">
        <div className="relative p-8 space-y-8">
          <img
            src= {graphicsdesign}
            className="w-10"
            width={512}
            height={512}
            alt="burger illustration"
          />
          <div className="space-y-2">
            <h5 className="text-xl text-white font-medium transition group-hover:text-yellow-600">
              UX/UI DESIGN
            </h5>
            <p className="text-sm text-white">
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
      <div className="relative group transition hover:z-[1] hover:shadow-2xl">
        <div className="relative p-8 space-y-8">
          <img
            src= {digitalmarketing}
            className="w-10"
            width={512}
            height={512}
            alt="burger illustration"
          />
          <div className="space-y-2">
            <h5 className="text-xl text-white font-medium transition group-hover:text-yellow-600">
              DIGITAL MARKETING
            </h5>
            <p className="text-sm text-white">
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
      <div className="relative group transition hover:z-[1] hover:shadow-2xl">
        <div className="relative p-8 space-y-8">
          <img
            src={brand}
            className="w-10"
            width={512}
            height={512}
            alt="burger illustration"
          />
          <div className="space-y-2">
            <h5 className="text-xl text-white font-medium transition group-hover:text-yellow-600">
              ENDORSEMENT BRAND            </h5>
            <p className="text-sm text-white">
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
      <div className="relative group  transition hover:z-[1] hover:shadow-2xl lg:hidden xl:block">
        <div className="relative p-8 space-y-8 border-dashed rounded-lg transition duration-300 group-hover:bg-pink-500 group-hover:border group-hover:scale-90">
          <img
            src={morefeatures}
            className="w-10"
            width={512}
            height={512}
            alt="morefeatures"
          />
          <div className="space-y-2">
            <h5 className="text-xl text-white font-medium transition group-hover:text-yellow-600">
              More features
            </h5>
            <p className="text-sm text-white">
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
      </div>
      </section>

</main>

  )
}

export default ServicesHeader