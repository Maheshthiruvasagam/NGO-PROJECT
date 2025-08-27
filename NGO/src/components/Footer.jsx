import React from 'react'

const FacebookIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 hover:text-blue-600 transition-colors duration-300"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
);

const TwitterIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 hover:text-sky-500 transition-colors duration-300"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
);

const InstagramIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 hover:text-pink-500 transition-colors duration-300"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
);

const Footer = () => {
  return (
    <footer className="footer p-10 bg-gray-800 text-base-content text-white">
        <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
            <nav>
                <h6 className="footer-title text-white font-bold opacity-100">Quick Links</h6> 
                <a className="link link-hover text-gray-300 hover:text-white">About us</a>
                <a className="link link-hover text-gray-300 hover:text-white">Contact</a>
                <a className="link link-hover text-gray-300 hover:text-white">Projects</a>
                <a className="link link-hover text-gray-300 hover:text-white">Press kit</a>
            </nav> 
            <nav>
                <h6 className="footer-title text-white font-bold opacity-100">Community</h6> 
                <a className="link link-hover text-gray-300 hover:text-white">Events</a>
                <a className="link link-hover text-gray-300 hover:text-white">Blog</a>
                <a className="link link-hover text-gray-300 hover:text-white">Forum</a>
                <a className="link link-hover text-gray-300 hover:text-white">Podcast</a>
            </nav> 
            <nav>
                <h6 className="footer-title text-white font-bold opacity-100">Social Media</h6>
                <div className="flex space-x-4">
                    <a href="#" className="link link-hover text-gray-300"><FacebookIcon /></a>
                    <a href="#" className="link link-hover text-gray-300"><TwitterIcon /></a>
                    <a href="#" className="link link-hover text-gray-300"><InstagramIcon /></a>
                </div>
            </nav>
            <aside className="col-span-2 md:col-span-1 md:text-right">
                <p className="font-bold text-lg">NGO Project</p> 
                <p>Making the world a better place.</p>
                <p className="mt-4 text-sm text-gray-400">© 2025 All right reserved</p>
            </aside>
        </div>
    </footer>
  )
}

export default Footer