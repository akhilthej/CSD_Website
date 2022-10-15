import React from 'react';
import {Link} from 'react-router-dom';

const Error404 = () => {
  return (
    <selection>
  <div className="lg:px-24 lg:py-24 md:py-20 md:px-44 px-4 py-24 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16">
  <div className="xl:pt-24 w-full xl:w-1/2 relative pb-12 lg:pb-0">
    <div className="relative">
      <div className="absolute">
        <div className="">
        <h1 className="my-2 text-gray-800 font-bold text-5xl ">
            ERROR 404
          </h1>
          <h1 className="my-2 text-gray-800 font-bold text-2xl">
            Looks like you've found the doorway to the great nothing
          </h1>
          <p className="my-2 text-gray-800">
            Sorry about that! Please visit our hompage to get where you need to
            go.
          </p>
          <Link to ='/'><button className="sm:w-full lg:w-auto my-2 border rounded md py-4 px-8 text-center bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-50">
            Take me there!
          </button></Link>
        </div>
      </div>
      <div>
        <img src="https://lh6.googleusercontent.com/gm1kNMdxv44unNwF0XTtlPXJ-rh7psAdZz1uxGjAsX5XzAPzK_ijsHynAuYbdwZkJUo=w2400" />
      </div>
    </div>
  </div>
  <div>
    <img src="https://lh6.googleusercontent.com/IpjyP6zVWAN85fOEip6Y9ekSsLRAxGkOEYt3bdFAlao_7qKiGDHOo40GTSyZxIoTrBA=w2400" />
  </div>
</div>

</selection>


  )
}

export default Error404