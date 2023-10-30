import React from 'react'
import { Link } from 'react-router-dom'

import {
    FixedPrice,
    OntimeDelivery,
    TimeManage,
    HiringModel,
  } from "../../../assets/data/Imagedata";
import LogoPortfolioSlider from '../../../components/Sliders/LogoPortfolioSlider'



const LogoDesign = () => {

  const sectionsData = {
    section1: {
      /* Title Card */
      title: 'Logo Design',
      subtitle: 'Create a Unique Identity for Your Brand',
    },}

  const faqData = [
    {
      question: 'What services do you offer?',
      answer:
        'We offer a wide range of services, including web development, mobile app development, custom software development, UX/UI design, and digital strategy consulting.',
    },
    {
      question: 'What platforms do you develop apps for?',
      answer:
        'We develop apps for iOS, Android, and cross-platform solutions like React Native and Flutter.',
    },
    {
      question: 'Do you offer both front-end and back-end development?',
      answer:
        'Yes, we provide both front-end and back-end development services to create fully functional web and mobile applications.',
    },

  ];

  return (
    <main>
    {/* Title Card */}
      <section
        className="py-10 sm:py-40"
        style={{
          backgroundImage:
            'url("https://drive.google.com/uc?id=1-RKGIgPQ6gfNDnoW1jr6R_TzB9P_12ge")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }} >
        <div className="flex flex-col items-center md:flex-row justify-center">
          <div className="md:w-1/2 md:pr-10"></div>
          <div className="md:w-1/2 px-5">
            <div className="text-right md:text-left">
              {" "}
              {/* Align titles to the right on mobile, left on larger screens */}
              <h3 className="cursor-default  text-2xl pb-5 md:text-6xl fade-in-down font-extrabold text-center text-white tracking-tight">
                {sectionsData.section1.title}
              
              </h3>
              <p className="cursor-default text-white sm:text-sm text-xs text-center sm:ml-0">
                {sectionsData.section1.subtitle}
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a href="mailto:admin@cyberspacedigital.in">
                  <a className="transform rounded-md bg-white px-5 py-3 font-medium text-black transition-colors hover:bg-black hover:text-white">
                    Email
                  </a>
                </a>
              
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

 {/* Subtitle section */}
  <section className="text-center mx-auto my-8">
          <h2 className="cursor-default pb-2 font-extrabold text-transparent text-2xl md:text-5xl lg:text-6xl bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600 mt-3  tracking-tight ">
          Create the perfect logo for your business
          </h2>
          <p className="cursor-default text-sm font-medium text-black mt-5 mb-10">
           We have create more than 190+ Business Logos, 220 Commercial Logos and 100+ startup Company Logos.
          </p>

          <div className="flex items-center justify-center gap-4 flex-wrap">
            
          </div>
  </section>

 {/* Why us for this */}
  <section className="bg-gray-200 ">
  <div className="grid max-w-screen-xl px-16 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
    <div className="mr-auto sm:mr-10 place-self-center lg:col-span-7">
      <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl ">
      Why a Great Logo Matters?
      </h1>
      <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl ">
      A great logo is your brand's first impression, leaving a lasting impact and enhancing recognition. It conveys professionalism, setting you apart from the competition. Your logo embodies your brand's identity, fostering deep connections with your audience. It ensures memorability, making your brand stand out, and serves as a trust-building, loyalty-inducing symbol. In summary, a great logo is the cornerstone of your brand's success, speaking volumes with just a glance.
      </p>
      <a
        href="#"
        className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-black  "
      >
        Get started
        <svg
          className="w-5 h-5 ml-2 -mr-1"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </a>
     
    </div>
    <div className=" lg:mt-0 lg:col-span-5 lg:flex rounded-lg">
      <img
        src="https://lp-cms-production.imgix.net/2019-06/554369495_full.jpg"
        alt="mockup"
        className="rounded-lg"
      />
    </div>
  </div>
   </section>


 
 
 
 {/* Process  */}
    <section id="services" className="cursor-default section relative ">
  <div className="xl:max-w-8xl mx-auto px-4">

    <section className="text-center mx-auto mb-12 lg:px-20">
      <h2 className="pb-2 font-extrabold text-transparent text-2xl md:text-5xl lg:text-6xl bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600 ">
      Our Process
      </h2>
      <p className="text-sm font-medium text-black">
      "We also add additional features while creating websites."
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
        <div className="py-8 px-12   transform transition duration-300 ease-in-out hover:-translate-y-2">
          <div className="inline-block text-gray-900 ">
            <img
              src={FixedPrice}
              className="w-40 ml-auto"
              alt="illustration"
              loading="lazy"
              width={900}
              height={600} />
          </div>
          <h3 className="text-lg leading-normal  font-semibold text-black">
          Beautiful Website
          </h3>
          <p className="text-gray-500 text-sm">
            Under this model, the web development company and the client agree on a fixed price for the entire project scope.
          </p>
          
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
        <div className="py-8 px-12   transform transition duration-300 ease-in-out hover:-translate-y-2">
          <div className="inline-block text-gray-900">
            <img
              src={TimeManage}
              className="w-40 ml-auto"
              alt="illustration"
              loading="lazy"
              width={900}
              height={600} />
          </div>
          <h3 className="text-lg leading-normal font-semibold text-black">
          Website Safety
          </h3>
          <p className="text-gray-500 text-sm">
            The client pays based on the time and resources spent on the project.
          </p>
          
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
        <div className="py-8 px-12   transform transition duration-300 ease-in-out hover:-translate-y-2">
          <div className="inline-block text-gray-900 ">
            <img
              src={OntimeDelivery}
              className="w-40 ml-auto"
              alt="illustration"
              loading="lazy"
              width={900}
              height={600} />
          </div>
          <h3 className="text-lg leading-normal  font-semibold text-black">
          Fully Mobile Responsive and Quick
          </h3>
          <p className="text-gray-500 text-sm">
            The web development company commits to delivering projects on or before agreed-upon deadlines.
          </p>
          
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
        <div className="py-8 px-12   transform transition duration-300 ease-in-out hover:-translate-y-2">
          <div className="inline-block text-gray-900 ">
            <img
              src={HiringModel}
              className="w-40 ml-auto"
              alt="illustration"
              loading="lazy"
              width={900}
              height={600} />
          </div>
          <h3 className="text-lg leading-normal font-semibold text-black">
          Intelligent Designer
          </h3>
          <p className="text-gray-500 text-sm">
          if your project requires additional manpower and extra resources, we're ready to scale up and bring in the necessary talent to meet your needs.
          </p>
          
        </div>
      </div>
    </div>
  </div>
  </section>




{/* Portfolio */}
<LogoPortfolioSlider />


{/* Services */}
   <section  className="cursor-default section relative ">
  <div className="xl:max-w-8xl mx-auto px-4">

    <section className="text-center mx-auto mb-12 lg:px-20">
      <h2 className="pb-2 font-extrabold text-transparent text-2xl md:text-5xl lg:text-6xl bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600 ">
      Services
      </h2>
      <p className="text-sm  font-medium text-black">
      "We also add additional features while creating websites."
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
        <div className="py-8 px-12   transform transition duration-300 ease-in-out hover:-translate-y-2">
          <div className="inline-block text-gray-900 ">
            <img
              src={FixedPrice}
              className="w-40 ml-auto"
              alt="illustration"
              loading="lazy"
              width={900}
              height={600} />
          </div>
          <h3 className="text-lg leading-normal  font-semibold text-black">
          Beautiful Website
          </h3>
          <p className="text-gray-500 text-sm">
            Under this model, the web development company and the client agree on a fixed price for the entire project scope.
          </p>
          
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
        <div className="py-8 px-12   transform transition duration-300 ease-in-out hover:-translate-y-2">
          <div className="inline-block text-gray-900">
            <img
              src={TimeManage}
              className="w-40 ml-auto"
              alt="illustration"
              loading="lazy"
              width={900}
              height={600} />
          </div>
          <h3 className="text-lg leading-normal font-semibold text-black">
          Website Safety
          </h3>
          <p className="text-gray-500 text-sm">
            The client pays based on the time and resources spent on the project.
          </p>
          
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
        <div className="py-8 px-12   transform transition duration-300 ease-in-out hover:-translate-y-2">
          <div className="inline-block text-gray-900 ">
            <img
              src={OntimeDelivery}
              className="w-40 ml-auto"
              alt="illustration"
              loading="lazy"
              width={900}
              height={600} />
          </div>
          <h3 className="text-lg leading-normal  font-semibold text-black">
          Fully Mobile Responsive and Quick
          </h3>
          <p className="text-gray-500 text-sm">
            The web development company commits to delivering projects on or before agreed-upon deadlines.
          </p>
          
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
        <div className="py-8 px-12   transform transition duration-300 ease-in-out hover:-translate-y-2">
          <div className="inline-block text-gray-900 ">
            <img
              src={HiringModel}
              className="w-40 ml-auto"
              alt="illustration"
              loading="lazy"
              width={900}
              height={600} />
          </div>
          <h3 className="text-lg leading-normal font-semibold text-black">
          Intelligent Designer
          </h3>
          <p className="text-gray-500 text-sm">
          if your project requires additional manpower and extra resources, we're ready to scale up and bring in the necessary talent to meet your needs.
          </p>
          
        </div>
      </div>
    </div>
  </div>
 </section>


{/* Meet Our Design Team */}
        <section >
  <div className="container px-6 py-10 mx-auto">
    <h2 className="pb-2 font-extrabold text-center text-transparent text-2xl md:text-5xl lg:text-6xl bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600">
      Our Team, Friends & Family
    </h2>
    <p className="max-w-2xl mx-auto text-center text-gray-900">
      We have a dedicated team of quick-learners and more than 10 years of experince in each craft.
    </p>
    <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-4">
      <div className="flex flex-col items-center p-8 transition-colors duration-200 transform cursor-pointer group hover:bg-yellow-600 rounded-xl">
        <img
          className="object-cover w-32 h-40 rounded-full ring-4 ring-gray-300"
          src="https://drive.google.com/uc?id=1BGwKANvkHsETmSysa49o23urActBB12a"
        />
        <h2 className="mt-4 text-2xl font-semibold  capitalize text-black group-hover:text-black">
          Chaitanya Teja
        </h2>
        <p className="mt-2  capitalize text-gray-900 group-hover:text-gray-900">
        Full Stack Developer
        </p>
        
        <div className="flex mt-3 -mx-2">
          <a
            href="#"
            className="mx-2 text-gray-900 hover:text-gray-900 group-hover:text-black"
            aria-label="Reddit"
          >
            <svg
              className="w-6 h-6 fill-current"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="https://www.w3.org/2000/svg"
            >
              <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C21.9939 17.5203 17.5203 21.9939 12 22ZM6.807 10.543C6.20862 10.5433 5.67102 10.9088 5.45054 11.465C5.23006 12.0213 5.37133 12.6558 5.807 13.066C5.92217 13.1751 6.05463 13.2643 6.199 13.33C6.18644 13.4761 6.18644 13.6229 6.199 13.769C6.199 16.009 8.814 17.831 12.028 17.831C15.242 17.831 17.858 16.009 17.858 13.769C17.8696 13.6229 17.8696 13.4761 17.858 13.33C18.4649 13.0351 18.786 12.3585 18.6305 11.7019C18.475 11.0453 17.8847 10.5844 17.21 10.593h27.157C16.7988 10.6062 16.458 10.7512 16.2 11C15.0625 10.2265 13.7252 9.79927 12.35 9.77L13 6.65L15.138 7.1C15.1931 7.60706 15.621 7.99141 16.131 7.992C16.1674 7.99196 16.2038 7.98995 16.24 7.986C16.7702 7.93278 17.1655 7.47314 17.1389 6.94094C17.1122 6.40873 16.6729 5.991 16.14 5.991C16.1022 5.99191 16.0645 5.99491 16.027 6C15.71 6.03367 15.4281 6.21641 15.268 6.492L12.82 6C12.7983 5.99535 12.7762 5.993 12.754 5.993C12.6094 5.99472 12.4851 6.09583 12.454 6.237L11.706 9.71C10.3138 9.7297 8.95795 10.157 7.806 10.939C7.53601 10.6839 7.17843 10.5422 6.807 10.543ZM12.18 16.524C12.124 16.524 12.067 16.524 12.011 16.524C11.955 16.524 11.898 16.524 11.842 16.524C11.0121 16.5208 10.2054 16.2497 9.542 15.751C9.49626 15.6958 9.47445 15.6246 9.4814 15.5533C9.48834 15.482 9.52348 15.4163 9.579 15.371C9.62737 15.3318 9.68771 15.3102 9.75 15.31C9.81233 15.31 9.87275 15.3315 9.921 15.371C10.4816 15.7818 11.159 16.0022 11.854 16C11.9027 16 11.9513 16 12 16C12.059 16 12.119 16 12.178 16C12.864 16.0011 13.5329 15.7863 14.09 15.386C14.1427 15.3322 14.2147 15.302 14.29 15.302C14.3653 15.302 14.4373 15.3322 14.49 15.386C14.5985 15.4981 14.5962 15.6767 14.485 15.786V15.746C13.8213 16.2481 13.0123 16.5208 12.18 16.523V16.524ZM14.307 14.08h24.291L14.299 14.041C13.8591 14.011 13.4994 13.6789 13.4343 13.2429C13.3691 12.8068 13.6162 12.3842 14.028 12.2269C14.4399 12.0697 14.9058 12.2202 15.1478 12.5887C15.3899 12.9572 15.3429 13.4445 15.035 13.76C14.856 13.9554 14.6059 14.0707 14.341 14.08h24.306h24.307ZM9.67 14C9.11772 14 8.67 13.5523 8.67 13C8.67 12.4477 9.11772 12 9.67 12C10.2223 12 10.67 12.4477 10.67 13C10.67 13.5523 10.2223 14 9.67 14Z"></path>
            </svg>
          </a>
          <a
            href="#"
            className="mx-2 text-gray-900 hover:text-gray-900 group-hover:text-black"
            aria-label="Facebook"
          >
            <svg
              className="w-6 h-6 fill-current"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="https://www.w3.org/2000/svg"
            >
              <path d="M2.00195 12.002C2.00312 16.9214 5.58036 21.1101 10.439 21.881V14.892H7.90195V12.002h20.442V9.80204C10.3284 8.75958 10.6845 7.72064 11.4136 6.96698C12.1427 6.21332 13.1693 5.82306 14.215 5.90204C14.9655 5.91417 15.7141 5.98101 16.455 6.10205V8.56104h25.191C14.7558 8.50405 14.3183 8.64777 14.0017 8.95171C13.6851 9.25566 13.5237 9.68693 13.563 10.124V12.002h26.334L15.891 14.893h23.563V21.881C18.8174 21.0506 22.502 16.2518 21.9475 10.9611C21.3929 5.67041 16.7932 1.73997 11.4808 2.01722C6.16831 2.29447 2.0028 6.68235 2.00195 12.002Z"></path>
            </svg>
          </a>
          <a
            href="#"
            className="mx-2 text-gray-900 hover:text-gray-900 group-hover:text-black"
            aria-label="Github"
          >
            <svg
              className="w-6 h-6 fill-current"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="https://www.w3.org/2000/svg"
            >
              <path d="M12.026 2C7.13295 1.99937 2.96183 5.54799 2.17842 10.3779C1.395 15.2079 4.23061 19.893 8.87302 21.439C9.37302 21.529 9.55202 21.222 9.55202 20.958C9.55202 20.721 9.54402 20.093 9.54102 19.258C6.76602 19.858 6.18002 17.92 6.18002 17.92C5.99733 17.317 5.60459 16.7993 5.07302 16.461C4.17302 15.842 5.14202 15.856 5.14202 15.856C5.78269 15.9438 6.34657 16.3235 6.66902 16.884C6.94195 17.3803 7.40177 17.747 7.94632 17.9026C8.49087 18.0583 9.07503 17.99 9.56902 17.713C9.61544 17.207 9.84055 16.7341 10.204 16.379C7.99002 16.128 5.66202 15.272 5.66202 11.449C5.64973 10.4602 6.01691 9.5043 6.68802 8.778C6.38437 7.91731 6.42013 6.97325 6.78802 6.138C6.78802 6.138 7.62502 5.869 9.53002 7.159C11.1639 6.71101 12.8882 6.71101 14.522 7.159C16.428 5.868 17.264 6.138 17.264 6.138C17.6336 6.97286 17.6694 7.91757 17.364 8.778C18.0376 9.50423 18.4045 10.4626 18.388 11.453C18.388 15.286 16.058 16.128 13.836 16.375C14.3153 16.8651 14.5612 17.5373 14.511 18.221C14.511 19.555 14.499 20.631 14.499 20.958C14.499 21.225 14.677 21.535 15.186 21.437C19.8265 19.8884 22.6591 15.203 21.874 10.3743C21.089 5.54565 16.9181 1.99888 12.026 2Z"></path>
            </svg>
          </a>
        </div>
      </div>
      <div className="flex flex-col items-center p-8 transition-colors duration-200 transform cursor-pointer group hover:bg-yellow-600 rounded-xl">
        <img
          className="object-cover w-32 h-40 rounded-full ring-4 ring-gray-300"
          src="https://drive.google.com/uc?id=1ANDL7Gfan4ejG2sMHqZVjanODSk8yvlB"
        />
        <h2 className="mt-4 text-2xl font-semibold capitalize text-black group-hover:text-black">
          Srikar
        </h2>
        <p className="mt-2  capitalize text-gray-900 group-hover:text-gray-900">
        Devops engineer
        </p>
        
        <div className="flex mt-3 -mx-2">
          <a
            href="#"
            className="mx-2 text-gray-900 hover:text-gray-900 group-hover:text-black"
            aria-label="Reddit"
          >
            <svg
              className="w-6 h-6 fill-current"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="https://www.w3.org/2000/svg"
            >
              <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C21.9939 17.5203 17.5203 21.9939 12 22ZM6.807 10.543C6.20862 10.5433 5.67102 10.9088 5.45054 11.465C5.23006 12.0213 5.37133 12.6558 5.807 13.066C5.92217 13.1751 6.05463 13.2643 6.199 13.33C6.18644 13.4761 6.18644 13.6229 6.199 13.769C6.199 16.009 8.814 17.831 12.028 17.831C15.242 17.831 17.858 16.009 17.858 13.769C17.8696 13.6229 17.8696 13.4761 17.858 13.33C18.4649 13.0351 18.786 12.3585 18.6305 11.7019C18.475 11.0453 17.8847 10.5844 17.21 10.593h27.157C16.7988 10.6062 16.458 10.7512 16.2 11C15.0625 10.2265 13.7252 9.79927 12.35 9.77L13 6.65L15.138 7.1C15.1931 7.60706 15.621 7.99141 16.131 7.992C16.1674 7.99196 16.2038 7.98995 16.24 7.986C16.7702 7.93278 17.1655 7.47314 17.1389 6.94094C17.1122 6.40873 16.6729 5.991 16.14 5.991C16.1022 5.99191 16.0645 5.99491 16.027 6C15.71 6.03367 15.4281 6.21641 15.268 6.492L12.82 6C12.7983 5.99535 12.7762 5.993 12.754 5.993C12.6094 5.99472 12.4851 6.09583 12.454 6.237L11.706 9.71C10.3138 9.7297 8.95795 10.157 7.806 10.939C7.53601 10.6839 7.17843 10.5422 6.807 10.543ZM12.18 16.524C12.124 16.524 12.067 16.524 12.011 16.524C11.955 16.524 11.898 16.524 11.842 16.524C11.0121 16.5208 10.2054 16.2497 9.542 15.751C9.49626 15.6958 9.47445 15.6246 9.4814 15.5533C9.48834 15.482 9.52348 15.4163 9.579 15.371C9.62737 15.3318 9.68771 15.3102 9.75 15.31C9.81233 15.31 9.87275 15.3315 9.921 15.371C10.4816 15.7818 11.159 16.0022 11.854 16C11.9027 16 11.9513 16 12 16C12.059 16 12.119 16 12.178 16C12.864 16.0011 13.5329 15.7863 14.09 15.386C14.1427 15.3322 14.2147 15.302 14.29 15.302C14.3653 15.302 14.4373 15.3322 14.49 15.386C14.5985 15.4981 14.5962 15.6767 14.485 15.786V15.746C13.8213 16.2481 13.0123 16.5208 12.18 16.523V16.524ZM14.307 14.08h24.291L14.299 14.041C13.8591 14.011 13.4994 13.6789 13.4343 13.2429C13.3691 12.8068 13.6162 12.3842 14.028 12.2269C14.4399 12.0697 14.9058 12.2202 15.1478 12.5887C15.3899 12.9572 15.3429 13.4445 15.035 13.76C14.856 13.9554 14.6059 14.0707 14.341 14.08h24.306h24.307ZM9.67 14C9.11772 14 8.67 13.5523 8.67 13C8.67 12.4477 9.11772 12 9.67 12C10.2223 12 10.67 12.4477 10.67 13C10.67 13.5523 10.2223 14 9.67 14Z"></path>
            </svg>
          </a>
          <a
            href="#"
            className="mx-2 text-gray-900 hover:text-gray-900 group-hover:text-black"
            aria-label="Facebook"
          >
            <svg
              className="w-6 h-6 fill-current"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="https://www.w3.org/2000/svg"
            >
              <path d="M2.00195 12.002C2.00312 16.9214 5.58036 21.1101 10.439 21.881V14.892H7.90195V12.002h20.442V9.80204C10.3284 8.75958 10.6845 7.72064 11.4136 6.96698C12.1427 6.21332 13.1693 5.82306 14.215 5.90204C14.9655 5.91417 15.7141 5.98101 16.455 6.10205V8.56104h25.191C14.7558 8.50405 14.3183 8.64777 14.0017 8.95171C13.6851 9.25566 13.5237 9.68693 13.563 10.124V12.002h26.334L15.891 14.893h23.563V21.881C18.8174 21.0506 22.502 16.2518 21.9475 10.9611C21.3929 5.67041 16.7932 1.73997 11.4808 2.01722C6.16831 2.29447 2.0028 6.68235 2.00195 12.002Z"></path>
            </svg>
          </a>
          <a
            href="#"
            className="mx-2 text-gray-900 hover:text-gray-900 group-hover:text-black"
            aria-label="Github"
          >
            <svg
              className="w-6 h-6 fill-current"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="https://www.w3.org/2000/svg"
            >
              <path d="M12.026 2C7.13295 1.99937 2.96183 5.54799 2.17842 10.3779C1.395 15.2079 4.23061 19.893 8.87302 21.439C9.37302 21.529 9.55202 21.222 9.55202 20.958C9.55202 20.721 9.54402 20.093 9.54102 19.258C6.76602 19.858 6.18002 17.92 6.18002 17.92C5.99733 17.317 5.60459 16.7993 5.07302 16.461C4.17302 15.842 5.14202 15.856 5.14202 15.856C5.78269 15.9438 6.34657 16.3235 6.66902 16.884C6.94195 17.3803 7.40177 17.747 7.94632 17.9026C8.49087 18.0583 9.07503 17.99 9.56902 17.713C9.61544 17.207 9.84055 16.7341 10.204 16.379C7.99002 16.128 5.66202 15.272 5.66202 11.449C5.64973 10.4602 6.01691 9.5043 6.68802 8.778C6.38437 7.91731 6.42013 6.97325 6.78802 6.138C6.78802 6.138 7.62502 5.869 9.53002 7.159C11.1639 6.71101 12.8882 6.71101 14.522 7.159C16.428 5.868 17.264 6.138 17.264 6.138C17.6336 6.97286 17.6694 7.91757 17.364 8.778C18.0376 9.50423 18.4045 10.4626 18.388 11.453C18.388 15.286 16.058 16.128 13.836 16.375C14.3153 16.8651 14.5612 17.5373 14.511 18.221C14.511 19.555 14.499 20.631 14.499 20.958C14.499 21.225 14.677 21.535 15.186 21.437C19.8265 19.8884 22.6591 15.203 21.874 10.3743C21.089 5.54565 16.9181 1.99888 12.026 2Z"></path>
            </svg>
          </a>
        </div>
      </div>
      
      <div className="flex flex-col items-center p-8 transition-colors duration-200 transform cursor-pointer group hover:bg-yellow-600 rounded-xl">
        <img
          className="object-cover w-32 h-40 rounded-full ring-4 ring-gray-300"
          src="https://drive.google.com/uc?id=1TVZBZvfxP5yIPcWGZVkkuNFg_XVQc5UY"
        />
        <h2 className="mt-4 text-2xl font-semibold  capitalize text-black group-hover:text-black">
          Tej Varun
        </h2>
        <p className="mt-2  capitalize text-gray-900 group-hover:text-gray-900">
        Senior Graphic Designer
        </p>
       
        <div className="flex mt-3 -mx-2">
          <a
            href="#"
            className="mx-2 text-gray-900 hover:text-gray-900 group-hover:text-black"
            aria-label="Reddit"
          >
            <svg
              className="w-6 h-6 fill-current"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="https://www.w3.org/2000/svg"
            >
              <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C21.9939 17.5203 17.5203 21.9939 12 22ZM6.807 10.543C6.20862 10.5433 5.67102 10.9088 5.45054 11.465C5.23006 12.0213 5.37133 12.6558 5.807 13.066C5.92217 13.1751 6.05463 13.2643 6.199 13.33C6.18644 13.4761 6.18644 13.6229 6.199 13.769C6.199 16.009 8.814 17.831 12.028 17.831C15.242 17.831 17.858 16.009 17.858 13.769C17.8696 13.6229 17.8696 13.4761 17.858 13.33C18.4649 13.0351 18.786 12.3585 18.6305 11.7019C18.475 11.0453 17.8847 10.5844 17.21 10.593h27.157C16.7988 10.6062 16.458 10.7512 16.2 11C15.0625 10.2265 13.7252 9.79927 12.35 9.77L13 6.65L15.138 7.1C15.1931 7.60706 15.621 7.99141 16.131 7.992C16.1674 7.99196 16.2038 7.98995 16.24 7.986C16.7702 7.93278 17.1655 7.47314 17.1389 6.94094C17.1122 6.40873 16.6729 5.991 16.14 5.991C16.1022 5.99191 16.0645 5.99491 16.027 6C15.71 6.03367 15.4281 6.21641 15.268 6.492L12.82 6C12.7983 5.99535 12.7762 5.993 12.754 5.993C12.6094 5.99472 12.4851 6.09583 12.454 6.237L11.706 9.71C10.3138 9.7297 8.95795 10.157 7.806 10.939C7.53601 10.6839 7.17843 10.5422 6.807 10.543ZM12.18 16.524C12.124 16.524 12.067 16.524 12.011 16.524C11.955 16.524 11.898 16.524 11.842 16.524C11.0121 16.5208 10.2054 16.2497 9.542 15.751C9.49626 15.6958 9.47445 15.6246 9.4814 15.5533C9.48834 15.482 9.52348 15.4163 9.579 15.371C9.62737 15.3318 9.68771 15.3102 9.75 15.31C9.81233 15.31 9.87275 15.3315 9.921 15.371C10.4816 15.7818 11.159 16.0022 11.854 16C11.9027 16 11.9513 16 12 16C12.059 16 12.119 16 12.178 16C12.864 16.0011 13.5329 15.7863 14.09 15.386C14.1427 15.3322 14.2147 15.302 14.29 15.302C14.3653 15.302 14.4373 15.3322 14.49 15.386C14.5985 15.4981 14.5962 15.6767 14.485 15.786V15.746C13.8213 16.2481 13.0123 16.5208 12.18 16.523V16.524ZM14.307 14.08h24.291L14.299 14.041C13.8591 14.011 13.4994 13.6789 13.4343 13.2429C13.3691 12.8068 13.6162 12.3842 14.028 12.2269C14.4399 12.0697 14.9058 12.2202 15.1478 12.5887C15.3899 12.9572 15.3429 13.4445 15.035 13.76C14.856 13.9554 14.6059 14.0707 14.341 14.08h24.306h24.307ZM9.67 14C9.11772 14 8.67 13.5523 8.67 13C8.67 12.4477 9.11772 12 9.67 12C10.2223 12 10.67 12.4477 10.67 13C10.67 13.5523 10.2223 14 9.67 14Z"></path>
            </svg>
          </a>
          <a
            href="#"
            className="mx-2 text-gray-900 hover:text-gray-900 group-hover:text-black"
            aria-label="Facebook"
          >
            <svg
              className="w-6 h-6 fill-current"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="https://www.w3.org/2000/svg"
            >
              <path d="M2.00195 12.002C2.00312 16.9214 5.58036 21.1101 10.439 21.881V14.892H7.90195V12.002h20.442V9.80204C10.3284 8.75958 10.6845 7.72064 11.4136 6.96698C12.1427 6.21332 13.1693 5.82306 14.215 5.90204C14.9655 5.91417 15.7141 5.98101 16.455 6.10205V8.56104h25.191C14.7558 8.50405 14.3183 8.64777 14.0017 8.95171C13.6851 9.25566 13.5237 9.68693 13.563 10.124V12.002h26.334L15.891 14.893h23.563V21.881C18.8174 21.0506 22.502 16.2518 21.9475 10.9611C21.3929 5.67041 16.7932 1.73997 11.4808 2.01722C6.16831 2.29447 2.0028 6.68235 2.00195 12.002Z"></path>
            </svg>
          </a>
          <a
            href="#"
            className="mx-2 text-gray-900 hover:text-gray-900 group-hover:text-black"
            aria-label="Github"
          >
            <svg
              className="w-6 h-6 fill-current"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="https://www.w3.org/2000/svg"
            >
              <path d="M12.026 2C7.13295 1.99937 2.96183 5.54799 2.17842 10.3779C1.395 15.2079 4.23061 19.893 8.87302 21.439C9.37302 21.529 9.55202 21.222 9.55202 20.958C9.55202 20.721 9.54402 20.093 9.54102 19.258C6.76602 19.858 6.18002 17.92 6.18002 17.92C5.99733 17.317 5.60459 16.7993 5.07302 16.461C4.17302 15.842 5.14202 15.856 5.14202 15.856C5.78269 15.9438 6.34657 16.3235 6.66902 16.884C6.94195 17.3803 7.40177 17.747 7.94632 17.9026C8.49087 18.0583 9.07503 17.99 9.56902 17.713C9.61544 17.207 9.84055 16.7341 10.204 16.379C7.99002 16.128 5.66202 15.272 5.66202 11.449C5.64973 10.4602 6.01691 9.5043 6.68802 8.778C6.38437 7.91731 6.42013 6.97325 6.78802 6.138C6.78802 6.138 7.62502 5.869 9.53002 7.159C11.1639 6.71101 12.8882 6.71101 14.522 7.159C16.428 5.868 17.264 6.138 17.264 6.138C17.6336 6.97286 17.6694 7.91757 17.364 8.778C18.0376 9.50423 18.4045 10.4626 18.388 11.453C18.388 15.286 16.058 16.128 13.836 16.375C14.3153 16.8651 14.5612 17.5373 14.511 18.221C14.511 19.555 14.499 20.631 14.499 20.958C14.499 21.225 14.677 21.535 15.186 21.437C19.8265 19.8884 22.6591 15.203 21.874 10.3743C21.089 5.54565 16.9181 1.99888 12.026 2Z"></path>
            </svg>
          </a>
        </div>
      </div>
      <div className="flex flex-col items-center p-8 transition-colors duration-200 transform cursor-pointer group hover:bg-yellow-600 rounded-xl">
        <img
          className="object-cover w-32 h-40 rounded-full ring-4 ring-gray-300"
          src="https://drive.google.com/uc?id=1jLmasDLG1HHlT4MoK4_IBQyoDvaC8_oV"
        />
        <h2 className="mt-4 text-2xl font-semibold  capitalize text-black group-hover:text-black">
          Sai Kiran
        </h2>
        <p className="mt-2  capitalize text-gray-900 group-hover:text-gray-900">
         Brand Designer
        </p>
        <div className="flex mt-3 -mx-2">
          <a
            href="#"
            className="mx-2 text-gray-900 hover:text-gray-900 group-hover:text-black"
            aria-label="Reddit"
          >
            <svg
              className="w-6 h-6 fill-current"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="https://www.w3.org/2000/svg"
            >
              <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C21.9939 17.5203 17.5203 21.9939 12 22ZM6.807 10.543C6.20862 10.5433 5.67102 10.9088 5.45054 11.465C5.23006 12.0213 5.37133 12.6558 5.807 13.066C5.92217 13.1751 6.05463 13.2643 6.199 13.33C6.18644 13.4761 6.18644 13.6229 6.199 13.769C6.199 16.009 8.814 17.831 12.028 17.831C15.242 17.831 17.858 16.009 17.858 13.769C17.8696 13.6229 17.8696 13.4761 17.858 13.33C18.4649 13.0351 18.786 12.3585 18.6305 11.7019C18.475 11.0453 17.8847 10.5844 17.21 10.593h27.157C16.7988 10.6062 16.458 10.7512 16.2 11C15.0625 10.2265 13.7252 9.79927 12.35 9.77L13 6.65L15.138 7.1C15.1931 7.60706 15.621 7.99141 16.131 7.992C16.1674 7.99196 16.2038 7.98995 16.24 7.986C16.7702 7.93278 17.1655 7.47314 17.1389 6.94094C17.1122 6.40873 16.6729 5.991 16.14 5.991C16.1022 5.99191 16.0645 5.99491 16.027 6C15.71 6.03367 15.4281 6.21641 15.268 6.492L12.82 6C12.7983 5.99535 12.7762 5.993 12.754 5.993C12.6094 5.99472 12.4851 6.09583 12.454 6.237L11.706 9.71C10.3138 9.7297 8.95795 10.157 7.806 10.939C7.53601 10.6839 7.17843 10.5422 6.807 10.543ZM12.18 16.524C12.124 16.524 12.067 16.524 12.011 16.524C11.955 16.524 11.898 16.524 11.842 16.524C11.0121 16.5208 10.2054 16.2497 9.542 15.751C9.49626 15.6958 9.47445 15.6246 9.4814 15.5533C9.48834 15.482 9.52348 15.4163 9.579 15.371C9.62737 15.3318 9.68771 15.3102 9.75 15.31C9.81233 15.31 9.87275 15.3315 9.921 15.371C10.4816 15.7818 11.159 16.0022 11.854 16C11.9027 16 11.9513 16 12 16C12.059 16 12.119 16 12.178 16C12.864 16.0011 13.5329 15.7863 14.09 15.386C14.1427 15.3322 14.2147 15.302 14.29 15.302C14.3653 15.302 14.4373 15.3322 14.49 15.386C14.5985 15.4981 14.5962 15.6767 14.485 15.786V15.746C13.8213 16.2481 13.0123 16.5208 12.18 16.523V16.524ZM14.307 14.08h24.291L14.299 14.041C13.8591 14.011 13.4994 13.6789 13.4343 13.2429C13.3691 12.8068 13.6162 12.3842 14.028 12.2269C14.4399 12.0697 14.9058 12.2202 15.1478 12.5887C15.3899 12.9572 15.3429 13.4445 15.035 13.76C14.856 13.9554 14.6059 14.0707 14.341 14.08h24.306h24.307ZM9.67 14C9.11772 14 8.67 13.5523 8.67 13C8.67 12.4477 9.11772 12 9.67 12C10.2223 12 10.67 12.4477 10.67 13C10.67 13.5523 10.2223 14 9.67 14Z"></path>
            </svg>
          </a>
          <a
            href="#"
            className="mx-2 text-gray-900 hover:text-gray-900 group-hover:text-black"
            aria-label="Facebook"
          >
            <svg
              className="w-6 h-6 fill-current"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="https://www.w3.org/2000/svg"
            >
              <path d="M2.00195 12.002C2.00312 16.9214 5.58036 21.1101 10.439 21.881V14.892H7.90195V12.002h20.442V9.80204C10.3284 8.75958 10.6845 7.72064 11.4136 6.96698C12.1427 6.21332 13.1693 5.82306 14.215 5.90204C14.9655 5.91417 15.7141 5.98101 16.455 6.10205V8.56104h25.191C14.7558 8.50405 14.3183 8.64777 14.0017 8.95171C13.6851 9.25566 13.5237 9.68693 13.563 10.124V12.002h26.334L15.891 14.893h23.563V21.881C18.8174 21.0506 22.502 16.2518 21.9475 10.9611C21.3929 5.67041 16.7932 1.73997 11.4808 2.01722C6.16831 2.29447 2.0028 6.68235 2.00195 12.002Z"></path>
            </svg>
          </a>
          <a
            href="#"
            className="mx-2 text-gray-900 hover:text-gray-900 group-hover:text-black"
            aria-label="Github"
          >
            <svg
              className="w-6 h-6 fill-current"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="https://www.w3.org/2000/svg"
            >
              <path d="M12.026 2C7.13295 1.99937 2.96183 5.54799 2.17842 10.3779C1.395 15.2079 4.23061 19.893 8.87302 21.439C9.37302 21.529 9.55202 21.222 9.55202 20.958C9.55202 20.721 9.54402 20.093 9.54102 19.258C6.76602 19.858 6.18002 17.92 6.18002 17.92C5.99733 17.317 5.60459 16.7993 5.07302 16.461C4.17302 15.842 5.14202 15.856 5.14202 15.856C5.78269 15.9438 6.34657 16.3235 6.66902 16.884C6.94195 17.3803 7.40177 17.747 7.94632 17.9026C8.49087 18.0583 9.07503 17.99 9.56902 17.713C9.61544 17.207 9.84055 16.7341 10.204 16.379C7.99002 16.128 5.66202 15.272 5.66202 11.449C5.64973 10.4602 6.01691 9.5043 6.68802 8.778C6.38437 7.91731 6.42013 6.97325 6.78802 6.138C6.78802 6.138 7.62502 5.869 9.53002 7.159C11.1639 6.71101 12.8882 6.71101 14.522 7.159C16.428 5.868 17.264 6.138 17.264 6.138C17.6336 6.97286 17.6694 7.91757 17.364 8.778C18.0376 9.50423 18.4045 10.4626 18.388 11.453C18.388 15.286 16.058 16.128 13.836 16.375C14.3153 16.8651 14.5612 17.5373 14.511 18.221C14.511 19.555 14.499 20.631 14.499 20.958C14.499 21.225 14.677 21.535 15.186 21.437C19.8265 19.8884 22.6591 15.203 21.874 10.3743C21.089 5.54565 16.9181 1.99888 12.026 2Z"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
   </section>

{/* Client Testimonials */}
 <div className="py-16 white">
  <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
    <h2 className="mb-12 text-center text-2xl text-gray-900 font-bold md:text-4xl">
      What's our customers say
    </h2>
    <div className="grid gap-8 md:grid-rows-2 lg:grid-cols-2">
      <div className="row-span-2 p-6 border border-gray-100 rounded-xl bg-gray-50 text-center sm:p-8">
        <div className="h-full flex flex-col justify-center space-y-4">
          <img
            className="w-20 h-20 mx-auto rounded-full"
            src="https://tailus.io/sources/blocks/grid-cards/preview/images/avatars/second_user.webp"
            alt="user avatar"
            height={220}
            width={220}
            loading="lazy"
          />
          <p className="text-gray-600 md:text-xl">
            {" "}
            <span className="font-serif">"</span> Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Quaerat repellat perspiciatis
            excepturi est. Non ipsum iusto aliquam consequatur repellat
            provident, omnis ut, sapiente voluptates veritatis cum deleniti
            repudiandae ad doloribus. <span className="font-serif">"</span>
          </p>
          <div>
            <h6 className="text-lg font-semibold leading-none">Jane Doe</h6>
            <span className="text-xs text-gray-500">Product Designer</span>
          </div>
        </div>
      </div>
      <div className="p-6 border border-gray-100 rounded-xl bg-gray-50 sm:flex sm:space-x-8 sm:p-8">
        <img
          className="w-20 h-20 mx-auto rounded-full"
          src="https://tailus.io/sources/blocks/grid-cards/preview/images/avatars/first_user.webp"
          alt="user avatar"
          height={220}
          width={220}
          loading="lazy"
        />
        <div className="space-y-4 mt-4 text-center sm:mt-0 sm:text-left">
          <p className="text-gray-600">
            {" "}
            <span className="font-serif">"</span> Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Quaerat repellat perspiciatis
            excepturi est. Non ipsum iusto aliquam consequatur repellat
            provident, omnis ut, sapiente voluptates veritatis cum deleniti
            repudiandae ad doloribus. <span className="font-serif">"</span>
          </p>
          <div>
            <h6 className="text-lg font-semibold leading-none">Jane Doe</h6>
            <span className="text-xs text-gray-500">Product Designer</span>
          </div>
        </div>
      </div>
      <div className="p-6 border border-gray-100 rounded-xl bg-gray-50 sm:flex sm:space-x-8 sm:p-8">
        <img
          className="w-20 h-20 mx-auto rounded-full"
          src="https://tailus.io/sources/blocks/grid-cards/preview/images/avatars/third_user.webp"
          alt="user avatar"
          height={220}
          width={220}
          loading="lazy"
        />
        <div className="space-y-4 mt-4 text-center sm:mt-0 sm:text-left">
          <p className="text-gray-600">
            {" "}
            <span className="font-serif">"</span> Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Quaerat repellat perspiciatis
            excepturi est. Non ipsum iusto aliquam consequatur repellat
            provident, omnis ut, sapiente voluptates veritatis cum deleniti
            repudiandae ad doloribus. <span className="font-serif">"</span>
          </p>
          <div>
            <h6 className="text-lg font-semibold leading-none">Jane Doe</h6>
            <span className="text-xs text-gray-500">Product Designer</span>
          </div>
        </div>
      </div>
    </div>
  </div>
 </div>

  
{/* Choosing the Right Logo for Your Brand */}
  <div className="py-16 bg-white">
  <div className="container m-auto px-6 space-y-8 md:px-12 lg:px-56">
    <div className="m-auto text-center lg:w-7/12">
      <h2 className="text-2xl text-gray-700 font-bold md:text-4xl">
      Choosing the Right Logo for Your Brand.
      </h2>
    </div>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
      <div className="p-4">
        <img
          src="https://tailus.io/sources/blocks/company-site/preview/images/clients/airbnb.svg"
          className=""
          alt=""
        />
      </div>
      <div className="p-4">
        <img
          src="https://tailus.io/sources/blocks/company-site/preview/images/clients/client-8.png"
          className="w-32 "
          alt=""
        />
      </div>
      <div className="p-4">
        <img
          src="https://tailus.io/sources/blocks/company-site/preview/images/clients/client-3.png"
          className="w-32 "
          alt=""
        />
      </div>
      <div className="p-4">
        <img
          src="https://tailus.io/sources/blocks/company-site/preview/images/clients/client-1.png"
          className="w-32 "
          alt=""
        />
      </div>
      <div className="p-4">
        <img
          src="https://tailus.io/sources/blocks/company-site/preview/images/clients/tailus.svg"
          className="w-32"
          alt=""
        />
      </div>
      <div className="p-4">
        <img
          src="https://tailus.io/sources/blocks/company-site/preview/images/clients/microsoft.svg"
          className="w-32"
          alt=""
        />
      </div>
      <div className="p-4">
        <img
          src="https://tailus.io/sources/blocks/company-site/preview/images/clients/coty.svg"
          className="w-20"
          alt=""
        />
      </div>
      <div className="p-4">
        <img
          src="https://tailus.io/sources/blocks/company-site/preview/images/clients/client-4.png"
          className="w-24"
          alt=""
        />
      </div>
    </div>
  </div>
 </div>


{/* Logo Design Pricing */}
  <section>
  <div className="container max-w-full mx-auto py-24 px-6">
    <h1 className=" text-center pb-2 font-extrabold text-transparent text-2xl md:text-5xl lg:text-6xl bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600 mt-3  tracking-tight">
      Pricing
    </h1>
    <p className="text-center text-lg text-gray-700 mt-2 px-6">
      We are here to get the best price for you..
    </p>
    <div className="h-1 mx-auto bg-indigo-200 w-24 opacity-75 mt-4 rounded" />
    <div className="max-w-full md:max-w-6xl mx-auto my-3 md:px-8">
      <div className="relative block flex flex-col md:flex-row items-center">
        <div className="w-11/12 max-w-sm sm:w-3/5 lg:w-1/3 sm:my-5 my-8 relative z-0 rounded-lg shadow-lg md:-mr-4">
          <div className="bg-white text-black rounded-lg shadow-inner shadow-lg overflow-hidden">
            <div className="block text-left text-sm sm:text-md max-w-sm mx-auto mt-2 text-black px-8 lg:px-6">
              <h1 className="text-lg font-medium uppercase p-3 pb-0 text-center tracking-wide">
                Basic
              </h1>
              <h2 className="text-sm text-gray-500 text-center pb-6">2499 INR</h2>
              Stripe offers everything needed to run an online business at
              scale. Get in touch for details.
            </div>
            <div className="flex flex-wrap mt-3 px-6">
              <ul>
                <li className="flex items-center">
                  <div className=" rounded-full p-2 fill-current text-green-700">
                    <svg
                      className="w-6 h-6 align-middle"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                  </div>
                  <span className="text-gray-700 text-lg ml-3">3 days classes</span>
                </li>
                <li className="flex items-center">
                  <div className=" rounded-full p-2 fill-current text-green-700">
                    <svg
                      className="w-6 h-6 align-middle"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                  </div>
                  <span className="text-gray-700 text-lg ml-3">2 hours session</span>
                </li>
               
              </ul>
            </div>
            <div className="block flex items-center p-8  uppercase">
              <button
                className="mt-3 text-lg font-semibold 
	bg-black w-full text-white rounded-lg 
	px-6 py-3 block shadow-xl hover:bg-gray-700"
              >
                Select
              </button>
            </div>
          </div>
        </div>
        <div className="w-full max-w-md sm:w-2/3 lg:w-1/3 sm:my-5 my-8 relative z-10 bg-white rounded-lg shadow-lg">
          <div className="text-sm leading-none rounded-t-lg bg-gray-200 text-black font-semibold uppercase py-4 text-center tracking-wide">
            Most Popular
          </div>
          <div className="block text-left text-sm sm:text-md max-w-sm mx-auto mt-2 text-black px-8 lg:px-6">
            <h1 className="text-lg font-medium uppercase p-3 pb-0 text-center tracking-wide">
            Premium
            </h1>
            <h2 className="text-sm text-gray-500 text-center pb-6">
              <span className="text-3xl">15999 INR</span>
            </h2>
            Stripe offers everything needed to run an online business at scale.
            Get in touch for details.
          </div>
          <div className="flex pl-12 justify-start sm:justify-start mt-3">
            <ul>
              <li className="flex items-center">
                <div className="rounded-full p-2 fill-current text-green-700">
                  <svg
                    className="w-6 h-6 align-middle"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </div>
                <span className="text-gray-700 text-lg ml-3">15 days</span>
              </li>
             
             
            </ul>
          </div>
          <div className="block flex items-center p-8  uppercase">
            <button
              className="mt-3 text-lg font-semibold 
	bg-black w-full text-white rounded-lg 
	px-6 py-3 block shadow-xl hover:bg-gray-700"
            >
              Select
            </button>
          </div>
        </div>
        <div className="w-11/12 max-w-sm sm:w-3/5 lg:w-1/3 sm:my-5 my-8 relative z-0 rounded-lg shadow-lg md:-ml-4">
          <div className="bg-white text-black rounded-lg shadow-inner shadow-lg overflow-hidden">
            <div className="block text-left text-sm sm:text-md max-w-sm mx-auto mt-2 text-black px-8 lg:px-6">
              <h1 className="text-lg font-medium uppercase p-3 pb-0 text-center tracking-wide">
                Economic
              </h1>
              <h2 className="text-sm text-gray-500 text-center pb-6">
                7499 INR
              </h2>
              Stripe offers everything needed to run an online business at
              scale. Get in touch for details.
            </div>
            <div className="flex flex-wrap mt-3 px-6">
              <ul>
                <li className="flex items-center">
                  <div className=" rounded-full p-2 fill-current text-green-700">
                    <svg
                      className="w-6 h-6 align-middle"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                  </div>
                  <span className="text-gray-700 text-lg ml-3">7 days</span>
                </li>
              </ul>
            </div>
            <div className="block flex items-center p-8  uppercase">
              <button
                className="mt-3 text-lg font-semibold 
	bg-black w-full text-white rounded-lg 
	px-6 py-3 block shadow-xl hover:bg-gray-700"
              >
                Select
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
   </section>

{/* FAQs */}
<div className="py-10 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-5">
          Frequently Asked Questions
        </h2>
        <div className="grid gap-4">
          {faqData.map((item, index) => (
            <div className="bg-white rounded-lg p-4 shadow-md" key={index}>
              <details className="group">
                <summary className="flex justify-between items-center font-medium cursor-pointer">
                  <span>{item.question}</span>
                  <span className="transition group-open:rotate-180">
                    <svg
                      fill="none"
                      height={24}
                      shapeRendering="geometricPrecision"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                      width={24}
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </span>
                </summary>
                <p className="text-gray-600 mt-3 group-open:animate-fadeIn">
                  {item.answer}
                </p>
              </details>
            </div>
          ))}
        </div>
      </div>
    </div>



{/* Contact Us for Your Logo Needs */}
 <section className="text-center mx-auto my-8">
      <h2 className="cursor-default pb-2 font-extrabold text-transparent text-2xl md:text-5xl lg:text-6xl bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600 mt-3  tracking-tight ">
      Contact Us
      </h2>
      <p className="cursor-default text-sm font-medium text-black mt-5 mb-10">
      Contact Us for Your Logo Needs
      </p>
    
  <div className="flex items-center justify-center gap-4 flex-wrap">

  <a href='https://api.whatsapp.com/send?phone=918143407758' className="text-xs sm:text-sm transform rounded bg-yellow-500 border border-slate-200 px-20 py-2 font-medium text-black transition-colors hover:bg-slate-50 ">
    Whatsapp
  </a>
  <Link to='/contactus'>
  <button className="text-xs sm:text-sm transform rounded border border-slate-200 px-14 py-2 font-medium text-black transition-colors hover:bg-slate-50 hover:text-black">
    Contact us
  </button></Link>
 </div>
 </section>





{/* Blog: Logo Design Tips and Trends */}
  <section className="bg-gray-200 ">
  <div className="grid max-w-screen-xl px-16 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
    <div className="mr-auto sm:mr-10 place-self-center lg:col-span-7">
      <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl ">
      Blog
      </h1>
      <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl ">
      A great logo is your brand's first impression, leaving a lasting impact and enhancing recognition. It conveys professionalism, setting you apart from the competition. Your logo embodies your brand's identity, fostering deep connections with your audience. It ensures memorability, making your brand stand out, and serves as a trust-building, loyalty-inducing symbol. In summary, a great logo is the cornerstone of your brand's success, speaking volumes with just a glance.
      </p>
      <a
        href="#"
        className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-black  "
      >
        know more
        <svg
          className="w-5 h-5 ml-2 -mr-1"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </a>
     
    </div>
    <div className=" lg:mt-0 lg:col-span-5 lg:flex rounded-lg">
      <img
        src="https://lp-cms-production.imgix.net/2019-06/554369495_full.jpg"
        alt="mockup"
        className="rounded-lg"
      />
    </div>
   </div>
   </section>

{/* Request a Custom Design */}
 <section className="text-center mx-auto my-8">
      <h2 className="cursor-default pb-2 font-extrabold text-transparent text-2xl md:text-5xl lg:text-6xl bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600 mt-3  tracking-tight ">
      Request a Custom Logo Design
      </h2>
      <p className="cursor-default text-sm font-medium text-black mt-5 mb-10">
        Explore our comprehensive documentation for more information on our services.
      </p>
    
  <div className="flex items-center justify-center gap-4 flex-wrap">

  <a href='https://api.whatsapp.com/send?phone=918143407758' className="text-xs sm:text-sm transform rounded bg-yellow-500 border border-slate-200 px-20 py-2 font-medium text-black transition-colors hover:bg-slate-50 ">
    Whatsapp
  </a>
  <Link to='/contactus'>
  <button className="text-xs sm:text-sm transform rounded border border-slate-200 px-14 py-2 font-medium text-black transition-colors hover:bg-slate-50 hover:text-black">
    Contact us
  </button></Link>
 </div>
 </section>






    </main>
  )
}

export default LogoDesign