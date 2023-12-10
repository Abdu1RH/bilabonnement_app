import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useParams, useNavigate } from "react-router-dom";

function EditCar() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [car, setCar] = useState({
        brand: '',
        gearType: '',
        fuelType: '',
        perLiter: 0,
        carAvailable: false,
        registrationNumber: 0,
        price: 0
    });

    useEffect(() => {
        axios.get(`http://localhost:8080/api/cars/${id}`)
            .then(response => setCar(response.data))
            .catch(error => console.log('Error fetching car:', error));
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8080/api/cars/${id}`, car)
            .then(() => navigate('/'))
            .catch(error => console.error('Error updating car:', error));
    };

    const handleChange = (e) => {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        setCar({ ...car, [e.target.name]: value });
    };

    return (
        <div>
            <h2>Edit Car</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>brand:</label>
                    <input
                        name="brand"
                        value={car.brand}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>gearType:</label>
                    <input
                        name="gearType"
                        value={car.gearType}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>fuelType:</label>
                    <input
                        name="fuelType"
                        value={car.fuelType}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>perLiter (0-100):</label>
                    <input
                        type="number"
                        name="perLiter"
                        value={car.perLiter}
                        onChange={handleChange}
                        min="0"
                        max="100"
                    />
                </div>
                <div>
                    <label>carAvailable:</label>
                    <input
                        type="checkbox"
                        name="carAvailable"
                        checked={car.carAvailable}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>registrationNumber (0-10):</label>
                    <input
                        type="number"
                        name="registrationNumber"
                        value={car.registrationNumber}
                        onChange={handleChange}
                        min="0"
                        max="10"
                    />
                </div>
                <div>
                    <label>price (0-100000):</label>
                    <input
                        type="number"
                        name="price"
                        value={car.price}
                        onChange={handleChange}
                        min="0"
                        max="100000"
                    />
                </div>
                <button type="submit">Gem ændringerne</button>
            </form>
        </div>
    );
}

export default EditCar;
