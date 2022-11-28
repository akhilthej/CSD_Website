import React from 'react'
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';

import ContactForm from '../components/PAGES/Contactus/ContactForm'
import ContactusHeader from '../components/PAGES/Contactus/ContactusHeader'
import Faq from '../components/PAGES/Contactus/Faq'

const CONTACTUS = () => {
  return (
    <motion.div className='home'
        intial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        >
          <Helmet>
                <title>Contact us</title>
                <meta name="description" content='Build Your Business Digitally.'/>
                <link rel="canonical" href="#/contactus" />
            </Helmet>
    
    <ContactusHeader />
    <ContactForm />
    <Faq />
        
    </motion.div>
  )
}

export default CONTACTUS