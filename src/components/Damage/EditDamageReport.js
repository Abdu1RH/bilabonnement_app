import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

function EditDamageReport() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [damageReports, setDamageReports] = useState([]);
    const [selectedDamageReport, setSelectedDamageReport] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:8080/api/damagereports')
            .then(response => {
                const reports = response.data.map(report => ({ ...report, numbersOfErrors: report.numbersOfErrors || 0 }));
                setDamageReports(reports);

                const initialSelected = reports.find(report => report.id === parseInt(id));
                setSelectedDamageReport(initialSelected || null);
            })
            .catch(error => console.error('Error fetching damage reports:', error));
    }, [id]);

    const handleUpdate = (e) => {
        e.preventDefault();
        if (selectedDamageReport) {
            axios.put(`http://localhost:8080/api/damagereports/${selectedDamageReport.id}`, selectedDamageReport) // Tilføj backticks omkring URL'en
                .then(() => navigate('/createDamageReport'))
                .catch(error => console.error('Error updating damage report:', error));
        }
    };

    const handleSelectChange = (e) => {
        const selectedId = e.target.value;
        const selectedReport = damageReports.find(report => report.id === parseInt(selectedId));
        setSelectedDamageReport(selectedReport || null);
    };

    return (
        <div>
            <h1>Opdater skaderapport</h1>
            <br></br>
            <label>Valgte skaderapport:</label>
            <select value={selectedDamageReport?.id} onChange={handleSelectChange}>
                <option value="">Vælg en skaderapport her</option>
                {damageReports.map(report => (
                    <option key={report.id} value={report.id}>
                        {report.id} -  {report.error} - {report.errorType} - {report.subscription.car.brand}
                    </option>
                ))}
            </select>

            {selectedDamageReport && (
                <form onSubmit={handleUpdate}>
                    {/* Display other fields for the selected damage report */}
                    <div>
                        <label>Skade:</label>
                        <input
                            type='text'
                            name='error'
                            value={selectedDamageReport.error}
                            onChange={(e) => setSelectedDamageReport(prev => ({ ...prev, error: e.target.value }))}
                        />
                    </div>

                    <div>
                        <label>Skade type:</label>
                        <input
                            type='text'
                            name='errorType'
                            value={selectedDamageReport.errorType}
                            onChange={(e) => setSelectedDamageReport(prev => ({ ...prev, errorType: e.target.value }))}
                        />
                    </div>

                    <div>
                        <label>Antal skader:</label>
                        <input
                            type='number'
                            name='numbersOfErrors'
                            value={selectedDamageReport.numbersOfErrors}
                            onChange={(e) => setSelectedDamageReport(prev => ({ ...prev, numbersOfErrors: parseInt(e.target.value) || 0 }))}
                            min={1} 
                            max={5}
                        />
                    </div>

                    <div>
                        <label>Pris pr skade:</label>
                        <input
                            type='number'
                            name='pricePerError'
                            value={selectedDamageReport.pricePerError}
                            onChange={(e) => setSelectedDamageReport(prev => ({ ...prev, pricePerError: e.target.value }))}
                            min={1} 
                            max={100000}
                        />
                    </div>
                    <button type='submit'>Opdater skaderapport</button>
                </form>
            )}
        </div>
    );
}

export default EditDamageReport;
