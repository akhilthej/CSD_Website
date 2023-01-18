import React from 'react';
import { Helmet } from 'react-helmet-async';


import About from '../components/PAGES/Aboutus/About';

const Aboutus = () => {
  return (
    <div className='Aboutus'>
      <Helmet>
            <title>Cyber Space Digital - About Us</title>
            <meta name="description" content='Know more about our Company and our team Cyber Space Digital.'/>
            <link rel="canonical" href="/aboutus" />
      </Helmet>
    
    <About />

    </div>
  )
}

export default Aboutus