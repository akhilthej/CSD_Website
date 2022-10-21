import React from 'react';
import HomeCards from '../components/PAGES/HOME PAGE/HomeCards';

import HomeHero from '../components/PAGES/HOME PAGE/HomeHero'
import Homesection1 from '../components/PAGES/HOME PAGE/Homesection1'


import SideCard from '../components/PAGES/HOME PAGE/SideCard'
import WhatDoWeDo from '../components/PAGES/HOME PAGE/WhatDoWeDo'
import Herosection2 from '../components/PAGES/HOME PAGE/Herosection2'
import SideCard2 from '../components/PAGES/HOME PAGE/SideCard2'


const Home = () => {
    return (
        <div>
            <HomeHero />
            <HomeCards />
            <SideCard />
            
            
            <Homesection1 />
            <Herosection2 />
            <WhatDoWeDo />
            <SideCard2 />
           
            

        </div>
            
        
        
    )
}

export default Home
