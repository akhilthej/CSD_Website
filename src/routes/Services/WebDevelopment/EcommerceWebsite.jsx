import React from 'react'
import { Link } from 'react-router-dom'

const EcommerceWebsite = () => {
  return (
    <div>
    {/* Title Card */}
    <section className="py-20 sm:py-40" style={{ backgroundImage: 'url("https://drive.google.com/uc?id=1qOVAzkUQ2lgFWafszEE8Q1RLx6jvWjZX")', backgroundSize: 'cover', backgroundPosition: 'left' }}>
     <div className="flex flex-col items-center md:flex-row justify-center">
       <div className="md:w-1/2 md:pr-10">
        
       </div>
       <div className="md:w-1/2 px-5">
         <div className="text-right md:text-left"> {/* Align titles to the right on mobile, left on larger screens */}
           <h1 className="text-2xl pb-5 md:text-6xl fade-in-down font-extrabold text-center text-white tracking-tight">
           E-Commerce Website
           </h1>
           <p className="text-white sm:text-sm text-xs text-center sm:ml-0">
             "Cyber Space Digital stands as a distinguished leader in the realm"
           </p>
   
           <div className="mt-8 flex flex-wrap justify-center gap-4">
             <Link to="/contactus">
               <a className="transform rounded-md bg-white px-5 py-3 font-medium text-black transition-colors hover:bg-black hover:text-white">
                 Get in Touch
               </a>
             </Link>
   
             <a href="https://api.whatsapp.com/send?phone=918143407758&text=Welcome%20to%20Cyberspacedigital">
               <a className="transform rounded-md bg-white px-5 py-3 font-medium text-black transition-colors hover:bg-black hover:text-white">
                 WhatsApp
               </a>
             </a>
           </div>
         </div>
       </div>
     </div>
   </section>
   </div>
  )
}

export default EcommerceWebsite