import React from 'react'

function about() {
  return (
    <div className='flex justify-center items-center h-auto bg-gradient-to-br from-purple-300 via-indigo-400 to-blue-500 grid grid-flow-row'>
      <div className='flex justify-center items-center p-3'>
        <h3 className='text-center text-6xl font-serif font-bold text-black'><span className='text-green-900'>A</span>BOUT <span className='text-yellow-800'>U</span>S</h3>
      </div>
      <div className='text-center flex-col items-center lg:px-20 py-5'>
        <div className='text-4xl text-center p-3 font-bold font-serif'>Who We Are - Meet the Team Behind Our Top-Rated Digital Marketing Agency</div>
        <div className='px-24 text-lg'>
          <p className='lg:p-2 text-justify'>We are one of the fastest-growing full-service Internet Marketing companies focused on implementing cutting-edge, targeted resolutions to customize excellent digital marketing services.</p> 
          <p className='lg:p-2 text-justify'>We provide a more sophisticated, data-driven passageway to digital marketing strategies by understanding your most lucrative business lines and operational provocations.</p>
        </div>
      </div>
      <div className='lg:px-20 '>
        <div className='p-2 flex justify-center items-center'>
          <button className='font-serif text-lg font-bold bg-yellow-600 p-3 rounded-3xl hover:bg-yellow-300'>REQUEST A PROPOSAL</button>
        </div>
      </div>
    </div>
  )
}

export default about
