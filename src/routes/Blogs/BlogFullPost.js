import React from 'react';
import { useParams } from 'react-router-dom';
import blogs from './BlogsData';

const BlogFullPost = () => {
  const { id } = useParams();
  const blog = blogs.find((blog) => blog.id === parseInt(id));

  if (!blog) {
    return <p>Blog not found</p>;
  }

  return (
<section>

    

      
    <div className="max-w-screen-xl mx-auto">
      <main >
        <div
          className="mb-4 md:mb-0 w-full max-w-screen-md mx-auto relative"
          style={{ height: "24em" }}
        >
          <div
            className="absolute left-0 bottom-0 w-full h-full z-10"
            style={{
              backgroundImage:
                "linear-gradient(180deg,transparent,rgba(0,0,0,.7))"
            }}
          />
          <img src={blog.coverImage} alt={blog.title} 
            className="absolute left-0 top-0 w-full h-full z-0 object-cover"
          />
          
          <div className="p-4 absolute bottom-0 left-0 z-20">
            <a
              href="#"
              className="px-4 py-1 bg-black text-gray-200 inline-flex items-center justify-center mb-2"
            >
              Cyber Space Digital
            </a>
            <h2 className="text-4xl font-semibold text-gray-100 leading-tight">
            {blog.title}
            </h2>
            <div className="flex mt-3">
            </div>
          </div>
        </div>
        <div className="px-4 lg:px-0 mt-12 text-gray-700 max-w-screen-md mx-auto text-lg leading-relaxed">
        {blog.content}
        </div>
      </main>
    </div>


    
  </section>
  
  );
};

export default BlogFullPost;
