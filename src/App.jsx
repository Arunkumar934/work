import React from 'react'
import backgroundImg from "./assets/Images/pexels-karolina-grabowska-4239113.jpg";
import Contact from "./assets/Components/Contact";
import Navbar from './assets/Components/Navbar';
import LandingPage from './assets/Slides/LandingPage';
import LandingSecondPage from './assets/Slides/LandingSecondPage';
import TraditionOfTrust from './assets/Slides/TraditionOfTrust';
import OurTeam from './assets/Slides/OurTeam';
import NeedHelpWithCleaning from './assets/Slides/NeedHelpWithCleaning';
import RecentNews from './assets/Slides/RecentNews';
import Footer from "./assets/Slides/Footer"
import './App.css'

function App() {
  

  return (
    <div>
      <div
        className="bg-cover bg-center min-h-screen relative"
        style={{ backgroundImage: `url(${backgroundImg})` }}
      >
        {/* Content Overlay */}
        <div className="bg-black bg-opacity-60 min-h-screen">
          <div className="px-4 md:px-10 mb-2">
            <Contact />
          </div>

          <Navbar />
          <LandingPage />
          <LandingSecondPage />
        </div>
      </div>

      <TraditionOfTrust />
      <OurTeam />
      <NeedHelpWithCleaning />
      <RecentNews />
      <Footer />
    </div>
  );
}

export default App
