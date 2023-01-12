import React from 'react';
import { Helmet } from 'react-helmet-async';

import ClientsHeader from '../components/PAGES/Clients/ClientsHeader'
import Clientmain from '../components/PAGES/Clients/Clientsmain'
import Portfolio from '../components/PAGES/Clients/Portfolio'


const Clients = () => {
  return (
    <div className='Clients'>
      <Helmet>
                <title>Cyber Space Digital - Clients</title>
                <meta name="description" content='Cyberspacedigital, Technologies we deal with to full fill your digital needs. Our research will be posted below.'/>
                <link rel="canonical" href="/technologies" />
      </Helmet>
    
    <ClientsHeader />
    <Clientmain />
    <Portfolio />
    
    </div>
  )
}

export default Clients