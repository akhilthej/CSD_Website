import React from 'react'
import { motion } from 'framer-motion';

import GetQuotationHeader from '../components/PAGES/Get Quotation/GetQuotationHeader'

const GetQuotation = () => {
  return (
    <motion.div className='home'
        intial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity: 0}}
        >
    
    <GetQuotationHeader />

    </motion.div>
  )
}

export default GetQuotation