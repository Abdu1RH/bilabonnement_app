import React from 'react';
import { Link } from 'react-router-dom';
{/*import './AvailableCar.css';*/}

function AvailableCar() {
  const carBrands = [
    'Chevrolet',
    'Kia',
    'Volvo',
    'Land Rover',
    'Porsche Panamera',
    'Mitsubishi',
    'Volkswagen ID3',
    'Renault',
    'Smart',
    'BMW ID3',
    'BMW ID4',
    'Porsche Taycan',
    'Ford',
    'Jaguar',
    'Tesla'
  ];

  return (
    <div>
      <h1>Ledige biler</h1>
      <ul>
        {carBrands.map((brand, index) => (
          <li key={index}>
            {/* Link til CreateSubscription med bilens navn som parameter */}
            <Link to={`/createSubscription/${brand}`}>{brand}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AvailableCar;
