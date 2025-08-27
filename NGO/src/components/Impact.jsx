import React from 'react'

const Impact = () => {
  return (
    <section id="gallery" className="py-20 bg-teal-600 text-white mt-10 font-poppins">
        <div className="container mx-auto px-6">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold">Impact By The Numbers</h2>
                <p className="mt-2 opacity-90">Our journey and achievements, quantified.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div className="p-4">
                    <img src="https://placehold.co/150x150/ffffff/14532d?text=Founded" alt="Founded Icon" className="mx-auto rounded-full mb-4 border-4 border-white shadow-lg"/>
                    <p className="text-5xl font-bold">1980</p>
                    <p className="text-lg">Year Founded</p>
                </div>
                <div className="p-4">
                    <img src="https://placehold.co/150x150/ffffff/14532d?text=Lives+Touched" alt="Lives Touched Icon" className="mx-auto rounded-full mb-4 border-4 border-white shadow-lg"/>
                    <p className="text-5xl font-bold">4,000+</p>
                    <p className="text-lg">Lives Touched</p>
                </div>
                <div className="p-4">
                    <img src="https://placehold.co/150x150/ffffff/14532d?text=Projects" alt="Projects Icon" className="mx-auto rounded-full mb-4 border-4 border-white shadow-lg"/>
                    <p className="text-5xl font-bold">100+</p>
                    <p className="text-lg">Projects Completed</p>
                </div>
                <div className="p-4">
                    <img src="https://placehold.co/150x150/ffffff/14532d?text=Volunteers" alt="Volunteers Icon" className="mx-auto rounded-full mb-4 border-4 border-white shadow-lg"/>
                    <p className="text-5xl font-bold">320+</p>
                    <p className="text-lg">Active Volunteers</p>
                </div>
            </div>
        </div>
    </section>
) 
}

export default Impact