import React from 'react'
import { motion } from 'framer-motion';

import About from '../components/PAGES/Aboutus/About';

const Aboutus = () => {
  return (
    <motion.div className='home'
        intial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        >
    
    <About />

    </motion.div>
  )
}

export default Aboutus