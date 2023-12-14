import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Subscription from "./Subscription";

function EditSubscription() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [subscription, setSubscription] = useState({
        startDate: '',
        endDate: '',
        carID: 0,
        customerID: 0,
        car: {},
        customer: {},
        plannedDistanceInKilometers: 0,
    });

    useEffect(() => {
        axios.get(`http://localhost:8080/api/subscription/${id}`)
            .then(response => setSubscription(response.data))
            .catch(error => console.error('Error fetching subscription:', error));
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8080/api/subscriptions/${id}`, subscription)
            .then(() => navigate('/ListOfSubscriptions'))
            .catch(error => console.error('Error updating subscription:', error));

        
    };

    const handleChange = (e) => {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        setSubscription({ ...subscription, [e.target.name]: value });
    };

    return (
        <div>
            
            <h2>Opdatere abonnement</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Start Date:</label>
                    <input
                        type="date"
                        name="startDate"
                        value={subscription.startDate}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>End Date:</label>
                    <input
                        type="date"
                        name="endDate"
                        value={subscription.endDate}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Car ID:</label>
                    <input
                        type="number"
                        name="carID"
                        value={subscription.car.id}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Customer ID:</label>
                    <input
                        type="number"
                        name="customerID"
                        value={subscription.customer.id}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Planned Distance (in kilometers):</label>
                    <input
                        type="number"
                        name="plannedDistanceInKilometers"
                        value={subscription.plannedDistanceInKilometers}
                        onChange={handleChange}
                        min={1} 
                        max={1000000}
                    />
                </div>
                <button type="submit">Update Subscription</button>
            </form>

        </div>
    );
}

export default EditSubscription;
