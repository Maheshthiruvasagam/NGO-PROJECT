import React from 'react'

const OurFocus = () => {
  return (
    <>
    <div className="px-2 sm:px-4 md:px-8 lg:px-16">
      <div className='flex flex-col items-center mt-10'>
        <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold mt-10 text-center'>Our Focus</h1>
        <p className='text-base sm:text-lg pt-2 text-center'>We channel our efforts into key areas to maximize our impact.</p>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10'>
  <div className="card bg-base-100 w-full max-w-xs mx-auto shadow-sm">
  <figure>
    <img
      src="https://placehold.co/400x300/a7f3d0/14532d?text=Education"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Education</h2>
    <p>Providing access to quality education for underprivileged children.</p>
    </div>
    </div>

  <div className="card bg-base-100 w-full max-w-xs mx-auto shadow-sm">
  <figure>
    <img
      src="https://placehold.co/400x300/a7f3d0/14532d?text=HealthCare"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Healthcare</h2>
    <p>Ensuring accessible and affordable healthcare for all communities</p>
    </div>
    </div>

  <div className="card bg-base-100 w-full max-w-xs mx-auto shadow-sm">
  <figure>
    <img
      src="https://placehold.co/400x300/a7f3d0/14532d?text=Environment"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Environment</h2>
    <p>Working towards a sustainable future through conservation efforts.</p>
    </div>
    </div>


  
</div> 
      <div className='flex flex-col items-center mt-10'>
        <button className="btn btn-primary">Primary</button>
      </div>
</div>
</>
  )
}

export default OurFocus