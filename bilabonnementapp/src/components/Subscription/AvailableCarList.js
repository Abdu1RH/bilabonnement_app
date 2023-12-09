import React from 'react';
import { Link } from 'react-router-dom';

function AvailableCar() {
  const carBrands = [
    'Chevrolet, AB 12345',
    'Kia, CD 67890',
    'Volvo, EF 24680',
    'Land Rover, GH 13579',
    'Porsche Panamera, IJ 98765',
    'Mitsubishi, KL 54321',
    'Volkswagen ID3',
    'Renault, MN 24682',
    'Smart, OP 86420',
    'BMW ID3, QR 97531',
    'BMW ID4, ST 11111',
    'Porsche Taycan, UV 22222',
    'Ford, WX 33333',
    'Jaguar, YZ 44444',
    'Tesla, AA 55555'
  ];

  return (
    <div className="container-gray">
      {/* Container til "Ledige aftaler" - grå baggrund */}
      <div className="inner-container">
        <h1>Ledige aftaler</h1>
        <p>Status over klargjorte biler</p>
      </div>

      {/* Container til de to containere ved siden af hinanden */}
      <div className="outer-container">
        <div className="car-container">
          <ul className="car-list">
            <p>Ledige biler</p>
            <p>15</p>
            <p>Bilmærke og nummerplade</p>
            {carBrands.map((brand, index) => (
              <li className="car-list-item" key={index}>
                {/* Link til CreateSubscription med bilens navn som parameter */}
                <Link to={`/createSubscription/${brand}`}>{brand}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Anden container */}
        <div className="car-container">
          <ul className="rented-car-list">
            <p>Udlejede biler:</p>
            <p>4</p>
            <p>Bilmærke og nummerplade</p>
            <p>Toyota, AB 12345</p>
            <p>Honda, CD 67890</p>   
            <p>Mercedes-Benz, EF 24680</p>
            <p>Audi, GH 13579</p>
            <p>Hyundai,IJ 98765</p>
            <p>Ferrari, KL 54321</p>
            <p>Lamborghini, MN 24682</p>
            <p>Bentley, OP 86420</p>
              
           
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AvailableCar;
