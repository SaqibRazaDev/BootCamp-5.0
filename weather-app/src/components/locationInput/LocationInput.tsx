// import React from 'react';

// function LocationInput() {
//   return (
//     <>
// <input
//   type="text"
//   className="w-full max-w-lg h-14 px-5 rounded-lg bg-gray-600 para-md"
//   placeholder="Search location"
// />

// <div className="w-full max-w-lg rounded-lg relative top-5 overflow-hidden flex flex-col gap-1">

//   {/* <div className="location w-full h-14 bg-gray-600 cursor-pointer">
//     <p className="para-md px-5 py-4">
//       City Name
//     </p>
//   </div>

//   <div className="location w-full h-14 bg-gray-600 cursor-pointer">
//     <p className="para-md px-5 py-4">
//       City Name
//     </p>
//   </div>

//   <div className="location w-full h-14 bg-gray-600 cursor-pointer">
//     <p className="para-md px-5 py-4">
//       City Name
//     </p>
//   </div> */}


// </div>
//     </>
//   );
// }

// export default LocationInput;



// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { hostName, appId } from '../../config/config'

// interface City {
//   name: string;
//   lat: number;
//   lon: number;
// }

// const CitySearch: React.FC = () => {
//   const [cityInput, setCityInput] = useState<string>('');
//   const [cities, setCities] = useState<City[]>([]);
//   const [selectedCity, setSelectedCity] = useState<City | null>(null);

//   useEffect(() => {
//     const fetchCities = async () => {
//       try {
//         const response = await axios.get(
//           `${hostName}/geo/1.0/direct?q=${cityInput}&limit=5&appid=${appId}`
//         );

//         const foundCities: City[] = response.data.map((city: any) => ({
//           name: city.name,
//           lat: city.lat,
//           lon: city.lon,
//         }));

//         setCities(foundCities);
//       } catch (error) {
//         console.error('Error fetching cities:', error);
//       }
//     };

//     if (cityInput) {
//       fetchCities();
//     } else {
//       setCities([]);
//     }
//   }, [cityInput]);

//   const handleCityClick = (city: City) => {
//     setSelectedCity(city);
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         className="w-full max-w-lg h-14 px-5 rounded-lg bg-gray-600 para-md"
//         placeholder="Search location"
//         value={cityInput}
//         onChange={(e) => setCityInput(e.target.value)}
//       />

//       <div className="w-full max-w-lg rounded-lg relative top-5 overflow-hidden flex flex-col gap-1">
//         {cities.map((city) => (
//            <div key={city.name} onClick={() => handleCityClick(city)} className="location w-full h-14 bg-gray-600 cursor-pointer">
//            <p className="para-md px-5 py-4">
//              {city.name}
//            </p>
//          </div>
//         ))}
//       </div>

//       {selectedCity && (
//         <div className='text-white'>
//           <h2>Selected City: {selectedCity.name}</h2>
//           <p>Latitude: {selectedCity.lat}</p>
//           <p>Longitude: {selectedCity.lon}</p>
//         </div>
//       )}

//     </div>
//   );
// };

// export default CitySearch;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { hostName, appId } from '../../config/config'

interface City {
  name: string;
  lat: number;
  lon: number;
}


const CitySearch: React.FC = () => {
  const [cityInput, setCityInput] = useState<string>('');
  const [cities, setCities] = useState<City[]>([]);
  const [selectedCity, setSelectedCity] = useState<City | null>(null);

  useEffect(() => {
    const fetchCities = async () => {
      try {
        // if (!cityInput) {
        //   setCities([]); // Clear the city list when the input is empty
        //   return;
        // }

        const response = await axios.get(
          `${hostName}/geo/1.0/direct?q=${cityInput}&limit=5&appid=${appId}`
        );

        const foundCities: City[] = response.data
          // .filter((city: any) => city.name.toLowerCase().includes(cityInput.toLowerCase()))
          .map((city: any) => ({
            name: city.name,
            lat: city.lat,
            lon: city.lon,
          }));

        setCities(foundCities);
      } catch (error) {
        console.error('Error fetching cities:', error);
      }
    };

    fetchCities();
  }, [cityInput]);

  const handleCityClick = (city: City) => {
    setSelectedCity(city);
  };

  return (
    <>
      <input
        type="text"
        className="w-full max-w-lg h-14 px-5 rounded-lg bg-gray-600 para-md"
        placeholder="Search location"
        value={cityInput}
        onChange={(e) => setCityInput(e.target.value)}
      />

      <div className="w-full max-w-lg rounded-lg relative top-5 overflow-y-auto overflow-hidden flex flex-col gap-1">
        {cities.map((city) => (
          <div key={city.name} onClick={() => handleCityClick(city)} className="location w-full h-14 bg-gray-600 cursor-pointer">
            <p className="para-md px-5 py-4">
              {city.name}
            </p>
          </div>
        ))}
      </div>

      {selectedCity && (
        <div className='text-white'>
          <h2>Selected City: {selectedCity.name}</h2>
          <p>Latitude: {selectedCity.lat}</p>
          <p>Longitude: {selectedCity.lon}</p>
        </div>
      )}
    </>
  );
};

export default CitySearch;

