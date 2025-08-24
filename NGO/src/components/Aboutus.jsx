import React from "react";
import aboutus from "../assets/aboutus.png";

const Aboutus = () => {
  return (
    <section id="aboutus" className="py-16 bg-gray-100 font-poppins">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-8 max-w-7xl mx-auto">
        
        {/* Left Content */}
        <div className="flex flex-col justify-center">
          <h1 className="text-gray-900 font-bold text-4xl md:text-5xl">About Us</h1>
          <p className="text-gray-700 mt-4 text-lg md:text-xl leading-relaxed">
            We are a non-profit organization committed to making a tangible difference in our 
            communities. Since our inception, we have been driven by a singular focus: to 
            empower the underserved and create sustainable solutions for a brighter future.
          </p>
          <div>
            <a href="#more-aboutus">
              <button className="mt-7 bg-blue-600 text-white px-5 py-2 rounded-lg hover:text-blue-600 hover:bg-white hover:border hover:border-blue-600 transition-all duration-300">
                Learn More
              </button>
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center items-center">
          <img 
            src={aboutus} 
            alt="NGO Work" 
            className="w-full max-w-sm md:max-w-md lg:max-w-lg h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Aboutus;
