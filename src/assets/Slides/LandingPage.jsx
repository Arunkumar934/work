import React from 'react'

const LandingPage = () => {
  return (
    <div className="text-white flex flex-col items-center justify-center text-center ml-4 mr-4 md:items-start md:ml-20 md:mr-10 md:text-left mt-10 md:mt-0 min-h-[50vh] relative">
      <div className="mb-6">
        <p className="text-lg uppercase tracking-widest mb-2">
          Renew Your Look
        </p>
        <h1 className="text-4xl uppercase tracking-widest md:text-6xl font-bold">
          A Tradition of <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-500">
            Quality Cleaning
          </span>
        </h1>
      </div>
      <div>
        <div className="group">
          <button className="relative px-6 py-2 mt-10 bg-transparent border border-white text-white rounded-md shadow-md text-lg overflow-hidden transition-transform duration-500 hover:scale-105">
            {/* Gradient hover background */}
            <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
            {/* Text transition */}
            <span className="relative z-10 group-hover:text-gray-900 transition-colors duration-500">
              Contact Us
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default LandingPage