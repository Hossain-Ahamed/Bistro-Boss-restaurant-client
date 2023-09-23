import { useState, useEffect } from 'react';

// Function to get the location using the Geolocation API
function getLocation() {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => resolve(position.coords),
        (error) => reject(error)
      );
    } else {
      reject(new Error('Geolocation is not supported'));
    }
  });
}

// Function to get the place name from coordinates using a reverse geocoding service
async function getPlaceName(latitude, longitude) {
  const url = `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`;
  const response = await fetch(url);
  const data = await response.json();
  return data?.address;
}

function useGeoLocation() {
  const [place, setPlace] = useState('Bangladesh');
  const [error, setError] = useState(null);

  useEffect(() => {
    getLocation()
      .then((coords) => getPlaceName(coords.latitude, coords.longitude))
      .then((placeName) => {
        setPlace(placeName);
      })
      .catch((error) => {
        setError(error);
      });
  }, []); // Empty dependency array to run this effect only once

  return { place, error };
}

export default useGeoLocation;
