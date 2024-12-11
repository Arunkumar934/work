import React from "react";
import member1 from "../Images/pexels-karolina-grabowska-4239040.jpg";
import member2 from "../Images/pexels-karolina-grabowska-4239145.jpg";
import member3 from "../Images/professional-cleaning-service-person-cleaning-office-window.jpg";
import info1 from "../Images/th.jpeg";
import info2 from "../Images/th (3).jpeg";
import info3 from "../Images/th (2).jpeg";

const RecentNews = () => {
  return (
    <div className="container mx-auto px-4 py-8 mt-64 relative ">
      {/* RecentNews Heading */}
      <div className="text-center mb-12 relative z-10">
        <p className="text-gray-600 text-sm">Why Choose Us</p>
        <h2 className="text-3xl font-bold mt-2">Recent News</h2>
        <p className="text-gray-700 mt-4 mx-4 sm:mx-12">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse aliquam
          numquam asperiores recusandae repellat, placeat deleniti cumque quod
          libero necessitatibus ex dicta natus quam. Voluptates velit tenetur
          distinctio doloremque eaque.
        </p>
      </div>

      {/* Work Posts */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-12 relative z-0">
        {/* Post-1 */}
        <div className="relative shadow-lg group hover:scale-105 transition duration-300">
          <img
            src={member1}
            alt="Clean1"
            className="w-full h-60 object-cover"
          />
          <div className="absolute top-0 right-0">
            <h2 className="py-5 px-5 bg-sky-600 text-white font-bold text-center">
              12 <br /> Nov
            </h2>
          </div>

          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/5 bg-white p-4 w-full sm:w-80 text-center border border-gray-300 shadow-lg mt-20 group-hover:shadow-2xl">
            <p className="text-gray-500 text-xs font-semibold">CLEANING</p>
            <h1 className="text-2xl font-bold mt-2">Temporary Ruling Issued</h1>
            <p className="text-gray-700 mt-4">
             Washla has met the demands of a growing world cleaning tremendous
            </p>
            <div className="mt-6 flex items-center justify-center sm:justify-start">
              <img
                src={info1}
                alt="Martha Smith"
                className="w-16 h-16 rounded-full mr-4"
              />
              <div>
                <h2 className="text-lg font-semibold">Martha Smith</h2>
                <p className="text-gray-500">Washla CEO</p>
              </div>
            </div>
          </div>
        </div>

        {/* Post-2 */}
        <div className="relative shadow-lg group hover:scale-105 transition duration-300 mt-56 sm:mt-0">
          <img
            src={member2}
            alt="Clean2"
            className="w-full h-60 object-cover"
          />
          <div className="absolute top-0 right-0">
            <h2 className="py-5 px-5 bg-sky-600 text-white font-bold text-center">
              12 <br /> Nov
            </h2>
          </div>

          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/5 bg-white p-4 w-full sm:w-80 text-center border border-gray-300 shadow-lg mt-20 group-hover:shadow-2xl">
            <p className="text-gray-500 text-xs font-semibold">CLEANING</p>
            <h1 className="text-2xl font-bold mt-2">The Expands California</h1>
            <p className="text-gray-700 mt-4">
             welcome and every set perspiciants under omnis iste natus
            </p>
            <div className="mt-6 flex items-center justify-center sm:justify-start">
              <img
                src={info2}
                alt="Laura Jones"
                className="w-16 h-16 rounded-full mr-4"
              />
              <div>
                <h2 className="text-lg font-semibold">Laura Jones</h2>
                <p className="text-gray-500">Accounting</p>
              </div>
            </div>
          </div>
        </div>

        {/* Post-3 */}
        <div className="relative shadow-lg group hover:scale-105 transition duration-300 mt-56 sm:mt-0">
          <img
            src={member3}
            alt="Clean3"
            className="w-full h-60 object-cover"
          />
          <div className="absolute top-0 right-0">
            <h2 className="py-5 px-5 bg-sky-600 text-white font-bold text-center">
              12 <br /> Nov
            </h2>
          </div>

          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/5 bg-white p-4 w-full sm:w-80 text-center border border-gray-300 shadow-lg mt-20 group-hover:shadow-2xl">
            <p className="text-gray-500 text-xs font-semibold">CLEANING</p>
            <h1 className="text-2xl font-bold mt-2">Temporary Ruling Issued</h1>
            <p className="text-gray-700 mt-4">
              Washla met the demands of a growing world.The Cleaning.
            </p>
            <div className="mt-6 flex items-center justify-center sm:justify-start">
              <img
                src={info3}
                alt="Matt Ryan"
                className="w-16 h-16 rounded-full mr-4"
              />
              <div>
                <h2 className="text-lg font-semibold">Matt Ryan</h2>
                <p className="text-gray-500">Lawyer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentNews;
