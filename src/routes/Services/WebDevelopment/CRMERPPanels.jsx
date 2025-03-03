import React, { useState } from "react";
import { Link } from "react-router-dom";
import Pages from "./WebDevelopment.json";
import { GlobalData } from "../../../assets/data/GlodalData";
import { DISCORD_WEBHOOKS } from "../../../hooks/Apis";

const CRMERPPanels = () => {
  const { CRMERPPanels } = Pages;
  const [showPopup, setShowPopup] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // Handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    // Replace 'YOUR_DISCORD_WEBHOOK_URL' with the actual URL of your Discord webhook
    const discordWebhookUrl = DISCORD_WEBHOOKS;
    const message = {
      content: `New lead: ${name} - ${email} - ${selectedPlan.title} - ${selectedPlan.price}`,
    };
    fetch(discordWebhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(message),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
    setShowPopup(false);
  };

  return (
    <main>
      {/* Title Card */}
      <section
        className="py-10 sm:py-40"
        style={{
          backgroundImage: `url(${CRMERPPanels.section1.backgroundImage.url})`,
          backgroundSize: CRMERPPanels.section1.backgroundImage.size,
          backgroundPosition: CRMERPPanels.section1.backgroundImage.position,
        }}
      >
        <div className="flex flex-col items-center md:flex-row justify-center">
          <div className="md:w-1/2 md:pr-10"></div>
          <div className="md:w-1/2 px-5">
            <div className="text-right md:text-left">
              {" "}
              {/* Align titles to the right on mobile, left on larger screens */}
              <h3 className="cursor-default  text-2xl pb-5 md:text-6xl fade-in-down font-extrabold text-center text-white tracking-tight">
                {CRMERPPanels.section1.title}
              </h3>
              <p className="cursor-default text-white sm:text-sm text-xs text-center sm:ml-0">
                {CRMERPPanels.section1.subtitle}
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <a href={`mailto:${GlobalData.company.companyEmail}`}>
                  <a className="transform rounded-md bg-white px-5 py-3 font-medium text-black transition-colors hover:bg-black hover:text-white">
                    Email
                  </a>
                </a>

                <a href={GlobalData.company.companyWhatsapp}>
                  <a className="transform rounded-md bg-white px-5 py-3 font-medium text-black transition-colors hover:bg-black hover:text-white">
                    WhatsApp
                  </a>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Subtitle section2 */}
      <section className="text-center mx-auto my-8">
        <h2 className="cursor-default pb-2 font-extrabold text-transparent text-2xl md:text-5xl lg:text-6xl bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600 mt-3  tracking-tight ">
          {CRMERPPanels.section2.title}
        </h2>
        <p className="cursor-default text-sm font-medium text-black mt-5 mb-10">
          {CRMERPPanels.section2.subtitle}
        </p>

        <div className="flex items-center justify-center gap-4 flex-wrap"></div>
      </section>

      {/* Why us for this */}
      <section className="bg-gray-200 ">
        <div className="grid max-w-screen-xl px-16 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto sm:mr-10 place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl ">
              {CRMERPPanels.section3.title}
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl ">
              {CRMERPPanels.section3.paragraph}
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
              src={CRMERPPanels.section3.image.url}
              alt={CRMERPPanels.section3.image.alt}
              className="rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Logo Design Pricing */}
      <section>
        <div className="container max-w-full mx-auto py-24 px-6">
          <h1 className="text-center pb-2 font-extrabold text-transparent text-2xl md:text-5xl lg:text-6xl bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600 mt-3  tracking-tight">
            Pricing
          </h1>
          <p className="text-center text-lg text-gray-700 mt-2 px-6">
            We are here to get the best price for you.
          </p>
          <div className="h-1 mx-auto bg-indigo-200 w-24 opacity-75 mt-4 rounded" />
          <div className="max-w-full md:max-w-6xl mx-auto my-3 md:px-8">
            <div className="flex flex-wrap justify-center -mx-4">
              {CRMERPPanels.pricingData.map((plan, index) => (
                <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8" key={index}>
                  <div className="bg-white text-black rounded-lg  shadow-lg overflow-hidden">
                    <div className="block text-left text-sm sm:text-md max-w-sm mx-auto mt-2 text-black px-8 lg:px-6">
                      <h1 className="text-lg font-medium uppercase p-3 pb-0 text-center tracking-wide">
                        {plan.title}
                      </h1>
                      <h2 className="text-sm text-gray-500 text-center pb-6">
                        {plan.price}
                      </h2>
                      Stripe offers everything needed to run an online business
                      at scale. Get in touch for details.
                    </div>
                    <div className="flex flex-wrap mt-3 px-6">
                      <ul>
                        {plan.features.map((feature, featureIndex) => (
                          <li className="flex items-center" key={featureIndex}>
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
                            <span className="text-gray-700 text-lg ml-3">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className=" flex items-center p-8 uppercase">
                      <button
                        className="mt-3 text-lg font-semibold bg-black w-full text-white rounded-lg px-6 py-3 block shadow-xl hover:bg-gray-700"
                        onClick={() => {
                          // Show popup
                          setShowPopup(true);
                          setSelectedPlan(plan);
                        }}
                      >
                        Select
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {showPopup && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-4 shadow-md">
            <h2 className="text-lg font-medium text-center">
              {selectedPlan.title} - {selectedPlan.price}
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  className="block w-full p-2 mt-1 text-sm text-gray-700 border border-gray-300 rounded-md"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  className="block w-full p-2 mt-1 text-sm text-gray-700 border border-gray-300 rounded-md"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <button
                type="submit"
                className="mt-4 text-lg font-semibold bg-black w-full text-white rounded-lg px-6 py-3 block shadow-xl hover:bg-gray-700"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
      {/* FAQs */}
      <div className="py-10 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-5">
            Frequently Asked Questions
          </h2>
          <div className="grid gap-4">
            {CRMERPPanels.LogofaqData.map((item, index) => (
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
          <a
            href={GlobalData.company.companyWhatsapp}
            className="text-xs sm:text-sm transform rounded bg-yellow-500 border border-slate-200 px-20 py-2 font-medium text-black transition-colors hover:bg-slate-50 "
          >
            Whatsapp
          </a>
          <Link to="/contactus">
            <button className="text-xs sm:text-sm transform rounded border border-slate-200 px-14 py-2 font-medium text-black transition-colors hover:bg-slate-50 hover:text-black">
              Contact us
            </button>
          </Link>
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
              A great logo is your brand's first impression, leaving a lasting
              impact and enhancing recognition. It conveys professionalism,
              setting you apart from the competition. Your logo embodies your
              brand's identity, fostering deep connections with your audience.
              It ensures memorability, making your brand stand out, and serves
              as a trust-building, loyalty-inducing symbol. In summary, a great
              logo is the cornerstone of your brand's success, speaking volumes
              with just a glance.
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
          Request a Custom {CRMERPPanels.section1.title}
        </h2>
        <p className="cursor-default text-sm font-medium text-black mt-5 mb-10">
          Explore our comprehensive documentation for more information on our
          services.
        </p>

        <div className="flex items-center justify-center gap-4 flex-wrap">
          <a
            href={GlobalData.company.companyWhatsapp}
            className="text-xs sm:text-sm transform rounded bg-yellow-500 border border-slate-200 px-20 py-2 font-medium text-black transition-colors hover:bg-slate-50 "
          >
            Whatsapp
          </a>
          <a
            href={`tel:${GlobalData.company.companyPhone}`}
            class="text-xs sm:text-sm transform rounded border border-slate-200 px-14 py-2 font-medium text-black transition-colors hover:bg-slate-50 hover:text-black"
          >
            Call Now
          </a>
        </div>
      </section>
    </main>
  );
};

export default CRMERPPanels;
