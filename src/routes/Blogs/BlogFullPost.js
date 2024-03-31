import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import axios from 'axios';

function BlogFull() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    axios.get(`https://admin.cyberspacedigital.in/wp-json/wp/v2/posts/${id}`)
      .then(response => {
        setBlog(response.data);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  }, [id]);

  // Function to fetch related articles (you need to implement this)
  const fetchRelatedArticles = () => {
    // Implement your logic to fetch related articles
  };

  useEffect(() => {
    fetchRelatedArticles();
  }, []); // Fetch related articles once the component mounts

  return (
    <div className="container mx-auto py-8">
      <Helmet>
        <title>{blog ? `${blog.title.rendered} | CSD Blogs` : 'CSD Blogs'}</title>
        <meta name="description" content="Cyberspacedigital, Technologies we deal with to fulfill your digital needs. Our research will be posted below." />
        <link rel="canonical" href="/blogs" />
      </Helmet>

      <div className="grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <h1 className="text-3xl font-semibold mb-4 text-center">Cyber Space Digital | Blogs</h1>
          {blog && (
            <div className="max-w-2xl mx-auto">
              <h2 className="text-2xl font-semibold mb-2">{blog.title.rendered}</h2>
              <div dangerouslySetInnerHTML={{ __html: blog.content.rendered }} />
            </div>
          )}
        </div>

        <div className="col-span-1">
          {/* Right Sidebar */}
          <div className="bg-gray-100 p-4">
          <h2 className="text-xs mb-4 text-center">Advertisement</h2>
          
           
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default BlogFull;
