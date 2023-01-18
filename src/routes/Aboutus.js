import React from 'react';
import { Helmet } from 'react-helmet-async';


import About from '../components/PAGES/Aboutus/About';

const Aboutus = () => {
  return (
    <div className='Aboutus'>
      <Helmet>
            <title>Cyber Space Digital - About Us</title>
            <meta name="description" content='Web Development and Digital Marketing Company. We are here to build you business online. One stop for all your digital needs.'/>
            <link rel="canonical" href="/technologies" />
      </Helmet>
    
    <About />

    </div>
  )
}

export default Aboutus