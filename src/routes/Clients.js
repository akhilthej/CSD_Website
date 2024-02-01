import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Brand_slider from "../components/Sliders/Brand_slider";

import {
  LabelAnuneniwhite,
  LabelAnunenipc,
  LaytonSkinpc,
  LaytonSkinWhite,
  Ilahewhite,
  Ilahepc,
  Arkwhite,
  Arkwhitepc,
} from "../assets/data/Imagedata";

const Clients = () => {
  return (
    <div>
      <Helmet>
        <title>Cyber Space Digital - Clients</title>
        <meta
          name="description"
          content="Cyberspacedigital, Technologies we deal with to full fill your digital needs. Our research will be posted below."
        />
        <link rel="canonical" href="/technologies" />
      </Helmet>

      {/* Title Card */}
      <section
        className="py-28 sm:py-40"
        style={{
          backgroundImage:
            'url("https://raw.githubusercontent.com/akhilthej/CSD_Website/c95062aaf0108bfcb5f6d078e5b59238a6ec1605/src/assets/CoverImages/ServicesCoverImage.png")',
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
              <h1 className="text-2xl pb-5 md:text-6xl fade-in-down font-extrabold text-center text-white tracking-tight">
                Our Clients
              </h1>
              <p className="text-white sm:text-sm text-xs text-center sm:ml-0">
                Join our weekly digest. You'll also receive some of our best
                posts today.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link to="/aboutus">
                  <a className="transform rounded-md bg-white px-5 py-3 font-medium text-black transition-colors hover:bg-black hover:text-white">
                    Learn More
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

      <Brand_slider />

      {/* ====== Brands Section End */}
      <section></section>
      <section className="text-center portfolio text-4xl font-extrabold text-transparent  md:text-6xl bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400 tracking-tight">
        {/* heading */}
        <div>
          <span>Recent Projects</span>
          <span>Portfolio</span>
        </div>

        {/* mock-upimages */}
        <section class="labelanuneniMockup">
          <div className="tracking-normal 2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
            <div className="flex flex-col lg:flex-row justify-between gap-8">
              <div className="w-full lg:w-5/12 flex flex-col justify-center">
                <h2 className="text-3xl lg:text-4xl font-bold leading-9 pb-4 text-orange-600">
                  LabelAnuneni.com
                </h2>
                <p className="font-normal text-sm text-black pb-4">
                  The Art of Indian Handlooms is the greatest treasure one can
                  preserve, and our authentic hand weaves are the "Labour of
                  Love."
                </p>
                <img
                  className="fade-in-down mt-6 active mx-auto  w-full max-w-sm"
                  src={LabelAnunenipc}
                  alt="labelanunenimockup-2"
                />
              </div>
              <div className="w-full lg:w-8/12 ">
                <img
                  className="fade-in-down w-full max-w-xl mx-auto"
                  src={LabelAnuneniwhite}
                  alt="labelanunenimockup"
                />
                <h2 className="text-3xl lg:text-4xl font-bold leading-9 pb-4 text-yellow-500">
                  Tech Details
                </h2>
                <p className="font-normal   text-base leading-6 text-black ">
                  An e-commerce website with custom payment gate ways and auto
                  delivery system.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section class="ilihaMockup">
          <div className="tracking-normal 2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
            <div className="flex flex-col lg:flex-row justify-between gap-8">
              <div className="w-full lg:w-5/12 flex flex-col justify-center">
                <h2 className="text-3xl lg:text-4xl font-bold leading-9 pb-4 text-orange-600">
                  ilahe.in
                </h2>
                <p className="font-normal text-sm text-black pb-4">
                  Modeling and Finishing School
                </p>
                <img
                  className="fade-in-down mt-6 active mx-auto  w-full max-w-sm"
                  src={Ilahepc}
                  alt="ilihaMockup-2"
                />
              </div>
              <div className="w-full lg:w-8/12 ">
                <img
                  className="fade-in-down w-full max-w-xl mx-auto"
                  src={Ilahewhite}
                  alt="ilihaMockup"
                />
                <h2 className="text-3xl lg:text-4xl font-bold leading-9 pb-4 text-yellow-500">
                  Tech Details
                </h2>
                <p className="font-normal   text-base leading-6 text-black ">
                  Wordpress developed website. Custom forms and elementor pro
                  Designer tool.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section class="labelanuneniMockup">
          <div className="tracking-normal 2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
            <div className="flex flex-col lg:flex-row justify-between gap-8">
              <div className="w-full lg:w-5/12 flex flex-col justify-center">
                <h2 className="text-3xl lg:text-4xl font-bold leading-9 pb-4 text-orange-600">
                  Laytonskin.in
                </h2>
                <p className="font-normal text-sm text-black pb-4">
                  An e-commerce website from beauty and skin care products.
                </p>
                <img
                  className="fade-in-down mt-6 active mx-auto  w-full max-w-sm"
                  src={LaytonSkinpc}
                  alt="labelanunenimockup-2"
                />
              </div>
              <div className="w-full lg:w-8/12 ">
                <img
                  className="fade-in-down w-full max-w-xl mx-auto"
                  src={LaytonSkinWhite}
                  alt="labelanunenimockup"
                />
                <h2 className="text-3xl lg:text-4xl font-bold leading-9 pb-4 text-yellow-500">
                  Tech Details
                </h2>
                <p className="font-normal   text-base leading-6 text-black ">
                  An e-commerce website with custom payment gate ways and auto
                  delivery system.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section class="arkMockup">
          <div className="tracking-normal 2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
            <div className="flex flex-col lg:flex-row justify-between gap-8">
              <div className="w-full lg:w-5/12 flex flex-col justify-center">
                <h2 className="text-3xl lg:text-4xl font-bold leading-9 pb-4 text-orange-600">
                  archivitusdesigners.com
                </h2>
                <p className="font-normal text-sm text-black pb-4">
                  Interior Designer / Construction
                </p>
                <img
                  className="fade-in-down mt-6 active mx-auto  w-full max-w-sm"
                  src={Arkwhitepc}
                  alt="arkMockup-2"
                />
              </div>
              <div className="w-full lg:w-8/12 ">
                <img
                  className="fade-in-down w-full max-w-xl mx-auto"
                  src={Arkwhite}
                  alt="arkMockup"
                />
                <h2 className="text-3xl lg:text-4xl font-bold leading-9 pb-4 text-yellow-500">
                  Tech Details
                </h2>
                <p className="font-normal   text-base leading-6 text-black ">
                  Wordpress developed website. Custom forms and elementor pro
                  Designer tool.
                </p>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Clients;
