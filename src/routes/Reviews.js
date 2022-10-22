import React from 'react';
import { motion } from 'framer-motion';

import ReviewsHero from '../components/PAGES/Reviews/ReviewsHero';
import Testimony from '../components/PAGES/Reviews/Testimony';

const Reviews = () => {
  return (
    <motion.div className='home'
        intial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        >
    
    <ReviewsHero />
    <Testimony />

    </motion.div>
  )
}

export default Reviews