import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

import '../../Tools/Animations.scss';


function ContactForm() {
  const [state, handleSubmit] = useForm("myyagqep");
  if (state.succeeded) {
      return <p className='text-center py-10'>Thanks for Submitting, We will get back to you!</p>;
  }

  return (
    <main className="glass ">

<section>
<div class="relative flex items-top justify-center min-h-screen sm:items-center sm:pt-0">
        <div class="max-w-6xl mx-auto sm:px-6 lg:px-8">
            <div class=" overflow-hidden">
                <div class="grid grid-cols-1 md:grid-cols-2">
                    <div class="p-6 mr-2   sm:rounded-lg">
                        <h1 class="text-center sm:text-left text-4xl sm:text-5xl text-white font-extrabold tracking-tight">
                            Get in Touch
                        </h1>
                        <p class="text-center sm:text-left text-normal text-lg sm:text-2xl font-medium text-gray-400 mt-2">
                            Fill in the form to start a conversation
                        </p>

                        <div class="flex items-center mt-8 text-gray-400">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" class="w-8 h-8 text-gray-500">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                            </svg>
                            <div class="ml-2 text-sm sm:text-base text-md tracking-wide font-semibold w-">
                            Shivaji Palem, Maddilapalem,<br/> Visakhapatnam, Andhra Pradesh 530017
                            </div>
                        </div>

                        <div class="flex items-center mt-4 text-gray-400">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" class="w-8 h-8 text-gray-500">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                            </svg>
                            <div class="ml-4 text-sm sm:text-base tracking-wide font-semibold w-40">
                                +91 8143407758
                            </div>
                        </div>

                        <div class="flex items-center mt-4 text-gray-400">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" class="w-8 h-8 text-gray-500">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                            </svg>
                            <div class="ml-4 text-sm sm:text-base tracking-wide font-semibold w-40">
                                admin@cyberspacedigital.in
                            </div>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-8 mx-5 my-5">
          <div>
            <label htmlFor="Name" className="text-white block mb-2 text-sm font-medium ">
              Name
            </label>
            <input id="name" type="text" name="name" 
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5   "
          placeholder="Sam" />

          <label htmlFor="email" className="text-white block mb-2 text-sm font-medium pt-2">
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
        <label htmlFor="subject" className="text-white block mb-2 text-sm font-medium ">
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
        <button type="submit" disabled={state.submitting} className="text-white block w-full rounded-3xl border  border-white px-12 py-3 text-sm font-medium   hover:text-black hover:bg-white  sm:w-auto" >
          Send Message
        </button>
      <div className='hidden'>
        <input type="submit" />
        </div>

    </form>

                </div>
            </div>
        </div>
    </div>
</section>

</main>

  )
}

export default ContactForm