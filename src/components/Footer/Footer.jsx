import React from 'react';
import {Link} from 'react-router-dom';
import Subscribe from '../../assets/Icons/Subscribe.png'

import {googlereview,goodfirms} from '../../assets/data/Imagedata.jsx';
 
import footer_csd from './csdv2Logofooter.svg';
import WhatsApp from './WhatsApp.webp';


const Footer = () => {
  
  const currentYear = new Date().getFullYear();
  return (
    
    <main className='bg-black'>

      {/*Subscription section*/}
<section >
<div className=" flex items-center justify-center">
  <div className="mx-auto w-full max-w-screen-lg  px-5 py-10">
    <div className="grid gap-5 md:grid-cols-2 md:gap-10 lg:gap-20">
      <div className="flex justify-center md:justify-end">
      <img
  className="mx-auto flex"
  src={Subscribe}
  alt="Marketing newsletter via computer Illustration in PNG, SVG"
  width="300" // Specify the width in pixels or another suitable unit
  height="200" // Specify the height in pixels or another suitable unit
/>
      </div>
      <div className="flex items-center">
        <div className="mx-auto md:mx-0">
          <h3 className="text-4xl font-bold text-white">Subscribe</h3>
          <p className="mt-2 max-w-[20rem] text-lg text-white">
            Join our weekly digest. You'll also receive some of our best posts
            today.
          </p>
          <form action="" className="mt-4 flex flex-col">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              className="w-full rounded border border-white/50 bg-transparent px-3 py-2 text-white placeholder:black-black/50 md:max-w-[18rem]"/>
            <button
              type="submit"
              className="mt-4 w-full max-w-[14rem] rounded bg-yellow-500 hover:bg-white px-14 py-2 text-center text-black">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
</section>


    

    {/* Footer */}
    <section className='bg-black pb-5'>
    <footer >
  <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-9 lg:px-8">
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
    <div>
    <Link to ='/'>
    <img
  src={footer_csd}
  className="mr-5 h-10 sm:h-10"
  alt="footer_csd"
  width="200" // Specify the width in pixels or another suitable unit
  height="200" // Specify the height in pixels or another suitable unit
/>

</Link>
        <p className="max-w-xs mt-4 text-sm text-gray-600">
        We are a web Developing & Designing company with a mission to help build there business online.
        We accomplish this by continuously developing technology, giving expert assistance, and ensuring a flawless online website 
       experience.<br />
        </p>
       
        

        <div className="flex space-x-6 text-gray-600 pt-2">
          <a
            href="https://www.facebook.com/profile.php?id=100087441512479"
            target="_blank"
            rel="noreferrer"
          >
            <span className="sr-only"> Facebook </span>
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillrule="evenodd"
                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                cliprule="evenodd"
              />
            </svg>
          </a>
          <a
            href="https://www.instagram.com/cyber.space.digital/"
            target="_blank"
            rel="noreferrer"
          >
            <span className="sr-only"> Instagram </span>
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true">
              <path
                fillrule="evenodd"
                d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                cliprule="evenodd"
              />
            </svg>
          </a>
          <a 
            href="https://twitter.com/CyberSD1995"
            target="_blank"
            rel="noreferrer"
          >
            <span className="sr-only"> Twitter </span>
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
            </svg>
          </a>
          <a 
            href="https://github.com/akhilthej"
            target="_blank"
            rel="noreferrer"
          >
            <span className="sr-only"> GitHub </span>
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillrule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                cliprule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-8 lg:col-span-2 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-medium text-white">Company</p>
          <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
            <a href="/aboutus">
              {" "}
              About us{" "}
            </a>
            <a href="/clients">
              {" "}
              Clients{" "}
            </a>
            <a href="/careers">
              {" "}
              Career{" "}
            </a>
          </nav>
        </div>
        <div>
          <p className="font-medium text-white">Services</p>
          <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
            
            <a href="https://search.google.com/local/writereview?placeid=ChIJM0IEPqRRmg0RyLQAP_5varc">
              {" "}
              Google Map Review{" "}
            </a>
            <a  href="/reviews">
              {" "}
              Client Review{" "}
            </a>
            
          </nav>
        </div>
        <div>
          <p className="font-medium text-white">Helpful Links</p>
          <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
            <a  href="/contactus">
              {" "}
              Contact{" "}
            </a>
            <a  href="/contactus">
              {" "}
              FAQs{" "}
            </a>
            <a  href="https://api.whatsapp.com/send?phone=918143407758&text=Welcome%20to%20Cyberspacedigital">
              {" "}
              Live Chat{" "}
            </a>
          </nav>
        </div>
        <div>
          <p className="font-medium text-white">Legal</p>
          <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
            <Link to='/privacypolicy'>
              {" "}
              Privacy Policy{" "}
            </Link>
            <Link to='/termsconditions'><a >
              {" "}
              Terms &amp; Conditions{" "}
            </a></Link>
            
            <Link to='/returnpolicy'><a  href="">
              {" "}
              Cancellation & Refund Policy{" "}
            </a></Link>

            <Link to='/disclaimer'><a  href="">
              {" "}
              Disclaimer{" "}
            </a></Link>

            <Link to='/shippingdelivery'><a  href="">
              {" "}
              Shipping & Delivery{" "}
            </a></Link>

            
          </nav>
        </div>
      </div>
    </div>

    <div class="flex items-center justify-center">
  <a className='p-2' href="https://www.goodfirms.co/company/cyber-space-digital">
    <img
      class="h-10 rounded-sm hover:animate-pulse max-w-full"
      src={goodfirms}
      alt="goodfirms_icon"
      width="120"
      height="50"
    />
  </a>
  <a className='p-2' href="https://g.page/r/Cci0AD_-b2q3EAI/review">
    <img
      class="h-10 hover:animate-pulse max-w-full"
      src={googlereview}
      alt="googlereview_icon"
      width="120"
      height="50"
    />
  </a>
</div>


    <div class="h-px my-8 border-0 bg-gray-700"/>
   <p id="copyright" class="cursor-default text-center text-xs text-white">© 2020-<span> {currentYear} </span> <br/>www.cyberspacedigital.in<br/>Web Development & Designer Community ( #CSD )</p>
 </div>
</footer>
<section/>
  

  

    {/* Whatapp us */}
  <div className=" fade-in-left flex items-end justify-start fixed bottom-0 left-0 ml-2 mb-24 md:mb-1 z-10">
    <div>
     
     <a title="Whatsapp"
        href="https://wa.me/+918143407758"
        target="_blank"
        className=" block w-12 rounded-full transition-all  transform hover:scale-110 hover:rotate-12"> 
        <img
  className="object-cover object-center sm:w-12 h-12"
  src={WhatsApp}
  alt="WhatsApp icon"
/>
      </a>

     {/* <spam class='fade-in-left delay-100 cursor-default text-gray-500 text-xs pb-2'>Desgined & Developed by CSD</spam> */}
    </div>
  </div>


     
</section>
</main>
  )
}

export default Footer