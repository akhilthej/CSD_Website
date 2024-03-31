import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import axios from 'axios';

import BlogCoverimage from '../../assets/CoverImages/BlogCover.webp';

function BlogCard({ post }) {
  return (
    <div>
       
        
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl mb-4">
      <div className="md:flex">

      
        <div className="md:flex-shrink-0">
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{post.date}</div>
          <Link to={`/blog/${post.id}`} className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">{post.title}</Link>
          <p className="mt-2 text-gray-500">{post.excerpt}</p>
          <div className="mt-4">
            <Link to={`/blog/${post.id}`} className="text-indigo-600 hover:text-indigo-500">Read More</Link>
          </div>
        </div>
      </div>
    </div>

    </div>
  );
}

function BlogPage() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios.get('https://admin.cyberspacedigital.in/wp-json/wp/v2/posts')
      .then(response => {
        const formattedPosts = response.data.map(post => ({
          id: post.id,
          title: post.title.rendered,
          date: new Date(post.date).toLocaleDateString(),
          excerpt: post.excerpt.rendered.replace(/(<([^>]+)>)/gi, "").substring(0, 150) + '...',
        }));
        setBlogs(formattedPosts);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  }, []);

  return (
<main>
    <Helmet>
        <title>Cyber Space Digital - Blogs</title>
        <meta name="description" content='Cyberspacedigital, Technologies we deal with to fulfill your digital needs. Our research will be posted below.' />
        <link rel="canonical" href="/blogs" />
      </Helmet>
    

{/* Title Card */}
<section className="py-28 sm:py-40" style={{ backgroundImage: `url(${BlogCoverimage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
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

    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold mb-6">Blog Page</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {blogs.map(blog => (
          <BlogCard key={blog.id} post={blog} />
        ))}
      </div>
    </div>
    </main>
  );
}

export default BlogPage;
