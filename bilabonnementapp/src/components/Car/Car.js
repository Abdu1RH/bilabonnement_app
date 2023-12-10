import React, { useState, useEffect } from "react";

import EditCar from './EditCar';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useParams } from "react-router-dom";


function Car() {
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
        const car = cars.find(car => car.id === parseInt(selectedCarId));
        setSelectedCar(car);
    };

    return (
       
            <div>
                <h1>Biler</h1>
                <select name="carDropdown" id="carDropdown" onChange={handleSelectChange}>
                    <option value="">Vælg en bil</option>

                    {cars.length > 0 && 
                        cars.map(car => (
                            <option key={car.id} value={car.id}>
                                {car.brand}
                                {car.id}
                            </option>
                        ))
                    }
                </select>

                {selectedCar && (
                    <div>
                        <h2>Valgt bil: {selectedCar.brand}</h2>
                        <Link to={`/EditCar/${selectedCar.id}`}> Edit car </Link>
                        
                    </div>
                )}
                
            </div>
    
    );
}

export default Car;
