import React from 'react';
import {Link} from 'react-router-dom';

const Reactblog = () => {
  return (
	<>
  <link
    rel="stylesheet"
    href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css"
  />
  <link
    rel="stylesheet"
    href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css"
  />
  <main className="profile-page">
    <section className="relative block h-500-px">
      <div
        className="absolute top-0 w-full h-full bg-center bg-cover"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80")'
        }}
      >
        <span
          id="blackOverlay"
          className="w-full h-full absolute opacity-50 bg-black"
        />
      </div>
      <div
        className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
        style={{ transform: "translateZ(0px)" }}
      >
        <svg
          className="absolute bottom-0 overflow-hidden"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          version="1.1"
          viewBox="0 0 2560 100"
          x={0}
          y={0}
        >
          <polygon
            className="text-blueGray-200 fill-current"
            points="2560 0 2560 100 0 100"
          />
        </svg>
      </div>
    </section>
    <section className="relative py-16 bg-blueGray-200">
      <div className="container mx-auto px-4">
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
          <div className="px-6">
            <div className="flex flex-wrap justify-center">
              <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                <div className="relative">
                  <img
                    alt="..."
                    src="https://drive.google.com/uc?export=view&id=11_CezP5LvHpqyiZOPIgsIsFiPi6yHynR"
                    className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
                  />
                </div>
              </div>
              <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                <div className="py-6 px-3 mt-32 sm:mt-0">
				<a href="https://www.instagram.com/cyber.space.digital">
                  <button className="bg-green-700 active:bg-green-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                    type="button"> Connect </button></a>
                </div>
              </div>
              <div className="w-full lg:w-4/12 px-4 lg:order-1">
                <div className="py-6 px-3 mt-32 sm:mt-0">
				<a href="https://www.instagram.com/cyber.space.digital">
                  <button className="bg-green-700 active:bg-green-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                    type="button"> Contact Us </button></a>
              </div>
              </div>
            </div>
            <div className="text-center mt-12">
              <h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 ">
                React.js
              </h3>
            </div>
            <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
              <div className="flex flex-wrap justify-center">
                <div className="w-full lg:w-9/12 px-4">
                  <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                    An artist of considerable range, Jenna the name taken by
                    Melbourne-raised, Brooklyn-based Nick Murphy writes,
                    performs and records all of his own music, giving it a warm,
                    intimate feel with a solid groove structure. An artist of
                    considerable range.
                  </p>
                
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="relative bg-blueGray-200 pt-8 pb-6 mt-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-6/12 px-4 mx-auto text-center">
              <div className="text-sm text-blueGray-500 font-semibold py-1">
                Made by{" "}
                <a
                  href="https://www.instagram.com/cyber.space.digital/"
                  className="text-blueGray-500 hover:text-blueGray-800"
                  target="_blank"
                >
                  {" "}
                  #CyberSpaceDigital
                </a>
                .
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  </main>
</>

  )
}

export default Reactblog