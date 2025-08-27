import React from 'react'

const Award = () => {
  return (
    <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-800">Awards & Recognition</h2>
                <p className="text-gray-600 mt-2">We are honored to be recognized for our commitment and impact.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {['Community Impact Award 2023', 'Green Initiative Prize 2022', 'Top-Rated NGO 2021', 'Excellence in Service 2020'].map(award => (
                    <div key={award} className="card bg-base-100 shadow-md border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                        <div className="card-body items-center text-center">
                            <img src="https://placehold.co/80x80/14b8a6/ffffff?text=AWARD" alt="Award" className="rounded-full mb-4"/>
                            <h3 className="card-title text-lg">{award}</h3>
                            <div className="card-actions">
                                <button className="btn btn-link btn-sm text-teal-600">Know More</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Award