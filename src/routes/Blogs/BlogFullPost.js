// FullBlog.js

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import BlogsData from "../../assets/data/BlogsData.json"; // Import the local JSON file

function FullBlog() {
  const [post, setPost] = useState({});
  const [error, setError] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    const foundPost = BlogsData.find(post => post.slug === slug); // Find the post in the local data
    if (foundPost) {
      setPost(foundPost);
    } else {
      setError({ message: 'Post not found' });
    }
  }, [slug]);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const renderContent = () => {
    if (!post || !post.content) {
      return { __html: '' };
    }
  
    const htmlContent = post.content;
    const modifiedHtmlContent = htmlContent.replace(/<h3>(.*?)<\/h3>/g, '<b>$1</b>');
    return { __html: modifiedHtmlContent };
  };
  
  return (
    <div className="max-w-screen-xl mx-auto">
      <main className="mt-10">
        <div className="mb-4 md:mb-0 w-full max-w-screen-md mx-auto relative" style={{ height: "24em" }}>
          <div className="absolute left-0 bottom-0 w-full h-full z-10" style={{ backgroundImage: "linear-gradient(180deg,transparent,rgba(0,0,0,.3))" }} />
          <img src={`https://admin.cyberspacedigital.in/${post.feature_image}`} alt={post.title} className="absolute left-0 top-0 w-full h-full z-0 object-cover" />
          <div className="p-4 absolute bottom-0 left-0 z-20">
            <div className="flex mt-3">
              <img src="https://cyberspacedigital.in/logo192.png" className="h-10 w-10 rounded-full mr-2 object-cover" />
              <div>
                <p className="font-semibold text-gray-200 text-sm">Cyber Space Digital</p>
                <p className="font-semibold text-gray-400 text-xs">{post.date}</p>
              </div>
            </div>
          </div>
        </div>

        <div className='max-w-screen-md mx-auto'>
          <h2 className="text-4xl font-semibold text-black leading-tight m-5">{post.title}</h2>
          <div className="px-4 lg:px-0 text-gray-700 text-lg leading-relaxed my-5" dangerouslySetInnerHTML={renderContent()}></div>
        </div>
      </main>
    </div>
  );
}

export default FullBlog;