import React, { useState, useEffect } from "react";
import axios from "axios";

function AvailableCar() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/cars")
      .then((response) => {
        setCars(response.data);
      })
      .catch((error) => console.error("Error fetching cars:", error));
  }, []);

  const availableCars = cars.filter((car) => car.carAvailable);
  const rentedCars = cars.filter((car) => !car.carAvailable);

 
  const totalDetailsRentedCars = rentedCars.map((car) => ({
    id: car.id,
    brand: car.brand,
    price: car.price,
  }));

  const totalPriceRentedCars = totalDetailsRentedCars.reduce(
    (total, car) => total + car.price,
    0
  );

  return (
    <div className="container-gray">
      <div className="inner-container">
        <h1>Rapportering og overvågning</h1>
        <p>Status over udlejede og ikke udlejede biler</p>
      </div>

      <div className="outer-container">
        <div className="car-container">
          <ul className="rented-car-list">
            <p>Antal udlejede biler:</p>
            <p>{rentedCars.length}</p>
            <p>ID, Bilmærke og Pris</p>
            {totalDetailsRentedCars.map((car) => (
              <p key={car.id}>
                {car.id} - {car.brand} - {car.price} kr.
              </p>
            ))}
          </ul>
        </div>

        <div className="car-container">
          <ul className="car-list">
            <p>Antal ikke udlejede biler</p>
            <p>{availableCars.length}</p>
            <p>ID og Bilmærke</p>
            {availableCars.map((car) => (
              <p key={car.id}>
                {car.id} - {car.brand}
              </p>
            ))}
          </ul>
        </div>

        <div className="car-container">
          <ul className="rented-car-list">
            <p>Hvad er den sammenlagte pris på de nuværende udlejede biler?</p>
            <p></p>
            <p>ID, Bilmærke, Pris</p>
            {totalDetailsRentedCars.map((car) => (
              <p key={car.id}>
                {car.id} - {car.brand} - {car.price} kr.
              </p>
            ))}
            <p>Total pris: {totalPriceRentedCars} kr.</p>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AvailableCar;
