import React from 'react'
import {
  FaGrin,
  FaRegPlayCircle,
  FaRegBuilding,
  FaAward,
  FaGlassMartini,
} from "react-icons/fa";
import video from "../Images/pexels-michelangelo-buonarroti-4176302.jpg";



const NeedHelpWithCleaning = () => {
  return (
    <div className="relative mt-28">
      {/* Video Slide */}
      <div
        className="bg-cover bg-center min-h-screen flex flex-col items-center justify-center text-white text-center relative"
        style={{ backgroundImage: `url(${video})` }}
      >
        <button className="bg-sky-600 rounded-full w-16 h-16 flex items-center justify-center mb-6 shadow-md hover:bg-blue-600 transition duration-300">
          <FaRegPlayCircle className="text-white text-3xl hover:text-blue transition duration-300" />
        </button>

        {/* Video-Content */}
        <p className="text-lg tracking-widest mb-2">
          Clearing Your Worries Away
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6">
          Need Help With Cleaning
        </h2>
        <button className="px-7 py-2 bg-sky-600 text-white rounded-md shadow-md text-lg hover:bg-blue-700 transition duration-300">
          Request Call Back
        </button>
      </div>

      {/* Our-Achivements*/}
      <div className="absolute left-0 right-0 bottom-0 transform translate-y-1/2 bg-gray-100 text-center border-t border-b border-gray-300 mx-4 sm:mx-10 rounded-lg shadow-lg">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4 sm:px-10 py-8">
          {/* Achivements-1 */}
          <div className="flex flex-col items-center border-r border-gray-300 last:border-none">
            <FaGrin className="text-sky-600 text-4xl mb-2" />
            <h2 className="text-3xl font-bold mb-1">385</h2>
            <p className="text-gray-600">Happy Customers</p>
          </div>

          {/* Achivements-2 */}
          <div className="flex flex-col items-center border-r border-gray-300 last:border-none">
            <FaRegBuilding className="text-sky-600 text-4xl mb-2" />
            <h2 className="text-3xl font-bold mb-1">842</h2>
            <p className="text-gray-600">Houses Cleaned</p>
          </div>

          {/* Achivements-3 */}
          <div className="flex flex-col items-center border-r border-gray-300 last:border-none">
            <FaAward className="text-sky-600 text-4xl mb-2" />
            <h2 className="text-3xl font-bold mb-1">485</h2>
            <p className="text-gray-600">Awards Received</p>
          </div>

          {/* Achivements-4 */}
          <div className="flex flex-col items-center">
            <FaGlassMartini className="text-sky-600 text-4xl mb-2" />
            <h2 className="text-3xl font-bold mb-1">1485</h2>
            <p className="text-gray-600">Glass Cleaned</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NeedHelpWithCleaning