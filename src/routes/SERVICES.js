import React from 'react';
import { motion } from 'framer-motion';

import ServicesHeader from '../components/PAGES/Services/ServicesHeader';



const SERVICES = () => {
  return (
    <motion.div className='services'
        intial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        >

    <ServicesHeader />
    

    </motion.div>
  )
}

export default SERVICES