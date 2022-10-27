import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import ReactGA from 'react-ga';
import AnimatedRoutes from './components/AnimatedRoutes';





/*---Google Analytics Tracker---*/
const TRACKING_ID = "UA-247075028-1";
ReactGA.initialize(TRACKING_ID);

function App() {
  
  return (
    <>
      <Navbar />
      
        <AnimatedRoutes />

        <Footer />
  
        
    </>
  );
}

export default App;