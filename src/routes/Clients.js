import React from 'react'
import { motion } from 'framer-motion';

import ClientsHeader from '../components/PAGES/Clients/ClientsHeader'
import Clientmain from '../components/PAGES/Clients/Clientsmain'


const Clients = () => {
  return (
    <motion.div className='home'
        intial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        >
    
    <ClientsHeader />
    <Clientmain />
    
    </motion.div>
  )
}

export default Clients