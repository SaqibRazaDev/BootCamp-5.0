import React from 'react';

function LocationInput() {
  return (
    <>
      <input
        type="text"
        className="w-full max-w-lg h-14 px-5 rounded-lg bg-gray-600 para-md"
        placeholder="Search location"
      />

      <div className="w-full max-w-lg rounded-lg  bg-gray-900 overflow-hidden flex flex-col gap-2">
        
        {/* <div className="location w-full h-14 bg-gray-600 cursor-pointer">
          <p className="para-md px-5 py-4">
            City Name
          </p>
        </div>

        <div className="location w-full h-14 bg-gray-600 cursor-pointer">
          <p className="para-md px-5 py-4">
            City Name
          </p>
        </div>

        <div className="location w-full h-14 bg-gray-600 cursor-pointer">
          <p className="para-md px-5 py-4">
            City Name
          </p>
        </div> */}


      </div>
    </>
  );
}

export default LocationInput;
