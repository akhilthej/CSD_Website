import React from 'react'
import { motion } from 'framer-motion';

import TechnologiesHeader from '../components/PAGES/Technologies/TechnologiesHeader'
import TechnologiesSection1 from '../components/PAGES/Technologies/TechnologiesSection1'

const TECHNOLOGIES = () => {
  return (
    <motion.div className='home'
        intial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        >
    
    <TechnologiesHeader />
    <TechnologiesSection1 />

    </motion.div>
  )
}

export default TECHNOLOGIES