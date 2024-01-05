import React from 'react';
import { Helmet } from 'react-helmet-async';

const Blogs = () => {
  return (
    <div>
      <Helmet>
        <title>Cyber Space Digital - Blogs</title>
        <meta name="description" content='Cyberspacedigital, Technologies we deal with to fulfill your digital needs. Our research will be posted below.' />
        <link rel="canonical" href="/blogs" />
      </Helmet>

      <main>
        {/* Title Card */}
        <section className="py-28 sm:py-40" style={{ backgroundImage: 'url("https://drive.google.com/uc?id=19qublbGxK2x3F_oeJUzJtclXREIJDAbB")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <div className="flex flex-col items-center md:flex-row justify-center">
            <div className="md:w-1/2 md:pr-10"></div>
            <div className="md:w-1/2 px-5">
              <div className="text-right md:text-left">
                {/* Align titles to the right on mobile, left on larger screens */}
                <h1 className="text-2xl pb-5 md:text-6xl fade-in-down font-extrabold text-center text-white tracking-tight">
                  Blogs & Research
                </h1>
                <p className="text-white sm:text-sm text-xs text-center sm:ml-0">
                  Research done for our project and Technologies we use for our community.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Include the EmbeddedWebsite component */}
        <EmbeddedWebsite />
      </main>
    </div>
  );
};

const EmbeddedWebsite = () => {
  return (
    <div className="w-screen h-screen">
      <iframe
        title="Embedded Website"
        className="w-full h-full"
        src="https://cyberspacedigital.blogspot.com/"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Blogs;
