import React from 'react'
import {
  FaUserTie,
  FaPhoneVolume,
  FaHouseUser,
  FaTable,
  FaHotel,
  FaSprayCan,
  FaHandshake,
} from "react-icons/fa";
import { SiAdguard } from "react-icons/si";
import TraditionImg from "../Images/middle-aged-woman-wearing-apron-rubber-gloves-holding-cleaning-supplies-scrubbing-brush.jpg";
import Service from "../Images/professional-cleaning-service-person-cleaning-office-window.jpg";


const TraditionOfTrust = () => {
  return (
    <div className="w-full">
      <div className="p-8">
        {/* -----------Tradition Of Trust - Heading--------- */}

        <div className="text-center">
          <h1 className="text-1xl font-medium text-gray-600 uppercase ">
            Why Choose Us
          </h1>
          <h2 className="text-4xl font-bold  mt-2">Tradition Of Trust</h2>
          <p className="text-gray-500 mt-4">
            We specialise in intelligence & effective Search and believes in the
            power of partnerships to grow business
          </p>
        </div>

        {/* Tradition Of Trust - Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-12">
          {/* Professional Team */}
          <div className="p-6 text-center group hover:scale-105 transition-transform duration-300">
            <div className="bg-slate-50 shadow-xl rounded-full p-4 flex items-center justify-center mx-auto w-20 h-20 group-hover:rotate-12 transition-transform duration-500">
              <FaUserTie className="text-4xl text-sky-600 group-hover:text-blue-500 transition-colors duration-300" />
            </div>
            <h1 className="text-xl font-semibold mt-5 group-hover:text-blue-500 transition-colors duration-300">
              Professional Team
            </h1>
            <p className="text-gray-500 mt-2 group-hover:text-gray-700 transition-colors duration-300">
              Our team uses a sanitizing solution to wipe down light switches
              and doorknobs.
            </p>
          </div>

          {/* 24/7 Services */}
          <div className="p-6 text-center group hover:scale-105 transition-transform duration-300">
            <div className="bg-slate-50 shadow-xl rounded-full p-4 flex items-center justify-center mx-auto w-20 h-20 group-hover:rotate-12 transition-transform duration-500">
              <FaPhoneVolume className="text-4xl text-sky-600 group-hover:text-blue-500 transition-colors duration-300" />
            </div>
            <h1 className="text-xl font-semibold mt-5 group-hover:text-blue-500 transition-colors duration-300">
              24/7 Services
            </h1>
            <p className="text-gray-500 mt-2 group-hover:text-gray-700 transition-colors duration-300">
              We encourage our customers to let us know in advance of an
              appointment.
            </p>
          </div>

          {/*Service Guarantee */}
          <div className="p-6 text-center group hover:scale-105 transition-transform duration-300">
            <div className="bg-slate-50 shadow-xl rounded-full p-4 flex items-center justify-center mx-auto w-20 h-20 group-hover:rotate-12 transition-transform duration-500">
              <SiAdguard className="text-4xl text-sky-600 group-hover:text-blue-500 transition-colors duration-300" />
            </div>
            <h1 className="text-xl font-semibold mt-5 group-hover:text-blue-500 transition-colors duration-300">
              Service Guarantee
            </h1>
            <p className="text-gray-500 mt-2 group-hover:text-gray-700 transition-colors duration-300">
              We are telling our team members to switch out all cleaning cloths
              and mopheads.
            </p>
          </div>
        </div>
      </div>

      {/* Down Part of Tradition Of Trust */}
      <div className="relative grid grid-cols-1 lg:grid-cols-2">
        {/* Poster */}
        <div className="relative">
          <img src={TraditionImg} alt="House" className="w-full" />
        </div>

        {/* CARD */}
        <div className="relative bg-white shadow-2xl p-10 lg:w-[113%] lg:-ml-20 mt-28 z-10 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.2)] hover:scale-105">
          <h6 className="text-2xl text-gray-600 transition-colors duration-300 hover:text-sky-600">
            MAID FOR YOU
          </h6>
          <h1 className="text-3xl font-bold mt-2 transition-transform duration-300 hover:translate-x-1">
            A Cleaner Place is a Safer Place
          </h1>
          <p className="text-gray-500 mt-4 transition-opacity duration-300 hover:opacity-80">
            Washla cleaning service. We are a company dedicated to giving our
            customers back the time they deserve to enjoy the things they love.
          </p>
          <div className="flex flex-col md:flex-row gap-6 mt-6">
            {/* CART 1 */}
            <div className="flex-1 p-4 text-start transition-all duration-300 hover:bg-blue-50 hover:shadow-lg hover:scale-105">
              <FaSprayCan className="text-4xl text-sky-600 mb-4 transition-transform duration-300 hover:rotate-12" />
              <h1 className="text-xl font-semibold transition-colors duration-300 hover:text-sky-600">
                Professional Cleaning
              </h1>
              <p className="text-gray-500 mt-2 transition-opacity duration-300 hover:opacity-90">
                Housekeeping is responsible for minor security in hotel.
              </p>
            </div>
            {/* CART 2 */}
            <div className="flex-1 p-4 text-start transition-all duration-300 hover:bg-blue-50 hover:shadow-lg hover:scale-105">
              <FaHandshake className="text-4xl text-sky-600 mb-4 transition-transform duration-300 hover:-rotate-12" />
              <h1 className="text-xl font-semibold transition-colors duration-300 hover:text-sky-600">
                Fast And Efficient
              </h1>
              <p className="text-gray-500 mt-2 transition-opacity duration-300 hover:opacity-90">
                Both of us take a lot of time in getting cleaned Clean Home.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ---------------OUR GREATE SERVICES-------------- */}

      <div className="relative bottom-20   ">
        <div>
          <div
            className="relative flex flex-col items-center justify-center text-center bg-cover bg-center w-full h-screen bg-no-repeat mb-12  "
            style={{
              backgroundImage: `url(${Service})`,
            }}
          >
            <div className="absolute inset-0 bg-black opacity-50 rounded-lg  "></div>
            <div className="relative b-20 z-10 text-white mt-96 sm:mt-96 md:mt-96 lg:mt-12 ">
              <h2 className="text-2xl">Why Choose Us</h2>
              <h1 className="text-4xl font-bold mt-2">Our Great Service</h1>
              <p className="text-gray-200 mt-4">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Maxime, earum!
              </p>
            </div>
            {/* Cart Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 mr-10 ml-10">
              {/* Home Cleaning */}
              <div className="p-6 bg-purple-600 text-start group relative transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                <div className="p-4 mb-2">
                  <FaHouseUser className="text-4xl text-white opacity-90 group-hover:text-yellow-300 transition-colors duration-300" />
                </div>
                <h1 className="text-xl font-semibold text-white opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                  Home Cleaning
                </h1>
                <p className="text-white opacity-90 mt-2 group-hover:opacity-100 transition-opacity duration-300">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit
                  ut blanditiis libero quis, eum architecto?
                </p>
                {/* Background Overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-600 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              </div>

              {/* Windows Cleaning */}
              <div className="p-6 bg-purple-600 text-start group relative transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                <div className="p-4 mb-4">
                  <FaTable className="text-4xl text-white opacity-90 group-hover:text-yellow-300 transition-colors duration-300" />
                </div>
                <h1 className="text-xl font-semibold text-white opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                  Windows Cleaning
                </h1>
                <p className="text-white mt-2 opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit
                  ut blanditiis libero quis, eum architecto?
                </p>
                {/* Background Overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-600 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              </div>

              {/* Office Cleaning */}
              <div className="p-8 bg-purple-600 text-start group relative transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
                <div>
                  <FaHotel className="text-6xl text-white opacity-90 group-hover:text-yellow-300 transition-colors duration-300" />
                </div>
                <h1 className="text-xl font-semibold mt-5 opacity-90 text-white group-hover:opacity-100 transition-opacity duration-300">
                  Office Cleaning
                </h1>
                <p className="text-white mt-2 opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit
                  ut blanditiis libero quis, eum architecto?
                </p>
                {/* Background Overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-600 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TraditionOfTrust