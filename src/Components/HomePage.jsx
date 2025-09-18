import React from 'react'
import bgimage from "../assets/Home/Hero-BG.png"
import book from "../assets/Home/book.png"
import bookmark from "../assets/Home/bookmarks.png"
import clipboard from "../assets/Home/clipboard.png"
import rocket from "../assets/Home/rocket.png"


const HomePage = () => {
  return (
    <div className='text-center py-36 relative bg-cover' style={{ backgroundImage: `url(${bgimage})` }}>
        <img src={book} alt="book" className='w-40 absolute top-10 left-40'/>
        <img src={bookmark} alt="bookmark" className='w-40 absolute right-30 top-50'/> 
        <img src={clipboard} alt="clipboard" className='w-40 absolute top-80 left-30'/>
        <img src={rocket} alt="rocket" className='w-60 absolute right-50 bottom-10 '/>
        <h1 className='text-8xl mb-4 '>Upskill Smarter.  Get <br /> Placement Ready.</h1>
        <p className='text-xl text-gray-500 mb-4'>From Aptitude to Tech Skills to Communication — <br />Skill Refill prepares you for your dream job with expert <br />trainers and structured learning.</p>
        <button className='bg-blue text-white rounded-lg py-2 px-2 border-[#bad3fb] border-3 '>Get Subscription</button>
    </div>
  )
}

export default HomePage