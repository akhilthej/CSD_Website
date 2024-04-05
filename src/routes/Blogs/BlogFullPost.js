import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function FullBlog() {
  const [post, setPost] = useState({});
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`https://admin.cyberspacedigital.in/api/fetchPosts.php?id=${id}`)
      .then(response => {
        setPost(response.data.find(post => post.id === id)); // Find the post with matching id
      })
      .catch(error => {
        console.error('Error fetching post:', error);
        setError(error);
      });
  }, [id]);

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
