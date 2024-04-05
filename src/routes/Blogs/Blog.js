import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import axios from 'axios';

import BlogCoverimage from '../../assets/CoverImages/BlogCover.webp';

function BlogPage() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
      axios.get('https://admin.cyberspacedigital.in/api/fetchPosts.php')
          .then(response => {
              setPosts(response.data);
          })
          .catch(error => {
              console.error('Error fetching posts:', error);
              setError(error);
          });
  }, []);

  if (error) {
      return <div>Error: {error.message}</div>;
  }

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

      <div>
        <h1>Blog Posts</h1>
        {posts.map(post => (
          <div key={post.slug} className="card">
            <h2><Link to={`/blog/${post.slug}`}>{post.title}</Link></h2>
            <p>{post.content}</p>
          </div>
        ))}
      </div>
    </main>
  );
}

export default BlogPage;
