import React from 'react';
import { Helmet } from 'react-helmet-async';
import HomeCode from '../components/PAGES/HOME PAGE/HomeCode'


const Home = () => {
    return (
        
        <div className='home' >
            <Helmet>
                <title>Cyber Space Digital</title>
                <meta name="description" content='Build Your Business Digitally.'/>
                <link rel="canonical" href="/" />
            </Helmet>
            <HomeCode />

        </div>
            
        
        
    )
}

export default Home
