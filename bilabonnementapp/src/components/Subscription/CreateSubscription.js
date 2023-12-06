import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Customer from './Customer';

function CreateSubscription() {
    const navigate = useNavigate();

    // Opretter en lokal state for at holde værdierne af de nye abonnementer
    const [newSubscription, setNewSubscription] = useState({
        startDate: '', // Ændret fra 0 til '' (tom streng) til datoen
        endDate: '', // Ændret fra 0 til '' (tom streng) til datoen
        plannedDistanceInKilometers: 0,
        customer: '',
        car: '',
    });

    // Funktionen der kaldes, når formularen indsendes
    const handleCreate = (e) => {
        e.preventDefault();
        
        // Sender POST-anmodning til backend med data fra newSubscription
        axios.post('http://localhost:8080/api/subscriptions', newSubscription)
            .then(() => navigate("/")) // Redirigerer til hjemmesiden ved succes
            .catch(error => console.error("Error creating subscription", error)); // Håndterer fejl og udskriver fejl i konsollen
    };

    // Funktionen, der opdaterer newSubscription når inputfelterne ændres
    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewSubscription({ ...newSubscription, [name]: value });
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

                <Customer /> {/* Customer inputfelter kommer fra Cutomer.js under 'return' */}
                <br />
                <input type="submit" value="Opret lejeaftale" /> 
            </form>

        </div>
    );
}

export default CreateSubscription;
