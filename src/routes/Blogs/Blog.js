import React from 'react';
import { Helmet } from 'react-helmet-async';
import blogs from './BlogsData';
import { Link } from 'react-router-dom';

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


        <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-semibold mb-4">All Blogs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {blogs.map((blog) => (
          <div key={blog.id} className="bg-white p-4 rounded-md shadow-md">
          <Link
              to={`/blog/${blog.id}`}
              className="text-blue-500 hover:underline mt-2 inline-block"
            >
            <img src={blog.coverImage} alt={blog.title} className="mb-4 rounded-md" />
            <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
            <p className="text-gray-600">{blog.excerpt}</p>
            
              Read More
            </Link>
          </div>
        ))}
      </div>
    </div>

      </main>
    </div>
  );
};




export default Blogs;
