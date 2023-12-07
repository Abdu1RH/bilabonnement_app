import React from 'react';
import { Link } from 'react-router-dom';

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
    <div className="container-gray">
      {/* Container til "Ledige aftaler" - grå baggrund */}
      <div className="inner-container">
        <h1>Ledige aftaler</h1>
      </div>

      {/* Container til listen af biler - hvid baggrund */}
      <div className="outer-container">
        <div className="car-container">
          <ul className="car-list">
            {carBrands.map((brand, index) => (
              <li className="car-list-item" key={index}>
                {/* Link til CreateSubscription med bilens navn som parameter */}
                <Link to={`/createSubscription/${brand}`}>{brand}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AvailableCar;
