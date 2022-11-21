import React from 'react'
import { motion } from 'framer-motion';

import ClientsHeader from '../components/PAGES/Clients/ClientsHeader'
import Clientmain from '../components/PAGES/Clients/Clientsmain'
import Portfolio from '../components/PAGES/Clients/Portfolio'


const Clients = () => {
  return (
    <motion.div className='home'
        intial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        >
    
    <ClientsHeader />
    <Clientmain />
    <Portfolio />
    
    </motion.div>
  )
}

export default Clients