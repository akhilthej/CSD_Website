import React from 'react'
import { Helmet } from 'react-helmet-async';

import GetQuotationHeader from '../components/PAGES/Get Quotation/GetQuotationHeader'

const GetQuotation = () => {
  return (
    <div className='GetQuotation'>
      <Helmet>
                <title>Cyber Space Digital - Get Quotation</title>
                <meta name="description" content='Cyberspacedigital, Technologies we deal with to full fill your digital needs. Our research will be posted below.'/>
                <link rel="canonical" href="/technologies" />
      </Helmet>
    
   
    <GetQuotationHeader />

    </div>
  )
}

export default GetQuotation