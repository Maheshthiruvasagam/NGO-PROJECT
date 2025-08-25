import React from 'react'

const OurFocus = () => {
  return (
    <>
    <div>
    <div className='flex flex-col items-center mt-10'>
        <h1 className='text-[30px] font-bold mt-10'>Our Focus</h1>
        <p className='text-[15px] pt-2 ml-[5px]'>We channel our efforts into key areas to maximize our impact.</p>
    </div>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:ml-[65px] gap-4 mt-15'>
    <div className="card bg-base-100 w-96 shadow-sm">
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

    <div className="card bg-base-100 w-96 shadow-sm">
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

    <div className="card bg-base-100 w-96 shadow-sm">
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