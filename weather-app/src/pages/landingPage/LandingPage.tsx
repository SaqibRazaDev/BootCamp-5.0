import React from 'react'
import logo from '../../assets/logo/Logo.png'

function LandingPage() {
  return (
    <>
      <div className="flex flex-col items-center">

        <div className="logo mt-12">
          <a href="/">
            <img src={logo} alt="zzz" />
          </a>
        </div>

        <div className="content">
          <h1 className="opacity-80 text-xl md:text-4xl font-bold mt-40 text-center text-white">
            Welcome to <span className='text-blue-300'>Weather App</span>
          </h1>
          <p className="text-lg font-normal leading-8 text-center text-gray-200">
          Choose a location to see weather forecast
          </p>
        </div>
      </div>
    </>
  )
}

export default LandingPage