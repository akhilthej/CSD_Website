import React from 'react'
import { Helmet } from 'react-helmet-async';
import {Link} from 'react-router-dom';

import {TechHeroHeader} from '../components/data/data';

const TECHNOLOGIES = () => {
  return (
    <div className='Technologies'>
      <Helmet>
                <title>Cyber Space Digital - Blogs</title>
                <meta name="description" content='Cyberspacedigital, Technologies we deal with to full fill your digital needs. Our research will be posted below.'/>
                <link rel="canonical" href="/technologies" />
      </Helmet>
    
<main>
  <section>
    <div className=" flex items-center justify-center mt-24 mb-5">
    <div className="mx-auto w-full max-w-screen-lg  px-5 ">
      <div className="grid gap-5 md:grid-cols-2 md:gap-10 lg:gap-20">
        <div className="flex justify-center md:justify-end">
          <img
            className="w-full max-w-xl"
            src={TechHeroHeader}
            alt="Marketing newsletter via computer Illustration in PNG, SVG"
          />
        </div>
        <div className="flex items-center">
          <div className="mx-auto md:mx-0">
            <h3 className="text-4xl fade-in-down font-extrabold text-transparent  md:text-6xl bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600 tracking-tight">Blogs & Research</h3>
            <p className="mt-2 text-lg text-black">
            Research done for our project and Technologies we use for our community.
            </p>
            
            <div class="mt-8 flex flex-wrap justify-center gap-4">
        <Link to= '/contactus'><a
          class="transform rounded-mdpx-6 rounded bg-gradient-to-r from-orange-400 to-orange-600 px-5 py-3 font-medium text-white transition-colors hover:from-orange-600 hover:to-orange-400">
          Get in-touch
        </a></Link>

        <Link to= '/aboutus'><a
          class="transform rounded-md border bg-black px-5 py-3 font-medium text-white transition-colors hover:bg-slate-50 hover:text-black">
          Learn More
        </a></Link>
      </div>
           
          </div>
        </div>
      </div>
    </div>
    </div>
  </section>







  <>
  <div className='text-center justify-center pt-10 pb-8'>
  <span className="cursor-default upanddown  font-extrabold text-transparent text-2xl md:text-4xl  lg:text-4xl bg-clip-text text-gray-800  tracking-tight">
                  Cyber Space Digital : Blogs
                </span></div>
  {/* ====== Blog Section Start */}
  <section className=" pb-10 lg:pb-20">
    <div className="container mx-auto">
      <div className="-mx-4 flex flex-wrap">
        <div className="w-full px-4 md:w-1/2 lg:w-1/3">
          <div className="mx-auto mb-10 max-w-[370px]">
            <div className="mb-8 overflow-hidden rounded">
              <img
                src="https://cdn.tailgrids.com/2.0/image/application/images/blogs/blog-01/image-01.jpg"
                alt="image"
                className="w-full"
              />
            </div>
            <div>
              <span className="bg-primary mb-5 inline-block rounded py-1 px-4 text-center text-xs font-semibold leading-loose text-black">
                Dec 22, 2023
              </span>
              <h3>
                <a
                  href="https://cyberspacedigital.blogspot.com/2023/06/the-importance-of-website-for-your.html"
                  className="text-dark hover:text-primary mb-4 inline-block text-xl font-semibold sm:text-2xl lg:text-xl xl:text-2xl"
                >
                  The Importance of a Website for Your Business: Unlocking Online Success
                </a>
              </h3>
              <p className="text-body-color text-base">
              In today's digital age, having a strong online presence is crucial for the success and growth of any business.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full px-4 md:w-1/2 lg:w-1/3">
          <div className="mx-auto mb-10 max-w-[370px]">
            <div className="mb-8 overflow-hidden rounded">
              <img
                src="https://cdn.tailgrids.com/2.0/image/application/images/blogs/blog-01/image-02.jpg"
                alt="image"
                className="w-full"
              />
            </div>
            <div>
              <span className="bg-primary mb-5 inline-block rounded py-1 px-4 text-center text-xs font-semibold leading-loose text-black">
                Mar 15, 2023
              </span>
              <h3>
                <a
                  href="javascript:void(0)"
                  className="text-dark hover:text-primary mb-4 inline-block text-xl font-semibold sm:text-2xl lg:text-xl xl:text-2xl"
                >
                  How to earn more money as a wellness coach
                </a>
              </h3>
              <p className="text-body-color text-base">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full px-4 md:w-1/2 lg:w-1/3">
          <div className="mx-auto mb-10 max-w-[370px]">
            <div className="mb-8 overflow-hidden rounded">
              <img
                src="https://cdn.tailgrids.com/2.0/image/application/images/blogs/blog-01/image-03.jpg"
                alt="image"
                className="w-full"
              />
            </div>
            <div>
              <span className="bg-primary mb-5 inline-block rounded py-1 px-4 text-center text-xs font-semibold leading-loose text-black">
                Jan 05, 2023
              </span>
              <h3>
                <a
                  href="javascript:void(0)"
                  className="text-dark hover:text-primary mb-4 inline-block text-xl font-semibold sm:text-2xl lg:text-xl xl:text-2xl"
                >
                  The no-fuss guide to upselling and cross selling
                </a>
              </h3>
              <p className="text-body-color text-base">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* ====== Blog Section End */}
</>





<>
  <div className='text-center justify-center pt-10 pb-8'>
  <span className="cursor-default upanddown  font-extrabold text-transparent text-2xl md:text-4xl  lg:text-4xl bg-clip-text text-gray-800  tracking-tight">
                  DFC - Deccan Fried Chicken : Blogs
                </span></div>
  {/* ====== Blog Section Start */}
  <section className=" pb-10 lg:pb-20">
    <div className="container mx-auto">
      <div className="-mx-4 flex flex-wrap">
        <div className="w-full px-4 md:w-1/2 lg:w-1/3">
          <div className="mx-auto mb-10 max-w-[370px]">
            <div className="mb-8 overflow-hidden rounded">
              <img
                src="https://cdn.tailgrids.com/2.0/image/application/images/blogs/blog-01/image-01.jpg"
                alt="image"
                className="w-full"
              />
            </div>
            <div>
              <span className="bg-primary mb-5 inline-block rounded py-1 px-4 text-center text-xs font-semibold leading-loose text-black">
                Dec 22, 2023
              </span>
              <h3>
                <a
                  href="https://cyberspacedigital.blogspot.com/2023/06/the-importance-of-website-for-your.html"
                  className="text-dark hover:text-primary mb-4 inline-block text-xl font-semibold sm:text-2xl lg:text-xl xl:text-2xl"
                >
                  The Importance of a Website for Your Business: Unlocking Online Success
                </a>
              </h3>
              <p className="text-body-color text-base">
              In today's digital age, having a strong online presence is crucial for the success and growth of any business.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full px-4 md:w-1/2 lg:w-1/3">
          <div className="mx-auto mb-10 max-w-[370px]">
            <div className="mb-8 overflow-hidden rounded">
              <img
                src="https://cdn.tailgrids.com/2.0/image/application/images/blogs/blog-01/image-02.jpg"
                alt="image"
                className="w-full"
              />
            </div>
            <div>
              <span className="bg-primary mb-5 inline-block rounded py-1 px-4 text-center text-xs font-semibold leading-loose text-black">
                Mar 15, 2023
              </span>
              <h3>
                <a
                  href="javascript:void(0)"
                  className="text-dark hover:text-primary mb-4 inline-block text-xl font-semibold sm:text-2xl lg:text-xl xl:text-2xl"
                >
                  How to earn more money as a wellness coach
                </a>
              </h3>
              <p className="text-body-color text-base">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full px-4 md:w-1/2 lg:w-1/3">
          <div className="mx-auto mb-10 max-w-[370px]">
            <div className="mb-8 overflow-hidden rounded">
              <img
                src="https://cdn.tailgrids.com/2.0/image/application/images/blogs/blog-01/image-03.jpg"
                alt="image"
                className="w-full"
              />
            </div>
            <div>
              <span className="bg-primary mb-5 inline-block rounded py-1 px-4 text-center text-xs font-semibold leading-loose text-black">
                Jan 05, 2023
              </span>
              <h3>
                <a
                  href="javascript:void(0)"
                  className="text-dark hover:text-primary mb-4 inline-block text-xl font-semibold sm:text-2xl lg:text-xl xl:text-2xl"
                >
                  The no-fuss guide to upselling and cross selling
                </a>
              </h3>
              <p className="text-body-color text-base">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* ====== Blog Section End */}
</>

  </main>



    </div>
  )



}

export default TECHNOLOGIES