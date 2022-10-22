import React from 'react'
import { motion } from 'framer-motion';

import ClientsHeader from '../components/PAGES/Clients/ClientsHeader'


const Clients = () => {
  return (
    <motion.div className='home'
        intial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        >
    
    <ClientsHeader />
    
    </motion.div>
  )
}

export default Clients