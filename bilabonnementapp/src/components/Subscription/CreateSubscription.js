import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Customer from './Customer';

function CreateSubscription() {
    const navigate = useNavigate();

    const [newSubscription, setNewSubscription] = useState({
        startDate: '',
        endDate: '',
        plannedDistanceInKilometers: 0,
        customer: '',
        car: '',
    });

    const handleCreate = (e) => {
        e.preventDefault();

        axios.post('http://localhost:8080/api/subscriptions', newSubscription)
            .then(() => navigate("/"))
            .catch(error => console.error("Error creating subscription", error));
    };

    const handleChange = (e) => {
        const value = e.target.type === 'input' ? e.target.checked : e.target.value;
        setNewSubscription({ ...newSubscription, [e.target.name]: value });
    };

    return (
        <div className="container">
            <h1>Lejeaftaler</h1>
            <p>Opret lejeaftale over xxxx</p>
            <div className="row">
                <div className="col-md-6">
                    <div className="lease-container">

                        <div className="row">
                            <div className="col-md-6">
                                <div className="subscription-container">
                                    <h2>Abonnement information</h2>
                                    <form onSubmit={handleCreate}>
                                        <div className="mb-3">
                                            <label htmlFor="startDate" className="form-label">Start Dato:</label>
                                            <input type="date" className="form-control" id="startDate" name="startDate" value={newSubscription.startDate} onChange={handleChange} />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="endDate" className="form-label">Slut dato:</label>
                                            <input type="date" className="form-control" id="endDate" name="endDate" value={newSubscription.endDate} onChange={handleChange} />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="plannedDistance" className="form-label">Antal aftalt kørt km:</label>
                                            <input type="number" className="form-control" id="plannedDistance" name="plannedDistanceInKilometers" value={newSubscription.plannedDistanceInKilometers} onChange={handleChange} />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="customer" className="form-label">Kunde:</label>
                                            <input type="text" className="form-control" id="customer" name="customer" value={newSubscription.customer} onChange={handleChange} />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="car" className="form-label">Bil:</label>
                                            <input type="text" className="form-control" id="car" name="car" value={newSubscription.car} onChange={handleChange} />
                                        </div>
                                        <Customer />
                                        <button className="btn btn-primary" type="submit">Opret lejeaftale</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default CreateSubscription;
