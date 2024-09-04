import React from 'react'
import { Link } from 'react-router-dom';
import growth from './aboutimages/image.png';
function About() {
  return (
    <div className='flex justify-center items-center h-auto bg-white'>
      <div className='w-full h-full flex flex-col justify-center items-center'>
        <div className='flex justify-center items-center p-24'>
          <h3 className='text-center text-6xl font-serif font-bold text-black'>
            <span className='text-green-900'>A</span>BOUT <span className='text-yellow-800'>U</span>S
          </h3>
        </div>
        <div className='text-center flex-col items-center lg:px-20 py-5'>
          <div className='text-4xl text-center p-3 font-bold font-serif'>
            Who We Are - Meet the Team Behind Our Top-Rated Digital Marketing Agency
          </div>
          <div className='px-24 text-lg'>
            <p className='lg:p-2 text-justify'>
              We are one of the fastest-growing full-service Internet Marketing companies focused on implementing cutting-edge, targeted resolutions to customize excellent digital marketing services.
            </p>
            <p className='lg:p-2 text-justify'>
              We provide a more sophisticated, data-driven passageway to digital marketing strategies by understanding your most lucrative business lines and operational provocations.
            </p>
            <p className='p-2 text-justify'>
              As a leader in providing the best Internet Marketing Services, our firm helps you attract the right patrons, generate qualified sales leads, and grow your business. Whatever your goals look like, we’ll put our experience to work to exceed your prerequisites.
            </p>
          </div>
        </div>
        <div className='lg:px-20'>
          <div className='p-2 flex justify-center items-center'>
            <Link to='/'>
              <button className='font-serif text-lg font-bold bg-gradient-to-r from-orange-400 to-blue-400 p-3 rounded-3xl hover:scale-105 transition-transform'>
                REQUEST A PROPOSAL
              </button>
            </Link>
          </div>
        </div>
        <div className='h-full p-20'>
          <img src={growth} alt='about-us' className='h-full w-full object-cover rounded-xl  shadow-2xl shadow-violet-500' />
        </div>
      </div>

    </div>
  )
}

export default About