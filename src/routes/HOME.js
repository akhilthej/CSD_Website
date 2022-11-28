import React from 'react';
import { Helmet } from 'react-helmet-async';

import { motion } from 'framer-motion';
import HomeCode from '../components/PAGES/HOME PAGE/HomeCode'


const Home = () => {
    return (
        
        <motion.div className='home'
        intial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        >
            <Helmet>
                <title>Cyber Space Digital</title>
                <meta name="description" content='Build Your Business Digitally.'/>
                <link rel="canonical" href="/" />
            </Helmet>
            <HomeCode />

        </motion.div>
            
        
        
    )
}

export default Home
