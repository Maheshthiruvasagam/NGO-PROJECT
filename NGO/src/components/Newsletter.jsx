import React from 'react'

const Newsletter = () => {
  return (
    <section id="subscribe" className="bg-gray-700 py-16 text-white">
        <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-2">Subscribe To Our Newsletter</h2>
            <p className="mb-6 max-w-lg mx-auto">Stay updated with our latest projects, stories, and events. Join our community of changemakers!</p>
            <div className="form-control max-w-md mx-auto">
                <div className="relative">
                    <input type="email" placeholder="your-email@example.com" className="input input-bordered w-full pr-16 rounded-full text-gray-800" /> 
                    <button className="btn btn-primary absolute top-0 right-0 rounded-l-none rounded-full bg-teal-500 hover:bg-teal-600 border-none">Subscribe</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Newsletter