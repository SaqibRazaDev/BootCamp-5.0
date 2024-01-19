import React from 'react'
import logo from '../../assets/logo/logo.png'
import LocationInput from '../../components/locationInput/LocationInput'

function WeatherDashboard() {
  return (
    <>

      <div className="dashboard bg-green-100 text-white flex justify-center gap-6">

        <div className="dash w-full bg-green-300">

          <div className="input flex items-center gap-2 px-1 bg-slate-300">

            <div className="logo w-14 h-14 rounded-lg flex items-center justify-center bg-gray-600">
              <img src={logo} alt="" />
            </div>
            <div className="input-field w-full">
              <LocationInput />
            </div>

          </div>
          <div className="weather h-full max-h-screen p-8 bg-blue-400">
            <div className="location">

              <div className="city-name flex justify-between">
                <div className="name heading-md">Porto Alegre, RS</div>
                <div className="time heading-md">21:39</div>
              </div>
              <div className="date para-md">
                Monday, May 15, 2023
              </div>

            </div>
            
            <div className="condition">

            </div>
          </div>

        </div>

        <div className="dash-details w-full bg-green-500">
          jj
        </div>

      </div>


    </>
  )
}

export default WeatherDashboard