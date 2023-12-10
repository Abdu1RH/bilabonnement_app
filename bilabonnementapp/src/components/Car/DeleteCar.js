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
        axios.delete(`http://localhost:8080/api/cars/${id}`)
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
            <h2>Slet bil</h2>
                <button type="submit">Slet bil</button>
        </div>
    );
}

export default EditCar;
