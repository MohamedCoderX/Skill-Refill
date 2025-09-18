import React from 'react'
import { FaGraduationCap, FaUsers, FaCalendarAlt } from "react-icons/fa";
import classrom from "../assets/Home/Study-child.png"
import bg1 from "../assets/Home/Frame-1.png"
import bg2 from "../assets/Home/Frame-2.png"
import bg3 from "../assets/Home/Frame-3.png"
import bg4 from "../assets/Home/Frame-4.png"
import "../App.css"
const features = [
    {
      id: 1,
      icon: <FaGraduationCap size={24} />,
      title: "Complete Placement-Focused Learning",
      desc: "Comprehensive curriculum designed for placement success.",
      bg: bg1,
    },
    {
      id: 2,
      icon: <FaUsers size={24} />,
      title: "Expert Guidance",
      desc: "Learn directly from industry professionals.",
      bg: bg2,
    },
    {
      id: 3,
      icon: <FaUsers size={24} />,
      title: "Skill Building",
      desc: "Sharpen both technical and communication skills.",
      bg: bg3,
    },
    {
      id: 4,
      icon: <FaCalendarAlt size={24} />,
      title: "Structured Learning",
      desc: "Stay on track with well-planned modules.",
      bg: bg4,
    },
  ];

const WhyChoose = () => {
  return (
    <div>
       <div className='text-center py-10'>
       <h2 className='text-gray-400 text-4xl font-semibold'>Why Choose <span className='text-blue-50'>Skill Refill</span></h2>
       <p className='text-md mt-2'>Recharge Your Career.Redefine Your Future</p>
       </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-center w-[90%] mx-auto">
      {/* Left side - feature cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {features.map((item) => (
          <div
            key={item.id}
            className="rounded-xl text-black w-full bg-no-repeat bg-cover bg-blue from-blue-50 to-blue-100 shadow-lg"
            
          >
           <div className='mt-3 mr-3 ml-3 p-3'>
           <div className="mb-3 text-xl ">{item.icon}</div>
            <h3 className="font-bold text-lg mb-2">{item.title}</h3>
            <p className="text-sm text-gray-700 mb-10">{item.desc}</p>
           </div>
          </div>
        ))}
      </div>

      {/* Right side - single image */}
      <div className="relative w-full imageside">
  <img
    src={classrom}
    alt="Learning"
    className="w-full rounded-2xl shadow-lg"
  />

  {/* Button */}
  <button className="absolute bottom-0  border-white border-8 right-0 flex items-center gap-2 bg-blue text-white font-medium px-6 py-3  rounded-r-3xl rounded-t-3xl shadow-lg">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      className="w-5 h-5"
    >
      <path d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6Zm2 0v12h12V6H6Zm6 7.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm-3 3h6v-1H9v1Z" />
    </svg>
    Go To Plan
  </button>
</div>

    </div>
    </div>
  )
}

export default WhyChoose