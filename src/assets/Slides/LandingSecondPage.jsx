import React from 'react'
import { FaHandSparkles, FaPeopleCarry, FaHome } from "react-icons/fa";

const LandingSecondPage = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3  gap-6 md:px-10 px-4 py-8 bg-sky-500 mt-28">
      {/* Cart-1 */}
      <div className="flex flex-col  items-center text-center p-6 relative -translate-y-28 transition-transform duration-500 hover:scale-105 hover:shadow-lg">
        <div className="bg-white p-10 flex flex-col items-center justify-center transition-colors duration-500 hover:bg-blue-100">
          <div className="text-sky-600 text-4xl mb-4 transition-colors duration-500">
            <FaHandSparkles />
          </div>
          <h2 className="text-xl font-bold mb-2 transition-colors duration-500">
            Professional Cleaning
          </h2>
          <p className="text-gray-600">
            Housekeeping is responsible for minor security in the hotel
            ecosystem for food and cleaner through.
          </p>
        </div>
        <div className="mt-20 text-left">
          <h1 className="text-3xl font-bold text-black-600 mb-2">
            A Clean House is a
          </h1>
          <h1 className="text-3xl font-bold text-black-600 mb-2">
            Happy Place!
          </h1>
          <p className="text-white text-1xl">
            Washla has met the demand of a growing world.
          </p>
        </div>
      </div>

      {/* Cart-2 */}
      <div className="flex flex-col items-center text-center p-6 relative -translate-y-28 transition-transform duration-500 hover:scale-105 hover:shadow-lg">
        <div className="bg-white p-10 flex flex-col items-center justify-center transition-colors duration-500 hover:bg-blue-100">
          <div className="text-sky-600 text-4xl mb-4 transition-colors duration-500">
            <FaPeopleCarry />
          </div>
          <h2 className="text-xl font-bold mb-2 transition-colors duration-500">
            Fast and Efficient
          </h2>
          <p className="text-gray-600">
           Our Aim is to Keep the House Clean your Aim Will Help! the through Digital Innovation World Summit. 
          </p>
        </div>
        <div className="mt-20 text-left">
          <div className="text-white flex items-start">
            <h1 className="text-4xl leading-none">W</h1>
            <p className="pl-2 text-sm leading-tight">
              ashla customers have a tremendous opportunity to answer the call
              of logistic Lorem ipsum dolor sit amet consectetur
            </p>
          </div>
          <p className="text-white text-sm leading-tight">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
            similique Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dolorem, unde.
          </p>
        </div>
      </div>

      {/* Cart-3 */}
      <div className="flex flex-col items-center text-center p-6 relative -translate-y-28 transition-transform duration-500 hover:scale-105 hover:shadow-lg">
        <div className="bg-white p-10 flex flex-col items-center justify-center transition-colors duration-500 hover:bg-blue-100">
          <div className="text-sky-600 text-4xl mb-4 transition-colors duration-500">
            <FaHome />
          </div>
          <h2 className="text-xl font-bold mb-2 transition-colors duration-500">
            Renew Your Look
          </h2>
          <p className="text-gray-600">
           Both of us take a lot of time in getting cleaned and beautiful Clean Home Professional Service.hbhbhhuhuhuuuuuu
          </p>
        </div>
        <div className="mt-20 text-left">
          <p className="text-white leading-relaxed text-sm leading-tight">
            World's leading non-asset-based supply chain management companies,
            we design and implement industry-leading. We specialise in
            intelligent & effective search and believes in the power of
            partnerships to grow business.
          </p>
        </div>
      </div>
    </div>
  );
}

export default LandingSecondPage