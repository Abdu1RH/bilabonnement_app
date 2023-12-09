import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

function Car() {
    const navigate = useNavigate();

    const [car, setCar] = useState({
        brand: '',
        gearType: '',
        fuelType: '',
        perLiter: 0,
        carAvailable: false,
        registrationNumber: 0,
        price: 0,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        const newValue = type === 'checkbox' ? checked : value;
        setCar({ ...car, [name]: newValue });
    };

    return (
        <div>
            <h2>Bilens information</h2>
            <div className="mb-3">
                <label htmlFor="brand" className="form-label">Bilmærke:</label>
                <input type="text" className="form-control" id="brand" name="brand" value={car.brand} onChange={handleChange} />
            </div>

            <div className="mb-3">
                <label htmlFor="gearType" className="form-label">Gear Type:</label>
                <input type="text" className="form-control" id="gearType" name="gearType" value={car.gearType} onChange={handleChange} />
            </div>

            <div className="mb-3">
                <label htmlFor="fuelType" className="form-label">Brændstof type:</label>
                <input type="text" className="form-control" id="fuelType" name="fuelType" value={car.fuelType} onChange={handleChange} />
            </div>

            <div className="mb-3">
                <label htmlFor="perLiter" className="form-label">Per Liter:</label>
                <input type="number" className="form-control" id="perLiter" name="perLiter" value={car.perLiter} onChange={handleChange} />
            </div>

            <div className="mb-3 form-check">
                <label htmlFor="carAvailable" className="form-check-label">Er bilen ledig?:</label>
                <input type="checkbox" className="form-check-input" id="carAvailable" name="carAvailable" checked={car.carAvailable} onChange={handleChange} />
            </div>

            <div className="mb-3">
                <label htmlFor="registrationNumber" className="form-label">Registration Number:</label>
                <input type="number" className="form-control" id="registrationNumber" name="registrationNumber" value={car.registrationNumber} onChange={handleChange} />
            </div>

            <div className="mb-3">
                <label htmlFor="price" className="form-label">Price:</label>
                <input type="number" className="form-control" id="price" name="price" value={car.price} onChange={handleChange} />
            </div>
        </div>
    );
}

export default Car;
