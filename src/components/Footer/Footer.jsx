import React from 'react';
import {Link} from 'react-router-dom';
import Subscribe from '../../assets/Icons/Subscribe.png'


import footer_csd from '../../assets/Common/footer_csd.png';
import WhatsApp from '../../assets/Icons/WhatsApp.png';

const Footer = () => {
  
  return (
    
    <main>

      {/*Subscription section*/}
  <section>

<div className=" flex items-center justify-center">
  <div className="mx-auto w-full max-w-screen-lg  px-5 py-10">
    <div className="grid gap-5 md:grid-cols-2 md:gap-10 lg:gap-20">
      <div className="flex justify-center md:justify-end">
        <img className=" mx-auto flex "
          src={Subscribe}
          alt="Marketing newsletter via computer Illustration in PNG, SVG"
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
              className="w-full rounded border border-white/50 bg-transparent px-3 py-2 text-white placeholder:black-black/50 md:max-w-[18rem]"
            />
            <button
              type="submit"
              className="mt-4 w-full max-w-[14rem] rounded bg-yellow-500 hover:bg-white px-14 py-2 text-center text-black"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
</section>


      {/* Donwload Section */}
        <section>
        <div class="p-4 w-full text-center bg-black   shadow-md sm:p-8 ">
    <h5 class="mb-2 text-3xl font-bold text-white">Work fast from anywhere</h5>
    <p class="mb-5 text-base text-gray-400">Stay up to date and move work forward with Flowbite on iOS &amp; Android. Download the app today.</p>
    <div class="justify-center items-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
        <div class="w-full sm:w-auto bg-gray-700 hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5  ">
            <svg class="mr-3 w-7 h-7" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="apple" role="img" xmlns="https://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"></path></svg>
            <div class="text-left">
                <div class="mb-1 text-xs">Download on the</div>
                <div class="-mt-1 font-sans text-sm font-semibold">Mac App Store</div>
            </div>
        </div>
        <div class="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5">
            <svg class="mr-3 w-7 h-7" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google-play" role="img" xmlns="https://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"></path></svg>
            <div class="text-left">
                <div class="mb-1 text-xs">Get in on</div>
                <div class="-mt-1 font-sans text-sm font-semibold">Google Play</div>
            </div>
        </div>
    </div>
</div>
</section>
    

    {/* Footer */}
    <section>
    <footer className="bg-gradient-to-r from-balck via-[#191d20] to-gray-700">
  <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
    <div>
    <Link to ='/'><img src= {footer_csd} className="mr-5 h-14 sm:h-20 animate-bounce" alt="footer_csd" /></Link>
        <p className="max-w-xs mt-4 text-sm text-gray-600">
          We are here to build your business digitally.<br />
          #CSD.
        </p>
        

        <div className="flex mt-8 space-x-6 text-gray-600">
          <a
            className="hover:opacity-75"
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
            className="hover:opacity-75"
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
            className="hover:opacity-75"
            href=""
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
            className="hover:opacity-75"
            href=""
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
          <a
            className="hover:opacity-75"
            href=""
            target="_blank"
            rel="noreferrer"
          >
            <span className="sr-only"> Dribbble </span>
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillrule="evenodd"
                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
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
            <a className="hover:opacity-75" href="#/aboutus">
              {" "}
              About us{" "}
            </a>
            <a className="hover:opacity-75" href="#/clients">
              {" "}
              History{" "}
            </a>
          </nav>
        </div>
        <div>
          <p className="font-medium text-white">Services</p>
          <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
            
            <a className="hover:opacity-75" href="https://goo.gl/maps/bfLrrZXcQ62JfyNTA">
              {" "}
              Google Map Review{" "}
            </a>
            <a className="hover:opacity-75" href="#/reviews">
              {" "}
              Client Review{" "}
            </a>
            
          </nav>
        </div>
        <div>
          <p className="font-medium text-white">Helpful Links</p>
          <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
            <a className="hover:opacity-75" href="#/contactus">
              {" "}
              Contact{" "}
            </a>
            <a className="hover:opacity-75" href="#/contactus">
              {" "}
              FAQs{" "}
            </a>
            <a className="hover:opacity-75" href="https://api.whatsapp.com/send?phone=918143407758&text=Welcome%20to%20Cyberspacedigital">
              {" "}
              Live Chat{" "}
            </a>
          </nav>
        </div>
        <div>
          <p className="font-medium text-white">Legal</p>
          <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
            <Link to='/privacypolicy'><a className="hover:opacity-75">
              {" "}
              Privacy Policy{" "}
            </a></Link>

            <Link to='/terms&conditions'><a className="hover:opacity-75">
              {" "}
              Terms &amp; Conditions{" "}
            </a></Link>
            <a className="hover:opacity-75" href="">
              {" "}
              Returns Policy{" "}
            </a>
            <Link to='/disclaimer'><a className="hover:opacity-75" href="">
              {" "}
              Disclaimer{" "}
            </a></Link>
            <Link to='/sitemaps'><a className="hover:opacity-75" href="">
              {" "}
              Sitemaps{" "}
            </a></Link>
          </nav>
        </div>
      </div>
    </div>
    <p className="mt-8 text-xs text-white">© 2022 CyberSpaceDigital</p>
  </div>
</footer>
<section/>


  

    {/* Whatapp us */}
  <div className="fade-in-left flex items-end justify-start fixed bottom-0 left-0 ml-4 z-10">
    <div>
      <a
        title="Whatsapp"
        href="https://wa.me/+918143407758"
        target="_blank"
        className="mb-1 block w-12 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12"
      >
        <img
          className=" object-cover object-center w-8 sm:w-12"
          src={WhatsApp}
        />
      </a>
      <h1 class='fade-in-left delay-100 cursor-default text-gray-500 text-xs pb-2'>Desgined & Developed by CSD</h1>
    </div>
  </div>

</section>
</main>
  )
}

export default Footer