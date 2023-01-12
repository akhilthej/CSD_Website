import React from 'react';
import { Helmet } from 'react-helmet-async';
import HomeCode from '../components/PAGES/HOME PAGE/HomeCode'


const Home = () => {
    return (
        
        <div className='home' >
            <Helmet>
                <title>Cyber Space Digital</title>
                <meta name="Description" content='Web Development and Digital Marketing Company. We are here to build you business online. One stop for all your digital needs.'/>
                <link rel="canonical" href="/" />
            </Helmet>
            <HomeCode />

        </div>
            
        
        
    )
}

export default Home
