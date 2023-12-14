import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";


function Car(props) {
    const { id } = useParams();
    const [cars, setCars] = useState([]);
    const [selectedCar, setSelectedCar] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:8080/api/cars')
            .then(response => {
                setCars(response.data);
            })
            .catch(error => {
                console.error("Error fetching cars", error);
            });
    }, []); 
    

    const handleSelectChange = (e) => {
        const selectedCarId = e.target.value;
        props.sendToParent.carID = selectedCarId;
        const car = cars.find(car => car.id === parseInt(selectedCarId));
        setSelectedCar(car);
    };

    return (
 
        <div>
      <p>Hvilken bil skal tilknyttes lejeaftalen?</p>
      {/* Bootstrap Dropdown menu */}
      <select className="form-control custom-dropdown" name="carDropdown" id="carDropdown" onChange={handleSelectChange}>
        <option value="">Vælg en bil</option>
        {cars.length > 0 &&
          cars.map(car => (
            <option key={car.id} value={car.id}>
              {car.brand}
            </option>
          ))
        }
      </select>

      {selectedCar && (
        <div>
          <h2>Valgt bil: {selectedCar.brand}</h2>
          <div>
          </div>
        </div>
      )}
    </div>

    );
}

export default Car;
