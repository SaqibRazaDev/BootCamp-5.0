import React from 'react';
import './App.css';
import LandingPage from './pages/landingPage/LandingPage';
import WeatherDashboard from './pages/weatherDashboard/WeatherDashboard';




export default function App() {
  return (
    <div className='bg-green-300'>
      
      <LandingPage />
      <WeatherDashboard/>
      
      </div>
  )
}
