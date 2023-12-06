
import React, { useState } from "react";
import axios from 'axios';
import {useNavigate} from 'react-router-dom'


function CreateSubscription(){
    const navigate = useNavigate();
    const [newSubscription, setNewSubscription] = useState({
        startDate: 0,
        endDate: 0, 
        plannedDistanceInKilometers: 0,
        customer: "",
        car: "",
    });


    const handleCreate = (e) => {
        e.preventDefault();
        axios.post("", newSubscription)
            .then(()=> navigate("/"))
            .catch(error => console.error("E rror creating subscription", error));
    };

    const handleEdit = (e) => {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        setNewSubscription({ ... newSubscription, [e.target.name]: value})
    };
    return(
    <div>
        <h1>Create Subscription</h1>
        <form onSubmit={handleCreate}/>
    </div>
    );
}

export default CreateSubscription;