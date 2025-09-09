import React from 'react'
import { assets } from '../assets/frontend_assets/assets'
import Explore from '../assets/Explore.png'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className=''>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

            <div>
                <img src={Explore} alt="" className='mb-5 w-32'/>
                <p className='w-full md:w-2/3 text-gray-600'>
                ExploreAttire is your go-to store for travel-inspired fashion and adventure gear. From durable accessories to stylish apparel, we offer everything you need to explore the world in comfort and style. 
                </p>
            </div>

            <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>
                        <Link to="/" className="hover:text-gray-900 transition-colors">HOME</Link>
                    </li>
                    <li>
                        <Link to="/about" className="hover:text-gray-900 transition-colors">ABOUT US</Link>
                    </li>
                    <li>
                        <Link to="/about" className="hover:text-gray-900 transition-colors">DELIVERY</Link>
                    </li>
                    <li>
                        <Link to="/about" className="hover:text-gray-900 transition-colors">PRIVACY POLICY</Link>
                    </li>
                </ul>
            </div>

            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>+91-12345-09876</li>
                    <li>
                        <a href="mailto:contact@exploreattire.com" className="hover:text-gray-900 transition-colors">
                            contact@exploreattire
                        </a>
                    </li>
                </ul>
            </div>

        </div>

        <div className=''>
            <hr />
            <p className='py-5 text-sm text-center'>Copyright @ 2025 exploreattire - All Right Reserved.</p>
        </div>
    </div>
  )
}

export default Footer