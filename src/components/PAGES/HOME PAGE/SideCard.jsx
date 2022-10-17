import React from 'react'

const SideCard = () => {
  return (

<div className="py-16 bg-white">
  <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
    <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
      <div className="md:5/12 lg:w-5/12">
        <img
          src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
          alt="image"
          loading="lazy"
          width=""
          height=""
        />
      </div>
      <div className="md:7/12 lg:w-6/12">
        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
        We develop our brand with passionate developers.
        </h2>
        <p className="mt-6 text-gray-600">
         We develop our companies, projects and brands with a purpose,
         to help them engage their clients and audience. Providing them a first-class quality.
          so they can build awareness, Trust , create conversation for a long-time. 
        </p>
        <p className="mt-4 text-gray-600">
          {" "}
          Quality comany or Brand, is the perception of quality that a brand achieves with its customers & clients.
          Quality is often defined as the meeting the expectations of customers.
  
        </p>
      </div>
    </div>
  </div>
</div>

  )
}

export default SideCard