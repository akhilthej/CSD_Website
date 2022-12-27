import React from 'react';



const WebDevelopmentForm = () => {
  return ( 
    
    <section className="bg-white ">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">    
          <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 sm:text-xl">
            Web Development Quotation
          </p>
        
          <div>
            <label className="block mb-2 text-sm font-medium ">
              Name
            </label>
            <input type="text" name="name" 
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5   "
          placeholder="Sam" />

          <label className="block mb-2 text-sm font-medium pt-2">
          Your email
        </label>
        <input type="email" name="email"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5   "
          placeholder="sam@mail.com"/>
      </div>

      <div className='py-2'>
        <label className="block mb-2 text-sm font-medium ">Do you have a domain?</label>
        <input type="radio" value="Yes" name="domain" /> Yes <br/>
        <input type="radio" value="No" name="domain" /> No
      </div>
      <div className='py-2'>
        <label className="block mb-2 text-sm font-medium ">Do you need a multi-parking domain?</label>
        <input type="radio" value="Yes" name="multidomain" /> Yes <br/>
        <input type="radio" value="No" name="multidomain" /> No
      </div>
      <div className='py-2'>
        <label className="block mb-2 text-sm font-medium ">Which server do you prefer to be hosted?</label>
        <input type="radio" value="Yes" name="hosting" /> Yes <br/>
        <input type="radio" value="No" name="hosting" /> No
      </div>
      <div className='py-2'>
        <label className="block mb-2 text-sm font-medium ">Site Builder</label>
        <input type="radio" value="sbuild" name="sbuild" /> Wordpress <br/>
        <input type="radio" value="sbuild" name="sbuild" /> Wordpress Developer<br/>
        <input type="radio" value="sbuild" name="sbuild" /> php <br/>
        <input type="radio" value="sbuild" name="sbuild" /> React js<br/>
      </div>
      <div className='py-2'>
        <label className="block mb-2 text-sm font-medium ">Do you need a dashboard?</label>
        <input type="radio" value="Yes" name="dboard" /> Yes <br/>
        <input type="radio" value="No" name="dboard" /> No
      </div>
      <div className='py-2'>
        <label className="block mb-2 text-sm font-medium ">Website Type</label>
        <input type="radio" value="wtype" name="wtype" /> Static <br/>
        <input type="radio" value="wtype" name="wtype" /> Business<br/>
        <input type="radio" value="wtype" name="wtype" /> eCommerce <br/>
        <input type="radio" value="wtype" name="wtype" /> information Site <br/>
        <input type="radio" value="wtype" name="wtype" /> Online Forms <br/>
        <input type="radio" value="wtype" name="wtype" /> Banking <br/>
        <input type="radio" value="wtype" name="wtype" /> Web 3.0 <br/>
      </div>
      <div className='py-2'>
        <label className="block mb-2 text-sm font-medium ">Design</label>
        <input type="radio" value="wdesign" name="design" /> Pre-Build (Templets) <br/>
        <input type="radio" value="wdesign" name="design" /> Custom
      </div>
        <div>
            <label className="block mb-2 text-sm font-medium ">
              No. of pages/tabs
            </label>
            <input type="text" name="no.pages" 
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5   "
          placeholder="1-100" />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium ">
              No. of Posts
            </label>
            <input type="text" name="no.posts" 
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5   "
          placeholder="1-100" />
          </div>
          <div className='py-2'>
        <label className="block mb-2 text-sm font-medium ">Do you need a payment method?</label>
        <input type="radio" value="Yes" name="pmethod" /> Yes <br/>
        <input type="radio" value="No" name="pmethod" /> No
      </div>

      <div className="py-2">
      Which Payment method do you prefer?
        <div className="payments">
            <input  type="checkbox" id="topping" name="topping" value="1" /> Phonepe<br/>
            <input type="checkbox" id="topping" name="topping" value="2" /> PayTm<br/>
            <input type="checkbox" id="topping" name="topping" value="3" /> GooglePe<br/>
            <input type="checkbox" id="topping" name="topping" value="4" /> Debit/Credit Card<br/>
        </div>
        </div>

        <div className="py-2">
        Add-on's
        <div className="addons">
            <input  type="checkbox" id="topping" name="topping" value="1" /> Custom Email Address<br/>
            <input type="checkbox" id="topping" name="topping" value="2" /> Google APi Mail<br/>
        </div>
        </div>


      
        <button type="submit" className="block w-full rounded-3xl border bg-black border-black px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-black focus:outline-none focus:ring active:text-opacity-75 sm:w-auto" >
          Send Message
        </button>
      <div className='hidden'>
        <input type="submit" />
        </div>

    
  </div>
</section>
  )
}

export default WebDevelopmentForm