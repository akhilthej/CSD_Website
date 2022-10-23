import React from 'react';
import ContactusHeaderimage from '../../../assets/ImagesPage/ContactusHeaderimage.png';


const ContactusHeader = () => {
  return (
    <>
  {/*Services Title Card*/}
  <section className="mt-2 flex items-center justify-center bg-white ">
    <div className="mx-auto max-w-[43rem]">
      <div className="text-center">
        
        <h1 className="mt-3 text-[3.5rem] font-bold leading-[4rem] tracking-tight text-black">
        Get in touch,<br />we’d love to hear from you.
        </h1>
        <p className="mt-3 text-lg leading-relaxed text-slate-400">
          You can contact us through mail or you can get in touch at our digital office.
        </p>
      </div>
      <div className="mt-6 flex items-center justify-center gap-4">
        <a
          href="https://app.gather.town/invite?token=14Xcl0LAQlCAMrEenIcl"
          className="transform rounded-md bg-indigo-600/95 px-5 py-3 font-medium text-white transition-colors hover:bg-indigo-700"
        >
          Digital office Space
        </a>
        
      </div>
      <img
            className="contactanimation w-full max-w-xl"
            src={ContactusHeaderimage}
            alt="Marketing newsletter via computer Illustration in PNG, SVG"
          />
    </div>
  </section>
</>
  )
}

export default ContactusHeader


