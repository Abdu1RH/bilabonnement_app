import React, { useState } from "react";
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import Subscription from "../Subscription/Subscription";
import EditDamageReport from "./EditDamageReport";
import DeleteDamageReport from "./DeleteDamageReport";

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
      .then((response) => {
        setNewDamageReport({ ...newDamageReport, id: response.data.id });
        navigate("/");
      })
      .catch(error => console.error("Error creating damage report", error));
  };
  
    const handleChange = (e) => {
        const value = e.target.type === 'input' ? e.target.checked : e.target.value;
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
                                                <label className="alignText">Skade:</label>
                                                <input
                                                    type='text'
                                                    name='error'
                                                    value={newDamageReport.error}
                                                    className="damageReport-btn"
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div>
                                                <label className="alignText" >Type af skade:</label>
                                                <input
                                                    type='text'
                                                    name='errorType'
                                                    value={newDamageReport.errorType}
                                                    className="damageReport-btn"
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div>
                                                <label className="alignText">Antal skader:</label>
                                                <input
                                                    type='number'
                                                    name='numberOfErrors'
                                                    value={newDamageReport.numbersOfErrors}
                                                    className="damageReport-btn"
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div>
                                                <label className="alignText">Pris pr skade:</label>
                                                <input
                                                    type='number'
                                                    name='pricePerError'
                                                    value={newDamageReport.pricePerError}
                                                    className="damageReport-btn"
                                                    onChange={handleChange}
                                                /> 
                                            </div>
                                            <button className="createDamageReport-btn" type='submit'>Opret skaderaport</button>
                                        </form>
                                    </div>
                                </div>
                                <div>
                                <button className="editDamageReport-btn"> 
                                  <Link className="linkColor" to={`/EditDamageReport/${newDamageReport.id}`}> Opdater skaderapport </Link>
                                  </button>
                                </div>

                                <div>
                                <button className="deleteDamageReport-btn"> 
                                <Link className="linkColor" to={`/DeleteDamageReport/${newDamageReport.id}`}> Slet skaderapport </Link>
                                </button>
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