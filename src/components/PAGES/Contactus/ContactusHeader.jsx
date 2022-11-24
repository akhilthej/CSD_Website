import React from 'react';
import {ContactusHeaderimage ,} from '../../data/data';


const ContactusHeader = () => {
  return (
    <>
  {/*Services Title Card*/}
  <section className="mt-20 flex items-center justify-center bg-white ">
    <div className="mx-auto max-w-[43rem]">
      <div className="text-center">
        <h1 className="mt-3 text-[3.5rem] font-bold leading-[4rem] tracking-tight text-black">
        Get in touch,<br />we’d love to hear from you.
        </h1>
        <p className="mt-3 text-lg leading-relaxed text-slate-400">
          You can contact us through mail or you can get in touch at our digital office.
        </p>
      </div>
      
      <img className="hero container max-w-screen-lg mx-auto flex w-64 "
            src={ContactusHeaderimage} /> 
    
      <div className=" flex items-center justify-center gap-4">
        <a href="https://app.gather.town/invite?token=14Xcl0LAQlCAMrEenIcl"
          className="transform rounded-md bg-indigo-600/95 px-5 py-3 font-medium text-white transition-colors hover:bg-indigo-700">
          Digital office Space
        </a>
        
      </div>
      </div>
     
  </section>
</>
  )
}

export default ContactusHeader


