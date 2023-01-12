import React from 'react';
import { Helmet } from 'react-helmet-async';

import ServicesHeader from '../components/PAGES/Services/ServicesHeader';



const SERVICES = () => {
  return (
    <div className='services'>
      <Helmet>
                <title>Cyber Space Digital - Services</title>
                <meta name="description" content='Web Development and Digital Marketing Company. We are here to build you business online. One stop for all your digital needs.'/>
                <link rel="canonical" href="/technologies" />
      </Helmet>

    <ServicesHeader />
    

    </div>
  )
}

export default SERVICES