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
        <div>
            <h1>Lejeaftaler</h1>
            <h2>Abonnementsinformation</h2>
            <form onSubmit={handleCreate}>
                <label>
                    Start Date:
                    <input type="date" name="startDate" value={newSubscription.startDate} onChange={handleChange} />
                </label>
                <br />
                <label>
                    End Date:
                    <input type="date" name="endDate" value={newSubscription.endDate} onChange={handleChange} />
                </label>
                <br />
                <label>
                    Planned Distance (in Kilometers):
                    <input type="number" name="plannedDistanceInKilometers" value={newSubscription.plannedDistanceInKilometers} onChange={handleChange} />
                </label>
                <br />
                <label>
                    Customer:
                    <input type="text" name="customer" value={newSubscription.customer} onChange={handleChange} />
                </label>
                <br />
                <label>
                    Car:
                    <input type="text" name="car" value={newSubscription.car} onChange={handleChange} />
                </label>

                <Customer />
                
                <button id="opretBtn" type="submit">Opret lejeaftale</button>  
            </form>
        </div>
    );
}

export default CreateSubscription;
