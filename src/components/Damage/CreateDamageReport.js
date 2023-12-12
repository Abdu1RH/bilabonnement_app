// CreateDamageReport.js
import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Subscription from "../Subscription/Subscription";

function CreateDamageReport() {
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
            .then(() => navigate("/"))
            .catch(error => console.error("Error creating damage report", error));
    };

    const handleChange = (e) => {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        setNewDamageReport({ ...newDamageReport, [e.target.name]: value });
    };

    return (
        <div className="container-gray">
            <div className="inner-container">
                <h1>Skade og udbedring</h1>
            </div>
            <Subscription sendToParent={newDamageReport} handleChange={handleChange} />
            <div className="outer-container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="damage-containers">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="subscription-container">
                                        <form onSubmit={handleCreate}>
                                            <div>
                                                <label>Skade</label>
                                                <input
                                                    type='text'
                                                    name='error'
                                                    value={newDamageReport.error}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div>
                                                <label>Type af skade</label>
                                                <input
                                                    type='text'
                                                    name='errorType'
                                                    value={newDamageReport.errorType}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div>
                                                <label>Antal skader</label>
                                                <input
                                                    type='number'
                                                    name='numberOfErrors'
                                                    value={newDamageReport.numberOfErrors}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div>
                                                <label>Pris per skade</label>
                                                <input
                                                    type='number'
                                                    name='pricePerError'
                                                    value={newDamageReport.pricePerError}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <button type='submit'>Opret skade raport</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateDamageReport;
