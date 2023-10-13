import React from 'react';
import { Helmet } from 'react-helmet-async';
import {Link} from 'react-router-dom';

import ReviewsHeroImage from '../assets/ImagesPage/ReviewsHero.png';

import {googlereview} from '../components/data/data';

const Reviews = () => {
  return (
    <div className='Reviews'>
      <Helmet>
                <title>Cyber Space Digital - Reviews</title>
                <meta name="description" content='Web Development and Digital Marketing Company. We are here to build you business online. One stop for all your digital needs.'/>
                <link rel="canonical" href="/technologies" />
      </Helmet>
    
{/*Head*/}
<>
  <div className="  flex items-center justify-center my-2">
    <div className="mx-auto w-full max-w-screen-lg  px-5 ">
      <div className="grid gap-5 md:grid-cols-2 md:gap-10 lg:gap-20">
        <div className="flex justify-center md:justify-end">
          <img
            className="w-full max-w-xl"
            src={ReviewsHeroImage}
            alt="Marketing newsletter via computer Illustration in PNG, SVG"
          />
        </div>
        <div className="flex items-center">
          <div className="mx-auto md:mx-0">
            <h3 className=" text-4xl fade-in-down font-extrabold text-transparent  md:text-6xl bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600 tracking-tight">Our Clients</h3>
            <p className="mt-2 max-w-[20rem] text-lg text-black">
              Join our weekly digest. You'll also receive some of our best posts
              today.
            </p>
            
            <div class="mt-8 flex flex-wrap justify-center gap-4">
        <Link to= '/contactus'><a
          class=" transform rounded-mdpx-6 rounded bg-gradient-to-r from-orange-400 to-orange-600 px-5 py-3 font-medium text-black transition-colors hover:from-orange-600 hover:to-orange-400"
          
        >
          Get in-touch
        </a></Link>

        <Link to= '/aboutus'><a
          class="transform rounded-md border bg-black px-5 py-3 font-medium text-white transition-colors hover:bg-slate-50 hover:text-black"
          
        >
          Learn More
        </a></Link>
      </div>
           
          </div>
        </div>
      </div>
    </div>
  </div>
</>



{/*Testimony*/}
<div>
      <h2 class='text-black text-center '>Share your reviews at </h2>
      <a href="https://search.google.com/local/writereview?placeid=ChIJM0IEPqRRmg0RyLQAP_5varc"> <img  class="h-10 hover:h-12  max-w-full ml-auto mr-auto mt-2" src= {googlereview} alt="googlereview_icon" /></a>
      


        <div className="grid rounded-lg  shadow-sm  md:grid-cols-2">
  <figure className=" flex flex-col justify-center items-center p-8 text-center  rounded-t-lg md:rounded-t-none md:rounded-tl-lg  ">
    <blockquote className="mx-auto mb-4 max-w-2xl text-black lg:mb-8 ">
      <h3 className="text-lg font-semibold text-black ">
        Very easy this was to integrate
      </h3>
      <p className="my-4 font-light">
        If you care for your time, I hands down would go with this."
      </p>
    </blockquote>
    <figcaption className="flex justify-center items-center space-x-3">
      <img
        className="w-9 h-9 rounded-full"
        src="https://drive.google.com/uc?export=view&id=1ZfZFxaOL5upxwVjnt9K2MdoTRzHjBpIP"
        alt="profile picture" />

      <div className="space-y-0.5 font-medium  text-gray-500 text-left">
        <div>Usha P</div>
        <div className="text-sm font-light text-gray-500">
        Business (Marketing)
        </div>
      </div>
    </figcaption>
  </figure>
  <figure className=" flex flex-col justify-center items-center p-8 text-center rounded-tr-lg ">
    <blockquote className="mx-auto mb-4 max-w-2xl text-gray-500 lg:mb-8 ">
      <h3 className="text-lg font-semibold text-black ">
        Solid foundation for any project
      </h3>
      <p className="my-4 font-light text-black">
        Its been amazing working with your team.
      </p>
    </blockquote>
    <figcaption className="flex justify-center items-center space-x-3">
      <img
        className="w-9 h-9 rounded-full"
        src="https://drive.google.com/uc?export=view&id=13h6rIUy-L8wXGtS-V-Aqv3TKTauVsW2l"
        alt="profile picture"
      />
      <div className="space-y-0.5 font-medium text-left text-gray-500">
        <div>Sameera Reddy</div>
        <div className="text-sm font-light text-gray-500 ">
          Designer
        </div>
      </div>
    </figcaption>
  </figure>
  <figure className=" flex flex-col justify-center items-center p-8 text-center rounded-bl-lg  ">
    <blockquote className="mx-auto mb-4 max-w-2xl text-gray-500 lg:mb-8 ">
      <h3 className="text-lg font-semibold text-black ">
        Mindblowing workflow
      </h3>
      <p className="my-4 font-light text-black">
        I am amazed with the delivery time and build quality.Happy to find you guys.
        Thanks for giving such an amazing support.
      </p>
    </blockquote>
    <figcaption className="flex justify-center items-center space-x-3">
      <img
        className="w-9 h-9 rounded-full"
        src="https://drive.google.com/uc?export=view&id=1M-AbRa9kv65LR2UrqKyIlylpYLzUNDla"
        alt="profile picture"
      />
      <div className="space-y-0.5 font-medium text-left text-gray-500">
        <div>Sundeep R</div>
        <div className="text-sm font-light text-gray-500 ">
          Business (e-commerce)
        </div>
      </div>
    </figcaption>
  </figure>
  <figure className=" flex flex-col justify-center items-center p-8 text-center rounded-b-lg">
    <blockquote className="mx-auto mb-4 max-w-2xl text-gray-500 lg:mb-8 ">
      <h3 className="text-lg font-semibold text-black ">
        Efficient Collaborating
      </h3>
      <p className="my-4 font-light text-black">
        You have many examples to create a fast prototype.
        i am surprised with the delivery quality. Keep up the good work!
      </p>
    </blockquote>
    <figcaption className="flex justify-center items-center space-x-3">
      <img
        className="w-9 h-9 rounded-full"
        src="https://drive.google.com/uc?export=view&id=16wqeCgQZNrLOimkyX7Zj2mYastAIGLTJ"
        alt="profile picture"
      />
      <div className="space-y-0.5 font-medium text-left text-gray-500">
        <div>Dipika Joseph</div>
        <div className="text-sm font-light text-gray-500 ">
          Business (Pharma)
        </div>
      </div>
    </figcaption>
  </figure>
</div>

    </div>

    </div>
  )
}

export default Reviews