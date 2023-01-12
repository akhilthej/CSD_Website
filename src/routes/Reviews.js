import React from 'react';
import { Helmet } from 'react-helmet-async';

import ReviewsHero from '../components/PAGES/Reviews/ReviewsHero';
import Testimony from '../components/PAGES/Reviews/Testimony';

const Reviews = () => {
  return (
    <div className='Reviews'>
      <Helmet>
                <title>Cyber Space Digital - Reviews</title>
                <meta name="description" content='Web Development and Digital Marketing Company. We are here to build you business online. One stop for all your digital needs.'/>
                <link rel="canonical" href="/technologies" />
      </Helmet>
    
    <ReviewsHero />
    <Testimony />

    </div>
  )
}

export default Reviews