import React from 'react';

import { motion } from 'framer-motion';
import HomeCode from '../components/PAGES/HOME PAGE/HomeCode'


const Home = () => {
    return (
        <motion.div className='home'
        intial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        >
            <HomeCode />

        </motion.div>
            
        
        
    )
}

export default Home
