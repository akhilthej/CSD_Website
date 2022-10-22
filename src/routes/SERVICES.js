import React from 'react';
import { motion } from 'framer-motion';

import ServicesHeader from '../components/PAGES/Services/ServicesHeader';
import ServiceSection1 from '../components/PAGES/Services/ServicesSection1';


const SERVICES = () => {
  return (
    <motion.div className='services'
        intial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        >

    <ServicesHeader />
    
    <ServiceSection1 />

    </motion.div>
  )
}

export default SERVICES