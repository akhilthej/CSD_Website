import React from 'react'
import { Helmet } from 'react-helmet-async';

import TechnologiesHeader from '../components/PAGES/Technologies/TechnologiesHeader'
import TechnologiesSection1 from '../components/PAGES/Technologies/TechnologiesSection1'

const TECHNOLOGIES = () => {
  return (
    <div className='Technologies'>
      <Helmet>
                <title>Cyber Space Digital - Technologies</title>
                <meta name="description" content='Cyberspacedigital, Technologies we deal with to full fill your digital needs. Our research will be posted below.'/>
                <link rel="canonical" href="/technologies" />
      </Helmet>
    
    <TechnologiesHeader />
    <TechnologiesSection1 />

    </div>
  )
}

export default TECHNOLOGIES