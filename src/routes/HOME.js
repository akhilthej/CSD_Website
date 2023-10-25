import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import Brand_slider from "../components/Brand_slider";
import ServicesTab from "../components/ServicesTab";

import { HomeVideo } from "../components/data/data";
import ImageSlider from "../components/ImageSlider";

import {
  FixedPrice,
  OntimeDelivery,
  TimeManage,
  HiringModel,
} from "../components/data/data";
import {
  documentationicon,
  socialicon,
  analysisicon,
  financeicon,
  statergyicon,
  businessreporticon,
} from "../components/data/data";

const Home = () => {
  return (
    <>
      {/* SEO */}
      <Helmet>
        <title>Cyber Space Digital - Web Development and Digital Marketing Company</title>
        <meta
          name="description"
          content="Cyber Space Digital is a Web Development and Digital Marketing Company. We are here to build your business online. Your one-stop solution for all your digital needs."
        />
        <link rel="canonical" href="https://cyberspacedigital.in/" />
      </Helmet>

      <main className=" overflow-hidden">
        <ImageSlider />

        {/*herosection */}

        <section class="flex items-center my-5 justify-center  bg-white">
          <div class="mx-auto max-w-[55rem]">
            <div class="text-center">
              <null class="cursor-default text-sm sm:text-2xl font-extrabold leading-8 text-gray-900">
                DESIGN . DEVELOP & DEPLOY
              </null>
              <h1 class="cursor-default pb-0 sm:pb-5 upanddown font-extrabold text-transparent text-4xl md:text-7xl lg:text-8xl bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600 mt-3 leading-[3.5rem] tracking-tight">
                Cyber Space Digital
              </h1>

              <p class="cursor-default text-sm sm:text-xl font-extrabold leading-8 text-gray-900">
                Take your brand online today for a global presence.
              </p>
            </div>
            <div class="mt-6 flex items-center justify-center gap-4 flex-wrap">
              <a href="/contactus">
                <button class="text-xs sm:text-sm transform rounded bg-yellow-500 border border-slate-200 px-12 py-2 font-medium text-black transition-colors hover:bg-slate-50">
                  Build Today
                </button>
              </a>
              <a href="/getquotation">
                <button class="text-xs sm:text-sm transform rounded border border-slate-200 px-12 py-2 font-medium text-black transition-colors hover:bg-orange-600 hover:text-black">
                  Get Quotation
                </button>
              </a>
            </div>
          </div>
        </section>

        {/* Video 
        <div className="flex justify-center items-center">
          <video
            className="rounded-lg"
            poster=""
            loop
            width="80%"
            height="auto"
            autoPlay
            muted
            playsInline
          >
            <source src={HomeVideo} type="video/mp4" />
          </video>
        </div>*/}

        {/* Tagline */}
        <section className="flex items-center my-10 justify-center  bg-white ">
          <div className="mx-auto max-w-[55rem]">
            <div className="text-center">
              <p className="cursor-default text-sm sm:text-4xl font-extrabold  text-gray-900">
                Your Vision, Our Code – Perfectly Executed.
              </p>

              <p className="cursor-default text-sm sm:text-xl pt-5  text-gray-900">
                Unlocking the Full Potential of Your Online Brand.
              </p>
            </div>
            <div className="mt-6 flex items-center justify-center gap-4 flex-wrap"></div>
            <div className="mt-6 flex items-center justify-center gap-4 flex-wrap">
              <a href="https://api.whatsapp.com/send?phone=918143407758&text=Welcome%20to%20Cyberspacedigital">
                <button className="text-xs sm:text-sm transform rounded bg-yellow-500 border border-slate-200 px-12 py-2 font-medium text-black transition-colors hover:bg-slate-50">
                  Contact Now
                </button>
              </a>
            </div>
          </div>
        </section>

        {/* Clients */}
        <Brand_slider />

        {/* Services */}
        <ServicesTab />

        {/* WE BUILD */}
        <section  style={{ backgroundImage: 'url("https://drive.google.com/uc?id=1YbaOxUrnvo_bq067RffGDgedztOaEMia")', backgroundSize: 'cover', backgroundPosition: 'top' }}>
          <div className="cursor-default py-40 flex flex-col items-center justify-center bg-black/70">
            <div className="text-center">
              <h2 className="font-extrabold text-transparent text-4xl md:text-5xl lg:text-8xl bg-clip-text bg-yellow-400 tracking-tight ">
                WE BUILD
              </h2>
            </div>
            <div className="text-center">
              <h2 className="font-extrabold text-transparent text-5xl md:text-5xl lg:text-5xl bg-clip-text bg-orange-600 tracking-tight ">
                SIMPLE BUT COMPLEX
              </h2>
            </div>
            <div className="text-center">
              <h2 className="font-extrabold text-transparent text-4xl md:text-5xl lg:text-8xl bg-clip-text bg-yellow-400 tracking-tight ">
                STABLE COMMUNITY
              </h2>
            </div>
          </div>
        </section>

        {/*Whatdowedo */}
        <section>
          <div className="cursor-default px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
            <div className="max-w-screen-md mb-8 lg:mb-16">
              <h2 className="font-extrabold text-transparent text-4xl md:text-5xl lg:text-8xl bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600 mt-3 text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] leading-[3.5rem] tracking-tight text-black">
                What do we do?
              </h2>
              <p className=" text-black sm:text-xl ">
                How we research our clients requirements and processes.
              </p>
            </div>
            <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
              <div>
                <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 ">
                  <img src={documentationicon} alt="documentation" />
                </div>
                <h3 className="text-black mb-2 text-xl font-bold ">
                  Documentation
                </h3>
                <p className="text-black ">
                  Seems to be a herculean task for a project manager. Project
                  managers are often engaged in delivering high-end complex
                  projects.
                </p>
              </div>
              <div>
                <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 ">
                  <img src={analysisicon} alt="analysisicon" />
                </div>
                <h3 className="text-black mb-2 text-xl font-bold ">Analyze</h3>
                <p className="text-black ">
                  When executing a project,we analyze it periodically. Failing
                  to do so, would mean unexpected challenges, overlooked
                  critical information, or flaws in the work process that
                  manifest as the project unfolds.
                </p>
              </div>
              <div>
                <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 ">
                  <img src={socialicon} alt="socialicon" />
                </div>
                <h3 className="text-black mb-2 text-xl font-bold ">
                  Social Media Presents
                </h3>
                <p className="text-black ">
                  A company's social media presence is how they portray
                  themselves online through their social networking accounts and
                  activity. Building a social media presence starts with
                  developing your goals.
                </p>
              </div>
              <div>
                <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 ">
                  <img src={financeicon} alt="financeicon" />
                </div>
                <h3 className="text-black mb-2 text-xl font-bold ">Finance</h3>
                <p className="text-black ">
                  the funding of long-term projects, such as public
                  infrastructure or services, industrial projects, and others
                  through a specific financial structure.
                </p>
              </div>
              <div>
                <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 ">
                  <img src={statergyicon} alt="statergyicon" />
                </div>
                <h3 className="text-black mb-2 text-xl font-bold ">Strategy</h3>
                <p className="text-black ">
                  Craft beautiful, delightful experiences for both marketing and
                  product with real cross-company collaboration.
                </p>
              </div>
              <div>
                <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 ">
                  <img src={businessreporticon} alt="businessreporticon" />
                </div>
                <h3 className="text-black mb-2 text-xl font-bold ">
                  Business Report
                </h3>
                <p className="text-black ">
                  At the end of every project we present our clients with
                  detailed reports .which can help them understand what we did
                  for there project.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/*Explore */}
        <section style={{ backgroundImage: 'url("https://drive.google.com/uc?id=17CKOf3456AJ6ZjKhbaLuKGziUWrTUrAG")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <section>
            <div className="cursor-default container px-6 py-10 mx-auto bg-black/60">
              <div className="lg:flex lg:items-center ">
                <div className="w-full space-y-12 lg:w-1/2 ">
                  <div>
                    <h2 className="text-3xl font-semibold text-white capitalize lg:text-4xl ">
                      explore our <br /> Resources for our community
                    </h2>
                    <div className="mt-2">
                      <span className="inline-block w-40 h-1 rounded-full bg-yellow-500" />
                      <span className="inline-block w-3 h-1 ml-1 rounded-full bg-yellow-500" />
                      <span className="inline-block w-1 h-1 ml-1 rounded-full bg-yellow-500" />
                    </div>
                  </div>
                  <div className="md:flex md:items-start md:-mx-4">
                    <span className="inline-block p-2 text-white bg-yellow-500 rounded-xl md:mx-4  ">
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
                          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h20a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                        />
                      </svg>
                    </span>
                    <div className="mt-4 md:mx-4 md:mt-0">
                      <h2 className="text-2xl font-semibold text-white capitalize ">
                        Custom CRM
                      </h2>
                      <p className="mt-3 text-white ">
                        Customer relationship management (CRM) is a technology
                        for managing all your company's relationships and
                        interactions with customers and potential customers. The
                        goal is simple: Improve business relationships.
                      </p>
                    </div>
                  </div>
                  <div className="md:flex md:items-start md:-mx-4">
                    <span className="inline-block p-2 text-white bg-yellow-500 rounded-xl md:mx-4 ">
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
                      <h2 className="text-2xl font-semibold text-white capitalize ">
                        Google Data Maps Mining
                      </h2>
                      <p className="mt-3 text-white ">
                        Data mapping is crucial to the success of many data
                        processes. One misstep in data mapping can ripple
                        throughout your organization, leading to replicated
                        errors, and ultimately, to inaccurate analysis.
                      </p>
                    </div>
                  </div>
                  <div className="md:flex md:items-start md:-mx-4">
                    <span className="inline-block p-2 text-white  bg-yellow-500 rounded-xl md:mx-4 ">
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
                      <h2 className="text-2xl font-semibold text-white capitalize">
                        Custom Testing Tools
                      </h2>
                      <p className="mt-3 text-white ">
                        Testing Tools in software testing can be defined as
                        products that support various test activities starting
                        from planning, requirement gathering, build creation,
                        test execution, defect logging and test analysis.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="hidden lg:flex lg:items-center lg:w-1/2 lg:justify-center">
                  <img
                    className="w-[28rem] h-[28rem] object-cover xl:w-[34rem] xl:h-[34rem] "
                    src="https://drive.google.com/uc?id=17CKOf3456AJ6ZjKhbaLuKGziUWrTUrAG"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </section>
        </section>

        {/*Line of Engagement */}
        <section
          id="services"
          className="cursor-default section relative pt-10 pb-8 md:pt-16 md:pb-10"
        >
          <div className="xl:max-w-8xl mx-auto px-4">
            {/* Heading for "Line of Engagement" section */}

            <section className="text-center mx-auto mb-12 lg:px-20">
              <h2 className="pb-2 font-extrabold text-transparent text-2xl md:text-5xl lg:text-6xl bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600 mt-3 ">
                Line of Engagement
              </h2>
              <p className="text-sm font-medium text-black">
                Streamline the management of advertising and content for your
                business, saving you valuable time.
              </p>
            </section>

            {/* "Fixed Price Model" section */}
            <div className="flex flex-wrap flex-row -mx-4 text-center">
              <div
                className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/4 lg:px-6 wow fadeInUp"
                data-wow-duration="1s"
                style={{
                  visibility: "visible",
                  animationDuration: "1s",
                  animationName: "fadeInUp",
                }}
              >
                <div className="py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
                  <div className="inline-block text-gray-900 mb-4">
                    <img
                      src={FixedPrice}
                      className="w-40 ml-auto"
                      alt="illustration"
                      loading="lazy"
                      width={900}
                      height={600}
                    />
                  </div>
                  <h3 className="text-lg leading-normal mb-2 font-semibold text-black">
                    Fixed Price Model
                  </h3>
                  <p className="text-gray-500 text-sm">
                    Under this model, the web development company and the client
                    agree on a fixed price for the entire project scope.
                  </p>
                </div>
              </div>

              {/* "Time and Materials Model" section */}
              <div
                className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/4 lg:px-6 wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay=".1s"
                style={{
                  visibility: "visible",
                  animationDuration: "1s",
                  animationDelay: "0.1s",
                  animationName: "fadeInUp",
                }}
              >
                <div className="py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
                  <div className="inline-block text-gray-900 mb-4">
                    <img
                      src={TimeManage}
                      className="w-40 ml-auto"
                      alt="illustration"
                      loading="lazy"
                      width={900}
                      height={600}
                    />
                  </div>
                  <h3 className="text-lg leading-normal mb-2 font-semibold text-black">
                    Time and Materials Model
                  </h3>
                  <p className="text-gray-500 text-sm">
                    The client pays based on the time and resources spent on the
                    project.
                  </p>
                </div>
              </div>

              {/* "On-Time Delivery" section */}
              <div
                className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/4 lg:px-6 wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay=".3s"
                style={{
                  visibility: "visible",
                  animationDuration: "1s",
                  animationDelay: "0.3s",
                  animationName: "fadeInUp",
                }}
              >
                <div className="py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
                  <div className="inline-block text-gray-900 mb-4">
                    <img
                      src={OntimeDelivery}
                      className="w-40 ml-auto"
                      alt="illustration"
                      loading="lazy"
                      width={900}
                      height={600}
                    />
                  </div>
                  <h3 className="text-lg leading-normal mb-2 font-semibold text-black">
                    On-Time Delivery
                  </h3>
                  <p className="text-gray-500 text-sm">
                    The web development company commits to delivering projects
                    on or before agreed-upon deadlines.
                  </p>
                </div>
              </div>

              {/* "Hiring Model" section */}
              <div
                className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/4 lg:px-6 wow fadeInUp"
                data-wow-duration="1s"
                data-wow-delay=".3s"
                style={{
                  visibility: "visible",
                  animationDuration: "1s",
                  animationDelay: "0.3s",
                  animationName: "fadeInUp",
                }}
              >
                <div className="py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
                  <div className="inline-block text-gray-900 mb-4">
                    <img
                      src={HiringModel}
                      className="w-40 ml-auto"
                      alt="illustration"
                      loading="lazy"
                      width={900}
                      height={600}
                    />
                  </div>
                  <h3 className="text-lg leading-normal mb-2 font-semibold text-black">
                    Hiring Model
                  </h3>
                  <p className="text-gray-500 text-sm">
                    if your project requires additional manpower and extra
                    resources, we're ready to scale up and bring in the
                    necessary talent to meet your needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* "Documentation" section */}
        <section className="text-center mx-auto my-8">
          <h2 className="cursor-default pb-2 font-extrabold text-transparent text-2xl md:text-5xl lg:text-6xl bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600 mt-3  tracking-tight ">
            Need Help ?
          </h2>
          <p className="cursor-default text-sm font-medium text-black mt-5 mb-10">
            Explore our comprehensive documentation for more information on our
            services.
          </p>

          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link to="/contactus">
              <button className="text-xs sm:text-sm transform rounded bg-yellow-500 border border-slate-200 px-20 py-2 font-medium text-black transition-colors hover:bg-slate-50 ">
                FAQ
              </button>
            </Link>
            <Link to="/contactus">
              <button className="text-xs sm:text-sm transform rounded border border-slate-200 px-14 py-2 font-medium text-black transition-colors hover:bg-slate-50 hover:text-black">
                Contact us
              </button>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
