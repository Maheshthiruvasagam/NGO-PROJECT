import React from 'react'

const Involved = () => {
  return (
    
    <section className='bg-gray-100 font-poppins'>
    <div >
        <h1 className='text-4xl font-bold flex justify-center pt-10'>Get Involved</h1>
    </div>

    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 '>
        <div className='bg-gray-200 p-5 rounded-lg shadow-md m-5'>
            <h1 className='text-2xl font-semibold'>Work With Us!</h1>
            <p className='text-[18px] pt-[15px]'>Join our team of passionate individuals dedicated to making a change. Your skills can make a world of difference.Together, we can create lasting change—but we can’t do it alone. That’s why we are inviting enthusiastic volunteers like you to work with us.</p>
            <button className='bg-blue-500 text-white px-4 py-2 rounded mt-5 ml-30 hover:bg-blue-900'>Join Now</button>
        </div>

        <div className='bg-gray-200 p-5 rounded-lg shadow-md m-5'>
             <h1 className='text-2xl font-semibold'>Volenteer</h1>
            <p className='text-[18px] pt-[15px]'>As a volunteer, you’ll not only contribute to a noble cause but also gain hands-on experience, build leadership skills, and be part of a like-minded community.We’re looking for passionate volunteers who can help with Us.</p>
            <button className='bg-blue-500 text-white px-4 py-2 rounded mt-5 ml-30 hover:bg-blue-900'>Volunteer</button>
        </div>

        <div className='bg-gray-200 p-5 rounded-lg shadow-md m-5'>
             <h1 className='text-2xl font-semibold'>Explore Partnership!</h1>
            <p className='text-[18px] pt-[15px]'>We collaborate with organizations that share our vision. Let's work together to amplify our impact.To reach more lives and scale our efforts, we are looking to build meaningful partnerships with organizations, institutions, and individuals who share our vision.</p>
            <button className='bg-blue-500 text-white px-4 py-2 rounded mt-5 ml-30 hover:bg-blue-900'>Partner Up</button>
        </div>
    </div>
    </section>
    

    
  )
}

export default Involved