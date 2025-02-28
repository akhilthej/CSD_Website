// Blog.js

import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import BlogsData from "../../assets/data/BlogsData.json"; // Import the local JSON file

import BlogCoverimage from '../../assets/CoverImages/BlogCover.webp';

function BlogPage() {
  const [posts, setPosts] = useState(BlogsData); // Set initial state to the imported data
  const [error, setError] = useState(null);

  // Removed the API call since we're using local data
  // useEffect(() => {
  //     axios.get('https://admin.cyberspacedigital.in/api/fetchPosts.php')
  //         .then(response => {
  //             setPosts(response.data);
  //         })
  //         .catch(error => {
  //             console.error('Error fetching posts:', error);
  //             setError(error);
  //         });
  // }, []);

  if (error) {
      return <div>Error: {error.message}</div>;
  }

  // Function to limit the content to 20 words and remove HTML tags
  const limitContent = (content) => {
    const strippedContent = content.replace(/<[^>]*>/g, ''); // Remove HTML tags
    const words = strippedContent.split(' ');
    const limitedContent = words.slice(0, 20).join(' ');
    return limitedContent;
  };

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
      {/* Title Card end */}

      <section className="text-gray-600 body-font m-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {posts.map(post => (
            <Link to={`/blog/${post.slug}`} key={post.slug}>
              <div className="card">
                <div className="h-full rounded-xl shadow-cla-blue bg-gradient-to-r from-indigo-50 to-blue-50 overflow-hidden">
                  <img
                    className="lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100"
                    src={`https://admin.cyberspacedigital.in/${post.feature_image}`} alt={post.title} />
                  <div className="p-6">
                    <h2 className="title-font text-lg font-medium text-gray-600 mb-3">
                      {post.title}
                    </h2>
                    <p className="leading-relaxed mb-3">
                      {limitContent(post.content)} {/* Limiting content to 20 words */}
                    </p>
                    <div className="flex items-center flex-wrap ">
                      <button className="text-xs sm:text-sm transform rounded border border-slate-200 px-12 py-2 font-medium bg-yellow-500 text-black transition-colors hover:bg-orange-600 hover:text-white">
                        Learn more
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

export default BlogPage;