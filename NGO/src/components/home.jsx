import React from 'react';
import { useState } from 'react';

const home = () => {
    const [expanded, setExpanded] = useState(false);

  const text = ` Our NGO is dedicated to empowering underprivileged communities through 
        education, healthcare, and sustainable development programs. With your 
        support, we strive to create opportunities that transform lives and build 
        a brighter future for those in need.`;

  return (
    <>
    
        <div className="bg-gray-300 flex flex-col items-center text-center p-8">
      {/* Quote Line */}
      <blockquote className="text-[50px] poppins font-semibold text-gray-800 mb-8 sm:text-[30px] md:text-[40px]">
        "Together, we can <br />bring hope and change lives."
      </blockquote>
       
      <p className="text-gray-700 text-[20px] font-poppins leading-relaxed whitespace-pre-line">
        {expanded ? text : text.substring(0, 170) + "..."}
      </p>
      <button
        onClick={() => setExpanded(!expanded)}
        className="mt-2 text-blue-600 font-medium hover:underline"
      >
        {expanded ? "Show Less" : "Know More"}
      </button>
      
    </div>
      
    </>
  )
}

export default home;