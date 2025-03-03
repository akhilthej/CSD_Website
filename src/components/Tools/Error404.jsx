// Error404.js
import React from 'react';
import { Link } from 'react-router-dom';

const Error404 = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-5xl font-bold text-gray-800">404 - Page Not Found</h1>
      <p className="mt-4 text-lg text-gray-600">
        Oops! It seems the page you're looking for doesn't exist.
      </p>
      <p className="mt-2 text-gray-600">
        Here are some helpful links instead:
      </p>
      <div className="mt-6">
        <Link to="/" className="text-indigo-600 hover:underline">
          Go to Home
        </Link>
        <br />
        <Link to="/aboutus" className="text-indigo-600 hover:underline">
          About Us
        </Link>
        <br />
        <Link to="/services" className="text-indigo-600 hover:underline">
          Our Services
        </Link>
        <br />
        <Link to="/contactus" className="text-indigo-600 hover:underline">
          Contact Us
        </Link>
        <br />
        <Link to="/blog" className="text-indigo-600 hover:underline">
          Visit Our Blog
        </Link>
      </div>
      <img
        src="https://raw.githubusercontent.com/akhilthej/CSD_Website/main/src/assets/Websiteseo/WebsiteThumbnails.png" // Replace with your 404 image URL
        alt="404 Error"
        className="mt-8 w-1/2"
      />
    </div>
  );
};

export default Error404;