import React, { useState } from "react";
import axios from 'axios';
import {useNavigate} from 'react-router-dom'


function CreateDamageReport(){
    const navigate = useNavigate();
    const [newDamageReport, setNewDamageReport] = useState({
        error: "",
        errorType: "", 
        numberOfErrors: 0,
        pricePerError: 0.0,
    });


    const handleCreate = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8080/api/damagereports", newDamageReport)
            .then(()=> navigate("/"))
            .catch(error => console.error("Error creating damage report", error));
    };

    const handleEdit = (e) => {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        setNewDamageReport({ ... newDamageReport, [e.target.name]: value})
    };
    return(
    <div>
        <h1>Create Damage Report</h1>
        <form onSubmit={handleCreate}>
            <div>
                    <label>Error</label>
                    <input 
                        type='string'
                        name='error'
                        value={newDamageReport.error}
                        onChange={handleEdit}
                    />
                </div>
                
                <div>
                    <label>Error type</label>
                    <input
                        type='string'
                        name='errorType'
                        value={newDamageReport.errorType}
                        onChange={handleEdit}
                    />
                </div>

                <div>
                    <label>Number of errors</label>
                    <input
                        type='number'
                        name='numberOfErrors'
                        value={newDamageReport.numberOfErrors}
                        onChange={handleEdit}
                    />
                </div>

                <div>
                    <label>Price per error</label>
                    <input
                        type='number'
                        name='pricePerError'
                        value={newDamageReport.pricePerError}
                        onChange={handleEdit}
                    />
                </div>
    
            <button type='submit'>Update damage report</button>
        </form>
    </div>
    );
}

export default CreateDamageReport;