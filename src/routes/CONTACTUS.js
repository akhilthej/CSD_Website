import React from 'react'
import { Helmet } from 'react-helmet-async';

import ContactForm from '../components/PAGES/Contactus/ContactForm'
import ContactusHeader from '../components/PAGES/Contactus/ContactusHeader'
import Faq from '../components/PAGES/Contactus/Faq'

const CONTACTUS = () => {
  return (
    <div className='home'>
          <Helmet>
                <title>Contact us</title>
                <meta name="description" content='Build Your Business Digitally.'/>
                <link rel="canonical" href="#/contactus" />
            </Helmet>
    
    <ContactusHeader />
    <ContactForm />
    <Faq />
        
    </div>
  )
}

export default CONTACTUS