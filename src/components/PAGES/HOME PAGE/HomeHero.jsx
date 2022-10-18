import React from 'react';
import {Link} from 'react-router-dom';
import HomeHeroVideo from '../../../assets/HomeHeroVideo.mp4'

const HomeHero = () => {
  return (
    <div className='z-0 w-full h-screen -mt-20'>
        <div className="absolute w-full h-full  "></div>
        <video className='w-full h-full object-cover ' src={HomeHeroVideo} autoPlay loop muted />
        <div className="absolute w-full h-full top-0 flex flex-col justify-center items-center text-white text-center">

          <h1 class=" bg-gradient-to-r from-green-300 via-green-700 to-green-400 bg-clip-text text-5xl font-extrabold text-transparent sm:text-7xl ">
             Cyber Space Digital<br />
            <span class="sm:block sm:text-3xl sm:pt-3 text-gray-300 text-3xl"> Solution for businesses </span>
          </h1>
          
          
          <p class=" border-black border-5 rounded-lg bg-black/80 mx-auto mt-4 max-w-xl sm:text-xl sm:leading-relaxed text-green-300 text-center">
          <div className='typed-out px-2'>Let's Build your Business Digitally..!</div>
          </p>

        <div class="mt-8 flex flex-wrap justify-center gap-4">
          <Link to= '/contactus'>
            <a class=" block w-full rounded border border-green-300 bg-green-700 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto">
                Get in-touch </a></Link>

          <Link to= '/aboutus'>
            <a class="block w-full rounded border border-bg-green-300 px-12 py-3 text-sm font-medium text-white hover:bg-green-700 focus:outline-none focus:ring active:bg-green-500 sm:w-auto ">
                Learn More </a></Link>
       
        </div>
      </div>
    </div>


  )
}

export default HomeHero