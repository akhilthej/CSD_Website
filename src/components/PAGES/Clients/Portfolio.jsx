import React from "react";


import '../../Tools/Animations.scss'

import {LabelAnuneniwhite,LabelAnunenipc,LaytonSkinpc,LaytonSkinWhite,Ilahewhite,Ilahepc,Arkwhite,Arkwhitepc} from '../../data/data'



const Portfolio = () => {
 
  return (
    <main className="text-center portfolio text-4xl font-extrabold text-transparent  md:text-6xl bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400 tracking-tight" >
      {/* heading */}
      <div>
      <span >Recent Projects</span>
      <span>Portfolio</span></div>

      {/* mock-upimages */}
      <section class='labelanuneniMockup'>
        <div className="tracking-normal 2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
            <div className="flex flex-col lg:flex-row justify-between gap-8">
                <div className="w-full lg:w-5/12 flex flex-col justify-center">         
                    <h1 className="text-3xl lg:text-4xl font-bold leading-9 pb-4 text-pink-500">LabelAnuneni.com</h1>
                    <p className="font-normal text-sm text-white/70 pb-4">The Art of Indian Handlooms is the greatest treasure one can preserve, and our authentic hand weaves are the "Labour of Love."</p>
                    <img className="fade-in-down mt-6 active mx-auto  w-full max-w-sm" src= {LabelAnunenipc} alt="labelanunenimockup-2" />
                </div>
                <div className="w-full lg:w-8/12 ">
                    <img className="fade-in-down w-full max-w-xl mx-auto" src= {LabelAnuneniwhite} alt="labelanunenimockup" />
                    <h1 className="text-3xl lg:text-4xl font-bold leading-9 pb-4 text-pink-700">Tech Details</h1>
                    <p className="font-normal   text-base leading-6 text-white/70 ">An e-commerce website with custom payment gate ways and auto delivery system.</p>
                </div>
            </div>
        </div>
      </section>  

      <section class='ilihaMockup'>
        <div className="tracking-normal 2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
            <div className="flex flex-col lg:flex-row justify-between gap-8">
                <div className="w-full lg:w-5/12 flex flex-col justify-center">         
                    <h1 className="text-3xl lg:text-4xl font-bold leading-9 pb-4 text-pink-500">ilahe.in</h1>
                    <p className="font-normal text-sm text-white/70 pb-4">Modeling and Finishing School</p>
                    <img className="fade-in-down mt-6 active mx-auto  w-full max-w-sm" src= {Ilahepc} alt="ilihaMockup-2" />
                </div>
                <div className="w-full lg:w-8/12 ">
                    <img className="fade-in-down w-full max-w-xl mx-auto" src= {Ilahewhite} alt="ilihaMockup" />
                    <h1 className="text-3xl lg:text-4xl font-bold leading-9 pb-4 text-pink-700">Tech Details</h1>
                    <p className="font-normal   text-base leading-6 text-white/70 ">Wordpress developed website. Custom forms and elementor pro Designer tool.</p>
                </div>
            </div>
        </div>
      </section>  

      <section class='labelanuneniMockup'>
        <div className="tracking-normal 2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
            <div className="flex flex-col lg:flex-row justify-between gap-8">
                <div className="w-full lg:w-5/12 flex flex-col justify-center">         
                    <h1 className="text-3xl lg:text-4xl font-bold leading-9 pb-4 text-pink-500">Laytonskin.in</h1>
                    <p className="font-normal text-sm text-white/70 pb-4">An e-commerce website from beauty and skin care products.</p>
                    <img className="fade-in-down mt-6 active mx-auto  w-full max-w-sm" src= {LaytonSkinpc} alt="labelanunenimockup-2" />
                </div>
                <div className="w-full lg:w-8/12 ">
                    <img className="fade-in-down w-full max-w-xl mx-auto" src= {LaytonSkinWhite} alt="labelanunenimockup" />
                    <h1 className="text-3xl lg:text-4xl font-bold leading-9 pb-4 text-pink-700">Tech Details</h1>
                    <p className="font-normal   text-base leading-6 text-white/70 ">An e-commerce website with custom payment gate ways and auto delivery system.</p>
                </div>
            </div>
        </div>
      </section>  


      <section class='arkMockup'>
        <div className="tracking-normal 2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
            <div className="flex flex-col lg:flex-row justify-between gap-8">
                <div className="w-full lg:w-5/12 flex flex-col justify-center">         
                    <h1 className="text-3xl lg:text-4xl font-bold leading-9 pb-4 text-pink-500">archivitusdesigners.com</h1>
                    <p className="font-normal text-sm text-white/70 pb-4">Interior Designer / Construction</p>
                    <img className="fade-in-down mt-6 active mx-auto  w-full max-w-sm" src= {Arkwhitepc} alt="arkMockup-2" />
                </div>
                <div className="w-full lg:w-8/12 ">
                    <img className="fade-in-down w-full max-w-xl mx-auto" src= {Arkwhite} alt="arkMockup" />
                    <h1 className="text-3xl lg:text-4xl font-bold leading-9 pb-4 text-pink-700">Tech Details</h1>
                    <p className="font-normal   text-base leading-6 text-white/70 ">Wordpress developed website. Custom forms and elementor pro Designer tool.</p>
                </div>
            </div>
        </div>
      </section> 

    </main>

  );
};

export default Portfolio;
