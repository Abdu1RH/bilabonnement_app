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
    <div className="container-gray">
        {/*Container til "Skade og udbedring*/}
            <div classname="inner-container" >
             <h1>Skade og udbedring</h1>
              </div>
              
              <div classname="outer-container" >
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
                                            type='string'
                                            name='error'
                                            value={newDamageReport.error}
                                            onChange={handleEdit}
                                        />
                                    </div>
                                    
                                    <div>
                                        <label>Type af skade</label>
                                        <input
                                            type='string'
                                            name='errorType'
                                            value={newDamageReport.errorType}
                                            onChange={handleEdit}
                                        />
                                    </div>

                                    <div>
                                        <label>Antal skader</label>
                                        <input
                                            type='number'
                                            name='numberOfErrors'
                                            value={newDamageReport.numberOfErrors}
                                            onChange={handleEdit}
                                        />
                                    </div>

                                    <div>
                                        <label>Pris per skade</label>
                                        <input
                                            type='number'
                                            name='pricePerError'
                                            value={newDamageReport.pricePerError}
                                            onChange={handleEdit}
                                        />
                                    </div>
                                
                                     <button  type='submit'>Opdater skade raport</button>
                                     </form>
                                     </div>
                                </div>
                             </div>
                         </div>
                      </div>  
                        <div className="outer-damage-raport-small-containers">
                            <div className="inner-damage-raport-small-containers">
                                <p>Biler som er klar til at kører: </p>
                             </div>
                            <div className="inner-damage-raport-small-containers">
                                 <p>Biler som er venter på reservedel: </p>
                            </div>
                             <div className="inner-damage-raport-small-containers">
                                <p>Læs mere om FDM: </p>
                            </div>
                         </div>
                     </div>
                 </div>
             </div>
 


    );

}

export default CreateDamageReport;