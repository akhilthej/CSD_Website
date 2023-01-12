import React from 'react'
import { Helmet } from 'react-helmet-async';

import ContactForm from '../components/PAGES/Contactus/ContactForm'
import ContactusHeader from '../components/PAGES/Contactus/ContactusHeader'
import Faq from '../components/PAGES/Contactus/Faq'

const CONTACTUS = () => {
  return (
    <div className='Contactus'>
          <Helmet>
                <title>Contact us</title>
                <meta name="description" content='Web Development and Digital Marketing Company. We are here to build you business online. One stop for all your digital needs.'/>
                <link rel="canonical" href="#/contactus" />
            </Helmet>
    
    <ContactusHeader />
    <ContactForm />
    <Faq />
        
    </div>
  )
}

export default CONTACTUS