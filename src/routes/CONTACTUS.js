import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import { useForm, ValidationError } from "@formspree/react";

const CONTACTUS = () => {
  const [state, handleSubmit] = useForm("myyagqep");
  if (state.succeeded) {
    return (
      <p className="text-center py-10 text-black">
        Thanks for Submitting, We will get back to you!
      </p>
    );
  }

  return (
    <div>
      <Helmet>
        <title>Contact us</title>
        <meta
          name="description"
          content="Web Development and Digital Marketing Company. We are here to build you business online. One stop for all your digital needs."
        />
        <link rel="canonical" href="/contactus" />
      </Helmet>

      {/* Title Card */}
      <section
        className="py-10 sm:py-40"
        style={{
          backgroundImage:
            'url("https://drive.google.com/uc?id=1-RKGIgPQ6gfNDnoW1jr6R_TzB9P_12ge")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex flex-col items-center md:flex-row justify-center">
          <div className="md:w-1/2 md:pr-10"></div>
          <div className="md:w-1/2 px-5">
            <div className="text-right md:text-left">
              {" "}
              {/* Align titles to the right on mobile, left on larger screens */}
              <h3 className="cursor-default  text-2xl pb-5 md:text-6xl fade-in-down font-extrabold text-center text-white tracking-tight">
                Get in touch,
                <br />
                we’d love to hear from you.
              </h3>
              <p className="cursor-default text-white sm:text-sm text-xs text-center sm:ml-0">
                You can contact us through mail or you can get in touch at our
                digital office.
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

      {/*contact form*/}
      <section className="bg-gray-200 pt-20">
        <div class="relative flex items-top justify-center  sm:items-center sm:pt-0">
          <div class="max-w-6xl mx-auto sm:px-6 lg:px-8">
            <div class=" overflow-hidden">
              <div class="grid grid-cols-1 md:grid-cols-2">
                <div class="p-6 mr-2   sm:rounded-lg">
                  <h1 class="text-center sm:text-left text-4xl sm:text-5xl text-black font-extrabold tracking-tight">
                    Get in Touch
                  </h1>
                  <p class="text-center sm:text-left text-normal text-lg sm:text-2xl font-medium text-black mt-2">
                    Fill in the form to start a conversation
                  </p>

                  <div class="flex items-center mt-8 text-black">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      viewBox="0 0 24 24"
                      class="w-8 h-8 text-gray-500"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <div class="ml-2 text-sm sm:text-base text-md tracking-wide font-semibold w-">
                      Shivaji Palem, Maddilapalem,
                      <br /> Visakhapatnam, Andhra Pradesh 530017
                    </div>
                  </div>

                  <div class="flex items-center mt-4 text-black">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      viewBox="0 0 24 24"
                      class="w-8 h-8 text-gray-500"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    <div class="ml-4 text-sm sm:text-base tracking-wide font-semibold w-40">
                      +91 8143407758
                    </div>
                  </div>

                  <div class="flex items-center mt-4 text-black">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      viewBox="0 0 24 24"
                      class="w-8 h-8 text-gray-500"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <div class="ml-4 text-sm sm:text-base tracking-wide font-semibold w-40">
                      admin@cyberspacedigital.in
                    </div>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8 mx-5 my-5">
                  <div>
                    <label
                      htmlFor="Name"
                      className="text-black block mb-2 text-sm font-medium "
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5   "
                      placeholder="Sam"
                    />

                    <label
                      htmlFor="email"
                      className="text-black block mb-2 text-sm font-medium pt-2"
                    >
                      Your email
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5   "
                      placeholder="sam@mail.com"
                    />
                  </div>
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                  />

                  <div>
                    <label
                      htmlFor="subject"
                      className="text-black block mb-2 text-sm font-medium "
                    >
                      Subject
                    </label>
                    <input
                      id="subject"
                      type="text"
                      name="subject"
                      className="block p-3 w-full text-sm  bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500  "
                      placeholder="Let us know how we can help you"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="message"
                      className="block mb-2 text-sm font-medium "
                    >
                      {" "}
                    </label>
                    <textarea
                      id="message"
                      rows={6}
                      name="message"
                      className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 "
                      placeholder="Leave a comment..."
                    />
                  </div>
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                  />
                  <button
                    type="submit"
                    disabled={state.submitting}
                    className="text-white bg-black block w-full rounded-3xl border  border-black px-12 py-3 text-sm font-medium   hover:text-black hover:bg-white  sm:w-auto"
                  >
                    Send Message
                  </button>
                  <div className="hidden">
                    <input type="submit" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*FAQ*/}
      <div className="flex">
        <div className="max-w-screen-xl mx-auto px-5 bg-white min-h-sceen">
          <div className="flex flex-col items-center">
            <h2 className="font-bold text-5xl mt-5 tracking-tight">FAQ</h2>
            <p className="text-neutral-500 text-xl mt-3">
              Web Development & App Development
            </p>
          </div>
          <div className="grid divide-y divide-neutral-200 max-w-xl mx-auto mt-8">
            <div className="py-5">
              <details className="group">
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                  <span> What services do you offer?</span>
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
                <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                  We offer a wide range of services, including web development,
                  mobile app development, custom software development, UX/UI
                  design, and digital strategy consulting.
                </p>
              </details>
            </div>
            <div className="py-5">
              <details className="group">
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                  <span> What platforms do you develop apps for?</span>
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
                <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                  We develop apps for iOS, Android, and cross-platform solutions
                  like React Native and Flutter.
                </p>
              </details>
            </div>
            <div className="py-5">
              <details className="group">
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                  <span>
                    {" "}
                    Do you offer both front-end and back-end development?
                  </span>
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
                <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                  Yes, we provide both front-end and back-end development
                  services to create fully functional web and mobile
                  applications.
                </p>
              </details>
            </div>
            <div className="py-5">
              <details className="group">
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                  <span>
                    {" "}
                    How much does it cost to develop a website or app?
                  </span>
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
                <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                  The cost depends on the project's complexity, features, and
                  technology requirements. We offer free consultations and
                  provide customized quotes based on your specific needs.
                </p>
              </details>
            </div>
            <div className="py-5">
              <details className="group">
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                  <span>
                    {" "}
                    What is the typical timeline for a development project?
                  </span>
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
                <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                  Project timelines vary based on complexity, but we will
                  provide a project roadmap with milestones and estimated
                  delivery dates during the planning phase.
                </p>
              </details>
            </div>
            <div className="py-5">
              <details className="group">
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                  <span>
                    {" "}
                    Can you maintain and update our website or app after it's
                    developed?
                  </span>
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
                <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                  Yes, we offer ongoing maintenance and support services to
                  ensure your website or app remains up to date and functions
                  smoothly.
                </p>
              </details>
            </div>
            <div className="py-5">
              <details className="group">
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                  <span> Do you follow Agile development methodologies?</span>
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
                <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                  Yes, we commonly use Agile methodologies to ensure
                  flexibility, collaboration, and frequent updates during the
                  development process.
                </p>
              </details>
            </div>
            <div className="py-5">
              <details className="group">
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                  <span> Can you help with hosting and server setup?</span>
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
                <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                  Yes, we offer assistance with hosting, server setup, and
                  deployment to ensure your web application is accessible to
                  users.
                </p>
              </details>
            </div>
            <div className="py-5">
              <details className="group">
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                  <span>
                    {" "}
                    What steps do you take to ensure the security of web and
                    mobile applications?
                  </span>
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
                <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                  We follow industry best practices, conduct security audits,
                  and implement encryption, authentication, and authorization
                  measures to enhance the security of your application.
                </p>
              </details>
            </div>
            <div className="py-5">
              <details className="group">
                <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                  <span>
                    {" "}
                    Can you assist with app store submissions and web
                    deployment?
                  </span>
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
                <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                  Yes, we can help you with the submission process for app
                  stores (Apple App Store, Google Play Store) and deploy
                  websites to hosting servers.
                </p>
              </details>
            </div>
            {/* Add more FAQ questions here using the same structure */}
          </div>
        </div>

        <>
          <div className="max-w-screen-xl mx-auto px-5 bg-white min-h-sceen">
            <div className="flex flex-col items-center">
              <h2 className="font-bold text-5xl mt-5 tracking-tight">FAQ</h2>
              <p className="text-neutral-500 text-xl mt-3">Digital Marketing</p>
            </div>
            <div className="grid divide-y divide-neutral-200 max-w-xl mx-auto mt-8">
              <div className="py-5">
                <details className="group">
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                    <span>
                      {" "}
                      What services do you offer as a digital marketing company?
                    </span>
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
                  <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                    We offer a wide range of digital marketing services,
                    including search engine optimization (SEO), pay-per-click
                    advertising (PPC), social media marketing, content
                    marketing, email marketing, and more.
                  </p>
                </details>
              </div>
              <div className="py-5">
                <details className="group">
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                    <span> How can digital marketing benefit my business?</span>
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
                  <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                    Digital marketing can help your business by increasing your
                    online visibility, driving targeted traffic to your website,
                    generating leads and conversions, and improving your brand's
                    online reputation.
                  </p>
                </details>
              </div>
              <div className="py-5">
                <details className="group">
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                    <span>
                      {" "}
                      Do you customize digital marketing strategies for each
                      client?
                    </span>
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
                  <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                    Yes, we tailor our digital marketing strategies to the
                    unique needs and goals of each client. We believe in a
                    personalized approach to deliver the best results.
                  </p>
                </details>
              </div>
              <div className="py-5">
                <details className="group">
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                    <span>
                      {" "}
                      What is the typical timeline for seeing results from
                      digital marketing efforts?
                    </span>
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
                  <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                    The timeline for results varies depending on the specific
                    strategy and goals. Some strategies may show immediate
                    results, while others, like SEO, require several months to
                    see substantial improvements.
                  </p>
                </details>
              </div>
              <div className="py-5">
                <details className="group">
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                    <span>
                      {" "}
                      How do you measure the success of a digital marketing
                      campaign?
                    </span>
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
                  <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                    We use various key performance indicators (KPIs) and
                    analytics tools to measure the success of a campaign,
                    including website traffic, conversion rates, click-through
                    rates, and return on investment (ROI).
                  </p>
                </details>
              </div>
              <div className="py-5">
                <details className="group">
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                    <span>
                      {" "}
                      Do you offer website design and development services as
                      part of digital marketing?
                    </span>
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
                  <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                    Yes, we provide website design and development services to
                    ensure that your website is optimized for digital marketing
                    efforts, user-friendly, and visually appealing.
                  </p>
                </details>
              </div>
              <div className="py-5">
                <details className="group">
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                    <span>
                      {" "}
                      Can you help with online advertising, such as Google Ads
                      and Facebook Ads?
                    </span>
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
                  <p className="text-neutral-600 mt-3 group-open:animate-fadeIn">
                    Absolutely! We specialize in managing online advertising
                    campaigns, including Google Ads, Facebook Ads, and other
                    platforms, to drive traffic and conversions.
                  </p>
                </details>
              </div>
              {/* Add more FAQ questions here using the same structure */}
            </div>
          </div>
        </>
      </div>
    </div>
  );
};

export default CONTACTUS;
