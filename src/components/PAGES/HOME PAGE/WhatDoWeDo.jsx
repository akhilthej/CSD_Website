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
        Seems to be a herculean task for a project manager. 
        Project managers are often engaged in delivering 
        high-end complex projects.
        </p>
      </div>
      <div>
        <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 ">
        <img src= {analysisicon} /> 
        </div>
        <h3 className="mb-2 text-xl font-bold ">Analyze</h3>
        <p className="text-gray-500 ">
        When executing a project,we analyze it 
        periodically. Failing to do so, would mean unexpected 
        challenges, overlooked critical information, or flaws 
        in the work process that manifest as the project 
        unfolds.
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
        A company's social media presence is how they portray 
        themselves online through their social networking 
        accounts and activity. Building a social media 
        presence starts with developing your goals.
        </p>
      </div>
      <div>
        <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 ">
        <img src= {financeicon}/>
        </div>
        <h3 className="mb-2 text-xl font-bold ">Finance</h3>
        <p className="text-gray-500 ">
        the funding of long-term projects, such as public 
        infrastructure or services, industrial projects, and 
        others through a specific financial structure.
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
          At the end of every project we present our clients with detailed reports
           .which can help them understand what we did for there project.
        </p>
      </div>
    </div>
  </div>
</section>




  )
}

export default WhatDoWeDo