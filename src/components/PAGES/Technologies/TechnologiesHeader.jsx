import React from 'react';
import {Link} from 'react-router-dom';


import './TechnologiesHeader.scss';

const TechnologiesHeader = () => {
  return (
  <div class="TechnologiesHeader-wrapper">
    <div class="TechnologiesHeader-container">
      <h1 className='sm:text-7xl uppercase font-black  m-auto min-w-full '>Technologies</h1>
        <p class='text-white mt-5'>CSD is known for its freelance services.
          <br />We are a team of developers, technology enthusiasts, creative designers, content developers ,
          <br />creative directors and web art developers. We come together to build your businesses across the globe.</p>
  
      <div class="mt-8 flex flex-wrap justify-center gap-4">
        <Link to= '/aboutus'>
        <a class="block w-full rounded border border-bg-green-300 px-12 py-3 text-sm font-medium text-white hover:bg-green-700 focus:outline-none focus:ring  sm:w-auto ">
        Learn More </a></Link>
      </div>

  </div>
</div>
  )
}

export default TechnologiesHeader