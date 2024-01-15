import React from 'react';
import { Link, useParams } from 'react-router-dom';
import blogs from './BlogsData';

import { GlobalData} from '../../assets/data/GlodalData';

const BlogFullPost = () => {
  const { id } = useParams();
  const blog = blogs.find((blog) => blog.id.toLowerCase() === id.toLowerCase());

  if (!blog) {
    return <p>Blog not found</p>;
  }

  return (
<section>
{/*GoogleAdsense */ }

<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2759701304589957"
crossorigin="anonymous"></script>

    <div className="max-w-screen-xl mx-auto">
      <main >
        <div
          className="mb-4 md:mb-0 w-full max-w-screen-md mx-auto relative"
          style={{ height: "24em" }}
        >
          <div
            className="absolute left-0 bottom-0 w-full h-full z-10"
            style={{
              backgroundImage:
                "linear-gradient(180deg,transparent,rgba(0,0,0,.7))"
            }}
          />
          <img src={blog.coverImage} alt={blog.title} 
            className="absolute left-0 top-0 w-full h-full z-0 object-cover"
          />
          
          <div className="p-4 absolute bottom-0 left-0 z-20">
            <a
              href="#"
              className="px-4 py-1 bg-black text-gray-200 inline-flex items-center justify-center mb-2"
            >
              Cyber Space Digital
            </a>
            <h2 className="text-4xl font-semibold text-gray-100 leading-tight">
            {blog.title}
            </h2>
            <div className="flex mt-3">
            </div>
          </div>
        </div>
        <div className="px-4 lg:px-0 mt-12 text-gray-700 max-w-screen-md mx-auto text-lg leading-relaxed">
  {blog.content.split('\n').map((paragraph, index) => (
    <p key={index}>
      {paragraph.split('**').map((text, subIndex) => (
        subIndex % 2 === 0 ? (
          <span key={subIndex}>{text}</span>
        ) : (
          <strong key={subIndex}>{text}</strong>
        )
      ))}
    </p>
  ))}
</div>



      </main>
    </div>


    

<section className="bg-yellow-500 py-12 shadow-inner ">
      <div className="container mx-auto p-4">
        <h2 className="font-extrabold text-white text-4xl  py-2 md:text-5xl lg:text-8xl bg-clip-text bg-gradient-to-r text-center  mt-3 text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] leading-[3.5rem] tracking-tight ">{GlobalData.company.companyName}</h2>
        <div className="text-center text-black">
        <span className='font-medium text-sm' >Get is touch</span>
          <p className="text-lg pt-2 space-x-2 ">
          <a href="tel:+918143407758" class=" bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">Call Now</a>
          <a href="mailto:admin@cyberspacedigital.in" className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
                    Email
                  </a>
                  <a href="https://api.whatsapp.com/send?phone=918143407758&text=Welcome%20to%20Cyberspacedigital" className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
                    WhatsApp
                  </a>
          </p>
        </div>
      </div>
    </section>




 <section className="text-center mx-auto my-8">
      <h2 className="cursor-default pb-2 font-extrabold text-transparent text-2xl md:text-5xl lg:text-6xl bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-600 mt-3  tracking-tight ">
        Need Help ?
      </h2>
      <p className="cursor-default text-sm font-medium text-black mt-5 mb-10">
        Explore our comprehensive documentation for more information on our services.
      </p>
    
<div className="flex items-center justify-center gap-4 flex-wrap">

  <a href='https://api.whatsapp.com/send?phone=9666643456&text=Need%20Details%20about.' className="text-xs sm:text-sm transform rounded bg-yellow-500 border border-slate-200 px-20 py-2 font-medium text-black transition-colors hover:bg-slate-50 ">
    Whatsapp
  </a>
  <Link to='/contactus'>
  <button className="text-xs sm:text-sm transform rounded border border-slate-200 px-14 py-2 font-medium text-black transition-colors hover:bg-slate-50 hover:text-black">
    Contact us
  </button></Link>
 </div></section>

{/*GoogleAdsense */ }
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2759701304589957"
crossorigin="anonymous"></script>
  </section>
  
  );
};

export default BlogFullPost;
