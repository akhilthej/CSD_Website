import React from 'react';
import Subscribe from '../../assets/Icons/Subscribe.png'

const Subscriberform = () => {
  return (
    <>

  <div className="bg-white  flex items-center justify-center">
    <div className="mx-auto w-full max-w-screen-lg bg-white px-5 py-10">
      <div className="grid gap-5 md:grid-cols-2 md:gap-10 lg:gap-20">
        <div className="flex justify-center md:justify-end">
          <img
            className="w-full max-w-sm"
            src={Subscribe}
            alt="Marketing newsletter via computer Illustration in PNG, SVG"
          />
        </div>
        <div className="flex items-center">
          <div className="mx-auto md:mx-0">
            <h3 className="text-4xl font-bold text-black">Subscribe</h3>
            <p className="mt-2 max-w-[20rem] text-lg text-black">
              Join our weekly digest. You'll also receive some of our best posts
              today.
            </p>
            <form action="" className="mt-4 flex flex-col">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                className="w-full rounded border border-black/50 bg-transparent px-3 py-2 text-white placeholder:text-black/50 md:max-w-[18rem]"
              />
              <button
                type="submit"
                className="mt-4 w-full max-w-[14rem] rounded bg-blue-600 hover:bg-blue-900 px-14 py-2 text-center text-white"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</>


  )
}

export default Subscriberform