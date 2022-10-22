import React from 'react';
import { motion } from 'framer-motion';
import HomeCards from '../components/PAGES/HOME PAGE/HomeCards';

import HomeHero from '../components/PAGES/HOME PAGE/HomeHero'
import Homesection1 from '../components/PAGES/HOME PAGE/Homesection1'


import SideCard from '../components/PAGES/HOME PAGE/SideCard'
import WhatDoWeDo from '../components/PAGES/HOME PAGE/WhatDoWeDo'
import Herosection2 from '../components/PAGES/HOME PAGE/Herosection2'
import SideCard2 from '../components/PAGES/HOME PAGE/SideCard2'


const Home = () => {
    return (
        <motion.div className='home'
        intial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        >
            <HomeHero />
            <HomeCards />
            <SideCard />
            
            
            <Homesection1 />
            <Herosection2 />
            <WhatDoWeDo />
            <SideCard2 />
           
            

        </motion.div>
            
        
        
    )
}

export default Home
