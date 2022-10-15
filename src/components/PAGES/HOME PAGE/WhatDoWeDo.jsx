import React from 'react'

import documentationicon from '../../../assets/Icons/documentation-icon.png';
import socialicon from '../../../assets/Icons/social-icon.png';
import analysisicon from '../../../assets/Icons/analysis-icon.png';
import financeicon from '../../../assets/Icons/finance-icon.png';
import statergyicon from '../../../assets/Icons/Statergy-icon.png';
import businessreporticon from '../../../assets/Icons/business-report-icon.png';

const WhatDoWeDo = () => {
  return (
    <section className="bg-white ">
  <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
    <div className="max-w-screen-md mb-8 lg:mb-16">
      <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 ">
        What do we do?
      </h2>
      <p className="text-gray-500 sm:text-xl ">
        How we research our clients requirements and processes.
      </p>
    </div>
    <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
      <div>
        <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 ">
        <img src= {documentationicon}
            alt="coding_icon"/> 
        </div>
        <h3 className="mb-2 text-xl font-bold ">Documentation</h3>
        <p className="text-gray-500 ">
          Plan it, create it, launch it. Collaborate seamlessly with all the
          organization and hit your marketing goals every month with our
          marketing plan.
        </p>
      </div>
      <div>
        <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 ">
        <img src= {analysisicon} /> 
        </div>
        <h3 className="mb-2 text-xl font-bold ">Analyze</h3>
        <p className="text-gray-500 ">
          Protect your organization, devices and stay compliant with our
          structured workflows and custom permissions made for you.
        </p>
      </div>
      <div>
        <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 ">
        <img src= {socialicon} /> 
        </div>
        <h3 className="mb-2 text-xl font-bold ">
          Social Media Presents
        </h3>
        <p className="text-gray-500 ">
          Auto-assign tasks, send Slack messages, and much more. Now power up
          with hundreds of new templates to help you get started.
        </p>
      </div>
      <div>
        <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 ">
        <img src= {financeicon}/>
        </div>
        <h3 className="mb-2 text-xl font-bold ">Finance</h3>
        <p className="text-gray-500 ">
          Audit-proof software built for critical financial operations like
          month-end close and quarterly budgeting.
        </p>
      </div>
      <div>
        <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 ">
        <img src= {statergyicon}/>
        </div>
        <h3 className="mb-2 text-xl font-bold ">
        Strategy
        </h3>
        <p className="text-gray-500 ">
          Craft beautiful, delightful experiences for both marketing and product
          with real cross-company collaboration.
        </p>
      </div>
      <div>
        <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 ">
        <img src= {businessreporticon}/>
        </div>
        <h3 className="mb-2 text-xl font-bold ">Business Report</h3>
        <p className="text-gray-500 ">
          Keep your company’s lights on with customizable, iterative, and
          structured workflows built for all efficient teams and individual.
        </p>
      </div>
    </div>
  </div>
</section>




  )
}

export default WhatDoWeDo