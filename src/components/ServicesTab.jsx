import React from 'react'

import {
  HeroCoverBG,
  Advertising,
  Branding,
  DigitalMarketing,
  GraphicDesign,
  MobileAppDevelopment,
  WebDevelopment,
  MoreFeatures,
} from "../components/data/data";

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
            <div className="mt-16 grid bg-white/80 border divide-x divide-y rounded-xl overflow-hidden sm:grid-cols-2 lg:divide-y-0 lg:grid-cols-3 xl:grid-cols-4">
              <div className="relative group transition hover:z-[1] hover:shadow-2xl">
                <div className="relative p-8 space-y-8">
                  <img
                    src={WebDevelopment}
                    className="w-2/3 ml-auto"
                    alt="WebDevelopment"
                    loading="lazy"
                    width={900}
                    height={600}
                  />
                  <div className="space-y-2">
                    <h5 className="text-lg text-black font-medium transition group-hover:text-yellow-600">
                      Web Development
                    </h5>
                    <p className="text-sm text-black">
                      Web development is the work involved in developing a
                      website for the Internet (World Wide Web) or an
                      intranet (a private network).
                    </p>
                  </div>
                  <a
                    href="https://cyberspacedigital.in/web-developement-company"
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
                    src={MobileAppDevelopment}
                    className="w-2/3 ml-auto"
                    alt="MobileAppDevelopment"
                    loading="lazy"
                    width={900}
                    height={600}
                  />
                  <div className="space-y-2">
                    <h5 className="text-lg text-black font-medium transition group-hover:text-yellow-600">
                      Mobile App Development
                    </h5>
                    <p className="text-sm text-black">
                      The process of creating software applications that run
                      on a mobile device.
                    </p>
                  </div>
                  <a
                    href="/services"
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
                    src={DigitalMarketing}
                    className="w-2/3 ml-auto"
                    alt="DigitalMarketing"
                    loading="lazy"
                    width={900}
                    height={600}
                  />
                  <div className="space-y-2">
                    <h5 className="text-base text-black font-medium transition group-hover:text-yellow-600">
                      Digital Marketing
                    </h5>
                    <p className="text-sm text-black">
                      Marketing has always been about connecting with your
                      audience in the right place and at the right time.
                      Today, that means you need to meet them where they are
                      already spending time: on the internet.
                    </p>
                  </div>
                  <a
                    href="/services"
                    className="flex justify-between items-center group-hover:text-yellow-600"
                  >
                    <span className="text-sm">Read more</span>
                    <span className="-translate-x-4 opacity-0 text-2xl transition duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                      →
                    </span>
                  </a>
                </div>
              </div>
              
              <div className="relative group transition hover:z-[1] hover:shadow-2xl lg:hidden xl:block ">
              <div className="relative p-8 space-y-8 border-dashed rounded-lg transition duration-300 group-hover:bg-yellow-500 group-hover:border group-hover:scale-90">
                <img
                  src={MoreFeatures}
                  className="w-2/3 ml-auto"
                  alt="MoreFeatures"
                  loading="lazy"
                  width={900}
                  height={600}
                />
                <div className="space-y-2">
                  <h5 className="text-xl text-black font-medium transition">
                    More features
                  </h5>
                  <p className="text-sm text-black">
                    Checkout our services page for more features or contact
                    our support team if you're looking for some new ideas.
                  </p>
                </div>
                <a
                  href="/services"
                  className="flex justify-between items-center"
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
        </div>
    </section>
    <section>
      <div className="pb-10 overflow-hidden">
        <div className="container m-auto px-6 space-y-8 text-gray-500 md:px-12">
          <div className="bg-white/80 mt-0.5 grid border divide-x divide-y rounded-xl overflow-hidden sm:grid-cols-2 lg:divide-y-0 lg:grid-cols-3 xl:grid-cols-4">
            <div className="relative group transition hover:z-[1] hover:shadow-2xl">
              <div className="relative p-8 space-y-8">
                <img
                  src={GraphicDesign}
                  className="w-2/3 ml-auto"
                  alt="GraphicDesign"
                  loading="lazy"
                  width={900}
                  height={600}
                />
                <div className="space-y-2">
                  <h5 className="text-xl text-black font-medium transition group-hover:text-yellow-600">
                    Graphic Design
                  </h5>
                  <p className="text-sm text-black">
                    The art of conveying messages and ideas through creative
                    visuals and layouts, combining aesthetics with effective
                    communication.
                  </p>
                </div>
                <a
                  href="/services"
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
                  src={Branding}
                  className="w-2/3 ml-auto"
                  alt="Branding"
                  loading="lazy"
                  width={900}
                  height={600}
                />
                <div className="space-y-2">
                  <h5 className="text-xl text-black font-medium transition group-hover:text-yellow-600">
                    Brand Services
                  </h5>
                  <p className="text-sm text-black">
                    There are many potential methods that business
                    professionals can use to develop successful branding
                    strategies. Endorsed branding can allow companies to
                    unify their branding efforts to meet their goals.
                  </p>
                </div>
                <a
                  href="/services"
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
                  src={Advertising}
                  className="w-2/3 ml-auto"
                  alt="Advertising"
                  loading="lazy"
                  width={900}
                  height={600}
                />
                <div className="space-y-2">
                  <h5 className="text-xl text-black font-medium transition group-hover:text-yellow-600">
                    Advertising
                  </h5>
                  <p className="text-sm text-black">
                    Advertising ATL (Above the Line) refers to mass media
                    advertising methods like TV, radio, and print, targeting
                    a broad audience. BTL (Below the Line) involves more
                    targeted, direct, and personalized marketing strategies,
                    often using digital and experiential methods.
                  </p>
                </div>
                <a
                  href="/services"
                  className="flex justify-between items-center group-hover:text-yellow-600"
                >
                  <span className="text-sm">Read more</span>
                  <span className="-translate-x-4 opacity-0 text-2xl transition duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                    →
                  </span>
                </a>
              </div>
            </div>
            <div className="relative group transition hover:z-[1] hover:shadow-2xl lg:hidden xl:block">
              <div className="relative p-8 space-y-8 border-dashed rounded-lg transition duration-300 group-hover:bg-yellow-500 group-hover:border group-hover:scale-90">
                <img
                  src={MoreFeatures}
                  className="w-2/3 ml-auto"
                  alt="MoreFeatures"
                  loading="lazy"
                  width={900}
                  height={600}
                />
                <div className="space-y-2">
                  <h5 className="text-xl text-black font-medium transition">
                    More features
                  </h5>
                  <p className="text-sm text-black">
                    Checkout our services page for more features or contact
                    our support team if you're looking for some new ideas.
                  </p>
                </div>
                <a
                  href="/services"
                  className="flex justify-between items-center"
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
  )
}

export default ServicesTab