import React from 'react';
import { Link } from 'react-router-dom';

import {
  HeroCoverBG,
  Advertising,
  Branding,
  DigitalMarketing,
  GraphicDesign,
  MobileAppDevelopment,
  WebDevelopment,
} from "../assets/data/Imagedata";

const ServicesTab = () => {
  return (
    <div>
      <section>
        <div className="overflow-hidden">
          <div className="container m-auto px-6 space-y-8 text-black md:px-12">
            <div>
              <p className="text-xl sm:text-4xl font-bold text-black pt-10">
                Main Features
              </p>
              <h2 className="font-extrabold text-transparent text-3xl md:text-6xl lg:text-6xl bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600 tracking-tight ">
                Services, We Provide
              </h2>
            </div>

            <div
              style={{
                backgroundPosition: "center",
                backgroundImage: `url(${HeroCoverBG})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              <div className="mt-16 mb-10 grid bg-white/80 border divide-x divide-y rounded-xl overflow-hidden grid-cols-2 lg:grid-cols-6 xl:grid-cols-6">
                <Link to="/best-web-developement-company">
                  <div className="relative group transition hover:z-[1] hover:shadow-2xl lg:hidden xl:block">
                    <div className="relative p-8 space-y-8 border-dashed rounded-lg transition duration-300 group-hover:bg-yellow-500 group-hover:border group-hover:scale-90">
                      <img
                        src={WebDevelopment}
                        className="w-2/3 ml-auto"
                        alt="WebDevelopment"
                        loading="lazy"
                        width={900}
                        height={600}
                      />
                      <div className="space-y-2">
                        <h5 className="text-lg text-black font-medium transition group-hover:text-white">
                          Web Development
                        </h5>
                        <p className="text-sm text-black">
                          Web development for the Internet.
                        </p>
                      </div>
                      <a className="flex justify-between items-center group-hover:text-white">
                        <span className="text-sm bg-yellow-400 py-2 px-2 rounded">Read more</span>
                        <span className="-translate-x-4 opacity-0 text-2xl transition duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                          →
                        </span>
                      </a>
                    </div>
                  </div>
                </Link>

                <Link to="/best-mobile-app-development-company">
                  <div className="relative group transition hover:z-[1] hover:shadow-2xl lg:hidden xl:block">
                    <div className="relative p-8 space-y-8 border-dashed rounded-lg transition duration-300 group-hover:bg-yellow-500 group-hover:border group-hover:scale-90">
                      <img
                        src={MobileAppDevelopment}
                        className="w-2/3 ml-auto"
                        alt="MobileAppDevelopment"
                        loading="lazy"
                        width={900}
                        height={600}
                      />
                      <div className="space-y-2">
                        <h5 className="text-lg text-black font-medium transition group-hover:text-white">
                          Mobile App Development
                        </h5>
                        <p className="text-sm text-black">
                          Software applications for mobile devices.
                        </p>
                      </div>
                      <a className="flex justify-between items-center group-hover:text-white">
                        <span className="text-sm bg-yellow-400 py-2 px-2 rounded">Read more</span>
                        <span className="-translate-x-4 opacity-0 text-2xl transition duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                          →
                        </span>
                      </a>
                    </div>
                  </div>
                </Link>

                <Link to="/best-digital-marketing-company">
                  <div className="relative group transition hover:z-[1] hover:shadow-2xl lg:hidden xl:block">
                    <div className="relative p-8 space-y-8 border-dashed rounded-lg transition duration-300 group-hover:bg-yellow-500 group-hover:border group-hover:scale-90">
                      <img
                        src={DigitalMarketing}
                        className="w-2/3 ml-auto"
                        alt="DigitalMarketing"
                        loading="lazy"
                        width={900}
                        height={600}
                      />
                      <div className="space-y-2">
                        <h5 className="text-base text-black font-medium transition group-hover:text-white">
                          Digital Marketing
                        </h5>
                        <p className="text-sm text-black">
                          Connect with your audience effectively on the internet.
                        </p>
                      </div>
                      <a className="flex justify-between items-center group-hover:text-white">
                        <span className="text-sm bg-yellow-400 py-2 px-2 rounded">Read more</span>
                        <span className="-translate-x-4 opacity-0 text-2xl transition duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                          →
                        </span>
                      </a>
                    </div>
                  </div>
                </Link>
                {/* Graphic Design */}
                <Link to="/best-graphic-designing-company">
                  <div className="relative group transition hover:z-[1] hover:shadow-2xl lg:hidden xl:block">
                    <div className="relative p-8 space-y-8 border-dashed rounded-lg transition duration-300 group-hover:bg-yellow-500 group-hover:border group-hover:scale-90">
                      <img
                        src={GraphicDesign}
                        className="w-2/3 ml-auto"
                        alt="GraphicDesign"
                        loading="lazy"
                        width={900}
                        height={600}
                      />
                      <div className="space-y-2">
                        <h5 className="text-xl text-black font-medium transition group-hover:text-white">
                          Graphic Design
                        </h5>
                        <p className="text-sm text-black">
                          Convey messages through creative visuals and layouts.
                        </p>
                      </div>
                      <a className="flex justify-between items-center group-hover:text-white">
                        <span className="text-sm bg-yellow-400 py-2 px-2 rounded">Read more</span>
                        <span className="-translate-x-4 opacity-0 text-2xl transition duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                          →
                        </span>
                      </a>
                    </div>
                  </div>
                </Link>

                {/* Brand Services */}
                <Link to="/best-brand-services-company">
                  <div className="relative group transition hover:z-[1] hover:shadow-2xl lg:hidden xl:block">
                    <div className="relative p-8 space-y-8 border-dashed rounded-lg transition duration-300 group-hover:bg-yellow-500 group-hover:border group-hover:scale-90">
                      <img
                        src={Branding}
                        className="w-2/3 ml-auto"
                        alt="Branding"
                        loading="lazy"
                        width={900}
                        height={600}
                      />
                      <div className="space-y-2">
                        <h5 className="text-xl text-black font-medium transition group-hover:text-white">
                          Brand Services
                        </h5>
                        <p className="text-sm text-black">
                          Unlock branding success with various strategies. Endorsed branding unifies efforts to meet goals.
                        </p>
                      </div>
                      <a className="flex justify-between items-center group-hover:text-white">
                        <span className="text-sm bg-yellow-400 py-2 px-2 rounded">Read more</span>
                        <span className="-translate-x-4 opacity-0 text-2xl transition duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                          →
                        </span>
                      </a>
                    </div>
                  </div>
                </Link>
                {/* Advertising */}
                <Link to="/best-advertising-company">
                  <div className="relative group transition hover:z-[1] hover:shadow-2xl lg:hidden xl:block">
                    <div className="relative p-8 space-y-8 border-dashed rounded-lg transition duration-300 group-hover:bg-yellow-500 group-hover:border group-hover:scale-90">
                      <img
                        src={Advertising}
                        className="w-2/3 ml-auto"
                        alt="Advertising"
                        loading="lazy"
                        width={900}
                        height={600}
                      />
                      <div className="space-y-2">
                        <h5 className="text-xl text-black font-medium transition group-hover:text-white">
                          Advertising
                        </h5>
                        <p className="text-sm text-black">
                          ATL Advertising: Mass media outreach via TV, radio, and print for broad audiences.
                          BTL Advertising: Personalized, direct, and digital strategies for precise targeting.
                        </p>
                      </div>
                      <a href="/best-advertising-company" className="flex justify-between items-center group-hover:text-white">
                        <span className="text-sm bg-yellow-400 py-2 px-2 rounded">Read more</span>
                        <span className="-translate-x-4 opacity-0 text-2xl transition duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                          →
                        </span>
                      </a>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ServicesTab;
