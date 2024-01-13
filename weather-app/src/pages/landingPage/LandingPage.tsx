import React from 'react'
import logo from '../../assets/logo/Logo.png'
import Logo from '../../components/logo/Logo'
import LocationInput from '../../components/locationInput/LocationInput'

function LandingPage() {
  return (
    <>
      <div className="flex flex-col items-center">

        <Logo/>

        <div className="content mb-8">
          <h1 className="opacity-80 mt-40 heading-md md:heading-lg">
            Welcome to <span className='text-blue-300'>Weather App</span>
          </h1>
          <p className="para-sm md:para-lg text-center">
            Choose a location to see weather forecast
          </p>
        </div>

        <LocationInput/>

      </div>
    </>
  )
}

export default LandingPage