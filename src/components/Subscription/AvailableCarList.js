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
  const allCarBrands = carBrands.join('\n');
  return (
    <div className="container-gray">
      {/* Container til "Ledige aftaler" - grå baggrund */}
      <div className="inner-container">
        <h1>Rapportering og overvågning</h1>
        <p>Status over udlejede og ikke udlejde biler</p>
      </div>

      {/* Container til de to containere ved siden af hinanden */}
      <div className="outer-container">
        <div className="car-container">
          <ul className="car-list">
            <p>Antal ikke udlejde biler</p>
            <p>15</p>
            <p>Bilmærke og nummerplade</p>
            <p>Chevrolet, AB 12345</p>
            <p>Kia, CD 67890</p>
            <p>Volvo, EF 24680</p>
            <p>Land Rover, GH 13579</p>
            <p>Porsche Panamera, IJ 98765</p>
            <p>Mitsubishi, KL 54321</p>
            <p>Volkswagen ID3</p>
            <p>Renault, MN 24682</p>
            <p>Smart, OP 86420</p>
            <p>BMW ID3, QR 97531</p>
            <p>BMW ID4, ST 11111</p>
            <p>Porsche Taycan, UV 22222</p>
            <p>Ford, WX 33333</p>
            <p>Jaguar, YZ 44444</p>
            <p>Tesla, AA 55555</p>
          </ul>
        </div>

        {/* Anden container */}
        <div className="car-container">
          <ul className="rented-car-list">
            <p>Antal udlejede biler:</p>
            <p>8</p>
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

        <div className="car-container">
          <ul className="rented-car-list">
            <p>Hvad er den sammenlagte pris på de nuværende udlejede biler?:</p>
            <p></p>
            <p></p>
            <p>Toyota, xxx kr.</p>
            <p>Honda, xxx kr</p>
            <p>Mercedes-Benz, xxx kr</p>
            <p>Audi, xxx kr</p>
            <p>Hyundai, xxx kr</p>
            <p>Ferrari, xxx kr</p>
            <p>Lamborghini, xxx kr</p>
            <p>Bentley, xxx kr</p>


          </ul>
        </div>
      </div>
    </div>
  );
}

export default AvailableCar;
