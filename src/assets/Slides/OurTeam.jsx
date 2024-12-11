import React from 'react'
import member1 from "../Images/Regular-Home-Cleaning-Services-London.jpg";
import member2 from "../Images/shutterstock_526418566.jpg";
import member3 from "../Images/pexels-liliana-drew-9462206.jpg";

const OurTeam = () => {
  return (
    <div className="container mx-auto px-4 py-8 ml-10 mr-10 w-full">
      {/* Our Team Heading */}
      <div className="text-center mb-12">
        <p className="text-gray-600 text-sm">Meet Our</p>
        <h1 className="text-3xl font-bold mt-2">Our Team</h1>
        <p className="text-gray-700 mt-4">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum
          itaque consectetur doloremque, ut dolor, nisi illum perferendis
          cupiditate amet saepe ullam.
        </p>
      </div>

      {/* Workers */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {/* Worker-1 */}
        <div className="relative flex flex-col items-center">
          <img
            src={member3}
            alt="Monica Gordan"
            className="w-full h-96 object-cover mb-4"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/5 bg-white p-4 w-80 text-center mt-36 border border-gray-300 shadow-lg group hover:bg-gray-100 hover:shadow-2xl hover:scale-105 transition-all duration-300">
            <h1 className="text-xl font-semibold text-black group-hover:text-sky-600 transition-colors duration-300">
              Monica Gordan
            </h1>
            <p className="text-black group-hover:text-sky-500 transition-colors duration-300">
              House Cleaning
            </p>
          </div>
        </div>

        {/* Worker-2 */}
        <div className="relative flex flex-col items-center">
          <img
            src={member2}
            alt="John Smith"
            className="w-full h-96 object-cover mb-4"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/5 bg-white p-4 w-80 text-center mt-36 border border-gray-300 shadow-lg group hover:bg-gray-100 hover:shadow-2xl hover:scale-105 transition-all duration-300">
            <h1 className="text-xl font-semibold text-black group-hover:text-sky-600 transition-colors duration-300">
              Laura Jones
            </h1>
            <p className="text-black group-hover:text-sky-500 transition-colors duration-300">
              Cleaner
            </p>
          </div>
        </div>

        {/* Worker-3 */}
        <div className="relative flex flex-col items-center">
          <img
            src={member1}
            alt="Sarah Lee"
            className="w-full h-96 object-cover mb-4"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/5 bg-white p-4 w-80 text-center mt-36 border border-gray-300 shadow-lg group hover:bg-gray-100 hover:shadow-2xl hover:scale-105 transition-all duration-300">
            <h1 className="text-xl font-semibold text-black group-hover:text-sky-600 transition-colors duration-300">
              Sara Ryan
            </h1>
            <p className="text-black group-hover:text-sky-500 transition-colors duration-300">
              House Cleaner
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurTeam