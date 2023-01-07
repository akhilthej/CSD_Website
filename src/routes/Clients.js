import React from 'react'

import ClientsHeader from '../components/PAGES/Clients/ClientsHeader'
import Clientmain from '../components/PAGES/Clients/Clientsmain'
import Portfolio from '../components/PAGES/Clients/Portfolio'


const Clients = () => {
  return (
    <div className='home'>
    
    <ClientsHeader />
    <Clientmain />
    <Portfolio />
    
    </div>
  )
}

export default Clients