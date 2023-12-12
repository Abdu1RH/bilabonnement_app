import React, { useState, useEffect } from "react";
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
            <h1>Hvilken bil skal tilknyttes lejeaftalen?</h1>
            {/* Dropedown menu */}
            <select name="carDropdown" id="carDropdown" onChange={handleSelectChange}>
                <option value="">Vælg en bil</option>

                {cars.length > 0 &&
                    cars.map(car => (
                        <option key={car.id} value={car.id}>
                            {car.brand} {/* Read*/}

                        </option>
                    ))
                }
            </select>

            {selectedCar && (
                <div>
                    <h2>Du har nu valg: {selectedCar.brand}</h2>
                    <div>
                        <Link to={`/CreateCar/${selectedCar.id}`}> Opret en bil </Link> {/* Create*/}
                        <Link to={`/EditCar/${selectedCar.id}`}> Rediger bil </Link> {/* Update*/}
                        <Link to={`/DeleteCar/${selectedCar.id}`}> Slet bil </Link> {/* Delete */}

                        <br />
                        <Link to={`/createSubscription/${selectedCar.id}`}> Opret abonnement </Link>
                    </div>

                </div>
            )}

        </div>

    );
}

export default Car;
