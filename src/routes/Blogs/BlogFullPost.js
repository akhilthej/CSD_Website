import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function FullBlog() {
  const [post, setPost] = useState({});
  const [error, setError] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    axios.get(`https://admin.cyberspacedigital.in/api/fetchPosts.php?slug=${slug}`)
      .then(response => {
        setPost(response.data.find(post => post.slug === slug));
      })
      .catch(error => {
        console.error('Error fetching post:', error);
        setError(error);
      });
  }, [slug]);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}

export default FullBlog;
