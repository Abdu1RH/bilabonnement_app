import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function CarList() {
  const [car, setCar] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/cars')
      .then(response => {
        console.log(response);
        setCar(response.data);
      })
    
      .catch(error => console.log('Error fetching cars:', error));
  }, []);

  return (
    <div>
      <h2>Bil liste</h2>
      <ul>
        {car.map(car => (
          <li key={car.id}>
            {car.brand}
            <Link to={`/car/${car.id}`}> Details </Link>
            <Link to={`/edit/${car.id}`}> Edit </Link>
            
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CarList;
