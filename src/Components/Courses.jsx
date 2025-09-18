import React from 'react'

function Courses() {
  return (
     <section className="bg-white text-gray-800 px-6 py-12 md:px-16 lg:px-24">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl md:text-4xl font-bold tracking-wider leading-snug text-gray-500 mb-4">
          Online Classes For <span className='text-[#6892D5]'>Remote</span>{''}<br/><span className='text-[#6892D5]'>Learning</span>
        </h1>
        <p className="text-sm  mb-6">
          At SkillRefill, our work is rooted in people, innovation and excellence. 
          We provide reliable, high-quality services<br/> while staying approachable and committed to your needs.
        </p>
        <a
          href="#"
          className="inline-block bg-[#6892D5] text-white text-sm md:text-base font-medium px-6 py-3 border-[#bad3fb] border-3 rounded hover:bg-[#6892D5] transition"
        >
          FIND OUT MORE →
        </a>
      </div>
    </section>
  )
}

export default Courses