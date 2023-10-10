import React from 'react';

import './Home.scss';
import {CSDbothome } from '../../data/data.jsx';
import '../../Tools/Animations.scss';

import {Advertising ,Branding ,DigitalMarketing ,GraphicDesign ,MobileAppDevelopment ,WebDevelopment ,morefeatures} from '../../data/data.jsx';

import {FixedPrice,OntimeDelivery,TimeManage} from '../../data/data'
import {documentationicon ,socialicon ,analysisicon ,financeicon ,statergyicon ,businessreporticon ,}from '../../data/data.jsx';


const HomeHero = () => {
  return (
  <main className='my-20 mx-5 sm:my-20 sm:mx-20'>
{/*herosection desktop*/}    
<header >
  <section className="flex items-center  justify-center">
      <div className="mx-auto max-w-[55rem]">
        <div className="text-center">
          <p className="text-sm font-medium leading-8 text-white">
            Introducing Design Data Platform
          </p>
          <h1 className="upanddown pb-8 font-extrabold text-transparent text-4xl md:text-5xl lg:text-6xl bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600 mt-3 text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] leading-[3.5rem] tracking-tight text-black">
  Cyber Space Digital
</h1>

          <p className="text-sm font-medium leading-8 text-white">
          We help your brand to build digital, Providing Global Presence.
          </p>
        </div>
        <div className="mt-6 flex items-center justify-center gap-4 flex-wrap">
  <a
    href="/contactus"
    className="text-xs sm:text-sm transform rounded bg-yellow-500 border border-slate-200 px-12 py-2 font-medium text-black transition-colors hover:bg-slate-50 "
  >
    Build Today
  </a>
  <a
    href="/getquotation"
    className="text-xs sm:text-sm transform rounded border border-slate-200 px-12 py-2 font-medium text-white transition-colors hover:bg-slate-50 hover:text-black"
  >
    Get Quotation
  </a>
 </div>

      </div>
    </section>
</header>


{/*MainFeatures */}
<section>
<div>
  <div className="container pt-10 m-auto  text-gray-500 md:px-12 xl:px-0">
    <div className="mx-auto grid gap-6 md:w-3/4 lg:w-full lg:grid-cols-3">
      <div className="bg-white rounded-2xl shadow-xl px-8 py-5 sm:px-12 lg:px-8">
        <div className="mb-12 space-y-4">
          <h3 className="text-2xl font-semibold text-yellow-500">
           Web Development
          </h3>
          <p className="">
          Web development is the work involved in developing a website for the Internet (World Wide Web) or an intranet (a private network).
          </p>
          <a href="#" className="block font-medium text-orange-600">
            Know more
          </a>
        </div>
        <img
          src={WebDevelopment}
          className="w-2/3 ml-auto -mb-12"
          alt="illustration"
          loading="lazy"
          width={900}
          height={600}/>
  </div>


      
      <div className="bg-white rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8">
        <div className="mb-12 space-y-4">
          <h3 className="text-2xl font-semibold text-yellow-500">Mobile App Development</h3>
          <p className="mb-6">
          The process of creating software applications that run on a mobile device.
          </p>
          <a href="#" className="block font-medium text-orange-600">
            Know more
          </a>
        </div>
        <img
          src={MobileAppDevelopment}
          className="w-2/3 ml-auto"
          alt="illustration"
          loading="lazy"
          width={900}
          height={600}
        />
      </div>
      <div className="bg-white rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8">
        <div className="mb-12 space-y-4">
          <h3 className="text-2xl font-semibold text-yellow-500">Digital Marketing</h3>
          <p className="mb-6">
          Marketing has always been about connecting with your audience in the right place and at the right time. Today, that means you need to meet them where they are already spending time: on the internet.
          </p>
          <a href="#" className="block font-medium text-orange-600">
            Know more
          </a>
        </div>
        <img
          src={DigitalMarketing}
          className="w-2/3 ml-auto "
          alt="illustration"
          loading="lazy"
          width={900}
          height={600}
        />
      </div>
    </div>
  </div>
</div>


<div className='py-8'>
  <div className="container m-auto  text-gray-500 md:px-12 xl:px-0">
    <div className="mx-auto grid gap-6 md:w-3/4 lg:w-full lg:grid-cols-3">
      <div className="bg-white rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8">
        <div className="mb-12 space-y-4">
          <h3 className="text-2xl font-semibold text-yellow-500">
            Graphic Design
          </h3>
          <p className="mb-6">
          The art of conveying messages and ideas through creative visuals and layouts, combining aesthetics with effective communication.
          </p>
          <a href="#" className="block font-medium text-orange-600">
            Know more
          </a>
        </div>
        <img
          src={GraphicDesign}
          className="w-2/3 ml-auto -mb-12"
          alt="illustration"
          loading="lazy"
          width={900}
          height={600}
        />
      </div>
      <div className="bg-white rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8">
        <div className="mb-12 space-y-4">
          <h3 className="text-2xl font-semibold text-yellow-500">Brand Services</h3>
          <p className="mb-6">
          There are many potential methods that business professionals can use to develop successful branding strategies. Endorsed branding can allow companies to unify their branding efforts to meet their goals.
          </p>
          <a href="#" className="block font-medium text-orange-600">
            Know more
          </a>
        </div>
        <img
          src={Branding}
          className="w-2/3 ml-auto"
          alt="illustration"
          loading="lazy"
          width={900}
          height={600}
        />
      </div>
      <div className="bg-white rounded-2xl shadow-xl px-8 py-12 sm:px-12 lg:px-8">
        <div className="mb-12 space-y-4">
          <h3 className="text-2xl font-semibold text-yellow-500">Advertising</h3>
          <p className="mb-6">
            
Advertising ATL (Above the Line) refers to mass media advertising methods like TV, radio, and print, targeting a broad audience. BTL (Below the Line) involves more targeted, direct, and personalized marketing strategies, often using digital and experiential methods.
          </p>
          <a href="#" className="block font-medium text-orange-600">
            Know more
          </a>
        </div>
        <img
          src={Advertising}
          className="w-2/3 ml-auto "
          alt="illustration"
          loading="lazy"
          width={900}
          height={600}
        />
      </div>
    </div>
  </div>
</div>
</section>




{/*Sidecard1 */}
<section>
  <div className="homesidecard1">
    <div className="md:flex">
      <div className='backgroundhome2'>
        <div>
          <img src={CSDbothome} alt="CSDbothome" style={{ maxWidth: '70%', height: 'auto' }} />
        </div>
      </div>

      <div className="md:w-7/12 lg:w-6/12">
        <h2 className="text-4xl md:text-5xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600 mt-3 leading-[4rem] tracking-tight">
          We develop our brand with passionate developers.
        </h2>
        <p className="text-sm pt-4 text-white mx-2">
          We develop our companies, projects, and brands with a purpose,
          to help them engage their clients and audience. Providing them first-class quality
          so they can build awareness, trust, and create conversations for a long time.
        </p>
        <p className="text-sm pt-4 text-white">
          Quality company or brand is the perception of quality that a brand achieves with its customers and clients.
          Quality is often defined as meeting the expectations of customers.
        </p>
      </div>
    </div>
  </div>
</section>




{/*HomeSection1 */}
      <section>
       
        <div className ='backgroundhome1 pt-20'>
          <h1 className=" py-5 text-center text-xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400  md:text-5xl lg:text-6xl ">
            <h1>WE BUILD</h1>
            <span className="sm:text-6xl bg-clip-text bg-gradient-to-r to-orange-600 from-yellow-400">
              "SIMPLE BUT COMPLEX"
            </span>{" "}
          <h1>-STABLE COMMUNITY-</h1></h1></div>
          
      </section>

{/*HomeSection2 */}
      <section>
    
    <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8">
      <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
        <span className="pl-5 block">Lets start building!</span>
        <span className="pl-5 pt-2 block text-blue-600 text-xl">Are you Ready to build your project with us?</span>
      </h2>
      <div className="pr-40 mt-8 flex lg:mt-0 lg:flex-shrink-0">
        <div className="inline-flex rounded-md shadow">
        <a href="/contactus" className="transform rounded-mdpx-6 rounded bg-gradient-to-r from-orange-400 to-pink-600 px-5 py-3 font-medium text-white transition-colors hover:from-pink-600 hover:to-orange-400">
             Build.Now
          </a>
        </div>
        <div className="ml-3 inline-flex rounded-md shadow">
        <a href="/aboutus" className="transform rounded-mdpx-6 rounded bg-gradient-to-r from-white to-white px-5 py-3 font-medium text-black transition-colors ">
            More
          </a>
        </div>
      </div>
    </div>

      </section>

{/*Whatdowedo */}
      <section>
    <section >
  <div className="px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
    <div className="max-w-screen-md mb-8 lg:mb-16">
      <h2 className="fade-in-left text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-600 mt-3 text-[3.5rem]  leading-[4rem] tracking-tight ">
        What do we do?
      </h2>
      <p className=" text-gray-300 sm:text-xl ">
        How we research our clients requirements and processes.
      </p>
    </div>
    <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
      <div>
        <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 ">
        <img src= {documentationicon}
            alt="documentation"/> 
        </div>
        <h3 className="text-white mb-2 text-xl font-bold ">Documentation</h3>
        <p className="text-gray-300 ">
        Seems to be a herculean task for a project manager. 
        Project managers are often engaged in delivering 
        high-end complex projects.
        </p>
      </div>
      <div>
        <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 ">
        <img src= {analysisicon} alt="analysisicon"/> 
        </div>
        <h3 className="text-white mb-2 text-xl font-bold ">Analyze</h3>
        <p className="text-gray-300 ">
        When executing a project,we analyze it 
        periodically. Failing to do so, would mean unexpected 
        challenges, overlooked critical information, or flaws 
        in the work process that manifest as the project 
        unfolds.
        </p>
      </div>
      <div>
        <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 ">
        <img src= {socialicon} alt="socialicon"/> 
        </div>
        <h3 className="text-white mb-2 text-xl font-bold ">
          Social Media Presents
        </h3>
        <p className="text-gray-300 ">
        A company's social media presence is how they portray 
        themselves online through their social networking 
        accounts and activity. Building a social media 
        presence starts with developing your goals.
        </p>
      </div>
      <div>
        <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 ">
        <img src= {financeicon} alt="financeicon"/>
        </div>
        <h3 className="text-white mb-2 text-xl font-bold ">Finance</h3>
        <p className="text-gray-300 ">
        the funding of long-term projects, such as public 
        infrastructure or services, industrial projects, and 
        others through a specific financial structure.
        </p>
      </div>
      <div>
        <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 ">
        <img src= {statergyicon} alt="statergyicon"/>
        </div>
        <h3 className="text-white mb-2 text-xl font-bold ">
        Strategy
        </h3>
        <p className="text-gray-300 ">
          Craft beautiful, delightful experiences for both marketing and product
          with real cross-company collaboration.
        </p>
      </div>
      <div>
        <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 ">
        <img src= {businessreporticon} alt="businessreporticon"/>
        </div>
        <h3 className="text-white mb-2 text-xl font-bold ">Business Report</h3>
        <p className="text-gray-300 ">
          At the end of every project we present our clients with detailed reports
           .which can help them understand what we did for there project.
        </p>
      </div>
    </div>
  </div>
</section>
      </section>

{/*Sidecard2 */}
      <section>
  {/* component */}
  <section>
    <div className="container px-6 py-10 mx-auto">
      <div className="lg:flex lg:items-center">
        <div className="w-full space-y-12 lg:w-1/2 ">
          <div>
            <h1 className="text-3xl font-semibold text-white capitalize lg:text-4xl ">
              explore our <br /> Resources for our community
            </h1>
            <div className="mt-2">
              <span className="inline-block w-40 h-1 rounded-full bg-blue-500" />
              <span className="inline-block w-3 h-1 ml-1 rounded-full bg-blue-500" />
              <span className="inline-block w-1 h-1 ml-1 rounded-full bg-blue-500" />
            </div>
          </div>
          <div className="md:flex md:items-start md:-mx-4">
            <span className="inline-block p-2 text-white bg-blue-500 rounded-xl md:mx-4  ">
              <svg
                xmlns="https://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                />
              </svg>
            </span>
            <div className="mt-4 md:mx-4 md:mt-0">
              <h1 className="text-2xl font-semibold text-white capitalize ">
                Custom CRM
              </h1>
              <p className="mt-3 text-gray-300 ">
              Customer relationship management (CRM) is a technology 
              for managing all your company's relationships and interactions with 
              customers and potential customers. The goal is simple: Improve business 
              relationships.
              </p>
            </div>
          </div>
          <div className="md:flex md:items-start md:-mx-4">
            <span className="inline-block p-2 text-white bg-blue-500 rounded-xl md:mx-4 ">
              <svg
                xmlns="https://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                />
              </svg>
            </span>
            <div className="mt-4 md:mx-4 md:mt-0">
              <h1 className="text-2xl font-semibold text-white capitalize ">
                Google Data Maps Mining
              </h1>
              <p className="mt-3 text-gray-300 ">
              Data mapping is crucial to the success of many data processes. 
              One misstep in data mapping can ripple throughout your organization, leading 
              to replicated errors, and ultimately, to inaccurate analysis.
              </p>
            </div>
          </div>
          <div className="md:flex md:items-start md:-mx-4">
            <span className="inline-block p-2 text-white  bg-blue-500 rounded-xl md:mx-4 ">
              <svg
                xmlns="https://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
                />
              </svg>
            </span>
            <div className="mt-4 md:mx-4 md:mt-0">
              <h1 className="text-2xl font-semibold text-white capitalize">
                Custom Testing Tools
              </h1>
              <p className="mt-3 text-gray-300 ">
              Testing Tools in software testing can be defined as products 
              that support various test activities starting from planning, requirement 
              gathering, build creation, test execution, defect logging and test analysis.
              </p>
            </div>
          </div>
        </div>
        <div className="hidden lg:flex lg:items-center lg:w-1/2 lg:justify-center">
          <img
            className="w-[28rem] h-[28rem] object-cover xl:w-[34rem] xl:h-[34rem] rounded-full"
            src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=755&q=80"
            alt=""
          />
        </div>
      </div>
      
     
    </div>
  </section>
      </section>







    <div id="services"
  className="section relative pt-20 pb-8 md:pt-16 md:pb-0 ">
  <div className="container xl:max-w-6xl mx-auto px-4">
    {/* Heading start */}
    <header className="text-center mx-auto mb-12 lg:px-20">
    <h2 className=" pb-5 font-extrabold text-transparent text-4xl md:text-5xl lg:text-6xl bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600 mt-3 text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] leading-[3.5rem] tracking-tight text-black">
  Line of Engagement 
</h2>
      
      <p className="text-sm font-medium leading-8 text-white">
          Streamline the management of advertising and content for your business, saving you valuable time
          </p>
    </header>
    {/* End heading */}
    {/* row */}
    <div className="flex flex-wrap flex-row -mx-4 text-center">
      <div
        className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp"
        data-wow-duration="1s"
        style={{
          visibility: "visible",
          animationDuration: "1s",
          animationName: "fadeInUp"
        }}
      >
        {/* service block */}
        <div className="py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
          <div className="inline-block text-gray-900 mb-4">
          <img
          src={FixedPrice}
          className="w-40 ml-auto"
          alt="illustration"
          loading="lazy"
          width={900}
          height={600}/>
            
            
          </div>
          <h3 className="text-lg leading-normal mb-2 font-semibold text-black">
          Fixed Price Model
          </h3>
          <p className="text-gray-500">
          Under this model, the web development company and the client agree on a fixed price for the entire project scope.

          </p>
        </div>
        {/* end service block */}
      </div>
      <div
        className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp"
        data-wow-duration="1s"
        data-wow-delay=".1s"
        style={{
          visibility: "visible",
          animationDuration: "1s",
          animationDelay: "0.1s",
          animationName: "fadeInUp"
        }}
      >
        {/* service block */}
        <div className="py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
          <div className="inline-block text-gray-900 mb-4">
          <img
          src={TimeManage}
          className="w-40 ml-auto"
          alt="illustration"
          loading="lazy"
          width={900}
          height={600}/>

          </div>
          <h3 className="text-lg leading-normal mb-2 font-semibold text-black">
          Time and Materials Model
          </h3>
          <p className="text-gray-500">
          the client pays based on the time and resources spent on the project. 

          </p>
        </div>
        {/* end service block */}
      </div>
      <div
        className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp"
        data-wow-duration="1s"
        data-wow-delay=".3s"
        style={{
          visibility: "visible",
          animationDuration: "1s",
          animationDelay: "0.3s",
          animationName: "fadeInUp"
        }}
      >
        {/* service block */}
        <div className="py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
          <div className="inline-block text-gray-900 mb-4">
           <img
          src={OntimeDelivery}
          className="w-40 ml-auto"
          alt="illustration"
          loading="lazy"
          width={900}
          height={600}/>

          </div>
          <h3 className="text-lg leading-normal mb-2 font-semibold text-black">
          On-Time Delivery
          </h3>
          <p className="text-gray-500">
          The web development company commits to delivering projects on or before agreed-upon deadlines.

          </p>
        </div>
        {/* end service block */}
      </div>
      <div
        className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp"
        data-wow-duration="1s"
        style={{
          visibility: "visible",
          animationDuration: "1s",
          animationName: "fadeInUp"
        }}>
        {/* end service block */}
      </div>
    </div>
    {/* end row */}

<div className="mt-2 flex items-center justify-center gap-4 flex-wrap">
  <a
    href="/contactus"
    className="text-xs sm:text-sm transform rounded bg-yellow-500 border border-slate-200 px-20 py-2 font-medium text-black transition-colors hover:bg-slate-50 "
  >
    FAQ
  </a>
  <a
    href="/getquotation"
    className="text-xs sm:text-sm transform rounded border border-slate-200 px-14 py-2 font-medium text-white transition-colors hover:bg-slate-50 hover:text-black"
  >
    Know More
  </a>
 </div>
  </div>
</div>


  </main>


  )
}

export default HomeHero