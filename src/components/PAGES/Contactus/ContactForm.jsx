import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
function ContactForm() {
  const [state, handleSubmit] = useForm("myyagqep");
  if (state.succeeded) {
      return <p className='text-center py-10'>Thanks for Submitting, We will get back to you!</p>;
  }

  return (
    <section className="bg-white ">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        
          <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 sm:text-xl">
            Check out our FAQ pages for answers to the most common questions.
          </p>


          <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <label htmlFor="Name" className="block mb-2 text-sm font-medium ">
              Name
            </label>
            <input id="name" type="text" name="name" 
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5   "
          placeholder="Sam" />

          <label htmlFor="email" className="block mb-2 text-sm font-medium pt-2">
          Your email
        </label>
        <input id="email" type="email" name="email"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5   "
          placeholder="sam@mail.com"/>
      </div><ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />

      <div>
        <label htmlFor="subject" className="block mb-2 text-sm font-medium ">
          Subject
        </label>
        <input id="subject" type="text" name="subject"
          className="block p-3 w-full text-sm  bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500  "
          placeholder="Let us know how we can help you" />
      </div>

      <div className="sm:col-span-2">
        <label htmlFor="message" className="block mb-2 text-sm font-medium " > </label>
        <textarea id="message" rows={6} name="message"
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 "
          placeholder="Leave a comment..."/>
      </div><ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />

      
        <button type="submit" disabled={state.submitting} className="block w-full rounded-3xl border bg-black border-black px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-black focus:outline-none focus:ring active:text-opacity-75 sm:w-auto" >
          Send Message
        </button>
      <div className='hidden'>
        <input type="submit" />
        </div>

    </form>
  </div>
</section>


  )
}

export default ContactForm