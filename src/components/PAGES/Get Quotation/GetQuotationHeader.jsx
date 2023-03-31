import React from 'react';
import {Link} from 'react-router-dom';

import {GetQoutation,Webdevimg} from '../../data/data';
import Testqotes from './Forms/Testqotes';


const GetQuotationHeader = () => {
  return (
    <>
    <header>
  <div className="glass flex items-center justify-center my-2 ">
    <div className="mx-auto w-full max-w-screen-lg  px-5 ">
      <div className="grid gap-5 md:grid-cols-2 md:gap-10 lg:gap-20">
        <div className="flex justify-center md:justify-end">
          <img className="w-full max-w-xl"
            src={GetQoutation}
            alt="Marketing newsletter via computer Illustration in PNG, SVG"/>
        </div>
        <div className="flex items-center">
          <div className="mx-auto md:mx-0  ">
            <h3 className=" text-4xl fade-in-down font-extrabold text-transparent  md:text-6xl bg-clip-text bg-gradient-to-r from-yellow-400 to-pink-600 tracking-tight">Get Your Quotation Today</h3>
            <p className="mt-2 max-w-[30rem] text-lg text-white">
              Join our weekly digest. You'll also receive some of our best posts
              today.
            </p>
            
            <div class="mt-8 flex flex-wrap justify-center gap-4">
        <Link to= '/contactus'><a
          class="transform rounded-mdpx-6 rounded bg-gradient-to-r from-orange-400 to-pink-600 px-5 py-3 font-medium text-white transition-colors hover:from-pink-600 hover:to-orange-400">
          Get in-touch
        </a></Link>

        <Link to= '/aboutus'><a
          class="transform bg-black rounded-md border border-slate-200 px-5 py-3 font-medium text-white transition-colors hover:bg-slate-50 hover:text-black">
          Learn More
        </a></Link>
      </div>
           
          </div>
        </div>
      </div>
    </div>
  </div></header>





<section className="text-gray-600 body-font">
<Testqotes/>
  <div className="container py-2 mx-auto ">
    <div className="flex flex-wrap -m-4">
      <div className="pt-4 md:w-1/3 w-1/2 px-6 md:px-0">
        <div className="h-full rounded-xl shadow-cla-blue glass1 overflow-hidden">
        <a href="https://www.calconic.com/calculator-widgets/website-calculator/62bea9b5935ffc00291e0707?layouts=true">
          <img 
            className="lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100"
            src={Webdevimg}
            alt="blog" /></a>
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
              CATEGORY- Developemnt
            </h2>
            <h1 className="title-font text-lg font-medium text-white mb-3">
            Web Development Quotation
            </h1>
            <p className="leading-relaxed mb-3 text-gray-400 ">
              Are you looking for a Website? Get you Quotation now.<br />
             <spam class='text-sm tex text-gray-600'> Note: The Following Prices may vary.</spam>
            </p>
            <div className="flex items-center flex-wrap ">
              <button className="bg-gradient-to-r from-cyan-400 to-blue-400 hover:scale-105 drop-shadow-md  shadow-cla-blue px-4 py-1 rounded-lg text-black">
                <a href="https://www.calconic.com/calculator-widgets/website-calculator/62bea9b5935ffc00291e0707?layouts=true">Learn more</a>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/*<div className="pt-4 md:w-1/3 w-1/2 px-6 md:px-0">
        <div className="h-full rounded-xl shadow-cla-blue glass1 overflow-hidden">
          <img 
            className="lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100"
            src="https://images.unsplash.com/photo-1618172193622-ae2d025f4032?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80"
            alt="blog" />

           <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
              CATEGORY-1
            </h2>
            <h1 className="title-font text-lg font-medium text-white mb-3">
            Web Development Quotation
            </h1>
            <p className="leading-relaxed mb-3 text-gray-400">
              Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
              microdosing tousled waistcoat.
            </p>
            <div className="flex items-center flex-wrap ">
              <button className="bg-gradient-to-r from-cyan-400 to-blue-400 hover:scale-105 drop-shadow-md  shadow-cla-blue px-4 py-1 rounded-lg text-black">
                <a href="https://www.calconic.com/calculator-widgets/website-calculator/62bea9b5935ffc00291e0707?layouts=true">Learn more</a>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-4 md:w-1/3 w-1/2 px-6 md:px-0">
        <div className="h-full rounded-xl shadow-cla-blue glass1 overflow-hidden">
          <img 
            className="lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100"
            src="https://images.unsplash.com/photo-1618172193622-ae2d025f4032?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80"
            alt="blog"
          />
          <div className="p-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
              CATEGORY-1
            </h2>
            <h1 className="title-font text-lg font-medium text-white mb-3">
            Web Development Quotation
            </h1>
            <p className="leading-relaxed mb-3 text-gray-400">
              Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
              microdosing tousled waistcoat.
            </p>
            <div className="flex items-center flex-wrap ">
              <button className="bg-gradient-to-r from-cyan-400 to-blue-400 hover:scale-105 drop-shadow-md  shadow-cla-blue px-4 py-1 rounded-lg text-black">
                <a href="https://www.calconic.com/calculator-widgets/website-calculator/62bea9b5935ffc00291e0707?layouts=true">Learn more</a>
              </button>
            </div>
          </div>
        </div>
  </div> */}
    </div>
  </div>
</section>


  </>
  

  )
}

export default GetQuotationHeader