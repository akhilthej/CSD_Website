import React, { useState, useEffect } from 'react';
import applogo from "../assets/CSDLogo.svg"

const LogoLoader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay (replace this with your actual data loading logic)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Adjust the delay as needed

    // Clear the timer when the component unmounts or when isLoading becomes false
    return () => clearTimeout(timer);
  }, []); // Empty dependency array to ensure the effect runs only once

  const logoLoaderStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'black',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 100,
    transition: 'opacity 0.5s',
  };

  const logoStyle = {
    maxWidth: '20%', /* Make the logo width 100% of its container */
    maxHeight: '20%', /* Make the logo height 100% of its container */
  };

  // Ensure the loader is hidden when isLoading becomes false
  if (!isLoading) {
    return null; // Return null to render nothing when not loading
  }

  return (
    <div style={logoLoaderStyle} className={`logo-loader ${isLoading ? 'show' : 'hide'}`}>
      {/* Replace 'your-logo.png' with the path to your logo */}
      <img src={applogo} alt="Loading" style={logoStyle} className="logo" />
    </div>
  );
};

export default LogoLoader;
