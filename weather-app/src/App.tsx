import React from 'react';
import './App.css';
import LandingPage from './pages/landingPage/LandingPage';
import WeatherDashboard from './pages/weatherDashboard/WeatherDashboard';




export default function App() {
  return (
    <div className='bg-gray-900 min-h-screen p-6 md:p-10'>
      
      {/* <LandingPage /> */}
      <WeatherDashboard/>
      
      </div>
  )
}
