import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

function EditDamageReport(){
    const {id} = useParams();
    const navigate = useNavigate();
    const [damageReport, setNewDamageReport] = useState({
        error: "",
        errorType: "", 
        numberOfErrors: 0,
        pricePerError: 0.0,
    })

    useEffect(() => {
        axios.get(`http://localhost:8080/api/damage/${id}`)
            .then(response => setNewDamageReport(response.data))
            .catch(error => console.error('Error fetching damage:', error));
    }, [id]);

    
    const handleCreate = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8080/api/damages/${id}`, damageReport)
            .then(() => navigate('/'))
            .catch(error => console.error('Error updating damage:', error));
    };
    
    
    const handleEdit = (e) => {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        setDamageReport({ ...damageReport, [e.target.name]: value });
    };

    return (
        <div>
            <h1>Edit damage report</h1>
            <form onSubmit={handleCreate}>
                <div>
                    <label>Error</label>
                    <input 
                        type='string'
                        name='error'
                        value={damageReport.error}
                        onChange={handleEdit}
                    />
                </div>
                
                <div>
                    <label>Error type</label>
                    <input
                        type='string'
                        name='error type'
                        value={damageReport.errorType}
                        onChange={handleEdit}
                    />
                </div>

                <div>
                    <label>Number of errors</label>
                    <input
                        type='number'
                        name='number of errors'
                        value={damageReport.numberOfErrors}
                        onChange={handleEdit}
                    />
                </div>

                <div>
                    <label>Price per error</label>
                    <input
                        type='number'
                        name='price per error'
                        value={damageReport.pricePerError}
                    />
                </div>
                <button type='submit'>Update damage report</button>
            </form>
        </div>
    )
}


export default EditDamageReport;